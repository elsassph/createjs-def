CreateJS Toolkit definitions generator
======================================

Generate definition files for various languages from Adobe Flash CC's HTML5 output.

_Adobe Flash CC (or CS6 with the CreateJS Toolkit) allows 
you to publish animated assets for use with the CreateJS suite of open source JS libraries to create rich, 
interactive experiences for HTML5._

JSFL version
-------

**Download the scripts:**

 * [Generate Typescript Definitions.jsfl](https://raw.github.com/elsassph/createjs-def/master/jsfl/Generate%20Typescript%20Definitions.jsfl)
 * [Generate Haxe Definitions.jsfl](https://raw.github.com/elsassph/createjs-def/master/jsfl/Generate%20Haxe%20Definitions.jsfl)

You can copy them in your Flash Professional commands:
 * C:\Users\username\AppData\Local\Adobe\Flash CC\language\Configuration\
 * /Users/username/Library/Application Support/Adobe/Flash CC/language/Configuration/

**No configuration needed,** it automatically reads the HTML5 Publish Settings or CreateJS Toolkit's metadatas to find where the JS file is located!

Hint: you can add a shortcut to the command in Flash Pro Keyboard Shortcuts settings.


Node.js version
-------

**Installation:**

    npm install -g createjs-def

**Usage:**

    createjs-def typescript animation-lib.js > animation-lib.d.ts
    createjs-def haxe animation-lib.js > AnimationLib.hx

Node.js code
------

Can be used in your own grunt task or in a custom javascript file you created.

**Usage**

    var fs = require("fs");
    var createjs = require('createjs-def');

    var animation_data = fs.readFileSync('animation-lib.js');
    var data = createjs.createDef(animation_data, 'typescript');
    fs.writeFile('animation-lib.d.ts', data);
