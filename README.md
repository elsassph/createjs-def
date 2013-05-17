CreateJS Toolkit definitions generator
======================================

Generate definition files for various languages from CreateJS Toolkit's generated JavaScript library.

_The Flash Professional Toolkit for CreateJS is an extension to Adobe Flash Professional CS6 that allows 
you to publish animated assets for use with the CreateJS suite of open source JS libraries to create rich, 
interactive experiences for HTML5._

Install
-------

    npm install -g createjs-def

Usage
-----

    createjs-def typescript animation-lib.js > animation-lib.d.ts
    createjs-def haxe animation-lib.js > AnimationLib.hx
