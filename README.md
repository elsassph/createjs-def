CreateJS Toolkit definitions generator
======================================

Generate definition files for various languages from CreateJS Toolkit's generated JavaScript library.

_The Flash Professional Toolkit for CreateJS is an extension to Adobe Flash Professional CS6 that allows 
you to publish animated assets for use with the CreateJS suite of open source JS libraries to create rich, 
interactive experiences for HTML5._

JSFL version
-------

**Download the scripts:**

 * [Generate Typescript Definitions.jsfl](https://raw.github.com/elsassph/createjs-def/master/jsfl/Generate%20Typescript%20Definitions.jsfl)
 * [Generate Haxe Definitions.jsfl](https://raw.github.com/elsassph/createjs-def/master/jsfl/Generate%20Haxe%20Definitions.jsfl)

You can copy them in your Flash Professional commands:
 * C:\Users\username\AppData\Local\Adobe\Flash CS6\language\Configuration\
 * /Users/username/Library/Application Support/Adobe/Flash CS6/language/Configuration/

**No configuration needed,** it automatically reads the CreateJS toolkit's metadatas to find where the JS file is located!

Hint: you can add a shortcut to the command in Flash Pro Keyboard Shortcuts settings.


Node.js version
-------

**Installation:**

    npm install -g createjs-def

**Usage:**

    createjs-def typescript animation-lib.js > animation-lib.d.ts
    createjs-def haxe animation-lib.js > AnimationLib.hx
