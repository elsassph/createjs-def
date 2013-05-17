var canvas, stage, exportRoot, images;
function init() {
    canvas = document.getElementById("canvas");
    images = images || {
    };
    var manifest = [
        {
            src: "images/bg.png",
            id: "bg"
        }, 
        {
            src: "sounds/bubbles.mp3",
            id: "bubbles"
        }
    ];
    var loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest);
}
function handleFileLoad(evt) {
    if(evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}
function handleComplete() {
    exportRoot = new lib.Sea();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);
}
function playSound(id, loop) {
    createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
