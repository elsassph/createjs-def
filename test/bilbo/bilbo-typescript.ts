
/// <reference path="easeljs/easejs.d.ts" />
/// <reference path="bilbo-walkcycle-side.d.ts" />

var canvas, stage:createjs.Stage, exportRoot;

function init() {
	canvas = document.getElementById("canvas");
	exportRoot = new lib.bilbowalkcycleside();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
}