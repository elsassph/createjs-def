/**
 * Output a typed definition file from the simplified model (see model.js)
 */

var easeljs = { MovieClip:true, Container:true, Shape:true, Bitmap:true, Rectangle:true, Text:true, Shadow:true };


function formatTypescript(model) {

	var out = "";
	var known = {};

	for(var i in model.classes) {
		var classDef = model.classes[i];
		var cname = classDef.name;
		known[cname] = true;
	}

	function safeType(cname) {
		cname = cname.split(".").pop();
		if (easeljs[cname]) return "createjs." + cname;
		else return cname;
	}

	out += "\texport class properties implements Object {\n"
		 + "\t\tstatic width: number;\n"
		 + "\t\tstatic height: number;\n"
		 + "\t\tstatic fps: number;\n"
		 + "\t\tstatic color: string;\n"
		 + "\t\tstatic manifest: Object[];\n"
		 + "\t}\n\n";

	for(var i in model.classes) {
		var classDef = model.classes[i];
		
		var cname = safeType(classDef.name);
		var bname = safeType(classDef.base);
		if (easeljs[bname]) bname = "createjs." + bname;

		out += "\texport class " + cname + " extends " + bname + " {\n";

		if (classDef.bounds) {
			out += "\t\tstatic nominalBounds: createjs.Rectangle;\n";
		}

		for(var j in classDef.children) {
			var child = classDef.children[j];
			var ctype = safeType(child.type);
			out += "\t\t" + child.name + ": " + ctype + ";\n";
		}
		out += "\t}\n\n";
	}

	out = "/// <reference path=\"easeljs/easeljs.d.ts\" />\n\n"
	    + "declare module " + model.namespaces[0] + " {\n\n" 
	    + out 
	    + "}\n";
	return out;
}

exports.typescript = formatTypescript;
exports.ts = formatTypescript;


function formatHaxe(model) {

	var out = "";
	var known = {};
	var imports = [];

	function importType(bname) {
		if (easeljs[bname]) bname = "createjs.easeljs." + bname;
		if (!known[bname]) {
			known[bname] = true;
			if (bname.indexOf(".") > 0)
				imports.push("import " + bname + ";");
		}
	}

	function safeType(cname) {
		cname = cname.split(".").pop();
		return cname.charAt(0).toUpperCase() + cname.substr(1);
	}
	
	out += "@:native(\"lib.properties\")\n"
	   + "extern class Properties {\n"
		 + "\tpublic static var width:Int;\n"
		 + "\tpublic static var height:Int;\n"
		 + "\tpublic static var fps:Int;\n"
		 + "\tpublic static var color:Int;\n"
		 + "\tpublic static var manifest:Dynamic;\n"
		 + "}\n\n";

	for(var i in model.classes) {
		var classDef = model.classes[i];
		var cname = safeType(classDef.name);
		known[cname] = true;
	}

	for(var i in model.classes) {
		var classDef = model.classes[i];
		
		var cname = safeType(classDef.name);
		var bname = classDef.base;
		importType(bname);

		out += "@:native(\"" + classDef.name + "\")\n";
		out += "extern class " + cname + " extends " + bname + " {\n";

		if (classDef.bounds) {
			out += "\tstatic public var nominalBounds:Rectangle;\n";
			importType("Rectangle");
		}

		for(var j in classDef.children) {
			var child = classDef.children[j];
			var ctype = safeType(child.type);
			importType(ctype);
			out += "\tpublic var " + child.name + ":" + ctype + ";\n";
		}
		out += "}\n\n";
	}


	out = "package " + model.namespaces[0] + ";\n\n" 
	    + imports.join("\n") + "\n\n" 
	    + out;
	return out;
}

exports.haxe = formatHaxe;
exports.hx = formatHaxe;
