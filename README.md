# CreateJS Toolkit definitions generator

Generate definition files for various languages from Adobe Flash CC's HTML5 output.

_Adobe Animate CC, formely known as Flash CC, allow you to publish animated assets 
for use with the CreateJS suite of open source JS libraries to create rich, 
interactive experiences for HTML5._

## Transformation

### JSFL version

**Download the scripts:**

 * [Generate Typescript Definitions.jsfl](https://raw.github.com/elsassph/createjs-def/master/jsfl/Generate%20Typescript%20Definitions.jsfl)
 * [Generate Haxe Definitions.jsfl](https://raw.github.com/elsassph/createjs-def/master/jsfl/Generate%20Haxe%20Definitions.jsfl)

You can copy them in your Animate CC commands:
 * C:\Users\username\AppData\Local\Adobe\Animate CC\language\Configuration\Commands
 * /Users/username/Library/Application Support/Adobe/Animate CC/language/Configuration/Commands

**No configuration needed,** it automatically reads the HTML5 Publish Settings or 
CreateJS Toolkit's metadatas to find where the JS file is located!

Hint: you can add a shortcut to the command in Flash Pro Keyboard Shortcuts settings.


### Node.js version

**Installation:**

    npm install -g createjs-def

**Usage:**

    createjs-def typescript AnimationLib.js > AnimationLib.d.ts
    createjs-def haxe AnimationLib.js > AnimationLib.hx

### Node.js code

Can be used in your own grunt task or in a custom javascript file you created.

**Usage**

```javascript
var fs = require("fs");
var createjs = require('createjs-def');

var animation_data = fs.readFileSync('AnimationLib.js');
var data = createjs.createDef('AnimationLib', animation_data, 'typescript');
fs.writeFile('AnimationLib.d.ts', data);
```

## TypeScript usage

```html
<script src="AnimationLib.js"></script>
<script src="app.js"/></script>
```

```javascript
// ambient declaration from AnimationLib.js
declare const lib: AnimationLib;

var props = lib.properties;
var comp = new lib.MyComp();
...
```
