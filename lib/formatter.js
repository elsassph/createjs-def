/**
 * Output a typed definition file from the simplified model (see model.js)
 */
var mustache = require('mustache');

var easeljs = { MovieClip:true, Sprite:true, Container:true, Shape:true, Bitmap:true, Rectangle:true, Text:true, Shadow:true };

var tsTemplate = '\n\
declare interface {{module}} {\n\
	properties: {\n\
		id: string;\n\
		width: number;\n\
		height: number;\n\
		fps: number;\n\
		color: string;\n\
		manifest: any[];\n\
		preloads: any[];\n\
		webfonts: { [key: string]: boolean };\n\
		ssMetadata: any[];\n\
	}\n\
	ssMetadata: any[];\n\
\n\
	Stage: typeof createjs.Stage;\n\
	{{#classes}}\n\
	{{name}}: typeof {{type}};\n\
	{{/classes}}\n\
}\n\
\n\
declare module {{libName}} {\n\
	{{#classes}}\n\
	class {{name}} extends {{base}} {\n\
		{{#bounds}}\n\
		static nominalBounds: createjs.Rectangle;\n\
		{{/bounds}}\n\
		{{#children}}\n\
		{{cname}}: {{ctype}};\n\
		{{/children}}\n\
	}\n\
	{{/classes}}\n\
}';

function formatTypescript(libName, model, easeljsPath) {
	var out = '';
	var known = {};

	for(var i in model.classes) {
		var classDef = model.classes[i];
		var cname = classDef.name;
		known[cname] = true;
	}

	function safeType(cname) {
		cname = cname.split('.').pop();
		if (easeljs[cname]) return 'createjs.' + cname;
		else return cname;
	}

	var classes = [];
	for (var i in model.classes) {
		var classDef = model.classes[i];
		
		var cname = safeType(classDef.name);
		var bname = safeType(classDef.base);
		if (easeljs[bname]) bname = 'createjs.' + bname;

		var children = []
		for (var j in classDef.children) {
			var child = classDef.children[j];
			var ctype = safeType(child.type);
			if (!easeljs[ctype] && ctype.indexOf('createjs.') < 0) ctype = libName + '.' + ctype;
			children.push({cname:child.name, ctype:ctype});
		}
		classes.push({
			name: cname,
			base: bname,
			type: libName + '.' + cname,
			bounds: classDef.bounds != null,
			children: children
		});
	}

	var data = {
		module: libName.charAt(0).toUpperCase() + libName.substr(1) + 'Lib',
		libName: libName,
		classes: classes
	};

	return mustache.render(tsTemplate, data);
}

exports.typescript = formatTypescript;
exports.ts = formatTypescript;


function formatHaxe(model) {

	var out = '';
	var known = {};
	var imports = [];

	function importType(bname) {
		if (easeljs[bname]) bname = 'createjs.easeljs.' + bname;
		if (!known[bname]) {
			known[bname] = true;
			if (bname.indexOf('.') > 0)
				imports.push('import ' + bname + ';');
		}
	}

	function safeType(cname) {
		cname = cname.split('.').pop();
		return cname.charAt(0).toUpperCase() + cname.substr(1);
	}
	
	out += '@:native(\'lib.properties\')\n'
	   + 'extern class Properties {\n'
		 + '\tpublic static var width:Int;\n'
		 + '\tpublic static var height:Int;\n'
		 + '\tpublic static var fps:Int;\n'
		 + '\tpublic static var color:Int;\n'
		 + '\tpublic static var manifest:Array<Dynamic>;\n'
		 + '\tpublic static var preloads:Array<Dynamic>;\n'
		 + '}\n\n';

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

		out += '@:native(\'' + classDef.name + '\')\n';
		out += 'extern class ' + cname + ' extends ' + bname + ' {\n';

		if (classDef.bounds) {
			out += '\tstatic public var nominalBounds:Rectangle;\n';
			importType('Rectangle');
		}

		for(var j in classDef.children) {
			var child = classDef.children[j];
			var ctype = safeType(child.type);
			importType(ctype);
			out += '\tpublic var ' + child.name + ':' + ctype + ';\n';
		}
		out += '}\n\n';
	}


	out = 'package ' + model.namespaces[0] + ';\n\n' 
	    + imports.join('\n') + '\n\n' 
	    + out;
	return out;
}

exports.haxe = formatHaxe;
exports.hx = formatHaxe;
