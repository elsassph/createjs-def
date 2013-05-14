function formatHaxe(model) {

	var easeljs = { MovieClip:true, Container:true, Shape:true, Bitmap:true, Rectangle:true };
	var out = "";
	var known = {};
	var imports = [];

	function importType(bname) {
		if (easeljs[bname]) bname = "createjs.easeljs." + bname;
		if (!known[bname]) {
			known[bname] = true;
			imports.push("import " + bname + ";");
		}
	}

	function safeType(cname) {
		cname = cname.split(".").pop();
		return cname.charAt(0).toUpperCase() + cname.substr(1);
	}

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


	out = "package " + model.package + ";\n\n" + imports.join("\n") + "\n\n" + out;
	return out;
}

exports.haxe = formatHaxe;
exports.hx = formatHaxe;
