if (process.argv.length < 4) {
	console.log('createjs-format <format> <file> [<path to easeljs.d.ts (TypeScript)>]');
	process.exit();
}
var format = process.argv[2];
var fileName = process.argv[3];
var easeljsPath = process.argv[4];

var fs = require('fs');
var path = require('path')

fs.readFile(fileName, 'utf8', function(err, data) {

	if (err) {
		console.log(err);
		return;
	}

	var ext = path.extname(fileName);
	var libName = path.basename(fileName, ext).replace(/[ ,;.()\[\]-]/g, '');

	var jsp = require('../lib/parse-js');
	var ast = jsp.parse(data);

	var builder = require('../lib/model');
	var model = builder.parse(ast[1]);

	var formatter = require('../lib/formatter');
	var out = formatter[format](libName, model, easeljsPath);
	console.log(out);
});
