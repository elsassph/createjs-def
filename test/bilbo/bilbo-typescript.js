var canvas, stage, exportRoot;
function init() {
    canvas = document.getElementById("canvas");
    exportRoot = new lib.bilbowalkcycleside();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    stage;
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
}
