
var DOC_DATA_NAME = "CreateJSToolkit_data";
var doc;
var props;
var jsFile;
var defFile;

exports.run = function(format, ext, safeClassName) {
	if (!getDocument()) fl.trace("No document open");
	else if (!getProps()) fl.trace("No CreateJS export data");
	else if (!getOutput(ext, safeClassName)) fl.trace("You must first publish the animation using the CreateJS Toolkit");
	else generateDefinitions(format);
}

function getDocument() {
	doc = fl.getDocumentDOM();
	return doc != null;
}

function getProps() {
  props = null;
  
  // HTML5 FLAs
	var profiles = XML(doc.exportPublishProfileString()).PublishProperties;
	for(var i=0; i<profiles.length(); i++) {
		var profile = profiles[i];
		if (profile["@name"] == 'JavaScript/HTML') {
			props = {};
			var list = profile.Property;
			for(var i=0; i<list.length(); i++)
				props[list[i]["@name"]] = list[i].toString();
			break;
	  }
  }
  
	// old plugin
  if (props == null)
		props = deserialize(doc.getDataFromDocument(DOC_DATA_NAME));
  
	return props != null;
}

function deserialize(dataStr) {
	if (dataStr == null || typeof(dataStr) != "string") { return null; }
	var arr = dataStr.split("\n");
	var l = arr.length;
	var o = {};
	for (var i=0; i<l; i+=2) {
		o[arr[i]] = arr[i+1];
	}
	return o;
}
function resolveRelativePath(target,path) {
	if (path.substr(0,7) == "file://") { return path; }
	if (path.indexOf("://") != -1) { return null; }
	var dir = target.substring(0,target.lastIndexOf("/"));
	if (path.charAt(0) == "/") {
		return dir+path;
	}
	
	while (path.charAt(0) == ".") {
		if (path.substr(0,2) == "./") {
			path = path.substr(2);
		} else if (path.substr(0,3) == "../") {
			path = path.substr(3);
			var index = dir.lastIndexOf("/");
			if (index == -1) { return null; }
			dir = dir.substring(0, index);
		} else {
			return null;
		}
	}
	return dir+"/"+path;
}

function extractFileName(path) {
	var file = path.split("/").pop();
	var name = file.split(".").shift();
	return name;
}

function getOutput(ext, safeClassName) {
	var docName = extractFileName(doc.name);
	var output = resolveRelativePath(doc.pathURI, props.outputPath || "./");
	jsFile = output + docName + ".js";
	if (!FLfile.exists(jsFile)) return false;

	if (safeClassName) {
		docName = docName.charAt(0).toUpperCase() + docName.substr(1);
		docName = docName.split("-").join("");
	}
	defFile = output + docName + ext;
	return true;
}

function generateDefinitions(format) {
	var src = FLfile.read(jsFile);

	var jsp = require("../lib/parse-js");
	var ast = jsp.parse(src);

	var builder = require("../lib/model");
	var model = builder.parse(ast[1]);

	var formatter = require("../lib/formatter");
	var out = formatter[format](model);

	FLfile.write(defFile, out);

	fl.trace("Definitions file for " + format + " was generated successfuly");
}
