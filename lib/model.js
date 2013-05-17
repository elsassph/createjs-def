/**
 * Parse a generated (by CreateJS Toolkit) JavaScript library
 * and create a simplified model of the classes
 */


function isArray(v) {
	return v && (typeof v == "object") && (typeof v.push != "undefined");
}

function dump(a, tab) {
	var out = "";
	if (!tab) tab = "";
	for(var i in a) {
		var v = a[i];
		if (isArray(v))
			out += dump(v, tab+"  ");
		else 
			out += tab + v + "\n";
	}
	return out;
}

function flatten(a, maxDepth) {
	if (!isArray(a)) return [a];
	var out = [];
	for(var i in a) {
		var v = a[i];
		if (isArray(v)) {
			if (maxDepth != 0)
				out = out.concat(flatten(v, maxDepth-1));
			else
				out.push(v);
		}
		else 
			out.push(v);
	}
	return out;
}

function extract(a, pattern) {
	var out = [];
	for(var i=0; i<a.length; i++) {
		if (pattern[i] == "<?>") out.push(a[i]);
		else if (a[i] != pattern[i]) return null;
	}
	return out;
}

function extractNum(a) {
	var sign = 1;
	if (a[0] == "unary-prefix" && a[1] == "-") {
		sign = -1;
		a = a[2];
	}
	if (a[0] == "num") return sign * a[1];
	return 0;
}

function extractType(typeDef) {
	var typeSig = flatten(typeDef, 1);
	// other symbol
	var res = extract(typeSig, ["dot", "name", "<?>", "<?>"]);
	if (res) return res.join(".");
	// base type
	res = extract(typeSig, ["name", "<?>"]);
	return ""+res;
}

function extractChildren(bodyDef) {
	var children = [];
	// is the body valid?
	var bodySig = flatten(bodyDef, 0);
	var res = extract(bodySig, ["function", null, "<?>", "<?>"]);
	if (!res) return children;
	// extract child definitions
	var defs = res[1];
	for(var i=0; i<defs.length; i++) {
		var def = flatten(defs[i], 2);
		var res = extract(def, ["stat", "assign", true, "dot", "<?>", "<?>", "new", "<?>", "<?>"]);
		if (res) {
			var typeName = extractType(res[2]);
			children.push({ name:res[1], type:typeName });
		}
	}
	return children;
}

function extractClass(classSig, extendsSig) {
	if (classSig[0] != "assign") return null;

	// check class declaration
	var classDef = flatten(classSig[2]);
	var extendsDef = flatten(extendsSig);
	//console.log("class?", classDef, extendsDef);
	var res = extract(classDef, ["dot", "name", "<?>", "<?>"]); // class name
	var res2 = extract(extendsDef, ["new", "dot", "name", "cjs", "<?>"]); // base class
	if (!res || !res2) return null;
	// it's a valid class
	var sig = {
		name: res.join("."),
		base: res2[0],
		children: extractChildren(classSig[3])
	};
	//console.info("new class", sig.name, "extends", sig.base);
	return sig;
}

function extractBounds(a) {
	return [ extractNum(a[0]), extractNum(a[1]), extractNum(a[2]), extractNum(a[3])];
}

function parseTopLevel(ast) {

	var struct = flatten(ast, 1);
	var res = extract(struct, ["stat", "<?>", "var", "<?>"]);
	if (!res) return null;

	var ns = flatten(res[1]);
	var defs = flatten(res[0], 2);
	
	var classes = [];
	var curClass = null;
	for(var i=0; i<defs.length; i++) {
		var def = defs[i];
		if (!isArray(def) || !def.length) continue;
		var sig = flatten(def, 2);
		// is it a class?
		var res = extract(sig, ["stat", "assign", true, "dot", "<?>", "prototype", "assign", true, "<?>", "<?>"]);
		if (res) {
			var newClass = extractClass(res[0], res[2]);
			if (newClass != null) {
				curClass = newClass;
				classes.push(newClass);
			}
		}
		else if (curClass) {
			// is it the previously defined class' nominalBounds?
			res = extract(sig, ["stat", "assign", true, "dot", "<?>", "nominalBounds", "new", "<?>", "<?>"]);
			if (res && isArray(res[2])) {
				curClass.bounds = extractBounds(res[2]);
				//console.info("with bounds", curClass.bounds);
			}
			// unknown
			//else console.info("???", sig);
		}
	}

	return {
		namespaces: ns,
		classes: classes
	}
}

exports.parse = parseTopLevel;
