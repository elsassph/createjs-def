var formatter = require('./formatter');
var builder = require('./model');
var jsp = require('./parse-js');

exports.createDef = function(libName, data, format) {
	// @todo check if file is of correct format
	var ast = jsp.parse(data);
	var model = builder.parse(ast[1]);
	return formatter[format](libName, model);
}
