module.exports = {};
module.exports.formatter = require('./formatter');
module.exports.model = require('./model');
module.exports.parseJs = require('./parse-js');
module.exports.createDef = function(data, format)
{
	// @todo check if file is of correct format
	var jsp = createjs_def.parseJs;
	var ast = jsp.parse(data);

	var builder = createjs_def.model;
	var model = builder.parse(ast[1]);

	var formatter = createjs_def.formatter;
	return formatter[format](model);
}