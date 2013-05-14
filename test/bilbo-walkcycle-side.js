(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.bilbowalkcycleside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bilbo-foot
	this.instance = new lib.bilbofootwalkcycle("synched",4);
	this.instance.setTransform(677.1,625.9,1.378,1.378,0,0,0,1.5,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(35));

	// Layer 20
	this.instance_1 = new lib.bilbofootwalkcycle("synched",0);
	this.instance_1.setTransform(567,625.9,1.378,1.378,0,0,0,1.6,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(35));

	// Layer 10
	this.instance_2 = new lib.biblobodywalkcycle("synched",0);
	this.instance_2.setTransform(530.9,412.9,1.378,1.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(35));

	// Layer 22
	this.instance_3 = new lib.bilbofootwalkcycle("synched",10);
	this.instance_3.setTransform(553.4,616.3,1.378,1.378,0,0,0,1.5,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(35));

	// Layer 21
	this.instance_4 = new lib.bilbofootwalkcycle("synched",14);
	this.instance_4.setTransform(666.2,616.3,1.378,1.378,0,0,0,1.6,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(35));

	// Layer 19
	this.instance_5 = new lib.shadow();
	this.instance_5.setTransform(609,667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.7,81.5,882.3,605.3);


// symbols:
(lib.shadow2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.271)").s().p("AqsBGQkdgdAAgpQAAgoEdgeQEbgcGRAAQGRAAEcAcQEcAeABAoQgBApkcAdQkcAemRgBQmRABkbgeg");
	this.shape.setTransform(0,0,1.979,1.979);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-191.8,-19.7,383.9,39.6);


(lib.bilbotail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C6F74").s().p("AAjG+QAAgOACgGQAGgNARgZQASgaAGgLIAbg6QAPgjAHgZQAIgdAEgnQAEglAAgiQAAgRgEgYQgEgUgHgTQgFgRgJgUQgKgWgKgPQgIgOgPgRQgOgQgOgMQgMgKgWgOIgigVIgjgRQgYgMgLgGQgPgJgKgIQgQgKgIgJQgIgIgHgLQgHgKgDgKQgDgIAAgNQgBgKACgKQABgLAEgPIAIgZIAOghIAQghIADgFIADgHIACgEIADgFIACAEIAAADIgBADIgDAIIgDAHIgDAJIgDAJIgDAGIgBAHIABgBIAFgGIAFgGIALgKIAMgKIALgIQAFgFAFgCIAJgDIAAABIAAAAIgnAyIgmAxIAXgPQAagPAMgFQAIgCAUABIASABIgDAFIgdAFQgeAGgMAIQgSAOgLAOQgQAUACAPQADAWAXAaQAQAUAYAUQAUAQA/AfQA4AcAVAWQAZAaAXAwQASAlAPAtQAHAVACAhQABAZgDAdQgDAfgGAeQgHAjgJAWQgSApgdA0QgaAvgcArIgBAAQgCAAgBgIg");
	this.shape.setTransform(-50.6,-73);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C6F74").s().p("AA5HAQAAgOACgGQAGgNARgZQASgaAFgLIAcg6QAQgkAGgYQAIgdAEgnQAFglABghQAAgRgEgZIgKgoQgFgRgIgUQgKgWgJgOQgJgQgOgQQgPgRgNgLQgMgKgVgNIgkgUIghgQIgjgOIgbgNQgQgJgKgHQgJgFgJgJQgJgKgGgIQgEgHgFgMIgIgVIgIgaQgDgNgCgMQgDgNgDgWIgEgjIgBgGIAAgHIgBgFIAAgFIACABIACABIADAGQgBACACAFIACAIIABAJIADAIIABAHIADAGIAAAAIABgBIABgHIAAgHIAEgOIAFgNIAEgMQACgHACgEIAEgEIADgCIAAAAIgEA8IgGA8IAMgYQANgaAIgJQAFgGARgJQAHgFAJgDIAAAGIgUASQgVAVgFANQgJAUgCATQgEAZAHAPQAJAUAbAYQAPANAfAVQARAMBBAeQA5AaAWAXQAYAaAXAwQAQAkAPAvQAGAVABAhQAAAYgCAfQgDAegHAeQgHAjgKAWQgRApgdA0QgaAvgcAqIAAAAQgDAAgBgHg");
	this.shape_1.setTransform(-52.8,-73.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C6F74").s().p("ABkGpQAAgNACgGQAGgNARgZQASgbAGgKIAbg6QAQgjAHgYQAIgeAGgnQAFglACghQAAgRgDgYQgDgVgFgSQgFgTgIgUIgRgmQgJgPgNgRQgOgRgNgMQgNgLgUgNIgjgUQgLgGgXgIIgggNIgbgKIgbgLIgUgLQgLgHgJgHQgGgEgKgLIgRgPIgTgSIgUgRIgagXIgZgXIgEgEIgEgEIgDgEIgEgDIACgBIADAAIADABIACABIAGAFIAGAFIAHAFIAHAFIAGADIAFADIAAgBIgDgFIgEgGIgGgLIgFgNIgDgKIgDgLIABgGIABgCIABAAIAhAvIAiAuIgGgXQgGgbAAgMQABgIAIgPIAIgQIAEAEIgDAZQgDAcADAMQAFATAKAUQALAWANAMQAPAQAgAUIAzAeIBRAoQA2AaAWAYQAZAaAVAyQAOAjAOAxQAGAVAAAhQAAAYgEAeQgDAfgHAdQgIAjgKAWQgSAqgdAzQgaAwgcApIgBAAQgCAAgBgIg");
	this.shape_2.setTransform(-57.1,-71);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C6F74").s().p("ABwGKQAAgNACgGQAGgNARgZIAXglIAcg6QARgjAHgYQAJgdAHgoQAGgkACghQACgRgDgYQgCgTgEgVIgLgoQgHgWgIgQQgIgQgNgRQgNgSgMgMQgMgMgTgNQgQgMgSgKQgMgHgVgIIgigNIgZgJIgbgJIgVgIIgWgHIgWgIIgVgHQgKgCgQgBQgLgCgPgBIgigBIggAAIgGAAIgFgBIgFAAIgEgBIABgCIABgBIADgBIADAAIAIgBIAHAAIAIgBIAJgBIAGgCIAHgBIgBgBIgGgBIgGgCIgMgEIgKgFIgJgFIgJgGIgCgHIABgBIA2ANIA2ANIgTgOQgUgPgHgJQgEgGgCgQIgCgQIAFAAIANAUQAPAUAJAHQANAKAXAMIAmASQANAHAsASQAkAQASAKIBSAqQAzAbAVAaQAXAbATA0QAMAjANA0QAFATgBAhQgBAYgEAfQgFAegHAdQgJAigKAXQgSApgeAzQgbAwgbApIgBAAQgCAAgBgIg");
	this.shape_3.setTransform(-58.3,-67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C6F74").s().p("ABgFkQAAgOACgGQAGgNARgZQATgbAFgKIAdg5QARgjAHgYQAKgcAIgoIAMhFQABgQAAgXQgCgWgDgTIgHgqQgHgXgHgQQgGgRgMgSQgMgSgMgNQgKgNgSgPQgQgOgRgKQgMgIgUgJIgigOQgKgFgRgFIgZgHIgXgFIgXgEIgVAAQgOgBgIADQgLACgOAGIgWANQgKAFgRANIgaATIgEADIgFAEIgEACIgDABIgBgBIACgCIAIgIIAGgFIAGgHIAGgGIAFgFIAEgFIgBAAIgFACIgGADIgKAEIgLADIgKABIgJAAIgDgCIgCgCIAAAAIAygXIAygXIgWABQgYABgKgDQgGgCgJgLIgJgKIAEgFIAVAHIAgAIIAqgCQAcgDAOACQAgAGAeAJQAjAKAYAMQA1AcAcASQAvAeAWAeQAVAcAQA1QAJAiAKA2QADAWgDAfQgBAWgGAhQgFAdgJAdQgJAigKAWQgUAqgdAyQgcAxgbAoIgBAAQgCAAgBgIg");
	this.shape_4.setTransform(-56.8,-64.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C6F74").s().p("AA7FgQAAgOACgGQAHgNAQgZQAUgbAEgJIAeg5QASgiAIgYQALgdAKgmQAJglAGggQADgQAAgYQABgUgCgVQgBgUgEgWQgEgXgFgRQgGgRgKgTQgKgTgKgPQgLgOgQgQQgQgPgPgMQgMgJgTgKIghgSIgcgKIgZgIQgLgCgMgBQgOgCgKABQgLABgKACQgLADgIAEQgJAGgJALIgQATQgHAKgJASIgOAdIgFAJIgBAEIgDADIgBgBIAAgDIAEgLIACgGIADgJIAFgOIABgHIAAAAIgEAFIgDAFIgHAIIgIAIIgHAGIgHADIgGgBIAAgBIAigqIAhgqIgSALQgVAMgKACQgFABgLgFIgKgFIACgGIATgFIAegJIAlgSQAYgMAPAAQAegBAjAIQAjAIAZANQArAYAkAcQAsAiAVAhQATAdALA3QAGAfAGA6QADAWgGAfQgDAUgHAiQgHAdgKAcQgKAigLAWQgVArgcAxQgeAxgaAmIAAAAQgDAAgBgIg");
	this.shape_5.setTransform(-53.1,-63.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C6F74").s().p("AAWFoQAAgNADgGQAGgNAQgZIAZglIAfg4IAcg5QALgdAMgmQAMgkAIggQAEgQADgWQADgWAAgTQABgWgCgUQgBgYgEgRQgFgSgHgUQgIgVgJgPQgJgPgPgSQgOgQgNgNQgMgLgTgNQgPgKgQgKQgMgHgPgFQgNgHgNgDQgLgDgNgCQgNgCgJABQgLABgKADQgKADgHAFQgIAHgHALQgHAKgFALQgFALgFAUIgHAfIgDANIgCADIgBgBIAAgCIAAgCIABgJIABgHIAAgIIABgJIAAgGIABgHIgBAAIAAAAIgEALIgEAKIgFAJIgFAGIgGAGIgDABIgCgBIAAAAIAYgwIAWgxIgPAPQgRAQgJAFQgFACgKgCIgJgCIAAgGIAQgKIAagQQAQgLAQgNQAWgPAOgBQAegBAkAIQAjAKAYAPQAnAaAkAhQApAnARAjQAQAfAFA3QAEAdABA+QAAAWgIAeIgOA1IgTA4QgMAhgMAWQgWAtgcAuQgfAzgZAjIgBAAQgDAAgBgIg");
	this.shape_6.setTransform(-49.5,-64.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4C6F74").s().p("AgwGDQABgNACgHQAHgNASgXIAXglIAjg2QAUghALgWQAPgbAPgkIAbhCQAGgQAGgXQAFgTADgUQAEgUACgVQACgYAAgQQAAgTgEgVQgDgVgGgRQgEgRgLgVQgJgUgKgQQgIgOgOgRIgYgcQgJgKgNgLQgMgLgLgGQgKgHgJgFQgLgGgLgCQgJgCgKgBQgMAAgHADQgKAEgLAJQgJAIgHAJQgHAJgKARIgOAcIgIAPIgBgBIAAgDIAEgKIACgGIACgIIACgIIADgGIACgGIgBAAIgGAKIgHAIIgHAHQgCAEgDABIgFAFIgFAAIAAgBIAhgqIAhgpIgSAMQgVALgKAEQgEABgJgEIgJgDIACgFIARgIQAUgIAJgDIAmgPQAZgJAOAEQAcAHAeAUQAgAUATAXQAeAiAZAqQAcAvAKAnQAJAigEA3QgCAbgJA8QgDAVgLAfIgUAyQgLAcgNAaQgPAggNAVQgcAvgbAoQggAzgaAhIAAAAQgDAAgBgIg");
	this.shape_7.setTransform(-42,-67);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4C6F74").s().p("AiLGWQABgNADgGQAIgOASgWIAcgiIAmg0QAXgfANgVQAPgaAUgiQATghAPgcIASglQAJgUAHgSIANglQAHgXADgRIAGgnQABgVgBgSQAAgRgCgYIgHgoIgJgkIgNgjIgLgbIgOgaIgPgTQgIgKgJgGQgIgGgJgEQgKgFgIgBQgIAAgOAEQgLAEgKAFQgLAGgOANIgWAVIgJAJIgCACIgBgBIADgFIADgGIAJgLIAFgGIAEgFIAEgGIgBAAIgFAEIgEADIgJAGQgFAEgDACIgGADIgHADIgBAAIgCgBIAAgBIAtgcIAsgcIgWAEQgYAEgLAAQgEAAgIgEIgHgFIADgFQAFgBAPgCQAWgDAKABIApgBQAYACAMAJQAWARAWAgQATAdAMAdQAPAqAKAxQAKA0AAAoQgBAjgOA0QgHAZgUA5QgHAUgPAdIgbAvIgdAzIgfAxIg8BUQgmAygaAfQgEAAAAgKg");
	this.shape_8.setTransform(-32.6,-68.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C6F74").s().p("AjAGkQABgNAEgGQAIgNATgVIAeghIAqgwIApgxIAsg3QAXgfASgYIAYgiIAWgiIAVgkIAUgiIAPgkQAHgTAFgSIAKgnIAJgoIAGglIAEglIACgdIgBgdQgBgMgDgLQgDgOgEgJQgEgJgGgIQgHgJgGgFQgJgFgNgCQgNgDgKABQgLAAgTAGIgdAJIgKAGIgDABIAAgBIAEgEIAFgDIAFgDIAHgFIAHgEIAFgDIAGgDIgBAAIgGABIgGABIgKADIgJADIgIABIgHABIgCgCIAAgBIA0gIIA1gJIgXgGQgYgGgLgEQgEgCgHgGIgHgGIAHgDIAVAEQAXAGAJAEIAmATQAWANAHAOQALAYAEAoQADAfgCAjQgDAqgJAyQgKAzgNAnQgKAggaAtIgrBMQgKASgVAaIgfAqIgiAuIgmAuIhBBPQgpAxgcAaIgBAAQgDAAABgJg");
	this.shape_9.setTransform(-26.9,-69.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C6F74").s().p("AkfGNQACgMAEgGQAJgOAUgTIAgggIAugsIAvgsIAzgwIAygxIAcgdIAcgcIAdgeIAcgeIAYgdIAYggIAYggIAXghIAVgeIAVgfIAQgZQAKgPAEgKQAGgMADgLIAGgWIABgTQAAgNgEgGQgEgKgJgIQgJgKgKgEQgKgFgSgEIgfgEIgDABIgFAAIgEABIgCgBIAAAAIAFgDIAGgBIAGgBIAIgCIAIAAIAFAAIAJACIA0AQIgSgQQgTgTgHgJQgEgCgGgKIgFgJIAIAAIATAOQAVARAGAKQARAYAGALQAMAYgCAPQgDAagSAkQgFAMgbAuQgUAigeArQgaAngbAjQgVAZgjAnIg7BAQgMAPgXAWIgmAlIgpApIgqAoIhHBKQguAvgdAXQgDAAABgKgACmlwIgIgBIgCgCIAAgBIAQAEg");
	this.shape_10.setTransform(-17.1,-67);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4C6F74").s().p("Al7FFQADgNAEgEQALgOAVgTIAigdIAygnIAzgoIA6goIA6gpQAMgJAVgNIAjgXIAhgWIAigVQAIgFAZgQIAhgXIAigVIAjgUIAggSIAhgQIAbgOQASgIAJgFIATgOQALgIAHgHQAHgIAFgIQAHgJABgIQACgLgDgLQgCgOgFgIQgGgJgOgMIgYgSIgEgBIgFgDIgDgBIgDgBIABgBIAGAAIAGACIAGACIAIADIAEACIAKAKIAnAoIgGgYIgIgmIgEgTIgBgMIAJAEIAJAYQALAcAAANQABAagCARQgEAagKAMQgPATglAUIg7AhIhNAtIhNAuIhIAuIhFAyIgsAcIgrAeIgvAiIguAjIhMBFQgyAsgdAUQgEgBABgJgAEmk+IgBgBIgBgCIABAAIAHAIIgGgFg");
	this.shape_11.setTransform(-7.6,-59.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C6F74").s().p("AnIDUQAEgMAFgGQAMgNAVgRQAMgJAYgQIA2gkQAfgUAYgOIA/ggIBAgfQAPgGAXgIQASgIAUgHIAogNIAlgNIAngMIAmgKIAogHIAogEIAmAAIAkABIAeAEIAeADIAYAAIAYgCIATgFQALgEAFgGQAIgHAFgLQAGgLABgJQAAgLgHgSIgLgbIgDgEIgEgEIgDgCIgCgEIABAAIAEABIACACIAGAFIAEAFIAGAHIABABIADAOIANA4IAJgYIAPgmIAIgVIAFgNIAFAJIgFAdQgHAfgIAMQgMAUgOAOQgRATgRAEQgWAHgrgFQg3gFgMAAIhZAFQg2AFgiAIQggAHgwASIhQAdIgxAUIgvAXIgzAbQgeAQgTANQgVAOg9AwQg2ApgeARQgDgBABgJgAGFjYIgBgFIABAAIACAKIgCgFg");
	this.shape_12.setTransform(0.4,-47.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C6F74").s().p("AnkBcQAEgMAFgFQANgNAWgPIAmgYQAbgQAegNQAhgRAagKQAbgMAogMIBEgVIApgJIApgGIAqgFIAogCIAoAAQAZABAQACIAnAJQAWAFARAHQAOAGATALIAgAUQAIAFAPANIAYATIAUAMQAMAHAJAEQAMAGAHACQALAEAIgBQAKgBALgFQALgGAFgHQAGgJADgRIAFgdIgBgGIgBgFIgDgIIABAAIADACIABACIABADIACAGIACAIIABAJIABABIgEALIgUA3IAWgQIAjgVIAUgOIANgKIAAAKIgXAVQgZAXgOAHQgUAIgVAEQgZAEgQgFQgUgHgkgeQgmgegQgIQgqgUgmgOQgygTgkgEQgggEgyAFIhWANQgWADgeAHQgZAHgZAIQgcAJgaALQggAMgVALQgXALg/AqQg6AmgdAOQgEgBADgJgAGyhGIACgHIABABIgEALIABgFg");
	this.shape_13.setTransform(3.6,-35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C6F74").s().p("AFsChQgUgEgUgJQgXgLgLgPQgMgQgNguQgOgugMgOQgagjgfgeQgmgkghgPQgdgPg2gGIhUgHQgWgCgfADQgZACgaAFQgdAFgcAHQghAJgWAJQgbAMg/AkQg9AigdAMQgEgBADgKQAEgLAGgFQAOgMAWgNQAUgMAVgKQAdgOAfgMQAjgOAagIQAdgHApgIQAjgGAlgEQARgCAYAAQAVAAAVACQAUABAVAEQAYADARAFIApALQAXAIAPAIQAQAJARANQATAOAMANQALALAMASQAKAQAJARQAGAIAFASIALAdIAKAWQAFAOAGAIIALARQAHAKAHAEQAJAFALABQAMADAHgEQAKgEANgPIATgXIACgFIACgGIACgJIABABIABADIAAACIAAAEIgCAIIgDAHIgDAJIgBABIgGAGIgwAnIAbgBIAqAAIAbgCIASgBIgHAJIggAHQgZAFgPAAIgMgBgAGuBGIAGgEIABAAIAAABIgKAHIADgEg");
	this.shape_14.setTransform(0.8,-22.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C6F74").s().p("AFDDlQgjgNgMgMQgPgNgMgUQgMgVgCgRQgCgTALgxQAMgugEgTQgJgqgSgoQgVgugbgZQgZgWgzgSQgPgFhFgTQgTgGgfgCQgZgBgcABQgeACgcADQgiAFgWAIQgdAJhAAgQhAAfgeAKQgDgCAEgJQAFgMAGgEQAPgMAXgMQAUgLAUgIQAggMAfgKQAlgLAbgFQAegEApgCQAlgCAkACQASAAAWAEQAWAEAUAGQATAFAWAIQAXAJAQAIQATAKASAMQAUAOAMANQANANAMATQAMATAHARQAGAPAEAVIAEAmIgDAdIgFAeIgDAZQgCAPABAJIAAAVQAAANAEAGQAFAJAHAHQAJAIAIABQAMACARgHIAcgMQADgBADgDIAEgEIAHgHIABACIgCAFIgDADIgGAGIgGAFIgHAHIgEACIgFABIg9AKIAWAOIAlAWIAaAOIAQAJIgLAEgAF9CeIAFgBIADAAIAAABIgPADIAHgDg");
	this.shape_15.setTransform(-5.4,-11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C6F74").s().p("ADyEaIgXgaQgYgcgGgQQgGgTgBgXQgBgYAGgRQAHgRAignQAegkAEgVQAIgngFgtQgGgzgTgeQgRgcgwgbQgSgLg+gdQgUgJgegGQgZgFgagBQgegDgcACQgiABgXAGQgeAHhCAdQhCAcgdAHQgEgCAEgIQAGgMAGgEQAQgLAXgMQAWgKAUgGQAhgLAggHQAlgIAcgCQAegDArADQAiADAkAGQASACAXAJQAWAHATAJQASAIAUAMQAVAOAPAMQAQANAPARQAQASAJAQQAIAQAHAWQAGAXABARQABARgFAVQgDATgHAQQgEAKgLARIgSAaIgNAVIgNAVIgJASQgFAMgBAIQAAAJACAKQAFALAGAEQAKAGATACIAfACIAGgBIAHgCIAFgCIAFgBIgBACIgCADIgGACIgIADIgJADIgKACIgGABIgCgBIg8gUIANAYIAWAjIAQAbIAKAQgAEpDZIAJABIAJADIgBABIgRgFg");
	this.shape_16.setTransform(-12.7,-4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C6F74").s().p("ABvEeQgKgfAAgDQgKgkABgRQABgTAJgUQAJgWAMgOQAMgMAvgZQApgXALgSQAUgkAHgsQAIgygNghQgMghgrgiQgSgOg3glQgSgMgfgJQgYgHgcgFQgbgEgdgCQgiAAgYAEQgeAGhDAZQhDAagdAGQgEgCAEgJQAGgLAGgEQARgMAYgJQAWgKAUgGQAigIAggGQAngGAbgBQAfABAoAHQAlAGAiAJQASAFAXALQAUAJASAMQARALASAPQAUARAMAOQANARAMATQANAWAFASQAFARAAAXQABAYgEASQgEAQgKARQgJASgMANQgHAKgRAMIgZARIgUAOIgUAQIgQANQgKAJgDAHQgEAIgBAKQgBAMAFAFQAHAKARAJIAcAPIAHABIAGABIAGAAIAFAAIgBACIgGADIgEgBIgJgBIgJgBIgKgCIgKgCIgvgqIADAbIAGAqIADAeIADATgADLEDIgQgOIAMAHIAFAGIAAABg");
	this.shape_17.setTransform(-15.7,-2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C6F74").s().p("ACAD3IAEAFIAHAMIAIAMIACAIIgCABIgTgmgAAwEQIAFghQAGglAGgPQAIgSAPgTQAPgSAPgNQALgJAygVQArgRALgUQAUghAHguQAIgxgMghQgMghgqgjQgUgPg2gkQgRgMgfgKQgYgGgcgFQgcgFgdgBQgigBgXAFQgfAFhCAaQhEAZgdAHQgDgCADgJQAHgMAGgDQARgLAXgKQAWgKAUgGQAigIAggGQAngHAbAAQAgABAnAGQAlAGAjAKQASAFAWALQAVAJARAMQASALARAQQAUAQAMAQQANAQAMATQANAWAFASQAEASABAXQAAAXgEATQgEANgKAUQgKARgLANQgIAJgQALIgaAPIgVAOQgOAHgHAFIgRALQgMAIgEAGQgGAJgDAKQgFAMAEAHQADALANAQIAWAZIAFAEIAGAEIAFACQADACABABIgCACIgDgBIgHgCIgIgFIgHgFIgKgFIgIgHIgGgFIgEgDIgXgwIgGAbIgLAoQgCALgIATIgHASg");
	this.shape_18.setTransform(-15.7,-3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C6F74").s().p("AA1EXIgBAAIAMhBIAMhBIgUATQgWAVgLAIQgHAGgSAKIgRAJIgBgKIAWgXQAbgYANgJQAPgLAXgNIAmgWIA/gUQApgOAMgUQAUgfAHgvQAHgxgNgjQgMgfgqgkQgUgQg1gjQgSgMgfgJQgYgHgcgFQgcgFgcAAQgigBgYAEQgeAGhDAaQhDAZgdAHQgEgCAEgJQAGgLAGgEQARgLAYgKQAWgKAUgGQAhgJAhgFQAmgHAcAAQAfAAAnAHQAmAFAiAJQASAEAXAMQAVAKARAMQASALARAQQATAQANAPQANARALAUQANAVAFASQAFASABAYQABAXgEATQgEAOgLASQgJASgMANQgHAJgQAJIgZAQIgVAKIgWALIgUAJQgLAFgHAGQgJAIgGAIQgJALgCAJQgCAMACAWIACAhIACAHIACAGIACAGQABADAAABIgDAAIgCgBIgEgHIgDgIIgDgJIgDgKIgDgKIgCgHIgDgHIAAABIgBAGIgBAHIgCAPIgEAPIgCAMQgCAJgCAEIgFAIg");
	this.shape_19.setTransform(-15.7,-3.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C6F74").s().p("AAND8IAAgDIAAgDIACgDIAEgHIAEgIIAFgJIAEgIIADgHIADgGIAAgBIgBABIgFAEIgGAEIgMAIIgNAHIgJAGIgNAEIgKAAIAAgBIAygmIAzgmIgaAEQgdADgNgBQgIgCgUgHIgSgIIAGgFIAeACQAfADAOgBQAWgBAXgDQAZgEASgFIA+gQQAngLALgUQAVggAGgyQAFgvgNgjQgMgggsgjQgUgRg2giQgSgMgegIQgYgIgdgEQgbgEgdgBQgiAAgYAEQgeAHhCAaQhDAageAHQgDgCADgJQAGgLAHgEQAQgLAYgLQAWgJAUgGQAhgKAhgFQAmgIAcAAQAfAAAoAGQAlAFAiAJQATAFAWALQAVAJASALQARAMASAQQAUAQAMAPQAOAQALAUQAOAWAFASQAFASABAYQABAWgDASQgEAQgKATQgJASgMAOQgHAJgPAJIgZAQIgVAKIgWAJIgWAIQgOAEgHAEQgNAGgJAGQgNAHgHAHQgJAJgOARIgUAbIgEAGIgEAFIgDAEQgCADgCABg");
	this.shape_20.setTransform(-15.6,-6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C6F74").s().p("AgeDVIAAgCIADgCIAFgCIAIgCIAHgBIAIgCIAIgEIAHgCIAGgDIAAgBIgIAAQgFAAgCgBIgMgCIgOgFIgMgGIgLgHIgHgIIABAAIAAgBIA6AHIA8AGIgXgLQgZgMgJgJQgGgGgHgUIgEgSIAEABIARAWQATAXALAFQASAJAXAEQAYAFASgDQAqgHAVgGQAlgNAMgUQAUgiAEgyQAEgxgOgjQgNgggsgiQgVgQg2ghQgTgLgfgJQgYgGgcgEQgbgDgeAAQgiAAgYAFQgeAHhBAbQhDAbgdAHQgEgCAEgJQAGgLAGgEQARgMAXgLQAWgKAUgGQAhgKAggGQAngIAbAAQAfgBAoAGQAmAEAiAIQASAEAXAKQAVAJASAMQASAKASAPQAUARANAOQAOARAMATQAOAWAFARQAGATACAWQACAZgDASQgDARgKAUQgKASgLAPQgHAJgPAKIgZARIgWALQgMAFgMADQgJADgOADIgYAFIgaAEIgbAFIghAHIgfAGIgGAAIgHABIgGAAIgCABIgDgBg");
	this.shape_21.setTransform(-15.4,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C6F74").s().p("ABUDEQgPgCgMgCQgMgDgTgIIgdgMIgGgEIgFgEIgFgDIgDgEIABgBIAFABIAKAFIAGAEIAHADIAIADIAHABIAFABIABAAIgBgBIgGgEIgFgEIgJgLQgGgGgBgFIgFgNQgEgHgBgGIgBgKIABAAIAqAkIArAkIgPgSQgPgUgDgLQgCgIAGgSIAGgSIADAFQgBAFAAAUQACAaAHAJQAMANAWAJQAVAJASgCQAkgEAcgJQAmgNAMgXQASgiACgzQACgygQgjQgOgggugfQgUgQg4ggQgTgKgfgHQgYgGgdgCQgcgDgcABQgjABgXAGQgeAHhCAdQhBAcgeAIQgDgCADgJQAGgMAGgDQAQgMAXgLQAXgLATgGQAhgLAggHQAmgIAcgCQAfgCAoAEQAlADAjAHQASAEAXAJQAVAJATAKQASAKATAOQAUAQANAOQAPAQAOATQAOAVAHARQAGATADAWQADAZgDATQgCARgJAVQgJATgLAPQgHAKgPAMIgZARQgKAGgOAGQgNAFgMADQgKADgPABIgaABIgbgBg");
	this.shape_22.setTransform(-15.1,-13.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C6F74").s().p("AB6C/QgNgBgNgDQgPgDgKgFQgLgFgRgMIgZgVIgFgEIgEgGIgDgFQgDgDAAgCIABAAIAFACIAHAIIAGAGIAHAGIAHAFIAEADIAGADIAAgBIgFgGIgDgFIgHgNIgEgOQgCgGAAgHIgBgPIACgGIACgEIAAABIAeAtIAcAqIgIgQQgKgWAAgKQAAgIALgPIALgOIAAAEIgHAYQgHAYAGAJQAJAPAUAKQAVAKAQgCQAjgEAdgMQAmgQAKgXQARgkgCg0QgCgygSgjQgQgegvgdQgVgOg6gdQgUgJgfgGQgYgEgdgBQgbgBgeACQgiACgXAHQgdAJhBAeQhBAfgdAIQgEgBAEgJQAGgMAFgEQAQgMAXgMQAVgMAUgHQAggLAggIQAmgLAbgCQAfgDAqACQAkABAiAFQATACAYAJQAWAHASAJQATAJATAOQAWAOAOANQAQAPANASQAQAUAHARQAJASAEAWQAEAZAAAUQgCAQgHAWQgIAUgKARQgHALgOANQgLAKgNAKQgLAGgNAGQgOAGgLADQgLACgQABIgKABIgQgBg");
	this.shape_23.setTransform(-14.7,-14.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C6F74").s().p("ACRC3QgMgCgTgIIgegOIgGgFIgFgEIgEgDIgEgEIABgBIACAAIAMAHIAIAEIAHAEIAIADIAGACIAGACIABgBIgBAAIgFgFIgGgEIgKgLIgHgNIgGgNQgDgHgCgHIAAgGIABgFIAAAAIApAnIAoAlIgOgRQgOgUgCgKQgCgIAGgTIAHgRIACAEIgCAaQgBAcAJAJQALAMAVAFQAXAGAOgGQAegOAZgWQAdgbADgZQAFgngSgvQgQgxgbgeQgXgZgzgUQgTgIhEgTQgUgGgfgBQgYAAgbACQgdACgdAFQgiAGgXAIQgbAKhBAjQg+AhgdAKQgEgBADgKQAFgLAGgEQAOgNAXgNQAUgMAUgIQAfgOAfgKQAlgMAbgGQAegGAqgDQAkgCAiAAQATgBAYAFQAXAEATAGQAUAGAWAIQAXAKAQAKQATALARAOQAUAQAMAOQAMAPALAWQALAWAFATQAEAPgBAXQAAAWgEASQgCANgKAQQgHAOgKANQgHAKgMAKQgKAKgLAGQgJAGgOAFQgNAEgLACQgNACgNABQgPAAgLgDg");
	this.shape_24.setTransform(-12.8,-18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C6F74").s().p("ADOCpIghgCIgHgBIgGgBIgFgCIgFgBIAAgCIACgBIADgBIADABIAHABIAIABIAKAAIAIAAIAGgBIAGgBIgBgBIgGgCIgIgCIgMgGIgOgJIgLgJIgKgKIgFgIIABgBIA2AUIA3ATIgVgNQgWgPgHgJQgGgHgDgUIgDgTIAFADIAKAaQAOAcALAGQAPAHAWgBQAXgBALgLQAUgWANggQAPgkgHgYQgMgjgjgoQghgmgmgUQgdgRg2gGIhYgGQgWgBgdAFQgYADgcAHQgcAGgcAJQghAKgVAKQgaAMg/AmQg8AlgdANQgEgBADgJQAEgMAGgGQAOgMAWgOQASgMAVgLQAdgPAegNQAjgPAagJQAdgKAogJQAlgIAigFQAQgDAZgBQAWgBAUABQAVABAWAEQAZAEASAFQAVAFAUAIQAYAJAPAJQARALASAPQASARAMAPQAKAOAJAWQAIAUAEAQQADANgBATQgBAPgDAQQgDALgFAOQgHANgHAKQgGAJgKAJQgKAJgKAGIgWALQgNAEgLACQgKABgPAAIgIAAg");
	this.shape_25.setTransform(-10,-24);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C6F74").s().p("AD1CTIABgCIAEgDIAHgDIAHgDIAHgEIAHgEIAFgEIAEgDIAAgBIgBAAIgHACIgHABIgOACIgPAAIgNgCIgOgCIgHgEIgBgBIA5gLIA6gKIgbgDQgdgCgMgFQgHgDgQgNIgNgNIAGgBQAGAEATAMQAcAQAOgBQASAAATgJQAWgKAEgOQAJgcgFggQgFglgSgSQgbgcgygUQgsgRgtgGQghgFg1AJIhVAUQgUAEgdAKQgXAIgbALIg1AXQgfAPgUAMQgXAOg+AqQg3AogeAQQgEgBADgJQAEgNAEgFQANgNAVgQIAmgYQAZgPAegRQAggSAagNQAbgNAmgPIBCgaQASgHAXgFIAngLIAqgHIAqgFQAXgBAUAAQAYABASACQAVAEAVAHQAYAHAQAIQAQAIARAOQASAOAMANQAIALAJAQQAHAOAFAPQADALACAMQABAPgCALQgBALgFAMQgFAMgGAJQgGAIgKAKQgJAIgJAHQgLAHgSAJIgdAOIgGACIgGACIgFABIgEACg");
	this.shape_26.setTransform(-7.3,-33.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C6F74").s().p("AmDCqQADgNAFgFQALgNAVgSIAkgbQAWgSAdgUIA1gmIA7gkIA8gmIAkgVIAkgVIAkgTIAmgRIAmgQQAXgKAQgEQAWgGAUgDQAZgFASAAQASgBAWADQAWACAQAFQANAFAQAJQAOAJALAJQAJAHAIAMQAJALAEAKQAEAJACANQABANgBAKQAAALgGANIgKAWQgFAJgLARIgSAZIgDAFIgEAEIgCADIgDADIgBAAIgBgCIABgCIABgCIADgFIADgGIAEgHIADgGIADgFIABgGIAAABIgBAAIgFAFIgEAFIgLAIIgLAIIgKAFIgKAGIgFABIgDAAIAAgBIAognIAoglIgYAOQgbAMgNADQgIACgRABIgRgBIAEgFQAHAAAVgEQAfgDAKgIQATgNALgQQARgUgEgOQgGgbgXgaQgYgbgXgHQgkgKg4AHQgoAFgyAOQggAIgwAaIhLArQgSAKgbAQIgsAcIgwAeQgcATgTAPQgPALhBA2QgzAqgdATQgEAAABgJg");
	this.shape_27.setTransform(-6.5,-43.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C6F74").s().p("AlrEBQACgNAEgFQAKgOAUgTIAigdIAvgsIAvgrIAzgvIA0gvIAdgcIAegdIAdgdIAcgeIAegcQARgSAMgKQAUgSANgJQAUgQAOgJQARgKATgIQAUgKAQgEQAOgEARgBQASgBANACQALABANAFQANAFAJAGQAIAGAIAKQAIAKAEAJQAFAKACAPQADAMABAOQAAALgCAUQAAARgCAOIgBAEIgBAGIAAADIgBADIgBAAIgBAAIgBgCIABgNQABgDgBgEIAAgHIgBgFIAAgFIgBAAIAAABIgCAGIgBAGIgFAMIgFALIgFAJIgFAIIgEAEIgBAAIANg0IALg0IgMAZQgNAagIALQgEAFgLAKIgMAHIAAgFIASgTQASgVAEgLQAIgaACgQQADgbgLgLQgSgSgigJQgigJgZAGQgiAKguAiIhIA8QgYATgnAoIg5BAIgmAiIgmAlIgqAoIgqAoIhKBIQgvAtgdAWQgEAAACgJg");
	this.shape_28.setTransform(-9.1,-52.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C6F74").s().p("Ak9FYQACgNADgGQAJgNAUgUIAfghIArgvQAbgeAOgTQATgXAYggQAWgdATgcIAWgiIAVghIATglIATglIAOglIARgkIARgnQALgYAHgOIAVghQANgUAMgMQAJgKAOgKQANgLANgGQAKgEANgEQANgCALAAQAKABAMAEQAMAEAIAGQAKAGAKAMQAKAKAIAKIAQAdIANAdIACAFIABAEIABAIIAAAAIgBAAIgEgJIgCgFIgEgHIgDgGIgDgFIgDgEIAAAAIACAHIACAHIABAMIAAAMIAAAJIgBAKIgDAFIAAAAIgQgzIgPgxIADAaQAEAdgBAMQAAAFgGALIgFALIgDgEIAFgWQAEgZgDgLQgHgagIgOQgMgYgQgDQgYgFghALQggALgSASQgXAZgZA2IgmBWIgkBOQgZA0gPAYQgKATgRAaIgfArIgiAvIglAuIhEBNQgqAvgdAbQgEAAABgJg");
	this.shape_29.setTransform(-14.1,-61.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4C6F74").s().p("AjtGTQABgNADgGQAJgNASgVIAdgjIAmgzQAXgfANgVQAPgaASgjQARghAOgeIAOgnIALgnIAKgnIAEgoIADgoIACgnIgBgrIAAgqIADgoQACgYADgPQADgOAHgPQAGgRAHgLQAGgJAKgJQAKgKAJgFQAJgEAMgDQAMgCAKAAQAMABAPADQAPAEALAFQALAFATAMIAcATIAEAEIAFAEIADADIACAEIAAABIgEgBIgHgGIgFgEIgHgFIgGgEIgGgDIgFgDIAAABIAAAAIAFAGIAFAEIAHALIAHAMQACADACAGIAEAKIAAAHIgBgBIAAABIgngnIgogmIAQAUQARAXAFAMQACAFgCANIgCAMIgEgDIgEgVQgHgYgHgHQgRgSgPgJQgXgOgOAFQgXAJgWAaQgVAZgHAaQgJAfADA9QAEBMgBATQgFAogHAvQgHAugJAmQgEAUgNAeIgWAxQgNAagOAaQgRAegOAVQgfArgfAoQglAvgdAfIAAAAQgDAAAAgJg");
	this.shape_30.setTransform(-22.4,-67.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4C6F74").s().p("AiPGvQABgNACgGQAHgNASgXIAbgjIAig2QAVghAJgXQANgcALglQAMgjAJggQAEgRACgYQADgTAAgWQAAgRgCgWQgBgWgCgSQgDgRgGgWQgFgUgFgSQgFgOgJgZIgRgnIgOglQgJgXgEgPQgDgOgBgQQgCgSABgNQABgLAEgNQAEgMAGgJQAFgIAKgHQAJgHAJgFQAKgFAOgEQAOgDAMgBQANgCAXACIAkACIAGACIAGACIAFABIAEABIAAACIgCABIgCAAIgEgBIgGAAIgIgBIgJgBIgIAAIgHAAIgHAAIABABIAHACIAHACIAMAHIAOAIQAFACAFAFIAJAIIACADIABADIgBABIg4gRIg4gQIAXALQAZAOAIAJQAGAFAEAPIADAOIgEgBIgOgVQgPgVgKgFQgUgIgVgCQgXgCgKALQgPARgHAiQgHAfAFAaQAEAfAcA5QAdA/AHAZQAIAkAGAzQAEArgCAqQAAAWgHAgQgGAXgIAdQgKAdgLAbQgLAggMAVQgYAqggAuQghAwgdAjIgBAAQgCAAAAgJg");
	this.shape_31.setTransform(-32.1,-71.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C6F74").s().p("AgvG+QABgNACgGQAHgNARgYQAUgbADgJIAfg4QASgjAIgYQAKgcAIgnQAHgkAFghQACgRgCgYQgBgUgDgVQgCgSgGgUQgGgWgGgRQgHgQgKgUIgVgjQgIgMgSgUIgZggIgbgeQgRgTgIgMIgQgaQgIgRgEgMQgDgKgBgNQABgNACgKQABgJAGgKQAGgKAHgHQAHgJAMgIIAVgPQANgGAVgIIAhgNIAHgCIAGgBIAFgBIAFgBIABABIgCADIgFACIgHADIgIADIgJADIgIAEIgGADIgEADIAAABIABAAIAGgBIAHgBIAPABIAQACIANABIANADIAHAFIAAABIg+AHIg7AJIAaADQAbAFAMAFQAHADANAOIAKANIgFAAIgXgOQgXgQgNgBQgVgCgTAEQgYAHgFAOQgIAVAGAhQAGAdANAZQAOAZAvAwQAtAwAOAYQASAhAOAyQANAoAHAsQAEAWgDAhQgDAYgFAdQgGAegIAdQgKAigLAWQgTAoggAyQgbAvgdAnIgBAAQgCAAgBgIg");
	this.shape_32.setTransform(-42,-72.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4C6F74").s().p("AAIG8QgBgNADgGQAGgOARgYIAYglIAcg6QAQgiAHgYQAIgeAGgnQAFglABghQABgRgEgYIgJgoQgFgRgJgUQgIgWgJgQQgIgOgOgSQgNgRgNgNQgLgMgVgQIgfgZIghgXQgVgPgKgKQgMgKgKgMQgMgNgHgMQgFgJgEgMQgEgMAAgKQAAgJADgMIAIgSIAOgVIARgTIAdgXIAdgWIAFgEIAGgDIAFgEQADgCACAAIAAAEIgCADIgCABIgGAGIgHAFIgHAGIgHAHIgFAEIgFAFIACAAIAHgDIAHgDIAPgEIAQgDIANgCIALgCIAGABIADABIAAABIg4AaIg6AaIAcgDQAegCANABQAIACASAKIANAJIgGADIgagJQgegJgOACQgVADgRAJQgWALgCAPQgDAVAPAfQAMAZAUAWQARAUA6AmQA1AkATAYQAXAcAVAxQARAlANAsQAGAWAAAhQABAZgDAdQgEAfgHAdQgIAjgJAWQgTApgeA0QgaAugdAqIAAAAQgCAAgBgIg");
	this.shape_33.setTransform(-47.7,-72.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4C6F74").s().p("AAbG4QgBgNADgGQAFgNASgYQASgbAFgLQATgmAIgUQAQgjAGgYQAIgeAEgnQAEglABgiQAAgRgGgYQgDgUgHgTQgGgQgJgVQgJgVgKgPQgJgPgPgRQgOgQgNgMQgMgLgXgOIgggXIgigVQgXgNgLgIQgNgKgLgKQgOgNgHgKQgGgJgFgMQgFgMgBgKQgBgIADgLQABgKAFgKQAEgJAIgNQAHgKAIgJIAagaIAbgZIAFgFIAJgIQADgDACAAIABABIAAADIgDAFIgGAGIgGAGIgHAIIgGAHIgFAFIgEAFIACAAIAHgEIAGgDIAPgGIAPgFIANgEQAJgDAFAAIAGAAIADAAIgBABIABAAIg3AhIg4AfIAcgFQAdgFAOABQAJAAATAJQAJADAIAFIgGACIgdgGQgggGgOAEQgVAFgQAJQgWANgBAPQgBAWASAdQAOAXAWAVQAUASA8AiQA4AgAUAXQAYAaAYAwQATAnAPAqQAHAVABAhQAAAZgCAeQgCAegGAdQgHAjgKAYQgRAogeA0QgaAvgcAqIAAAAQgDAAAAgIg");
	this.shape_34.setTransform(-49.7,-72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.4,-118.5,33.6,90.9);


(lib.bilbopupil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAVQgKgIAAgNQAAgLAKgKQAJgJAMAAQANAAAKAJQAJAKAAALQAAANgJAIQgKAKgNAAQgMAAgJgKg");
	this.shape.setTransform(4.9,8.6,1.436,1.436);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666CC").s().p("AgtA/QgSgbgBgkQABgkASgZQATgaAaAAQAbAAASAaQAUAZgBAkQABAkgUAbQgSAZgbAAQgaAAgTgZg");
	this.shape_1.setTransform(-0.1,-0.3,1.436,1.436);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.4,-13.1,19,26.3);


(lib.bilbomouthint = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D6B74").s().p("AlwrTIEujnQKSL2lRR4IpoAHQHioHnpyHg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.9,-95.4,73.9,191);


(lib.bilbohat = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF5293").s().p("Aj6A+IhSiNQFcCxE8i0Ig4CKQh4AbiNAAQh7AAiOgVg");
	this.shape.setTransform(1.6,5.6,0.739,0.739,-14.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E08DBF").s().p("AjYBtQAChoA9hIQBBhNBYAAQBZAABABNQA+BIACBoQhnAkhtAAQhqAAhzgkg");
	this.shape_1.setTransform(-1,-4.8,0.882,0.739,-14.9,0,0,0,-1.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.6,-14.7,47.5,29.6);


(lib.bilbofoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#39C0CE","#2EABB8"],[0,1],-20.6,6.9,0,-20.6,6.9,30.1).s().p("AhMDXIgBAAQgiiPhrCFIDDmjIDyAOIhJGaQgwAEgwABQg1hshJBsg");
	this.shape.setTransform(0.5,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99DEE6").s().p("AAGAkQBJhqA4BqIhBABIhAgBgAiGAaQBriDAhCNQhGgChGgIg");
	this.shape_1.setTransform(-7.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#39C0CE","#2EABB8"],[0,1],-26.5,14.3,0,-26.5,14.3,34.6).s().p("AhED+IgDgCQAsjBilCUIgBAAQgFg1C2mQIDSgKIgpH8QgwADgwABQg3hrhGBpg");
	this.shape_2.setTransform(-0.1,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#99DEE6").s().p("AAAA1QBGhmA3BpIgdAAQguAAgygDgAh8AHQCjiSgqC/g");
	this.shape_3.setTransform(-6.9,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-27.1,44,43.2);


(lib.bilboeyeball = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhWBwQg3gWgNgxQgNgvAkgvQAlgvBAgRQA+gRA3AWQA3AXANAxQANAvgkAuQglAwhAARQgcAHgYAAQgiAAgfgNg");
	this.shape.setTransform(0,0,1.152,1.086,107.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.3,-18.3,26.8,36.8);


(lib.bilboear = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2EABB8","#55C8D5"],[0.165,1],-48.6,13,0,-48.6,13,142.4).s().p("AgNKEQhYgChSghQhSghhCg6QhIg/gshTIgSggQgTgegGglQgRhbAChdQADheAjhXQAlhcA3hMQA4hMA7g3QA6g3BGgwQBFgwBKglQB5g5BygJQBKADAPBHQAHAjgGAiQgOBRgpBFQg2BchDBPQhdBuhuBZQAhgTA3gdQA6gdBvgbQBwgcBNAZQBNAYAWBDQAVBEhhBbQhhBbiNA0QiEAwiLAFIgHAAQAnAGAoANQBgAgAiBdQAPAogSAkQgYArgsARQgWAJgWAAIgRgCg");
	this.shape.setTransform(0,0,1.436,1.436);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.6,-92.7,145.5,185.6);


(lib.bilbobrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D6B74").s().p("AAjALQgLgUgeAAQgLAAgVAIIgbAKQgBAEAAgHQAAgMAVgMQAUgMAZgBQBDgEAAA4QAAAEgDADQgDAFgFAAQgJAAgMgWg");
	this.shape.setTransform(0,0,1.436,1.436);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.7,-4.7,19.5,9.5);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shadow2("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.03},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},5).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},4).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},5).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4266965.8,-95.8,108935.3,0);


(lib.bilbofootwalkcycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bilbo-foot
	this.instance = new lib.bilbofoot("single",0);
	this.instance.setTransform(-25.1,-6.1,1.436,1.436,0,0,0,3.5,-8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.46,skewX:-9.4,x:-22,y:-5},0).wait(1).to({scaleX:1.42,scaleY:1.49,skewX:-14.8,skewY:-1.4,x:-15,y:-5.5},0).wait(1).to({x:-4.7},0).wait(1).to({x:3.8},0).wait(1).to({regX:3.4,regY:-8.2,scaleX:1.4,scaleY:1.59,skewX:-24.8,skewY:-3.1,x:14.2,y:-5.4},0).wait(1).to({x:20.8},0).wait(1).to({regY:-8.3,scaleX:1.44,scaleY:1.45,skewX:-27.4,skewY:-20.3,x:28.5,y:-6.3,startPosition:1},0).wait(1).to({regX:3.3,scaleX:1.44,scaleY:1.45,skewX:-32.9,skewY:-25.8,x:33.9,y:-8.4},0).wait(1).to({regX:3.4,scaleX:1.44,scaleY:1.45,skewX:-57.4,skewY:-50.3,x:27.2,y:-11.9},0).wait(1).to({x:15.9,y:-13},0).wait(1).to({regX:3.2,scaleX:1.42,scaleY:1.46,rotation:-68.4,skewX:0,skewY:0,x:0,y:-16.2},0).wait(1).to({regY:-8.2,scaleX:1.41,scaleY:1.45,rotation:-52.9,x:-15.8,y:-22.9},0).wait(1).to({scaleX:1.41,scaleY:1.45,rotation:-30.8,x:-18.5,y:-21.6},0).wait(1).to({regY:-8.4,scaleX:1.41,scaleY:1.58,rotation:-16,x:-26.9,y:-26.3,startPosition:0},0).wait(1).to({rotation:-1,x:-29.6},0).wait(1).to({scaleX:1.41,scaleY:1.58,rotation:15.8,x:-27.4},0).wait(1).to({regX:3.5,regY:-8.3,scaleX:1.44,scaleY:1.44,rotation:5.8,x:-25.1,y:-23.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-33.1,63.1,62.1);


(lib.bilboeyebuild = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bilbopupil("synched",0);
	this.instance.setTransform(-2.8,-2.8);

	this.instance_1 = new lib.bilboeyeball("synched",0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#258B96").s().p("AhWBwQg3gWgNgxQgNgvAkgvQAlgvBAgRQA+gRA3AWQA3AXANAxQANAvgkAuQglAwhAARQgcAHgYAAQgiAAgfgNg");
	this.shape.setTransform(1.1,1.5,1.396,1.316,107.3,0,0,0,0.1);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-20.6,32.5,44.6);


(lib.bilbobody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.bilboeyebuild("synched",0);
	this.instance.setTransform(-54.4,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-65.4},16,cjs.Ease.get(-0.99)).to({y:-59.9},18).wait(1));

	// Layer 3
	this.instance_1 = new lib.bilbobrow("synched",0);
	this.instance_1.setTransform(-51.7,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-50.6,y:-96.4},16,cjs.Ease.get(-0.99)).to({x:-51.6,y:-91.4},18).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#369AA8","#2EABB8"],[0,1],-45.6,-4.7,47.8,3.4).s().p("AgNJjQhYgZhSg2QhSg2hChLQhIhSgsheIgSgkQgTgjgGgnQgRhfAChaQADhgAjhOQAlhSA3g+QA4g+A7gnQA6gpBGgeQBFgeBKgRQB5gbByAVQBKAWAPBLQAHAkgGAhQgOBOgpA6Qg2BOhDA+QhdBWhuA+QAhgMA3gOQA6gOBvAAQBwACBNAsQBNAqAWBLQAVBJhhBDQhhBBiNAQQiEAOiLgfIgHgCQAnAQAoAYQBgA5AiBmQAPAsgSAeQgYAlgsAGIgPABQgYAAgWgKg");
	this.shape.setTransform(36.4,-61,1.436,1.436,0,0,0,-50.6,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(35));

	// Layer 10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2EABB8").s().p("AE/YTQhDgBhRgEQhSgEhDgGQgxgFg+gIQg+gJgygKQg5gLhHgRQhFgRg5gQQg1gPhDgXQhAgVg2gVQgygTg7gaQg8gZgwgXQgjgRgrgYQgpgXgigVQglgXgrgdQgrgegigaQgggZgngiQgmgggfgdQgbgageggQgfgggXgbQgYgcgbgkQgbgjgUgeIgog+QgXglgLgbQgMgbgFgUQgIgdADgUQACgNAPgOQARgPAKAGQAeASArA2QAzA/ATAPQCOB7AkAdQBvBbBOAvQCCBOBaArQCJBCBiAQQBSANBpgVQBpgUBFgtQBDgqA/hYQA7hUAZhRQAchZAEiKQAChogLh/QgJhhgdh6QgchygkhhQgYg+gkg7QgqhDgrgkQgbgXgugIQgwgIgeAQQgkATgpA7Ig/BfQgQAVhMB3Qg7BagoAqQgqArg6AoQg9Arg1AUQgwAThEAIQhAAHg3gFQg0gFhTgcIiFgtIhIglIgtgaIgsgbIgqgeIgpgeQghgdgdgbQgkgigXgaQgWgYgdgoIgxhDIgxhIIgvhKIg2hYQggg1gTgkQgVgngYgyQgYgygSgpQgPglgNglQgQgrgIggQgIgfgFghQgGglgBgcQAAgcAFghQAFgiAIgaQAIgZAPgdQAPgdAPgWQARgYAYgZQAYgZAWgSQAUgPA1geQA1geAUgPQAKgIAJgPQAJgNAEgNIgDgGIgHgFIgCgFIgCgGIABgEIAEgJIADgEIAFgEIAMgHIAUgGIANgCIAJAAIAKACIADAEIADAEIABALIgDAMIgHAQIgCAGIABAUIAGATIAKAOIAWAXIARAMIAZAPIAKAIIAIAKIADAJIgBAKIgHAFIgSAEIgIABIgIgBIgfgIIgVgJIgGgEIgFgFIgDgIIgBgGIgBgSIgHgIIgNgHQgOABgUAGIgfANQgMAFgRALIgbATIggAXQgSAPgMALIgXAZQgMAPgIAMIgVAjQgMAWgEAQQgGAXgDAYQgDAdADAUQAEAZAKAcQALAdANAUQAXAiAcAfQAgAjAcAUQApAcAzAZQA2AaAsALQBOAVBPALQBcANBDgEQBRgFB2gbQBWgTBuggQBhgcC3hDQDahQA7gTIDvhOQCQgtBhgaQA/gRBrgVICsgjIBmgUQA+gNAngHQAcgEAtgFIBJgIIBRgIIBRgHIBQgGIBRgFIBJgCIBJgBIBGAAIBGACIBMAEIBLAGIBKAGIBJAIIBDAJIBCAJIA+AKIA+ALIAkAHIAkAIIA0APQAfAJAUAIQASAIAUAMQAVAMAOALQASAOAUAUQAUAUAOASQARAUAUAeQARAbAPAaQAQAcARAkQASAkAMAeQAOAjAQAtQAPArAMAmQAMAnANAzIAXBaIAUBiQALA2AHAsIAOBhQAHA5ADAqQADAoABA0QABAvgCArQgBA7gFBEQgEBIgGA3QgFA4gIAzQgJA+gJArQgQBGgQA5QgVBKgUAxQgTAvgcAxQgeA1gcAlQgfAmgvAsQgrApgsAhQgvAjhHArQg8AkhBAjQgvAZhDAeQg7Aag7AXQg+AZhHAZQhMAag7ARQg6AQhIARQhIAQg7AKQhFAMhZAKQhVAKhJAGQhBAFhVACQhAACg6AAIgcAAg");
	this.shape_1.setTransform(23.8,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2EABB8").s().p("AEtY8QhEAAhSgEQhSgEhDgGQgxgFg/gJQg+gJgzgJQg5gMhHgRQhGgRg5gQQg2gQhDgWQhAgWg3gVQgxgTg9gaQg7gagxgYQgjgRgrgXQgpgYgigVQglgXgrgeQgsgfghgaQghgZgngiQglghgfgeQgbgZgeghQgfgggXgcQgYgcgagkQgbgkgUgfQgYgkgPgaQgXgmgLgbQgMgbgFgVQgHgdADgUQADgOAPgOQARgOAKAGQAeASAsA3QAyA/ASAQQCOB8AkAfQBvBcBOAvQCCBPBbAsQCJBDBjAQQBUANBpgUQBqgVBHgsQBDgrBAhYQA8hUAahSQAdhZAFiKQADhqgLh/QgIhhgdh6QgbhzgkhhQgYg+gkg7QgqhDgrgkQgbgXgugIQgwgIgdAPQglATgpA8IhABfQgPAVhOB3Qg7BZgpAqQgqArg7AoQg9Aqg2AVQgwAShEAIQhBAHg3gGQg0gGhVgcIiFgvIhIgmIgtgbIgrgcIgrgfQgZgSgQgPQghgbgcgdQgkgigWgbQgWgZgdgoIgvhEQgUgfgbgrIgthLIg0hYQgeg2gSglQgUgngWgyQgWgxgRgqQgPgmgMgkQgPgrgHggQgIgfgFgiQgFglAAgcQgBgcAFgjQAFgiAIgbQAIgaAPggQAOgeAPgYQAQgZAXgcQAYgcAWgVQASgRAzglQAygjATgUQAJgJAHgQQAGgOACgPIgFgGIgIgFIgDgFIgDgFIAAgFIAAgFIACgFIADgFIAJgJIAMgHIAZgKIAKgBIAKACIAEACIADAFIAEALIgBAMIgDATIgBAHIACAKIADAKIAKATIAMAOIAGAFIAUAQIATAKIAcAMIALAHIAKAJIAFAJIABAKIgHAHIgRAIIgIACIgPAAIgRgCIgQgEIgWgIIgGgFIgEgIIgCgGIgEgTIgJgHIgPgGQgNADgTAJQgNAGgRALQgMAHgPANIgaAWIgeAcQgRARgLANQgLAMgLAQQgLARgIAOIgUAmQgLAXgEARQgGAZgCAaQgDAeADAVQAEAZAKAdQALAeANAVQAWAiAbAfQAeAkAcAVQAnAdAxAZQA0AbAsANQBNAWBMANQBcAQBBgDQBRgEB1gYQBXgTBrgeQBigcC1hCQDehQA3gSQCVgxBagcQCQguBggaQA/gQBrgWICsghIBlgVQA/gNAngGQAcgEAsgFIBJgIIBRgIIBRgHIBRgGIBQgEIBJgDIBJgBIBGABIBGACIBMAEIBLAGIBKAGIBJAIIBDAJIBCAJIA+AKIA+ALIAkAHIAjAIIA0APQAgAJATAJQASAHAUAMQAVAMAPALQARAOAVAUQATAUAPASQAQAUAUAeQARAbAPAaQAQAcARAkIAeBCQAOAiAQAuQAPAqAMAmQAMAnANAzIAWBbIAVBhIARBiIAOBiQAHA5ADApQADAoABA1QABAvgBArQgCA7gEBEQgFBHgGA4QgFA4gIAyQgJA/gKArQgPBGgQA5QgVBKgUAxQgUAvgcAyQgeA1gdAlQgeAmgwAtQgrApgsAgQgvAkhIArQg8AkhBAjQgwAZhDAfQg7Aag7AXQg/AZhHAYQhNAbg7ARQg6ARhIAQQhIAQg8AKQhGAMhZALQhWAKhJAGQhBAFhWACQg5ACg0AAIgpgBg");
	this.shape_2.setTransform(24.6,-18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2EABB8").s().p("AEhZyQhEgBhSgEQhTgDhBgGQgzgEg/gJQg/gJgzgJQg5gLhIgSQhGgQg5gRQg2gPhDgXQhBgVg3gVQgygTg8gbQg9gagwgXQgjgRgrgYQgqgXgigWQglgXgrgfQgrgegigbQgggZgngjQgmghgfgeQgbgageghQgeghgYgcQgXgdgaglIgvhDQgXglgPgbQgWgmgLgcQgMgcgFgVQgHgeAEgUQADgPAQgOQARgPAKAGQAeATAsA3QAyBBASAQQCNB+AkAfQBvBdBOAwQCCBPBcAtQCJBDBjAQQBUANBrgVQBrgWBHgtQBEgsBAhZQA9hVAbhSQAdhaAFiMQAEhqgKiAQgIhhgch7Qgch1gkhfQgWg+glg7QgphEgrgkQgbgXgugIQgwgIgdAQQglATgqA7IhABfQgPAUhOB4Qg8BZgqAqQgqArg7ApQg+Aqg2AUQgxAShEAIQhBAGg3gGQg1gFhUgeIiGgvIhHgnIgtgbIgsgdIgrgfQgYgTgQgPIg9g4QgjgkgWgaQgVgagcgpIguhFQgUgegZgrIgshMIgxhYQgcg1gSgkQgSgmgWgyQgUgvgQgqQgPgmgMgjQgPgqgIgfQgIgggGghQgGgmgCgbQgBgdADgkQADgkAGgcQAFgcAMgjQALgiANgbQAMgcAUgiQATghASgbQANgSAtg0QAngtAPgbQAGgLABgTQAAgPgDgQIgHgFIgKgDIgKgJIgCgFIgCgFIABgLIACgFIAIgMIAFgFIAKgJIALgHIAJgDIAKgCIAGACIAFAEIAEAFIAEAFIAEANIAGAbIAFAKIAHAKIARARIARALIAiAOIAWAGIAfAEIANAEIAMAGIAIAIIAFAKIgEAJIgHAIIgHAFIgHAFIgHADIgYAFIgiAAIgIgCIgHgDIgLgOIgLgTIgLgFIgRgCQgMAGgQAOIgZAYQgJAKgMASIgUAcIgXAkQgOAWgIAPIgRAjQgIATgGARQgJAbgFARQgIAbgCATQgDAbAAAbQABAgAEAXQAGAaALAeQAMAeAOAWQAWAiAaAeQAeAkAbAVQAmAcAvAaQAzAbApANQBNAXBJAOQBZARA/gCQBRgCBzgYQBYgSBpgdQBigbC0hBQDghRA1gRIDuhNQCRguBfgZQA/gRBrgVICsghIBlgUIBmgTQAbgEAtgFIBJgHIBRgIIBQgHIBRgGIBRgEIBJgCIBIgBIBHABIBGACIBLAEIBMAGIBJAHIBJAIIBDAJIBCAJIA+AKIA+ALIAkAHIAjAJIA0AOQAfAKAUAIQASAIAUALQAVAMAOALQASAOAUAUQATAUAPASQAQAVAUAdQARAbAPAaQAQAcARAkQARAkANAeQAOAiAQAuIAaBRIAZBZIAWBbQAKAtAKA0QALA3AHArQAIAxAGAxQAHA5ADApQACApABAyQABAxgBArQgCA7gFBEQgEBIgGA3QgGA4gHAzQgKA+gJAsQgQBFgQA6QgVBKgVAxQgTAvgcAyQgeA2gdAkQgfAngvAtQgsApgsAhQgwAkhIArQg8AlhBAjQgwAZhDAfQg8Abg7AXQg/AZhHAZQhNAbg7ARQg7ARhIAQQhIARg8AKQhGAMhZALQhXALhKAGQhBAFhWADQhDACg8AAIgYAAg");
	this.shape_3.setTransform(24.9,-23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2EABB8").s().p("ACGaTQhSgDhCgFQgzgEg/gIQg/gJgygJQg6gKhHgRQhHgQg5gRQg2gPhEgWQhAgVg3gWQgygSg9gaQg8gagwgXQgkgRgrgYQgqgYgigVQglgYgrgeQgrgfgigbQgggZgngkQgmghgfgfQgagagfghQgegigXgcQgXgegbglQgaglgUggIgnhBQgWgogLgcQgLgcgFgXQgHgfAEgVQADgPAQgPQARgRALAIQAeASArA4QAyBCASAQQCNCAAkAfQBvBfBOAwQCBBPBdAuQCJBDBkAPQBTANBrgXQBrgXBHguQBEgtBAhbQA9hWAbhVQAdhaAFiNQAEhrgKiBQgIhigch6Qgbh2gkhfQgWg/glg7QgphDgrglQgagXgugIQgwgHgeAOQglATgpA8QgiAygfAtQgPAUhPB4Qg8BZgqAqQgqArg7ApQg+Aqg2AUQgxAThEAHQhBAHg4gGQg0gGhUgdIiGgwIhHgoIgtgbQgbgRgQgMQgXgPgUgRQgYgSgQgPIg8g8QgighgWgbQgVgZgbgpIgthGQgSgegZgrIgphLIguhXIgrhXQgQgjgVgyQgSgrgRgtIgahGQgPgpgIgeQgKgggHgfQgJgmgDgbQgDgdgBglQgBgkACgfQABgdAGgnQAFgjAHghQAGgdAMgpIAVhFIAghWQAWg4AFgfQACgNgJgTQgGgMgMgQIgKgCIgLABIgOgGIgIgIIgDgEIgCgGIAAgMIAEgOIAFgMIAHgKIAIgHIAJgEIAHAAIAGABIAHADIAGAFIALAKIATAXIAVAPIAZAKIAWAGIAdACIAhgDIAfgHIAPgBIAOABIALAEIAJAJIABAKIgGATIgFAHIgFAGIgNAKIggAOIgIACIgIABIgJgBIgKgFIgGgEIgTgQIgNgBIgSADQgKAKgJATIgOAgQgFANgFAVIgIAiIgLArIgJAsQgEASgCAWIgFAoIgDAzQgBAeABATQADAeAEAdQAGAiAHAXQAJAbAOAdQAOAfAPAWQAYAjAYAdQAeAkAaAUQAkAcAtAaQAwAbAoAMQBMAZBEAOQBXATA9gCQBPgBBygXQBXgRBngdQBigaC0hBQDhhRAzgQIDuhNQCRgtBfgZQA+gRBrgUICsghIBmgUQA+gLAngHQAcgEAtgFIBIgHIBRgHIBQgHIBRgGIBRgDIBJgCIBIgCIBHACIBGADIBLAEIBMAFIBJAIIBJAIIBDAJIBCAKIA+AKIA9ALIAkAHIAkAJIAzAOQAgAJATAJQASAIAUALQAVAMAOALQASAPAUATQATAUAOASQARAVATAeQARAaAPAaQAQAcARAlQARAjAMAeQAOAjAQAtQAPArALAmQAMAmANA0QAMAvAKArIAUBiQAKA2AHAsIAOBiQAGA5ADApQADAmABA1QAAAwgBArQgCA8gFBEQgEBHgGA3QgGA4gIAzQgJA/gKAsQgQBFgQA5QgVBMgVAxQgTAugcAzQgeA1gdAmQgfAmgvAtQgsAqgsAgQgvAlhIArQg8AmhBAjQgwAahEAeQg7Abg7AYQg/AZhHAaQhNAbg7ASQg7ARhIARQhIARg8ALQhGAMhZALQhXALhJAHQhCAFhVADQhQADhHAAQhEAAhTgDg");
	this.shape_4.setTransform(25.3,-25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2EABB8").s().p("ADaaiQhTgDhCgEQg0gEg8gIQg+gHgygJQg6gLhHgQQhGgQg5gQQg2gOhDgWQhAgVg3gVQgygSg8gaQg8gZgxgXQgjgRgrgYQgqgYghgVQglgXgrgfQgsgfghgbQghgagngjQgmgigfgeQgagbgfgiQgegigYgdQgXgegbgmQgagmgUggQgYgngPgcQgXgogLgdQgLgdgGgYQgHggADgVQADgQAPgQQAQgSALAHQAfATArA5QAyBDASAQQCNCBAlAfQBvBgBOAwQCABQBdAtQCJBDBjAPQBTAMBqgZQBqgYBFgwQBEguA/hdQA7hXAahVQAdhbACiOQADhrgIiCQgIhigch7Qgbh3gjhfQgXg+gkg8QgphDgqglQgbgXgugIQgwgIgdAPQglATgqA7IhABgQgQAUhPB3Qg9BagpAqQgrArg6AoQg+Arg1AUQgxAThEAHQhBAHg3gGQg0gGhUgdIiFgxIhHgnIgsgcIgrgdQgWgPgUgQQgYgUgQgPQgggegbgbQgigkgVgbQgUgZgbgpIgrhFQgRgegXgsIgnhKIgqhVIgohWQgOgggUg0IgghUIgZhEIgXhFIgUg+QgKglgGgaQgGgcgGgmIgKhDIgGhGIgEhFIgDhJIgChKIgChaQgCg5gKgfQgDgNgTgNQgKgHgVgLIgLACIgLAFIgIABIgIAAIgGgBIgGgCIgGgDIgEgEIgEgFIgCgGIgEgNIABgYIAFgIIAGgIIAGgDIAHgBIARABIAQAEIAeANIAdAEIAdgBIAXgEIAmgNIAVgMIAYgUIAbgLIANAAIANAEIAGAJIADALIACAJIgBAIIgBAIIgHAPIgFAHIgSASIgGAFIgIAEIgIADIgNgBIgIgBIgZgHIgNADIgQALQgFAMAAAVIACAiQABANAFAWIANBPIAHAtIAIApIAKApIALAzQAIAgAGATQAKAfAKAbQANAjALAXQANAaARAdQASAfAQAWQAeApATAXQAeAlAZAUQAjAdApAZQAuAcAlANQBKAaBAAQQBUAUA6AAQBOgBBxgVQBVgQBmgcQBigaC0hAQDhhRAygQIDuhMQCRgtBegZQA/gQBrgUICsggIBlgUQA+gLAogGQAbgFAtgEIBJgHIBQgHIBRgHIBQgFIBRgDIBJgCIBIgBIBHACIBGADIBLAEIBMAGIBJAIIBJAIIBCAJIBDAKIA9ALIA+ALIAkAHIAjAJIA0AOQAfAKATAIQASAIAUAMQAVAMAOALQASAOATAUQAUAUAOASQAQAVATAdQASAbAOAaQAPAcASAkIAdBDQANAiAQAtQAPArALAmQAMAnANAzIAVBbQAKAtAKA0QAKA3AHArIANBiQAHA5ACApQADAnABA0QAAAxgBArQgDA7gEBEQgFBIgGA3QgGA4gIAzQgJA/gKArQgQBGgQA5QgWBLgUAyQgTAvgcAyQgeA2gdAlQgeAmgwAuQgrApgsAhQgvAkhIAtQg7AlhBAjQgwAahDAfQg7Abg7AYQg+AahHAaQhMAbg7ASQg6ARhIASQhIARg7ALQhGANhYAMQhWALhKAHQhAAGhVADQhQAEhHAAIgXAAQg6AAhEgCg");
	this.shape_5.setTransform(18,-26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2EABB8").s().p("AFFahQhSgChCgFQgzgDg9gIQg+gHgvgJQg5gKhGgQQhFgPg5gQQg1gOhDgWQhAgVg2gUQgygSg7gaQg8gZgvgXQgkgRgqgXQgqgYghgVQglgXgrgfQgsgfghgbQghgagngjQgmgigfgfQgbgbgegiQgfgigYgdQgXgegcgnQgagmgVghQgYgngQgdQgXgpgMgdQgMgegGgYQgJghADgWQACgPAOgSQAPgSALAGQAfAUArA5QAzBDASARQCOCBAkAfQBvBgBPAxQCABQBbAtQCJBDBiAOQBSAMBogZQBogZBEgwQBCgvA9heQA3hXAZhWQAbhbADiOQAChrgLiDQgIhigch7Qgbh3ghhfQgWg/gkg7QgohEgrglQgbgWgugJQgvgIgeAPQglATgqA7IhABgQgQAUhPB3Qg8BZgqAqQgqArg6AoQg+Arg1AUQgwAShEAIQhAAHg2gGQg0gGhTgeIiEgxIhGgnIgsgcQgbgRgQgMQgWgQgTgQQgYgTgPgPQgggfgagbQgigkgVgbQgTgagagoQgTgfgWgnIgmhJIgkhKIgmhVQgWgxgOgkQgMgegTg2IgdhTIgYhEIgYhEIgWg8IgVg9IgUhAIgUhAIgVhBIgWhBIgYhDQgQgpgLgZIglhPQgYgwgXgXQgKgLgXgCIgnAAIgJAGIgIAJIgPAIIgHACIgHABIgGAAIgGgBIgGgDIgFgDIgJgJIgGgKIgFgKIAAgJIADgJIAEgFIAOgIIARgFIAsgFIAPgEIAqgTIAUgNIAdgcIAOgSIAMgbIAJgMIAKgJIAMgGIAOgCIAKAFIAKAJIAFAGIAFAIIACAHIABAQIAAAJIgFAPIgGAPIgFAHIgHAFIgUAGIgcAFIgLAIIgKAPQACAMAKATIARAcIAUAcIAVAcIAYAmIAuBKIAXAjIAbAuIAbAtIAjA2IAjA2IAmA1IAoA0IAzBAQAgAoAYAUQAjAfAlAaQAtAeAjAOQBIAeA8ARQBRAXA4ABQBNABBvgUQBVgPBkgbQBigaCzg/QDihQAygQIDthLQCRgsBcgZQA/gQBtgUICsgfIBlgTIBmgRIBIgJIBJgGIBQgHIBRgGIBQgFIBRgDIBJgCIBJAAIBGACIBGADIBLAFIBMAGIBJAIIBJAIIBCAKIBCAKIA+ALIA+ALIAjAHIAkAJIAzAPQAfAKAUAIQASAIATALQAVANAOALQASAOATAUQAUAUAOASQAQAVATAeQARAaAOAaQAPAdARAkQARAkAMAeQAOAjAPAtQAPArALAmIAYBaQAMAwAJArQAKAtAKA0QAKA3AHAsIANBhQAGA5ADAqQACAmABA0QAAAxgCAsIgHB/QgFBHgGA3QgGA4gIAzQgKA/gKArQgQBGgQA5QgVBLgUAxQgTAvgcAzQgeA1gdAlQgeAngvAtQgrAqgrAgQgvAlhHAsQg7AlhAAjQgvAahDAfQg7Abg6AYQg+AahGAZQhMAcg6ASQg5ARhHARQhIASg6ALQhFANhYAMQhVALhIAHQhAAGhVAEQhOADhGABIgXAAQg6AAhDgCg");
	this.shape_6.setTransform(9,-26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2EABB8").s().p("AGOZuQhRgChBgFQgygDg9gIQg9gIgxgIQg2gLhFgPQhEgQg4gQQg1gOhCgWQg/gVg1gUQgygSg6gZQg8gagvgWQgjgRgqgYQgpgXghgVQglgYgrgeQgrgfgigbQgggagngjQgmgigfgfQgbgbgfgiQgggjgXgdQgYgegcgnQgcgmgVghQgZgmgQgeQgYgpgNgdQgMgegHgYQgJghABgXQABgPANgRQAOgTALAGQAfATAsA6QAzBDASARQCNCAAlAgQBwBgBPAxQCABRBZAsQCIBDBiAPQBPAMBngZQBlgaBCgvQBBgvA5hdQA2hXAYhVQAahbACiOQAChpgMiEQgIhigch7Qgbh1gihgQgXg/ghg8QgphEgqgkQgbgXgugJQgvgIgeAPQglATgqA7IhBBfQgQAVhOB2Qg9BZgpAqQgqArg6AnQg9Aqg1AUQgwAThCAHQhBAGg1gGQgzgGhTgeIiCgxIhGgoIgrgcIgrgdQgVgQgTgQQgYgUgPgNIg5g8QghgkgUgbQgUgagYgpQgTgggVgmQgQgegUgrIgihLIgjhVIghhXQgKgbgSg5IgbhVIgYhEIgZhDIgZg8Igag6Igcg7QgRgkgNgWIghg5QgTgggRgWIgog2QgagggTgSQgpglgVgRQgogfgegLQgNgFgXAIIgkARIgGAJIgFALIgFAHIgLALIgGAEIgGADIgGACIgGABIgMgCIgPgGIgIgGIgEgHIgCgJIACgGIAKgNIANgMIAogZIAMgKIAgghIANgUIAPgjIAEgVIAAgbIACgNIAFgNIAJgKIAMgHIAMAAIANADIAJADIAIAFIAFAFIAJANIAFAOIABAPIAAAIIgCAHIgDAHIgKAJIgfAUIgHALIgDAQQAGALARALIAcAQQAJAGAVAKIAeARIAkAYIAjAaIAhAZIAgAaQARAOAWAUIAmAkIAuAuIAtAuIAuAxIAuAxIA4BCQAlAqAWAUQAoAkAgAYQAsAiAiAQQBIAhA5ATQBPAbA3ACQBMADBugSQBUgOBjgZQBigaCzg/QDihPAxgQIDuhKQCQgsBdgYQA/gPBtgUICsgeIBlgTIBmgRIBIgIIBJgGIBQgHIBRgFIBQgFIBRgDIBJgBIBJAAIBGACIBGADIBLAGIBMAGIBJAIIBJAJIBCAJIBCALIA+ALIA+ALIAjAIIAjAIIA0AQQAfAJATAJQASAIAUALQAUANAOALQASAOATAVQAUATAOATQAQAUASAeQARAbAOAaQAQAdARAkQAQAkAMAeQAOAjAPAtQAOArALAmQAMAnAMAzQAMAxAJAqIAUBiQAKA3AGArIAMBiQAHA5ACApQADApAAAyQAAAxgCArQgCA7gFBEQgFBHgHA4QgGA4gIAzQgJA+gKAsQgQBFgQA5QgWBLgUAxQgTAvgbAyQgeA1gdAlQgeAnguAsQgrAqgrAgQgvAkhGAsQg7AkhAAjQguAahDAfQg5Aag6AYQg+AZhFAaQhLAbg6ARQg5ARhGARQhGASg7AKQhEANhWALQhUAMhIAGQg/AGhUAEQhNADhGAAIgWAAQg5AAhCgCg");
	this.shape_7.setTransform(3.5,-21.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2EABB8").s().p("AGqYjQhQgDhAgFQgygEg8gHQg8gJgxgJQg3gKhDgRQhDgQg4gPQg0gPhBgVQg+gVg1gVQgxgTg6gZQg7gZgugXQgjgRgqgYQgpgXghgWQgkgWgrggQgrgeghgbQghgagngjQgmgigfgeQgbgbgfgjQggghgYgeQgYgegcgnQgcglgWghQgZgngRgdQgZgpgNgdQgNgegHgXQgKghAAgXQABgOAMgRQANgUAKAHQAfAUAsA5QA0BCASARQCNCAAmAgQBvBgBPAxQCABRBYAsQCGBDBiAPQBOANBlgYQBkgYBAgvQA+guA5hdQA1hVAXhTQAZhcABiMQAChpgMiCQgJhkgbh6Qgbh2gjhfQgWg/ghg7QgohFgrglQgagWgugJQgvgJgeAPQglATgqA7IhBBfQgQAVhPB2Qg8BbgpAoQgqApg6AoQg9Apg0AUQgwAShCAGQhAAHg1gHQgzgHhSgeIiCgyIhFgoIgrgcQgagPgPgMQgWgRgTgQQgXgTgPgQQgfgfgZgdQgggkgUgcQgUgagXgpQgTghgUglQgPgegUgsIgghMQgPgkgSgyQgRgugOgqQgIgYgTg9QgSg9gJgaQgMgigNgjIgchDIgcg6Igfg4Igig1QgUgfgQgUQgTgXgWgXQgYgZgVgRQgagWgYgQQgegVgYgKQgogRghgKQgtgNgfACQgOAAgTARIgbAdIgDAKIAAALIgGAQIgHAMIgKAKIgFADIgGACIgLACIgKAAIgJgBIgGgEIgEgHIAAgGIABgGIAGgRIAhgtIAHgOIASgpIAHgfIABgbIgDgTIgLgWIgDgNIAAgMIAFgMIAIgLIAMgFIANgCIATAAIAIADIANAHIAFAFIAFAGIAHALIACAHIABAHIgBAHIgGALIgXAdIgCALIADAPQAJAHAUADIAfADIAhAEIAhADQARAEAYAHIAoANIAlAMQAWAIAPAIQAVAJAYANIAsAZQAYAPAdAUQAdATAWASIA2ArQAeAZAWAVQARAQAuAxQApAsAWAUQA1AuAVARQAuAlAiARQBKAmA0AUQBPAeA3AEQBLAFBugRQBUgNBjgZQBhgYC0g/QDihPAxgPIDthJQCOgrBggYQA/gPBsgUICtgeIBlgSQA/gLAngFQAbgEAtgEIBJgFIBQgHIBRgFIBQgEIBRgDIBJgBIBJABIBGACIBGADIBLAGIBMAGIBJAIIBJAJIBCAKIBCALIA+AKIA9AMIAkAIIAjAIIAzAQQAgAKATAJQASAHATAMQAVAMAOAMQARAOAUAVQATATAOATQAQAVASAdQARAbAOAbQAPAcARAlQARAkAMAeQANAjAPAuQAOAqALAnQAMAnAMAzIAVBaQAJAtAKA2QAKA3AGArQAHAwAFAyQAHA5ACApQACAoAAA0QABAwgCAqQgDA7gFBEQgGBHgGA4QgGA4gIAzQgKA+gKAsQgQBFgQA5QgVBLgUAxQgTAugcAxQgeA2gcAkQgeAnguAsQgrApgrAgQguAkhHAqQg6Alg/AiQgvAZhCAeQg5Abg6AXQg9AZhFAYQhKAbg6ARQg4ARhGARQhGAQg5AKQhEAMhWALQhTALhHAGQg/AFhTADQhMADhFAAQhCAAhOgDg");
	this.shape_8.setTransform(1.9,-16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2EABB8").s().p("AI+XlQhBgBhOgDQhQgEg/gFQgxgEg7gJQg9gIgvgJQg4gLhCgRQhDgQg3gQQgzgPhBgWQg/gWgzgUQgxgTg6gaQg6gZgvgXQghgRgqgYQgpgXghgWQgkgXgrgfQgrgfghgaQgggagngjQgngigegfQgcgagfgiQgfgigZgdQgYgegdgnQgbglgWghQgagmgRgdQgZgogNgeQgOgegIgWQgKghAAgWQAAgOAMgRQAMgTAKAGQAfAUAsA5QAzBCATARQCMB/AmAgQBwBgBOAxQCBBRBWAsQCHBEBgAQQBNANBkgXQBjgXBAguQA9gtA4hbQA0hUAXhTQAZhbABiMQABhngMiDQgJhjgbh3Qgbh4gihgQgWg/ghg7QgphFgqglQgagXgugIQgwgJgdAPQgmASgpA7IhBBfQgRAVhOB1Qg9BbgoApQgqArg6AlQg9Apg0ATQgwAShCAGQg/AGg1gHQgzgHhSgfIiAgyIhFgnIgrgcQgagRgPgNQgVgQgTgQQgXgUgPgPQgegggZgdQgggkgUgcQgTgagYgpIglhHQgPgegTgtIgfhMQgOgjgTg0IgehZIgbhXQgSg6gKgdQgNghgPgkQgRgngOgdQgMgZgTgeQgSgegRgXQgSgZgTgXQgWgbgTgSQgTgSgZgSQgagUgXgMQgbgPgagKQgggNgYgDQgngFgjAAQgtABgcAKQgOAFgNAVIgSAjIAAAKIACAKIAAAIIgBAIIgFANIgGAMIgEAFIgJAHIgOAGIgJACIgGgCIgGgEIgCgGIAAgGIABgRIATg1IAJgrIABgZIgBgTIgFgYIgJgQIgQgRIgGgKIgDgLIABgNIAFgLIALgJIAUgJIAKgCIAIgBIAHABIAOAFIAGADIAJAJIAEAFIADAGIABAGIgDAMIgPAgIABALIAGANQALADATgDIAegGIAhgGQAVgFAKAAQASgBAXAAIApACIAmAEQAVADAQADQAXAFAYAIQAaAIAUAIQAbALAeAOQAfAQAYANQAcARAeAVQAhAWAYATQAXATAtAsQAxAvAVARIBMBAQAwAnAiASQBPAqAwAUQBPAhA3AFQBLAGBugPQBVgMBhgYQBigYC0g+QDjhPAvgPQCVguBagaQCNgrBhgXQA+gQBtgSICtgeIBlgSQA+gLAngFQAcgEAtgDIBIgGIBRgGIBQgFIBRgEIBRgCIBIgBIBJAAIBGADIBHADIBLAGIBMAHIBJAIIBIAJIBCAKIBDALIA+ALIA9AMIAjAHIAjAJIA0AQQAfAKATAIQASAIAUAMQAUAMAOAMQASAOATAVQATAUAOASQAQAVASAeQASAbAOAaQAOAdARAkQAQAkAMAfQAOAiAPAuQAOArALAmQALAnANAzIAUBbQAJAtAKA1QAKA3AGArQAHAxAFAxQAGA5ACAqQADAoAAA0QAAAxgCApIgIB/QgGBHgGA4QgHA4gIAyQgJA/gLArQgQBGgQA4QgVBKgUAxQgTAvgcAxQgeA1gcAkQgeAmguAsQgrApgrAgQguAjhGArQg6AjhAAiQguAZhBAeQg6Aag5AXQg+AYhEAYQhKAag5ARQg5AQhFAQQhGAQg5AKQhDALhWALQhTAKhGAFQg/AFhSADQhAACg6AAIgXAAg");
	this.shape_9.setTransform(2,-10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2EABB8").s().p("AJLW+QhBAAhOgEQhQgEg/gGQgxgEg7gJQg7gIgxgKQg3gLhCgRQhCgQg3gRQgzgPhBgWQg+gWg0gUQgwgTg6gaQg5gagvgXQgigRgpgYQgpgXghgWQgkgXgqgfQgrgfgigaQgfgagogjQgmgigfgfQgbgagggiQgfgigYgdQgYgegdgmQgcgmgWggIgrhDQgZgogOgdQgOgegHgWQgLghABgWQgBgOALgRQANgSAKAGQAeAUAsA5QA0BBASARQCMB+AmAiQBwBfBOAxQCBBSBVAsQCGBEBhAQQBNANBigWQBkgWA/gtQA9gtA3haQA0hUAWhSQAYhbACiLQABhngMiCQgJhkgbh3Qgbh4ghhfQgXg/gjg8QgmhEgqglQgagXgugJQgvgJgeAPQglASgqA7IhBBfQgRAVhPB1Qg8BagpApQgqArg5AmQg9Ang1ATQgvAShCAGQg/AFg1gHQgzgHhRgfIiAgxIhFgoIgqgdQgagRgPgNIgoggQgXgUgPgQQgegfgZgdQggglgTgbQgTgbgXgpQgSghgTgmQgPgegTgtIgehMQgOgigSg2IgehZIgdhYQgSg5gMgeQgMgggRgkQgRgngQgcQgOgYgSgdQgUgdgSgWQgSgXgVgVQgYgZgUgQQgTgQgbgPQgbgQgWgJQgbgLgbgHQghgIgXAAQgmAAgkAHQgqAHgbAOQgMAHgLAWIgNAlIABAKIADAJIABAIIAAAPIgDANIgDAGIgDAFIgEAFIgIAIIgIAFIgJADIgGgBIgGgDIgDgFIgBgGIAAgaIAKgtIACg6IgDgUIgIgXIgIgPIgFgGIgSgNIgHgJIgFgKIgBgNIAEgMIAJgJIATgNIAJgEIAIgBIAHgBIAHABIAHABIAHADIAKAGIAFAEIADAGIACAGIgBAMIgKAhIABAKIAIAMQALABASgHIAdgKIAfgLQAUgHALgDIAogGIAogEIAlgBQAWAAAPACQAXADAZAEQAaAFAVAGQAbAIAeAMQAiAMAYAMQAdAOAgATQAiAVAYARQAZATAwAqIBIA+IBPBAQAyAoAiASQBUAtArASQBQAjA3AFQBMAIBtgPQBVgLBigXQBigYCzg+QDkhPAwgOQCSgtBbgbQCPgqBggXQA+gPBtgTICtgdIBlgSIBlgQQAcgDAtgEIBJgFIBQgGIBQgFIBRgDIBRgDIBIgBIBKABIBFACIBGAEIBMAGIBMAGIBJAJIBIAJIBCAKIBDALIA9ALIA9AMIAkAHIAjAJIA0AQQAeAKAUAIQASAIATAMQAVAMAOAMQARAOAUAVQASAUAOASQARAVASAeQARAbAOAaQAPAdAQAlQARAkAMAeQANAjAPAtQAOArALAnQAMAnAMAzQALAwAJArIATBiQAKA3AGArQAHAxAFAxQAGA5ACApQACAoAAA1QAAAxgCArQgCA5gGBEQgFBHgGA3QgHA4gIAzQgKA+gKArQgQBGgQA4QgVBKgVAxQgTAvgbAxQgeA1gdAkQgdAmgvAsQgrAogrAgQgtAjhHAqQg6Akg/AiQgvAYhCAeQg5AZg5AXQg9AYhFAYQhKAZg5ARQg4AQhFAQQhGAPg5AKQhDALhWAKQhTAKhGAFQg+AFhSACIhiACIgugBg");
	this.shape_10.setTransform(0.9,-7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2EABB8").s().p("AJgWtQhAgBhOgEQhPgEhAgGQgxgFg7gJQg7gIgwgKQg3gLhCgSQhCgQg3gRQgzgPhAgXQg+gWg0gVQgwgTg6gaQg6gagugXQgigRgpgZQgpgXghgWQgkgXgqgfIhMg6QgggbgngjQgmgigfgfQgbgagfgjQgggigYgdQgYgegdgnQgcglgVghIgshDQgYgpgOgdQgOgegHgXQgLggAAgXQAAgOALgRQAKgOALABQAeAUAsA6QAzBCATARQCLB/AmAiQBvBgBOAyQCABSBWAtQCFBFBhARQBMAOBigWQBjgWA/gsQA8gsA4haQAzhTAWhSQAYhaABiMQABhlgMiDQgJhkgah3Qgah4ghhfQgWg/gjg8QglhFgqglQgagXgugKQgvgJgeAPQglARgrA6IhCBeQgRAVhPBzQg+BZgpApQgqAqg6AmQg8Amg0ASQgwARhBAFQg/AFg0gHQgzgIhQgeIh+gzIhEgpIgqgcQgZgSgPgMQgVgQgSgRQgXgTgOgQQgegfgZgdQgfgkgTgbQgTgbgWgoQgSgggTgmQgPgdgTgtIgfhLIgihWIghhWIgfhVQgUg3gOgdQgOgfgTgjQgTgjgSgbQgPgXgVgbQgVgagUgVQgTgUgXgVQgagWgVgOQgVgOgcgOQgcgOgYgIQgdgKgbgFQgigHgYABQgnACgkAHQgsAIgbAPQgMAHgKAXIgNAlIACAKIADAKIACAQIgCAOIgFAMIgHAKIgJAIIgQAIIgHgBIgGgDIgDgFIgCgPIABgSIAKg8IAAgsIgDgUIgIgYIgJgPIgGgHIgSgNIgIgJIgEgKIgBgNIADgNIAJgJIATgNIAJgEIAIgCIAOABIAIABIAGADIALAGIAFAEIADAGIACAGIgDAUIgIAaIADALIAIAMQALABASgHIAdgLIAggMQAUgIALgCQARgEAXgEIApgFIAmgDIAmAAIAxAEQAcAEAUAEQAdAHAgAJQAiAKAZAKQAfAMAhAQQAkASAaAPQAbARAyAmQA7AtARALIBUA7QA0AlAjAQQBfAuAkAPQBSAiA4AFQBMAIBugNQBZgKBfgVQBjgWCzg7QDrhMApgMIDuhEQCPgpBfgWQA+gOBtgTICsgcIBlgRQA+gLAmgFIBIgIIBJgFIBQgGIBQgFIBQgEIBRgDIBIAAIBJAAIBGACIBGAEIBLAFIBMAHIBJAIIBJAJIBCAKIBBALIA+ALIA+ALIAjAIIAjAJIAzAPQAgAKATAIQARAIAUAMQAUANAPALQARAOATAVQATAUAOASQAQAVATAeQARAbAOAaQAPAcARAlQAQAkAMAfQANAiAPAuQAPAqALAnQALAnAMAzQAMAwAJArQAKAtAJA1IAQBiQAHAxAFAxQAHA5ACApQACAoAAA0QAAAygBArIgIB9QgGBHgGA3QgHA4gHAzQgKA+gKArQgQBGgRA5QgVBKgUAxQgTAugcAyQgdA1gdAkQgdAmgvAsQgrAogqAgQgvAjhGArQg6AjhAAiQguAZhCAeQg5AZg5AXQg9AYhFAYQhKAag6AQQg4AQhFAQQhGAQg5AJQhDAMhWAKQhTAJhGAFQg/AFhRACIhiABIgvAAg");
	this.shape_11.setTransform(-1.2,-6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2EABB8").s().p("AJ9WnQhBgBhOgEQhPgEhAgGQgwgFg8gJQg6gJgxgKQg2gLhDgRQhBgRg3gRQgzgQhAgXQg+gWgzgVQgxgTg5gaQg5gbgugXQgjgSgpgYQgogYghgWQgkgYgqgfQgqgggigbQgggagngkQgmgigegfQgbgbgggjQgfgjgYgdQgYgegdgoQgcgmgVghQgZgmgSgeQgZgpgNgeQgOgegIgXQgLghAAgXQAAgPAKgRQALgOAKABQAeAUAsA6QAyBCASARQCLCCAmAiQBuBhBOAzQB/BUBWAtQCFBHBhASQBLAOBigWQBigVA+gsQA8gsA4haQAyhSAVhSQAZhaAAiLQABhjgMiFQgJhkgZh2Qgah5ghhfQgVhAgig7QgnhFgngmQgagYgugKQgvgKgeAOQgmARgrA5IhDBcQgRAVhRBxQg+BYgpAnQgrApg5AlQg9Ang0ASQgvAOhBAFQg+AEg0gJQgxgHhPgeIh9g1IhBgoIgqgdIgngdQgUgQgTgQQgVgUgPgPIg0g7QgfgkgTgaQgSgagWgoIgmhFQgNgagUgtIghhJIgkhSIglhTIgkhPQgXgygPgcQgQgcgVggQgXgggTgYQgRgVgYgYQgWgXgWgSQgWgSgZgTQgcgUgVgMQgYgNgegNQgegNgZgIQgggJgdgFQgkgHgZAAQgrAAgkAFQguAGgdANQgNAGgMAXIgQAlIABAKIADALIABARIgBAHIgCAGIgGANIgMANIgGADIgSAGIgHgCIgGgEIgDgGIgBgHIAAgJIACgSIACgJIALgkIAFg8IgDgWIgHgaIgDgIIgKgQIgSgRIgHgKIgEgMIAAgNIAEgNIAKgJIALgHIASgHIAIgBIAPADIAHACIAGADIALAJIAEAEIAEAHIACAHIgFAUIgJAbIACAMIAHANQAMACAUgFIAegJIAhgKQAWgHALgCIAqgHIArgEIAogCQAYgCAQABQAZABAaACIAzAHQAeAFAhAHQAjAIAbAIQAiAKAgAMQAmAOAbAMQAdAOA0AgIBQAvIBZAyQA4AfAjAPICJA2QBVAfA4AFQBOAHBugKQBdgJBegTQBkgUCzg1IEWhSIDtg/QCQgnBcgUQA+gOBtgSICrgbIBkgSIBkgPQAbgEAsgEIBIgGIBPgGIBPgFIBQgFIBRgDIBIgBIBJAAIBGACIBGAEIBLAFIBLAHIBJAHIBJAJIBCAKIBCAKIA9ALIA9ALIAkAIIAjAIIA0APQAfAKASAJQASAHAUAMQAUAMAPAMQARAOATAUQAUAUAOASQAPAVAUAeQAQAbAOAaQAQAcAQAlQAQAjANAfQANAiAPAuQAPArALAmIAYBaQAMAwAJArIATBhQAKA3AHAsIAMBiQAHA4ACAqQACAoABA0QAAAxgCAsQgCA4gFBFQgFBHgHA3QgGA4gHAzQgKA+gKAsQgQBFgQA5QgVBLgUAxQgSAugdAyQgdA1gcAkQgeAngvAsQgrApgqAgQguAjhHArQg5AkhBAiQgtAZhCAeQg6Aag6AXQg8AYhFAYQhLAag5ARQg5AQhFAQQhGAQg5AKQhEALhWAKQhSAKhHAFQg/AFhRACIhZABIg3gBg");
	this.shape_12.setTransform(-3.9,-4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2EABB8").s().p("AKVWoQhAgBhOgEQhPgEhAgHQgwgEg7gJQg7gKgwgKQg3gLhDgSQhAgRg3gRQgzgQhAgXQg9gWg0gVQgwgUg5gbQg6gagugYQgigSgpgYQgogZghgWQgkgYgqggQgqggghgbQgggbgngkQgmgjgfgfQgbgcgfgjQgfgjgYgeQgYgfgcgoQgcgmgVgiQgZgmgSgfQgYgqgNgeQgOgegIgYQgKgigBgXQAAgPAKgTQAKgOALABQAdAUArA6QAyBEASARQCJCEAmAiQBtBkBOA0QB9BUBXAvQCEBIBhATQBLAOBigVQBhgVA9gsQA9grA2haQAyhSAVhRQAXhaABiLQAAhggMiHQgIhkgZh2QgZh5gghfQgVhAghg8QgmhGgngmQgagYgtgKQgvgLgeANQgmAQgsA4IhEBZQgSAVhSBuQhABXgqAmQgrAog5AkQg8Amg0ARQguAPhAADQg+ADgzgIQgwgIhNghIh6g1IhBgpIgngcIgngdIglggQgWgTgNgPQgcgdgYgcQgegjgSgaQgSgZgWgnIglhDQgNgXgWguIgihFIgnhNQgYgvgRgdIgphJQgZgrgUgbQgRgXgZgcQgYgbgWgVQgSgRgbgVIgwgiQgYgQgbgQQgegRgXgLQgagMgggMQgggMgagIQgkgLgcgGQgmgJgbgCQg1gEgeAAQgyABggAJQgOAFgOAVIgVAjIAAAKIACAMIgCARIgEANIgIAMIgFAEIgLAGIgGACIgKABIgKAAIgHgDIgGgGIgCgGIAAgHIADgSIAGgRIAQgjIAMg9IAAggIgGgcIgIgUIgQgVIgFgNIgDgMIACgOIAFgNIALgHIANgFIAJgDIAJgBIAIABIAOAFIAHAEIAPAQIAEAGIADAHIABAIIgDANIgQAiIABANIAGAPQAMAEAUgBIAhgEQAKgBAZgFIAigGQASgCAbgBIAtgBIApgBQAaAAAQABIA2ADIA1AGIBBAJIBAALIBEAPQApAKAbAJQAeAKA2AXIBUAjIBeAmQA7AYAjALICPAuQBZAaA4AEQBRAGBvgIQBigHBdgQQBlgSCzgvIEWhKIDtg6QCSglBZgSQA8gNBtgRICrgaIBigRIBjgQQAbgEAsgEIBGgGIBPgHIBPgGIBQgFIBQgDIBIgCIBIAAIBGACIBGADIBLAFIBLAGIBJAHIBJAJIBCAJIBCAKIA9AKIA9ALIAkAIIAjAIIAzAPQAfAJATAJQASAIAUALQAUAMAPAMQARAOATAUQATATAOASQAQAVATAeQARAbAOAZQAQAdARAkQAQAkAMAeQAOAiAPAuIAaBRQAMAnANAzQAMAwAJAqQAKAtAKA1QAKA3AHArIANBiQAGA5ADApQADAoAAA0QABAygCArQgCA7gFBCQgFBHgGA4QgGA3gHA0QgJA+gKArQgQBGgQA5QgUBLgUAxQgTAvgcAyQgdA1gcAlQgeAmguAtQgrApgrAhQguAkhHArQg6AkhAAjQguAahCAeQg6Aag6AXQg9AZhFAYQhKAbg6ARQg5AQhFAQQhGAQg6AKQhDAMhWAKQhUAKhHAFQg+AFhSACIhZABIg4gBg");
	this.shape_13.setTransform(-6.3,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2EABB8").s().p("AK1WpQhAgBhPgEQhOgFhAgGQgxgFg7gJQg7gKgvgKQg3gMhDgRQhDgSg0gRQgzgQhAgYQg9gWg0gWQgwgUg5gbQg5gbgugYQgigSgpgZQgogZghgWQgkgZgpggQgrggghgcQgggbgnglQglgkgegfQgbgcgfgkQgfgkgXgeQgYgfgcgoQgbgogWgiIgqhGQgXgqgNgfQgOgfgHgYQgLgiAAgYQAAgPAJgUQAKgPAKABQAeAVAqA7QAwBEASASQCJCGAkAjQBsBlBOA1QB8BWBXAwQCEBJBhAUQBKAPBhgUQBigUA8gsQA9grA1hZQAyhSAVhRQAXhZAAiLQAAhegLiIQgJhlgYh2QgYh5gfheQgVhBggg8QglhGgpgnQgZgYgrgLQgvgMgfAMQglAQgtA2IhFBXQgTAVhTBrQhBBUgrAmQgrAng5AiQg9AlgyAQQguAOhAACQg9ACgygJQgwgJhLghIh3g2Ig+goIgngcIgmgdIgkgfQgUgTgOgPQgagcgYgcQgdgigSgZQgQgXgXgnIglhAIgjhCIgjhCIgrhGQgZgqgUgcQgYgigWgdQgdglgWgXQgTgTgdgXQgZgVgagRQgTgNgfgRIgzgaIg3gaIg4gXIg8gXIg9gVIhCgUQgogLgbgFIhVgQQg0gIghAEQgOACgSARIgaAfIgCAKIABAMIgFARIgDAGIgEAGIgEAFIgFAEIgGADIgGACIgNACIgLgCIgLgDIgGgFIgFgIIgBgGIABgHIAGgRIAJgQIAWgdIASgrIAGgbIABgqIgFggIgMgbIgDgOIgBgOIAEgOIAIgMIALgEIAWgDIAJACIAHADIANAIIAGAGIAFAGIALAVIABAIIAAAIIgJAVIgQAYIgCAOIAFARQALAGAUADIAiACQALABAYAAIAkgBIAtACIAuAEIArACIArADIA2AFIB4ALIBCAHIBGAGQArAFAaAFQAgAFA3AOIBXAVIBiAXIBiAWICUAjQBeAVA4ADQBVAEBvgGQBpgGBbgNQBngQCygoIEXhBIDrg1QCXgiBUgQQA7gMBtgQICpgZIBigSIBhgQIBGgIIBGgHIBOgHIBOgHIBQgFIBPgEIBIgCIBIgBIBGACIBGACIBLAFIBLAGIBIAGIBJAJIBCAIIBCAKIA9AKIA+ALIAjAHIAjAIIAzAOQAfAKAUAIQARAIAUALQAUAMAPALQARAOAUAUQATATAOASQAQAVATAdQARAbAOAaQAQAcARAkQARAkAMAeQAOAiAPAtQAPArALAmQAMAnANAzQANAwAJAqIAUBiIASBiIANBhQAHA5ADAqQADAoABA0QAAAxgBArQgCA7gEBDQgFBHgFA4IgNBrQgJA+gKAsQgPBGgQA5QgUBLgUAxQgTAvgbAzQgeA1gcAlQgeAnguAtQgrAqgqAhQgvAkhHAsQg6AlhAAjQgvAahCAeQg6Abg6AYQg9AZhGAYQhKAbg6ARQg5ARhGAQQhHARg6AKQhEALhWALQhTAKhIAFQg+AFhTACIhYABIg5gBg");
	this.shape_14.setTransform(-9.6,-3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2EABB8").s().p("ALFWpQhAgChPgEQhPgFhAgHQgxgFg7gKQg7gJgwgLQg2gMhDgSQhDgSg0gRQgzgRhAgYQg+gXgzgWQgvgUg6gcQg5gbgtgZQgjgSgogZQgpgZgggXQgkgZgpghQgqghghgcQgggcgmglQgmgkgeggQgagcgfgkQgeglgYgeQgYgggbgpQgagngWgjQgXgngSggQgXgrgNgfQgNgfgHgZQgKgjgBgYQAAgPAKgUQAJgQALABQAdAVAoA8QAvBFASASQCICJAjAiQBrBnBOA3QB6BXBXAyQCEBLBhAVQBKAQBhgUQBfgTA+grQA9grA2hYQAxhRAVhRQAXhYAAiKQAAhcgLiKQgIhlgYh1QgXh6geheQgVhAgeg8QgmhHgognQgZgZgqgMQgugNgfAMQgmAOgtA1QgmAtghAoQgTAUhVBpQhCBSgrAkQgsAmg5AhQg9AjgyAPQguAOg+ABQg8ABgygLQgvgJhJgiIh0g3Ig9goIgmgcIgkgcIgjgfQgUgTgNgOQgagbgXgcQgcghgSgZQgPgWgXgmIgkg+Igkg+QgXgpgOgUQgWgigXgfQgcgkgVgZQgYgbgcgbQgfgdgagTQgUgQgggRQgZgOgfgOQgTgJgjgLIg3gTIg6gTIg6gUIg+gVIg9gVIhBgXIhCgXIhSgcQg0gSghgCQgOAAgTAMQgLAGgVARIgCAKIgBAMIgEAIIgEAHIgDAGIgGAEIgFAEIgFADIgHABIgNgBIgRgGIgKgGIgGgHIgEgJIABgHIACgGIAJgPIAlgjIAJgMIAQgaIALgZIAIgpIABgXIgBgLIgHgeIAAgPIACgOIAHgNIAJgKIALgCIANABIAIACIAHAEIAGAEIAGAGIAKANIAIAXIABAIIABAJIgCAIIgHAMIgYAcIgDANIACASQAJAJATAHIAhAKQAMADAWADIAjAFIAsAJIAsAIIAqAGIArAGIA1AGQAhAEAVABIBCAEIBCABQATAAAzgBQAxgCAWABIBaAEIBZAGIBlAHIBlAJQAaACB/AUQBlAOA2ACQBcADBtgEQBwgFBYgLQBpgNCygiIEZg3QA6gLCuglQCdggBOgOQA4gKBvgQICngYIBhgSQBBgMAfgEIBFgJIBFgHIBNgIIBOgHIBQgGIBOgFIBIgCIBIgBIBFABIBGACIBLAEIBLAFIBJAHIBIAHIBCAJIBCAJIA9AJIA9ALIAkAHQAVAEAOAEIAzAOQAfAJATAIQATAHATALQAUAMAPALQARAOAUAUQATATAOASQARAUASAdQARAbAPAaQAPAcASAkQARAjAMAeQAOAiAQAtIAbBRIAZBZIAWBbQALAtAKA0QALA3AHArQAIAxAGAxQAIA4ADAqQACAoABA0QACAxgCAsQgBA7gEBCQgFBHgEA4QgGA4gHAzQgJA/gKArQgOBHgQA5QgUBLgUAyQgSAvgcAzQgdA2gdAlQgdAnguAuQgsAqgqAhQgvAkhHAtQg7AlhAAkQgvAahCAfQg7Abg6AYQg9AZhHAZQhLAbg6ASQg5ARhHAQQhHARg6AKQhFALhWALQhUAKhIAFQg/AFhTABIhZABIg4AAg");
	this.shape_15.setTransform(-11.6,-2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2EABB8").s().p("ALBWnQhBgChPgFQhPgGhAgHQgwgFg8gKQg6gKgxgLQg3gMhCgTQhDgTg0gSQgzgQg/gZQg+gYg0gWQgvgVg5gcQg5gcgugZQghgTgpgZQgpgagfgXQglgZgpghQgqgighgcQgfgdgmglQglglgeggQgagdgegkQgfglgWgfQgYgggbgpQgagogUgjQgXgngSghQgXgrgLgfQgNgfgIgaQgJgigBgZQAAgPAKgUQAJgQAKABQAeAVAnA8QAuBGAQASICqCuQBqBpBMA3QB5BYBYA0QCDBNBhAWQBKARBhgSQBhgSA8grQA9gpA2hYQAxhQAVhQQAXhXAAiKQAAhYgLiMQgHhlgWh1QgXh5gdheQgVhBgeg8QgkhHgogoQgYgZgrgNQgtgNggALQglANgvAzIhHBTQgUAUhWBmQhEBQgrAjQgtAlg4AfQg8AigzAOQgtANg/gBQg6AAgygLQgugKhHgiIhyg4Ig7gpIgkgbIgkgdIgigeIggghQgYgagXgcQgagggTgZQgOgUgXgmIgkg7Igkg7QgXgmgPgUQgXgdgZgdQgcgggYgVQgZgWgggXQgggXgcgPQgWgLgkgMIg7gSIg6gNIg5gLIg9gNQgkgJgXgHIg9gSQgigLgbgKIg+gaIg+gbIhMgoQgygZgdgHQgOgEgUAIQgNAEgTAKIgFAJIgCALIgFAHIgEAHIgKAHIgGACIgGABIgGgBIgHgBIgGgDIgQgKIgIgJIgFgJIgCgJIABgHIADgFIALgMIAGgFIAcgOIAHgFIAUgTIARgXIAKgUIAJgcIAGgiIAAgfIACgPIAGgNIAHgLIALgIIAKABIARAIIAHAFIAIAMIADAIIAEAQIADAYIgBAJIgDAIIgNAPIgVARIgFANIAAASQAHAKARALQAKAGATAKQALAGAUAGIAhAKIApAOQAaAIAPAEIAoAJIAoAIIA0AHQAfAEATABQAdABAlAAQAjgBAegDQAYgCAvgHIBHgKIBbgKIBcgJIBmgIQBBgFAnABQAuAABvAJQBuAJAwAAQBwABBfgCQB5gEBUgIQBsgLCvgcIEagvQBIgMCggeQCkgfBFgLQA2gJBxgQQB5gQAtgIIBggRQBCgNAcgEIBEgJIBFgIIBNgIIBNgIIBOgHIBPgFIBIgDIBIgBIBGAAIBFACIBLAEIBKAEIBJAGIBIAIIBCAIIBCAJIA+AJIA9AKIAjAGIAjAIIAzAOQAfAIAUAIQASAIATALQAVALAOALQASAOAUAUQASATAPARQAQAVAUAdQAQAaAPAZQAQAcASAkQARAjAMAeQAPAiAPAtIAbBRQAMAmAOAzQANAwAKAqIAVBhQAMA3AGArQAJAxAHAxQAHA5ADApQADAoACA0QABAygBArQgBA7gEBCQgEBHgFA4QgFA4gHAzQgJA/gIAsQgPBGgQA6QgUBLgUAyQgSAwgbAyQgdA3gdAlQgeAogvAtQgqArgsAhQguAlhIAtQg7AmhAAkQgwAahCAfQg7Acg6AYQg/AZhGAZQhMAcg7ARQg6ARhGARQhIAQg7AKQhEAMhYAKQhUAKhIAFQg/AEhUACIhLAAIhHAAg");
	this.shape_16.setTransform(-11.8,-1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2EABB8").s().p("AKwWjQhAgChQgGQhPgFhAgIQgxgGg7gKQg7gLgwgLQg3gNhDgTQhAgTg3gTQgzgRg/gZQg9gYg0gXQgvgVg5gdQg5gdgugZQghgTgpgbQgogZgggYQgjgagqghQgqgigggdQgfgcgmgmQglglgeghQgZgdgeglQgeglgXgfQgXgggagpQgagpgUgjQgXgngRghQgWgrgMgfQgMgfgHgaQgJgjgBgYQAAgQAJgUQAJgPALABQAcAVAnA8QAsBGARASQCECNAkAkQBoBqBMA4QB4BaBYA1QCDBOBhAYQBJASBhgRQBhgRA9gpQA8goA2hXQAyhPAVhPQAXhWAAiJQABhWgLiNQgHhlgWh0QgWh6gchdQgUhBgeg9QgkhHgngoQgYgZgqgOQgugOggALQglAMgvAyIhJBRQgTAThYBkQhFBOgrAiQgtAkg4AeQg9AhgyANQgtALg+gBQg7gBgwgMQgtgLhHgjIhvg5Ig6gpIgjgcIgjgcIghgfQgSgSgNgOQgXgZgXgcQgZgfgSgZQgOgTgXgmIgjg5Igkg5QgXgjgQgTQgXgbgbgZQgegdgYgSQgagSgigSQgigSgegLQgXgJgmgGIg+gKQgTgDgogCIg8gFIg9gJQgkgFgYgGQgcgHgggJQghgLgZgKQgagKghgQQgfgPgagOQgPgJg2gmQgtgfgbgKQgMgFgTACQgPACgSAGIgFAHIgEALIgJAKIgFADIgLADIgGgBIgMgEIgLgJIgIgJIgHgKIgDgKIgBgJIACgGIAEgFIAFgFIANgGIAjgLIAUgOIATgTIAMgSIAPgjIAGgWIAFgeIAEgOIAHgNIAJgJIAKgFIAJACIAJAGIAFAFIAFAGIAGAOIADAQIAAAYIgDAQIgEAIIgOANIgUANIgGALIgDARQAGAMAOANIAZAUQAKAHASAJIAeANIAlARIAmAPQAQAGAUAFQAUAFARADIAxAIQAdAEATAAQAcAAAkgDQAigCAdgFQAagEAtgMIBGgSIBcgWQA6gOAjgHIBngWQBBgNAogCQA3gEBqACQCDAEAegBIDSgCQCDgCBQgHQBwgJCsgXQBcgMC/gbQBNgLCagbIDognQAxgIB1gPQBzgPAygIQAegFBAgNIBegRQAagFAqgFIBEgIIBMgJIBNgIIBOgHIBOgGIBIgDIBIgCIBFAAIBFABIBLADIBLAFIBIAGIBJAGIBBAIIBCAJIA9AIIA+AKIAjAGIAjAIIA0ANQAfAJATAIQASAHATALQAVALAPALQARAOAUATQATATAPARQAQAVATAcQASAbAOAZQAQAcASAjQARAkANAdQAOAiARAtQAPArAMAlQAMAnAOAzIAYBaIAVBhQAMA2AHArIAPBiQAIA5AEApQADAoACA0IAABdQgBA7gDBCQgEBIgFA3QgFA4gGA0QgIA/gKArQgOBHgQA6QgTBLgUAyQgSAwgcAzQgdA2gcAmQgeAngvAuQgsArgqAhQgwAmhHAtQg8AmhAAkQgwAahDAgQg8Abg6AYQg/AahGAZQhNAcg7ARQg6ARhHAQQhIARg7AKQhFALhYAKQhVAKhJAFQg/AEhUABIgzABIhggCg");
	this.shape_17.setTransform(-10.7,-1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2EABB8").s().p("AKeWgQhAgDhQgGQhPgGhBgIQgwgGg8gLQg7gLgwgMQg3gNhDgUQhAgTg2gTQgzgSg/gZQg+gZgzgXQgvgWg5gdQg4gdgugaQgigTgogbQgogagggYQgjgagpgiQgqgigggdQgfgdgmgmQglglgdghQgagdgdglQgeglgWggQgXgggagqQgagogUgjQgWgngRghQgVgrgMgfQgMgfgHgbQgKgiAAgYQAAgQAJgUQAJgQAKACQAcAVAmA9QAsBGARASQCCCNAjAlQBoBrBLA5QB3BaBZA2QCCBQBhAZQBJATBggPQBigQA8goQA9gnA2hWQAxhOAWhOQAXhWAAiIQABhUgLiOQgHhkgVh0QgWh6gchdQgThBgeg9QgjhHgmgoQgXgagsgOQgtgOggAKQglALgwAxIhJBQQgUAThYBiQhGBMgrAiQgtAjg5AdQg9AggyAMQgtALg9gDQg6gCgxgMQgsgMhFgjIhug7Ig4gpIgjgcIgigcIgggfIgfggQgWgZgWgcQgZgegSgZQgMgSgYgmIgjg4Igkg2QgXgigQgSQgXgZgbgXQgfgagZgQQgagPgkgPQgjgNgfgIQgXgGgngDIg/gDQgSgBgrABQgqABgTgBIg8gEQgkgEgYgEQgbgFgfgJQgggJgZgJQgZgKgfgPQgegPgXgPQgRgLgvgmQgqgigYgMQgLgGgSAAQgPAAgQADIgGAHIgEAJIgEAFIgGAEIgFACIgFABIgFAAIgGgBIgFgDIgLgIIgEgFIgOgWIgCgJIAAgKIADgFIAEgEIALgHIAHgCIAagDIAHgBIAVgLIASgQIANgQIARggIAIgVIAHgdIAFgNIAIgMIAJgIIAKgEIAIAEIAMANIADAGIACAHIADAPIgCAgIgCAHIgCAIIgEAHIgIAHIgaAOIgGALIgEAQQAFAMAMAOQAJAKANAMQAJAIARAKIAbAPIAiASQAUAKAPAGQAPAGATAFQATAFAQADQAZAFAUACQAcADATAAQAbgBAigFQAigFAcgGQAagHAsgPIBFgYIBcggQA7gUAhgKIBogfQBAgTAogFQA8gIBngCICjgCIDXgCQCLgBBLgFQB0gICpgTQB+gOCegUQBPgLCXgYIDnglIClgWQBvgOA2gJQAegEA/gNIBdgSIBDgKIBEgIIBMgKIBMgJIBOgHIBOgGIBIgEIBHgCIBGAAIBFABIBLADIBKAEIBJAFIBIAHIBCAHIBBAIIA+AJIA9AJIAjAGIAkAIIAzANQAfAIATAIQASAHAUALQAVALAOALQASAOAUATQATATAOARQARAUATAdQASAaAOAZQARAcARAkQASAjANAdQAOAiARAtQAPAqAMAmQANAmAOAzQANAwALAqIAWBhQALA3AIArQAIAwAHAxQAIA5AEApQAEAoABA1QACAxgBArQAAA7gDBCQgEBIgFA4QgEA4gHAzQgIA/gJAsQgPBGgPA6QgTBMgUAyQgSAwgcAzQgdA2gcAmQgeAogvAuQgsAqgrAiQgvAlhIAuQg8AmhBAkQgvAbhEAfQg8Acg6AYQg/AZhHAaQhNAbg7ARQg6ARhIARQhIAQg7AKQhGALhYAKQhVAJhJAFQhAAEhTAAIgsABQg2AAgygCg");
	this.shape_18.setTransform(-9.2,-0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2EABB8").s().p("AKXWdQhAgChQgHQhPgGhBgJQgwgGg8gLQg6gLgwgMQg3gOhDgUQhAgTg2gUQgzgRg/gaQg+gZgzgYQgvgVg5geQg4gdgtgaQgigUgogbQgogagggYQgjgagpgiQgqgigggeQgfgdglgmQglglgdgiQgagdgdglQgeglgWggQgXgfgagqQgZgpgUgjQgWgngRghQgVgrgMgfQgMgfgHgaQgKgjAAgYQAAgQAJgTQAIgQAKABQAcAWAmA9QArBFARATQCBCOAkAlQBnBrBLA6QB2BaBZA3QCBBRBhAZQBJATBggOQBhgOA9gpQA8gmA2hUQAxhOAWhNQAXhWAAiIQAAhSgKiOQgHhlgVh0QgVh5gchdQgUhCgdg8QgjhHgmgpQgXgZgsgPQgtgOggAKQglALgwAxIhJBOQgUAThZBhQhGBMgsAhQgtAig4AdQg+AfgxAMQgtAKg9gDQg6gDgwgMQgsgMhEglIhtg7Ig4gpIgigcIghgdIgggeIgeggQgWgZgWgcQgYgfgSgYQgMgRgXgmIgjg4Igkg1QgWghgRgSQgWgXgcgWQgegZgagNQgagOgkgMQgjgMgfgFQgYgFgnAAIg/ABIg9AEIg9AEIg8gBQgkgBgYgDQgbgEgfgHQgggHgXgJQgagJgegOQgegOgXgOQgRgLgtglQgqgigWgMQgLgFgSgBQgPgBgPADIgGAGIgEAJIgJAIIgKADIgLgCIgFgDIgKgIIgMgQIgGgLIgCgKIAAgJIADgFIAEgEIAFgEIAGgCIANgDIAFAAIAVgCIAKgEIATgNIAPgPIALgPIARgiIALgoIAFgMIAIgMIAIgHIALgEIAHAEIALANIADAHIACAGIACAXIgCAYIgCAHIgCAHIgEAHIgIAHIgGAEIgTAKIgGAKIgEAQQAFALAMAOQAIALANAMQAJAIAQAJIAaAPIAhASQAUAKAPAFQAOAGATAEQASAFAQACQAZAEAUACQAaACATgCQAbgCAigGQAggHAbgIQAagIAsgRIBEgdIBbgmIBbgkIBnglQBAgWAogHQA+gKBlgEIClgFQAygCCmAAQCQAABJgEQB2gICngQQCIgOCUgSQBRgJCUgYIDngjIClgWQBtgOA3gJQAegEA/gNQBEgOAZgEIBDgKIBDgJIBMgKIBMgJIBOgHIBOgHIBHgEIBIgCIBFgBIBFACIBLACIBKAEIBJAFIBIAHIBCAHIBCAIIA9AIIA9AJIAkAGIAjAIIAzANQAfAIATAIQASAHAUALQAVALAOALQASANAUATQATATAPARQAQAUAUAdQASAaAOAZQAQAcASAjQASAjANAeQAOAiARAtQAQAqAMAmQAMAmAPAzIAXBaIAXBhIATBhQAJAxAHAxQAIA4AEAqQADAoACA0QACAxAAArIgEB+QgDBHgFA4QgFA4gGAzQgIA/gJAsQgOBHgPA6QgUBLgTAyQgTAwgbAzQgdA3gdAmQgeAngvAuQgrArgrAiQgwAlhHAuQg9AmhAAkQgwAbhEAfQg7Acg7AYQg/AZhHAaQhNAbg7ARQg7ARhHAQQhJARg7AJQhFAMhYAJQhWAKhJAEQhAAEhTAAIgaABQhAAAg6gDg");
	this.shape_19.setTransform(-8.4,-0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2EABB8").s().p("AKhWeQhAgDhQgGQhPgHhAgIQgxgGg7gLQg7gLgwgMQg2gNhDgUQhBgUg2gTQgygShAgaQg9gZgzgXQgvgWg5gdQg4gegugaQghgTgpgbQgngagggYQgkgagogiQgqgjgggdQgggdglgmQglgmgdghQgagdgeglQgdglgWggQgXgggbgqQgZgpgUgjQgWgngRghQgWgrgMggQgMgfgHgaQgJgigBgZQAAgPAIgUQAJgPAKABQAcAWAlA9QAsBFARATQCACNAlAmQBnBsBMA5QB2BbBZA3QCCBQBhAaQBIATBggPQBigPA8goQA8gmA2hVQAxhNAVhOQAXhVABiJQgBhSgJiOQgIhlgVh0QgWh5gchdQgThCgdg8QgjhHgngpQgXgZgrgOQgugPggAKQglAMgvAxIhKBPQgTAShZBiQhHBMgrAhQgtAjg5AdQg+AfgxALQgtALg+gDQg6gDgvgNQgtgMhFglIhsg8Ig4gqIgjgcIghgdIgfgfIgeggQgWgagVgcQgZgfgRgZQgNgSgWgmIgjg5Igig2QgWgigQgRQgXgZgagWQgegZgYgPQgagOgkgNQgigMgegGQgYgEgmAAIg/ABQgSAAgqAEQgqAFgSAAIg8ABQglgBgYgCQgbgDgfgGQgigHgZgHQgagIgfgNQgfgMgZgNQgRgJgzgjQgrgegZgKQgMgFgSABQgPABgQAEIgFAHIgDAKIgFAFIgFAEIgFACIgEACIgGAAIgGAAIgFgDIgLgHIgOgPIgHgKIgCgKIgBgJIACgGIAEgEIAFgEIANgGIAggHIAUgMIASgRIAFgIIAVgqIAMg0IAEgNIAHgMIAIgJIAKgFIAJAEIAMALIAEAHIAEANIADAQIgBAYIgBAIIgCAHIgDAHIgHAIIgGAFIgUALIgFALIgDARQAGALANANQALAKAOAKQAJAIARAIIAcANIAkAQQAVAIAPAFQAQAEATAEQATAEARABIAuAEQAbABATgCQAcgDAigIQAigHAbgJQAZgIAsgSIBEgdIBaglQA6gYAhgMIBmgjQBAgVAogFQA9gJBmgCICjgBIDXABQCNABBKgEQB0gHCogSQB9gNCegUQBRgJCVgZIDngkIClgWQBtgOA3gJQAegEA/gNQBDgOAagEIBDgKIBDgJIBMgKIBMgJIBOgHIBPgGIBHgEIBHgDIBFAAIBGABIBKADIBLAEIBJAFIBIAGIBCAHIBBAIIA9AJIA+AJIAjAGIAkAHIAyANQAgAJATAHQASAIAUAKQAUAMAPALQASANATATQAUATAOARQARAUATAdIAhAzQAQAcARAjQASAjANAeQAOAiARAtQAQAqAMAmQANAmAOAzQANAvALArQALAsALA1IAUBhQAIAxAHAxQAJA4ADAqQADAoACA0IACBcQgBA8gDBCQgDBHgFA4QgEA4gHAzQgHA/gKAsQgOBHgPA6QgUBLgTAyQgSAwgcAzQgdA3gcAlQgeAogvAuQgrArgrAiQgwAlhHAtQg9AnhAAkQgwAahDAgQg8Acg6AXQg/AahIAZQhMAcg7ARQg6ARhIAQQhIARg7AJQhGAMhYAJQhVAKhJAEQhAAEhUABIgZAAQhAAAg6gCg");
	this.shape_20.setTransform(-9.2,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2EABB8").s().p("AK1WfQhAgChQgGQhOgGhBgIQgwgGg7gLQg7gLgwgMQg3gNhDgUQhCgTg0gTQgygShAgaQg9gYgzgYQgvgVg5geQg4gdgugaQghgTgpgbQgngagggXQgkgbgpgiQgqgigggdQgfgdgmgnQglglgeghQgagdgdglQgegmgXgfQgXgggbgqQgagpgUgjIgohJQgWgrgMgfQgNgggHgaQgKgigBgZQAAgPAIgUIASgOQAbAWAnA9QAsBGARATQCBCMAmAnQBoBsBMA5QB3BaBZA3QCCBQBhAZQBIATBggPQBhgPA8gpQA8gmA1hWQAxhNAVhOQAXhWAAiIQAAhUgLiNQgIhlgVh0QgWh5gcheQgUhBgeg8QgjhHgngoQgZgagqgNQgtgOggAKQglAMgwAyIhJBQQgTAShZBjQhGBNgsAiQgtAjg5AdQg9AggyALQgtALg+gDQg6gDgxgNQgsgMhGgmIhtg9Ig4grIgjgdIghgeIgfggQgSgSgMgPIgrg3QgYghgRgZQgMgTgWgnIghg7Ighg4QgVgjgQgTQgVgagZgYQgcgbgYgQQgYgQgigOQgggPgdgHQgXgFglgBQgRgBgrAAQgUABgnAEIg7AFIg9ACQglABgYgBQgdgCgggDQgjgEgagFQgcgGgjgJQgigJgcgJQgQgGg9gaQgygXgcgFQgNgDgTAHQgOAEgRAJIgEAJIgCAKIgDAHIgFAGIgEADIgFADIgFACIgGABIgGgBIgNgEIgGgEIgKgHIgJgJIgFgJIgCgJIABgGIADgGIAEgFIAGgFIAMgIIATgJIAIgEIASgSIAPgWIALgdIAIgoIAAgqIACgPIAEgNIAHgLIAKgIIAJABIAKAFIAGAEIAGAFIAFAGIAJAVIAFAgIgBAJIgCAIIgMAPIgSARIgEAMIABARQAHALARAKQALAHASAIQALAFATAFIAgAIIAoAJQAYAGARACQAQACAWACIAmABQAdAAAVgCQAegBAUgDQAcgFAjgJQAigJAdgKQAYgIAtgTIBEgdIBagiQA3gVAjgKIBlgeQA+gQApgDQA6gFBmADIChAGIDTAGQCHAEBNgEQBvgHCrgUQBdgLC9gZQBPgLCXgaIDngmIClgXQBwgPA0gIQAegFBAgNQBDgOAagEIBDgKIBEgIIBMgKIBMgJIBOgHIBPgGIBHgEIBIgCIBFgBIBFACIBLACIBLAEIBIAGIBJAGIBBAHIBCAJIA9AIIA+AJIAjAGIAjAIIAzANQAgAIATAIQASAHAUALQAUALAPALQARAOAUATQAUATAOARQARAUATAdQASAaAOAZQAQAcASAkQASAjAMAdQAPAiARAtQAPAqAMAmQANAmAOAzIAYBaQALAtALA0QAMA3AHArQAJAwAHAxQAIA5AEApQADAoACA0QACAygBArQAAA7gDBCQgEBIgEA3QgFA5gHAzQgHA/gJAsQgPBGgPA6QgTBLgUAzQgSAvgbAzQgdA3gcAlQgeAogvAuQgrArgrAhQgvAlhHAuQg8AmhAAkQgwAbhDAfQg7Acg7AYQg+AZhHAaQhMAbg7ARQg6ARhHARQhIAQg7AKQhFALhYAKQhVAKhIAEQhAAEhTABIgsAAQg2AAgxgCg");
	this.shape_21.setTransform(-10.3,-0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2EABB8").s().p("AK/WfQhBgChOgGQhPgGhAgIQgwgGg7gLQg7gLgwgLQg2gNhDgUQhCgTg0gTQgzgRg/gaQg9gZgzgXQgvgVg5gdQg4gdgugaQgigTgogbQgogagggXQgkgbgpghQgqgjgggdQgggcgmgnQglglgeghQgagdgeglQgeglgYggQgXgggbgqQgbgpgVgjQgWgmgSgiQgXgsgNgfQgNgfgIgaQgLgigBgZQgBgPAIgTIARgOQAcAWAoA+QAsBFASAUQCACKApAoQBpBrBMA6QB3BZBaA2QCCBQBiAZQBIASBggPQBggPA8gpQA7gnA1hVQAwhOAVhOQAXhWgBiIQAAhVgLiMQgJhlgVh0QgXh5gdhdQgUhBgeg9QgkhGgngoQgZgZgqgNQgugOggALQglANgvAyIhJBSQgSAShZBlQhGBOgsAjQgtAjg5AeQg9AggzALQguALg+gDQg7gCgwgOQgugMhGgnIhug+Ig5gtIgigeIgigfIgfghIgegiQgVgcgVgeQgYgigQgaQgNgUgUgoIggg+Igfg7QgUgmgOgUQgUgdgWgZQgbgfgWgSQgXgTgfgRQgfgSgcgJQgVgIgjgDIg5gEQgVAAglADIg5AFIg9AEIg9ACIg/AAIhAgCIhEgFIhEgGIhVgNQg3gJgeADQgOABgSANQgLAIgQAQIgCAKIABAMIgCAIIgDAHIgHAKIgKAHIgHABIgGABIgOgCIgLgDIgLgGIgHgHIgFgIIgBgGIACgHIAHgPIAKgMIAXgXIANgZIAKgbIAEgXIAAgoIgEgYIgKgdIgCgPIABgPIAEgNIAIgKIAKgDIALABIAJABIAHADIAHAEIALALIAJAOIAJAXIACAIIgBAJIgEAMIgEAHIgPAXIgBANIAEARQALAIATAFIAhAGQANACAVAAIAjgBIAsAAIAsgCIApgEIApgFIA1gIQAggGAUgFQAcgHAlgLIBBgWIBFgbQAvgUAWgHQAygRAngMQA1gQAlgIQA9gNAngHQA9gKApAAQA2gBBoAMQB9AOAhACIDOANQCBAHBOgEQBsgGCsgYIEYgqQBNgMCYgcQCtggA7gJQAygJBzgQQB0gQAxgIQAegEBAgOIBegSIBEgJIBEgJIBMgJIBNgIIBOgIIBPgFIBHgEIBIgCIBFgBIBGACIBKADIBLAEIBJAFIBIAHIBCAHIBCAIIA9AJIA9AJIAkAHIAjAHIAzANQAfAJAUAIQASAHATALQAVALAOALQASANAUAUQATATAPARQAQAUAUAdQARAaAPAaQAQAbASAkQARAjANAeQAOAiARAtQAPAqAMAmQANAmAOAzIAYBaQALAtALA0QALA3AIArQAIAwAHAxQAIA5AEApQAEAoABA0QACAygBArQAAA7gDBCQgEBIgEA3QgFA4gHA0QgIA/gJArQgOBHgPA5QgTBMgTAyQgTAvgbAzQgdA3gcAlQgdAngvAuQgrArgqAhQgvAlhHAtQg8Amg/AkQgwAbhCAfQg8Abg5AYQg+AahHAZQhLAbg7ARQg6ARhHARQhHAQg7AKQhEALhYAKQhUAKhIAEQg/AEhTABIgsABQg1AAgxgCg");
	this.shape_22.setTransform(-10.3,-1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2EABB8").s().p("AK7WdQhAgChPgGQhOgGhAgIQgwgGg7gLQg7gLgvgLQg3gNhDgUQhCgTgzgTQgzgRg/gaQg+gYgzgXQgvgWg5gdQg4gdgugaQghgTgpgaQgngaghgYQgkgagpghQgqgighgdQgfgdgngmQglglgeghQgbgdgeglQgfglgXgfQgYgggcgpQgbgpgVgjQgXgmgTgiQgXgrgOgfQgOgfgIgZQgLgigCgZQgBgNAIgTIAQgOQAcAXAoA9QAuBGASATQCACHArArQBqBqBNA5QB4BZBaA2QCCBOBiAZQBIATBggPQBggPA8goQA7gnA1hVQAwhOAUhNQAXhWgBiIQAAhXgMiKQgIhlgXh0QgXh6gdhdQgVhAgfg8QglhHgngnQgXgZgtgMQgugNgfALQgmAOguA0QgmAsgiAnQgRARhaBoQhFBQgsAjQgsAjg6AfQg+AggzAMQguALg/gDQg8gCgxgOQgugNhHgnIhwhBIg5guIgjgfQgVgTgMgNIgggiQgSgVgLgPIgrg9QgXgjgQgbQgNgWgTgpIgehBIgcg/QgTgogNgWQgTghgUgbQgZgjgUgVQgWgWgcgVQgegWgagNQgUgKghgGQgZgGgfgDQgVgCgiABIg4ADIg8AEIg9AFIhAAGIhBAHIhFAHQgrAEgaAEIhXAKQg3AHgeANQgNAFgNAUQgHALgMAYIABAKIAEALIAAARIgCAHIgCAGIgIALIgLAGIgGADIgSACIgMgBIgIgEIgHgGIgCgHIgBgHIACgRIAGgQIAOggIAEgPIADgtIAAgMIgEgVIgJgeIgLgVIgSgYIgGgNIgDgOIAAgOIAFgOIAJgGIAUgGIAJgBIAIACIAHACIAOAIIARASIAFAGIADAIIACAIIgBANIgLAkIACANIAJAQQANAEAUgCIAigGQAMgCAWgHIAigLIAtgMIAsgMIAqgMIAqgOIA1gQIA2gSIBBgXIBBgYIBGgaQAsgRAagHQArgMAvgKQA0gLAngEQA1gGAxgDQA8gCApADQAyAFBpAVQBvAXAsAFQCSAQA3AFQB6AKBPgFQBqgGCsgdIEWgwQBJgNCcgfQCngiBBgLQA1gKBxgQQB6gSAsgHQAcgFBDgNIBegSIBFgJIBEgJIBNgJIBNgIIBOgHIBPgFIBIgEIBHgCIBGAAIBFABIBLADIBLAFIBJAFIBIAHIBCAHIBCAJIA9AJIA+AJIAjAGIAjAIIAzANQAgAJATAIQASAHAUALQAUALAPAMQARANAUAUQAUATAOARQAQAUAUAdQARAbAPAZQAQAcASAjIAeBCQAOAiARAtQAPAqAMAmQANAmAOAzIAXBaIAWBhQALA3AIArQAIAwAHAxQAIA5AEApQADAoACA1QACAxgBArQgBA7gDBCQgDBIgFA3QgFA4gHA0QgIA+gJAsQgOBGgPA6QgTBLgTAyQgTAvgaAzQgdA2gcAlQgeAnguAuQgrAqgqAhQgvAlhGAtQg8Alg/AkQgvAahDAfQg6Abg6AYQg+AZhGAZQhLAbg6ARQg6ARhGAQQhHAQg6AKQhFALhWAKQhVAJhHAEQg/AFhTAAIgrAAQg1AAgxgBg");
	this.shape_23.setTransform(-9.1,-1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2EABB8").s().p("AK5WaQhAgDhOgGQhPgGg/gIQgwgGg8gLQg6gLgwgLQg3gOhCgTQhCgUg0gSQgzgShAgZQg9gZgzgXQgvgVg5gdQg4gdgugaQgigTgpgbQgngZghgYQgkgagpghQgrgigggdQgggcgngmQglglgfghQgagcgfglQgfgkgYggQgYgfgcgpQgbgogWgjIgqhHQgYgrgOgeQgOgfgJgZQgLghgCgYQgBgNAHgSIAQgNQAcAXApA+QAuBEATAUQB/CFAtArQBrBqBOA4QB4BZBaA1QCEBOBiAZQBJASBfgOQBhgPA8gnQA7gnA1hUQAxhNAUhNQAXhXAAiHQAAhZgMiIQgJhkgXh1QgYh5gehdQgVhAggg8QglhGgognQgXgZgtgLQgvgMgfAMQglAOguA1IhIBVQgPARhaBrQhEBRgsAjQgtAlg7AeQg+AhgzANQgvALhAgDQg9gDgxgNQgvgOhIgoIhyhCIg6gwIgjggIghghIgggkQgSgVgLgQQgWgfgVggQgXglgPgcQgNgYgSgqIgchEIgbhCQgSgsgLgWQgUgmgRgdQgXgngTgXQgVgagagZQgdgbgZgQQgTgMgggLQgbgJgcgGQgWgEghgBIg2AAQgbABghADIg7AGIg/ALIg/AOQglAJgdAJQgoALgaALIhQAgQgxAWgaAVQgMAJgGAYIgIAoIAEAKIAGAJIADAJIACAPIAAAHIgEANIgHAKIgFAEIgFAEIgKAFIgKADIgJgBIgIgEIgEgFIgCgGIgEgSIAAgSIAEgkIgDgfIgHgeIgIgWIgPgZIgNgRIgIgHIgXgQIgJgLIgIgLIgDgOIABgOIAHgKIAKgJIAIgFIAIgEIAIgBIAPAAIAIACIAbAOIAFAHIAEAHIACANIgCAmIAGAMIAMAMQAMAAATgJIAegQQALgFAUgOIAfgUIApgWIApgWIAngVIAogUIAzgYIA0gXIBBgcIBCgaIBGgZQArgOAdgGQAqgJAygFQA1gGApAAQAxgBA2AEQA7AEAsAIQAsAIBsAhQBoAeAxAIQB0ATBPAJQB1AMBOgFQBogHCsghIETg3QBFgOCjgjQCfgkBHgNQA4gLBvgQICngaIBfgTIBggSIBFgJIBEgIIBOgJIBNgIIBPgGIBPgGIBIgDIBIgCIBFAAIBGACIBLADIBLAFIBIAFIBJAHIBCAIIBCAIIA9AJIA9AKIAkAGIAjAIIA0ANQAfAJATAIQASAHAUALQAUAMAPALQARAOAUATQAUATAOASQARAUATAdQARAbAPAZQAQAcASAkIAeBBQAOAiAQAtQAQArAMAlQAMAnAOAzQANAvAKArQALAtALA0QAMA3AHArIAPBhQAIA5AEApQADAoACA1QABAxgBArQAAA7gEBCQgDBIgFA3QgFA4gHAzQgIA/gJAsQgOBGgPA5QgUBLgTAyQgSAvgbAyQgdA2gcAlQgdAnguAtQgrAqgqAhQgvAkhGAtQg7AlhAAjQguAahDAeQg6Abg6AXQg9AZhGAZQhLAag6ARQg5ARhGAQQhHAQg6AJQhEALhXAJQhUAJhHAFQg/AEhSAAIgfAAQg9AAg2gBg");
	this.shape_24.setTransform(-8.6,-2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2EABB8").s().p("AKkWXQhBgChOgHQhPgGhAgIQgwgGg7gLQg7gLgwgMQg3gNhDgUQhAgTg2gTQgzgRhAgaQg9gYg0gXQgvgWg5gdQg5gdgugaQghgSgqgbQgngaghgXQgkgagqghQgqgighgcQgggdgnglIhEhFQgagcgfglQgfgkgYgfQgYgfgdgpQgcgngVgjQgYglgTghQgYgqgOgeQgOgfgJgXQgMghgCgYQgBgMAIgRIAQgMQAcAXAqA9QAuBEAUAUQB+CCAvAtQBsBpBNA4QB6BXBaA1QCEBOBiAYQBKASBggNQBhgPA9gnQA8gmA2hUQAxhNAVhNQAYhWAAiIQAAhbgLiFQgJhkgYh1QgZh5gehdQgWhAggg8QgmhGgngmQgZgYgtgLQgvgLgfANQglAPguA2IhHBXQgPAQhaBtQhDBSgsAlQgtAlg7AfQg+Aig1AMQgvAMhAgDQg+gCgygOQgwgOhJgpIh0hDIg7gxIgjghQgVgUgNgOQgRgSgPgTQgSgWgLgQQgWgggUghQgYgmgPgdQgMgZgSgsIgbhGIgahGQgQgugLgXIgihIQgWgrgSgaQgUgdgZgcQgcgggYgSQgTgQgggOQgbgMgcgIQgVgGghgDQgZgDgeAAQgagBggADQggACgaAFQgbAEghAJQghAJgbAJQggAMgdANQgkARgXAOQgtAdgZATQgpAegUAbQgJAMAAAZIACAoIAFAJIAIAIIAFAHIADAIIAEANIAAAGIAAAHIgCAGIgCAGIgHAKIgHAIIgIAFIgHACIgIgBIgFgEIgEgFIgHgQIgFgSIgEgaIgHgZIgFgOIgTglIgMgQIgcgZIgJgFIgZgIIgLgGIgJgJIgGgNIgCgNIAEgMIAOgTIAHgGIAHgEIAOgEIAIgBIAVADIAHADIAGAEIAFAGIAGAUIAEAdIAHAKIAOAIQALgEAQgNIAYgXIAagZIAZgaIAkgdIAkgdIAkgaIAkgZIAwgcQAcgQAVgLQAggQAfgNQAmgRAbgKIBIgXQArgNAegEQArgGA1gBQA1gCArADQAvAEA7AKQA5AKAuAMQAnALBvApQBkAmAzAKQBoAWBVAKQBxAPBNgGQBngHCsgnIEQg+QBAgOCogoQCcglBLgPQA6gMBtgRICogbIBggTIBhgSIBFgJIBGgIIBOgIIBOgIIBPgGIBPgFIBIgEIBIgBIBFAAIBGACIBLADIBLAFIBJAFIBIAHIBCAIIBCAJIA+AJIA9AKIAkAGQAVAEAOAEIAzAOQAgAJATAHQASAIAUALQAUAMAPALQARANAUAUQAUATAOASQARAUATAeQARAaAPAaQAQAbASAkIAeBCQAOAiAQAtQAQAqAMAmQAMAnAOAzQANAvAKArQALAtAKA0QAMA3AHArIAPBhQAIA5ADApQAEApABA0QACAxgBArQgBA7gEBCQgDBIgFA3QgFA4gHAzQgIA/gJArQgPBGgPA5QgTBLgTAyQgTAvgbAyQgdA1gcAlQgdAnguAtQgrAqgqAgQgvAkhGAsQg7Alg/AjQgvAZhCAeQg7Abg5AXQg9AZhGAYQhLAag6ARQg5AQhGAPQhHAQg6AJQhEALhXAJQhUAJhHAFQg/ADhSABIgaAAQg/AAg4gCg");
	this.shape_25.setTransform(-6.5,-3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2EABB8").s().p("AKNWWQhAgChPgGQhPgHhAgHQgwgGg8gLQg7gLgwgMQg3gNhEgUQhAgTg2gSQg0gShAgZQg9gZg0gXQgvgVg6gdQg4gcgvgaQgigTgpgaQgogaghgXQgjgagqghQgrghghgdQgggcgnglQglgkgfggQgbgcgfgkQgfgkgYgfQgYgfgdgoQgcgogWgiQgXglgTggQgZgqgOgeQgOgegIgXQgMghgCgXQgBgMAJgQIAQgLQAcAWAqA9QAvBEATAUQB/CAAwAuQBsBnBOA4QB6BWBbA1QCFBMBiAYQBKASBhgOQBigOA/goQA7gmA3hTQAyhOAVhNQAYhWABiIQAAhdgLiEQgJhjgZh2QgZh4gfheQgWg/ghg8QgmhFgngmQgagYgugKQgugLgfANQgmAQgtA4IhGBYQgOAPhaBxQhCBTgsAlQgtAmg7AgQg/Aig1ANQgwAKhBgCQg+AAgygOQgxgOhKgpIh2hEIg8gxIgjgiIgjgiIgggmQgSgWgMgRQgWghgUghQgYgngPgeQgMgagRgsIgbhIIgZhIQgQgwgKgYQgTgwgNgcQgVgtgRgcQgUghgYgeQgbgjgYgVQgTgRgfgRQgcgPgbgKQgWgIgggGQgbgEgcgCQgagCggABQggACgZAEQgaAFggAJQggAJgYAKQgeANgcAPQggASgVAQQgkAdgZAZQgiAjgQAcQgHANADAZIAHAnIAHAHIAIAHIAFAGIAIANIACAGIACAGIAAANIgDAMIgCAFIgFAJIgGAHIgHACIgHABIgFgDIgFgFIgJgOIgIgQIgLgjIgVgmIgPgVIgVgSIgOgKIgRgHIgYgDIgLgEIgKgHIgHgLIgEgMIADgNIAKgVIAGgIIAGgFIAGgEIAOgFIAHgBIANAAIAHABIAGADIAFAFIAFALIAKAjIAIAIIAOAFQAKgFANgQIAUgZIAVgdIAWgcIAfggIAhgfIAggcQATgQAOgKIAugeQAbgRAUgKQAfgQAfgOQAlgQAcgJQAngMAhgJQAsgLAfgCQArgDA3ACQA2ABAsAHQAuAGA8APQA3AOAxAQQAjAMBwAxQBhAqA0ANQBhAXBYALQBuAPBNgHQBlgICsgrIEOhEIDpg6QCZgnBOgRQA7gNBtgSICogcIBhgSQBAgNAhgFQAbgFArgFIBGgHIBPgJIBOgHIBPgGIBQgFIBIgDIBIgCIBGABIBFABIBLAEIBLAFIBJAFIBJAIIBCAIIBCAIIA+AKIA9AKIAkAGIAjAIIAzAOQAgAJATAIQASAHAUALQAUAMAPALQARAOAUAUQAUATAOASQARAUATAdQARAbAPAZQAQAcARAkQASAkAMAeQAPAiAQAtQAPArAMAmQAMAmAOAzQANAwAKAqIAWBiIASBhIAPBiQAIA5ADApQAEAoABA0QABAygBArQgBA7gDBCQgEBHgFA4QgFA4gHAzQgIA+gJAsQgPBFgPA6QgUBKgTAyQgSAugbAyQgdA2gcAlQgeAmguAtQgrApgqAhQguAkhHArQg7Alg/AiQgvAahCAeQg6Aag6AXQg9AYhGAZQhKAag7AQQg5AQhGAQQhGAQg6AJQhEALhXAJQhUAJhHAEQg/ADhSABIgaAAQg/AAg5gCg");
	this.shape_26.setTransform(-4.4,-3.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2EABB8").s().p("AKIWYQhBgChPgGQhOgGhBgHQgwgGg8gLQg7gKgwgMQg3gMhEgUQhBgTg2gSQg0gRhAgZQg+gYgzgXQgwgVg6gcQg4gdgvgZQgigTgpgaQgogZghgXQgkgagqggQgrghghgdQgggbgngmQgmgjgfggQgbgcgfgkIg3hCQgYgfgdgoQgcgngWgiQgYglgTggQgYgqgOgeQgPgegIgXQgMgggBgXQgBgMAIgQIARgLQAcAWArA9QAvBDAUAUQB/B/AwAtQBtBnBOA3QB7BWBbAzQCFBMBjAXQBLASBggPQBjgPBAgpQA6gmA3hVQAzhOAWhNQAYhXAAiIQABhfgMiDQgJhjgZh2QgZh4ghheQgWg/ghg8QgnhFgnglQgagYgugKQgvgJgfANQglAQgtA4QgkAwghAqQgNAPhaBzQhBBUgsAmQgtAmg7AhQg/Ajg1ALQgwANhCgCQg+gBgzgMQgxgNhLgpIh4hDIg8gxIgkgiQgWgUgNgOIghgmQgSgWgMgRQgXgigUghQgYgngPgeQgNgbgRgsIgbhIIgZhKQgQgygJgXIgghPQgUgvgRgdQgUgigWggQgbglgXgXQgTgTgegTQgcgRgbgMQgWgKgfgIQgcgGgbgEQgbgDgegBQghAAgZADQgaADgfAHQggAIgYAJQgdAMgcAOQggARgUAQQgiAbgaAaQghAigPAdQgHAMADAZIAIAmIAHAIIAIAGIAFAGIAFAHIAFAMIACAMIAAAGIgCAMIgCAGIgKAPIgHADIgGABIgGgDIgJgLIgJgPIgPgqIgOgaIgXggIgNgNIgVgOIgQgHIgYgCIgKgEIgKgGIgHgKIgEgMIACgOIAGgMIAKgRIAFgFIANgHIAHgDIAHgBIATABIAGADIAFAEIAFALIAKAiIAIAIIANAFQAKgFANgQIATgaIAVgcIAVgcQANgOASgSIAggeIAggbQATgPAOgKQAWgOAYgOQAagQAVgJQAegOAhgMQAlgOAbgIQAngKAjgHQAsgIAfgBQArgBA4AFQA1AFAtAJQAsAJA9ATQA0APA0AUQAeALByA1QBfAtA0ANQBdAWBZAMQBsANBMgHQBmgKCrguIENhJIDpg9QCXgpBQgSQA8gNBtgSICpgdIBhgTQBAgNAigFIBGgJIBHgIIBOgIIBPgHIBQgGIBPgFIBIgDIBJgCIBFABIBGACIBLADIBLAFIBJAGIBJAHIBCAIIBCAJIA+AKIA9AKIAkAGIAjAIIA0AOQAfAJATAIQASAIAUALQAVAMAOALQASAOAUATQATAUAPASQAQAUATAdQASAbAOAaQAQAcASAkQARAjANAeQAOAiAQAuIAbBQIAaBZQANAwAKArQALAtAKA0QAMA3AHArQAIAxAHAwQAHA5AEAqQADAoABA0IABBcQgCA7gDBCQgEBIgFA3QgFA4gHAzQgIA/gKArQgOBGgPA5QgUBKgTAyQgTAugbAyQgdA2gcAlQgdAmguAtQgrApgqAgQgvAkhGAsQg6AkhAAjQgvAZhCAeQg6Abg5AXQg9AYhGAYQhLAag5ARQg5AQhGAQQhHAPg6AKQhEALhWAJQhUAJhHAFQg/AEhTAAIgyABIhfgCg");
	this.shape_27.setTransform(-3.7,-3.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2EABB8").s().p("AKhWfQhBgBhOgFQhPgFhAgHQgxgGg8gJQg7gKgwgLQg3gMhEgTQhBgSg2gRQg0gRhAgYQg+gXg0gWQgwgVg6gcQg5gbgugZQgigSgqgaQgogYghgXQgkgZgrggQgqghghgcQghgbgnglQgmgkgfgfQgbgcgfgkQgggjgYgeQgZgfgcgoQgcgngXgiQgYglgTggQgYgqgPgeQgOgegIgXQgMghgBgXQgBgNAJgRIARgLQAdAWArA8QAwBEAUATQCBB/AvArQBtBmBPA2QB8BUBbAzQCFBJBjAWQBLAQBhgRQBjgRA9gqQA9goA2hWQAzhQAVhPQAXhXABiJQAAhhgMiDQgKhjgah2Qgah4ghheQgWg/gig8QgnhEgogmQgagXgugJQgvgKgeAOQglARgtA4QgjAxghAqQgOAQhXBzQhBBWgrAmQgsAng7AiQg/Akg1ANQgwANhBAAQg/AAgzgMQgxgKhNgoIh4hAIg+gwIglghQgWgUgNgOIgiglQgTgWgMgRQgYghgVggQgZgngPgeQgOgagSgsIgchIIgahJIgbhJIgghPQgVgwgQgdQgUgkgVggQgagngWgYQgSgUgegWQgagTgbgPQgVgMgfgLQgbgKgbgHQgbgHgfgFQgggFgZgBQgbgBghADQghACgaAGQggAGgdAJQgjALgYAMQgoAVgdATQgoAbgVAZQgKALgBAZIABAnIAFAJIAHAIIAHAOIADAOIAAANIgGAQIgEAFIgNANIgHACIgHgBIgFgEIgEgGIgHgPIgNhEIgQgpIgLgTIgRgTIgOgMIgIgEIgXgIIgKgGIgIgIIgGgMIgBgNIAFgNIAHgLIAOgOIANgGIAPgDIAHABIANACIAGADIAGAEIAEAFIADAMIAEAkIAGAKIANAIQALgDAPgNIAZgVIAagYIAagXIAkgZIAmgYIAkgVQAVgMAQgHIAxgUQAdgLAWgHQAggJAigIQAmgJAcgEQApgFAigDQAsgDAeACQAqADA3AJQAzAJAtAMQAqALA8AVQAtAPA4AWQAWAIB4A4QBcAqA1AMQBZAVBcAJQBrAKBMgJQBlgMCrgxQCNgpCAgkIDqhAQCVgpBSgTQA9gOBsgTIEMgxQA/gMAjgGIBHgJIBGgHIBPgIIBPgIIBQgGIBQgEIBIgDIBIgCIBGABIBGACIBLADIBLAFIBJAGIBJAIIBCAIIBCAJIA+AJIA9ALIAkAGIAjAIIA0AOQAfAJATAIQASAIAUALQAVAMAOALQASAOAUAUQATATAPASQAQAVATAdQASAbAOAZQAQAcASAkQARAkAMAeQAPAiAQAtQAPArAMAmIAaBZIAWBbQALAtALA0QALA3AHArQAIAxAHAxQAHA4ADAqQAEAoABA0QABAxgBArQgBA7gEBCQgEBIgFA3QgFA4gHAzQgIA/gJArQgPBGgPA5QgUBLgTAxQgSAvgbAyQgdA1gcAlQgdAnguAsQgqAqgqAgQgvAkhGAsQg6Alg/AiQgvAahBAeQg6Abg5AXQg9AZhGAZQhKAag6ARQg4AQhGARQhGAQg6AKQhEALhWAKQhTAKhIAFQg+AEhTACIhLABIhGgBg");
	this.shape_28.setTransform(-5.6,-3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2EABB8").s().p("AKvWpQhBAAhPgEQhPgEhAgGQgxgEg8gJQg7gJgxgKQg3gLhEgRQhBgRg3gRQg0gQhAgXQg/gWg0gVQgwgUg6gbQg6gagugYQgjgSgqgZQgpgYghgWQgkgZgrggQgrgggggbQghgbgoglQgmgjgfgfQgcgcgfgjQgfgkgZgeQgYgfgdgoQgcgngWgiQgZglgTggQgYgqgOgeQgOgfgJgYQgLghgBgXQAAgOAJgSIATgNQAdAWArA8QAxBEAUASQCDCAAuApQBuBkBQA1QB9BTBaAxQCGBIBjATQBMAPBigUQBjgVA8grQA+grA2hZQAyhSAWhRQAXhZAAiKQgBhjgMiDQgKhkgbh2Qgah4giheQgWhAgjg7QgohEgnglQgbgYgtgJQgwgJgdAOQgmASgrA5QgkAxggArQgOARhVB0QhABXgrAnQgrAog7AjQg+Amg1AOQgvAPhCABQg/ACgzgLQgygLhNgjIh7g9Ig/guIgmggIgkggIgkgkQgTgVgNgRQgYgggXggQgagmgRgdQgPgagSgrIgfhHQgJgVgUgzQgSgzgKgVIgihOQgUgwgRgdQgUgmgUgfQgZgpgVgZQgRgVgcgZQgZgWgZgSQgUgOgegQQgYgNgcgNQgagMgegLQgfgMgagHQgbgHghgHQgigGgbgDQgigDggAAQgmgBgbAEQgzAHgeAGQgxALgcAQQgNAHgKAXIgMAmIACAKIAEAKIABAIIABAJIgBAHIgDANIgDAGIgEAFIgEAEIgJAHIgTAGIgIgCIgHgEIgCgFIgCgHIgCgRIADgSIAIgkIABguIgGgmIgOgiIgMgQIgUgRIgHgLIgFgLIgBgOIADgNIAJgKIAKgHIAJgFIAJgDIAIAAIAOABIAIADIAGADIAMAIIAFAFIAEAGIADAIIgBANIgIAkIADAMIAJANQAMABATgGIAfgKQAKgDAXgKQAWgKAKgDIAsgMIAsgKIAogJQAZgGARgCIA2gGQAegDAYgBQAggCAjAAQAnAAAdABQArACAdADQAsAEAdAGQAmAHA1APIBbAcQAlAMA9AYIBhAlICLA8QBZAmA1AKQBWARBfAFQBpAFBOgLQBlgPCrgzQCNgsCBgmIDphCQCUgqBVgUQA8gPBtgTICpgfIBjgTIBjgSIBHgJIBHgIIBPgIIBQgHIBPgGIBQgFIBIgCIBJgCIBFABIBGACIBLADIBMAFIBJAHIBJAHIBCAIIBCAKIA+AJIA9AKIAkAHIAjAIIA0AOQAfAJAUAIQASAIATALQAVAMAPALQARAOAUAUQATATAPASQAQAVATAdQARAbAPAaQAQAcARAkQASAjAMAfQAOAiARAtQAPAqALAmIAaBaIAXBaQAKAtAKA1IATBhIAPBiQAHA5ADApQADAoACA1QABAxgBArQgCA7gDBCQgFBHgEA4QgGA4gGAzQgJA+gJAsQgPBGgPA5QgTBLgUAxQgSAvgbAyQgcA2gcAlQgdAnguAtQgqApgqAhQguAkhGAtQg6Alg/AjQguAahCAfQg5Abg5AYQg+AZhFAZQhJAbg6ASQg5ARhFARQhHARg5AKQhDAMhXALQhTALhHAGQg+AFhTADQhAADg6AAIgXgBg");
	this.shape_29.setTransform(-6.6,-2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2EABB8").s().p("AIWXdQhQgDhBgFQgxgDg8gIQg9gIgwgJQg4gKhFgQQhBgQg4gQQg0gPhBgWQg/gVg1gVQgxgTg6gaQg7gZgvgYQgjgRgqgYQgpgYghgWQglgYgrgfQgrgggigbQgggbgogkQgmgigfggQgcgbgfgjQgggkgYgeQgYgegdgoQgcgngVgjQgZgmgSgfQgZgqgNgfQgNgegIgZQgLgiAAgXQAAgPALgTQAKgOALABQAeAVArA7QAyBEATASQCHCAArAnQBvBjBPA0QB+BRBbAwQCIBFBiARQBOANBjgXQBkgXA+guQA+guA4hbQAzhVAWhTQAXhaAAiMQAAhlgNiEQgKhkgbh3Qgbh3gihfQgXg/gjg8QgohEgoglQgbgXgtgJQgwgIgeAOQglASgrA6IhCBcQgPAThTB1Qg/BYgqAoQgrApg6AjQg+Ang0ASQgwAQhCADQhAAEg0gJQgygJhOgjIh9g3IhBgsIgngeQgYgTgOgNIglgiQgUgUgOgQIgxg+QgdglgRgcQgQgagVgqIgihFIgghHIgfhHIglhOQgWgugRgeQgVgngTgfQgZgpgUgaQgQgWgagcQgXgXgYgWQgRgQgdgWIgwgkIgygkIg0giIg3ghQgggSgZgNIg+gdQglgQgagJIhSgZQgygOghAAQgOABgTAPIgcAcIgDAKIAAAMIgCAJIgEAIIgHALIgKAJIgMADIgGABIgHAAIgKgCIgKgDIgGgGIgFgIIAAgGIACgHIADgJIAIgPIAdgkIAVgpIAJgaIADgVIABgeIgDgWIgKgbIgBgOIAAgNIAFgOIAJgLIALgEIANgBIAJABIAJACIAOAHIAGAGIAFAGIALAUIACAIIABAIIgBAIIgLATIgSAXIgCANIADARQAKAHAUAFIAgAGIAjAEIAjADIAtAIIAsAJIAqAIIApAJIA1ANIA0AOIBAASIBAASIBDATQAqAMAZAJQAeALA3AVIBTAiIBeAlIBdAjICKA1QBXAgA2AHQBUAMBjgBQBngBBPgOQBkgSCtg2QCOguCBgnIDqhFQCSgrBXgWQA9gPBsgUICrgfIBjgTQA/gNAkgGQAbgEAsgFIBIgIIBPgIIBPgHIBQgGIBQgEIBJgDIBIgBIBGAAIBGACIBLAEIBMAFIBJAGIBJAIIBCAIIBCAJIA+AKIA+AKIAjAHIAkAIIAzAOQAfAKAUAIQASAHATAMQAVALAPAMQARANAUAUQATAUAPASQAQAUATAeQASAaAOAaQAQAcARAkIAeBCQAOAiAQAtIAbBRIAaBZIAWBbQALAtAKA0QALA3AHArQAIAxAHAxQAHA5ADApQADAoABA0QACAxgBAsQgCA4gEBFQgEBHgFA4QgFA4gHAzQgIA+gKAsQgPBGgPA5QgTBLgTAyQgTAvgaAyQgdA2gcAlQgdAnguAuQgqAqgqAhQguAlhGAtQg6Alg/AkQgvAahBAgQg6Abg5AZQg9AahFAZQhKAcg6ATQg5ARhFASQhHASg5ALQhEANhXAMQhTAMhIAHQg/AGhTAEQhNADhFABIgWAAQg5AAhBgCg");
	this.shape_30.setTransform(-6.3,-5.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2EABB8").s().p("AHeZKQhRgChBgEQgygDg9gHQg9gHgygJQg4gKhEgPQhEgQg5gPQg0gOhCgWQhAgUg2gUQgxgTg7gZQg8gZgvgXQgjgRgrgYQgpgXgigVQglgYgrgfQgsgfghgbQghgagogkQgmgjgfgfQgbgbgfgjQgggjgXgdQgYgfgcgoQgcgmgVgiQgYgngRgeQgYgqgMgeQgNgfgHgZQgJgiABgXQABgQAMgSQANgUAKAHQAfAUArA6QAyBFASARQCKCAApAkQBvBiBPAyQB/BRBcAuQCIBEBjAPQBQAMBmgZQBmgZBBgwQA/gvA5hdQA2hXAXhUQAZhcAAiNQABhogMiEQgKhjgch5Qgbh2gjhgQgXg+gjg7QgphEgoglQgbgXgugIQgvgJgeAPQglASgrA6IhBBeQgQAUhQB1Qg+BZgqAnQgrAqg6AnQg9Apg1ASQgwAShDAFQhAAFg1gIQgygHhQghIh/g1IhDgpIgpgdIgogcIgmghQgWgUgOgQQgcgegZgeQgegkgTgbQgRgZgXgpIgmhEIgjhGIgkhGIgphNIgrhMIgqhHQgagrgTgbQgPgWgagfIgsg0IgpgtIgpgtIgqgwIgpgxIgqgzIgrgzIgug2QgcghgTgUIg7hAQglgogcgRQgMgHgXADQgMABgZAHIgIAIIgFALIgGAGIgHAGIgMAFIgMACIgGgCIgMgFIgFgEIgIgJIgHgJIgCgJIAAgKIADgGIAFgFIAOgLIAxgSIAZgPIAYgUIAQgSIAVgiIAJgWIAGgeIAGgOIAIgMIAKgJIANgGIALADIASAMIAGAGIADAHIADAIIADAQIAAAIIgEAZIgDAIIgFAHIgSAMIgaALIgIALIgGARQAEAMAOAQIAZAXQAJAIASAOIAcAVIAjAcIAiAdIAiAaIAhAZIAqAgIAqAgIA1AlQAfAVAXANQAXAOAkATIA7AfIBNAoQAvAYAfANQArATAwASQA0AUAoAMICMAsQBXAZA3AEQBTAGBngHQBmgHBSgRQBkgVCvg5IEPhZIDrhIQCRgsBZgXQA+gPBsgUICrggIBkgUQA+gNAmgGQAbgEAsgFIBIgIIBPgIIBQgHIBQgGIBQgFIBJgDIBIgBIBGABIBGACIBMAEIBLAFIBJAGIBJAIIBDAIIBCAKIA+AJIA9ALIAkAHQAVAEAOAEIA0AOQAfAJAUAIQASAIATALQAVAMAPALQARAOAUAUQATATAPASQAQAVATAdQASAbAOAZQAQAdARAkQASAjAMAeQAOAjAQAtQAPAqAMAmQAMAnANAzQANAwAKAqQAKAtALA1QALA3AHArQAIAwAGAxQAHA5AEApQADApABA0QABAvgBArQgCA7gEBFQgEBHgFA3QgGA4gHA0QgIA+gJAsQgPBGgQA5QgTBLgUAyQgSAvgbAzQgdA2gcAlQgeAoguAtQgqArgrAhQguAlhGAtQg7Amg/AkQgvAbhCAgQg6Acg6AYQg9AbhFAaQhLAcg6ATQg5AShHASQhHATg6ALQhEAOhYAMQhUANhIAHQhAAHhUAFQhOAEhFABIg8ABIhXgCg");
	this.shape_31.setTransform(-2.7,-14.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2EABB8").s().p("AFgZ0QhSgChCgFQgzgDg9gHQg/gHgvgJQg6gJhGgQQhGgPg5gQQg1gOhDgVQhAgVg2gUQgygSg8gZQg8gZgwgXQgjgRgrgXQgqgXgigWQglgXgrgfQgsgfghgaQghgagngjQgmgjgfgeQgbgbgfgiQgfgigYgeQgXgegcgmQgagngVghQgYgmgQgdQgXgpgMgeQgLgdgGgZQgJghADgWQACgQAOgSQAPgTAKAHQAfATArA6QAyBDASARQCLCAAnAhQBvBgBPAyQCABPBcAtQCJBDBkAPQBRAMBpgaQBngZBEgwQBDgvA6hdQA4hXAYhVQAbhcACiNQAChqgMiDQgJhigdh6Qgbh1gihgQgWg/gkg7QgphEgrgkQgagXgugIQgwgJgeAPQglATgqA7IhABeQgQAUhPB2Qg9BZgqApQgrArg6AoQg9Apg1AUQgxAShDAHQhAAGg2gHQgzgGhSgfIiBgyIhFgoIgqgbIgqgdIgnggQgXgTgPgNIg4g7QgggjgUgbQgTgYgagpIgphDIgohFIgohGIguhPIgvhNIgthLIguhJIgog7Igog6Igkg0QgVghgMgUIgeg6Igag7IgYg+IgVhAIgThEIgShFIgThYQgMg4gOgcQgGgMgTgLQgMgGgVgHIgKAEIgKAGIgPAEIgGgBIgMgDIgFgEIgEgFIgGgLIgDgTIAAgNIADgJIAFgJIAFgDIAHgDIAIgBIAQABIAnAKIANABIAcgCIAZgHIALgEIAkgTIATgPIAVgYIAMgIIANgHIAOgCIAMACIAHAIIAEAKIADARIgBAIIgJAXIgVAbIgHAGIgHADIgNACIgIAAIgagDIgMAGIgOAMQgCANADAVIAHAiQACAMAIAVIANAgIAPAqIAQApIARAlIASAkIAYAtQAPAcALAQIAkAxQAVAcASASQATAUAcAXQAaAWAYARQAlAaAhAVQArAaAfAPQApATAzATQAzATArALQBqAbAmAJQBZATA6ABQBTACBrgOQBkgMBXgVQBjgXCxg8IERhdIDshKQCSgsBZgYQA+gQBtgVICrghIBkgUQA/gNAmgGQAbgEAtgFIBIgIIBPgIIBRgHIBQgGIBQgFIBJgDIBIgBIBGABIBGACIBMAEIBLAFIBKAGIBJAIIBCAIIBCAKIA+AKIA+AKIAkAHQAVAEAOAEIA0AOQAfAKAUAIQASAHAUAMQAUAMAPALQARAOAUAUQAUATAOASQARAUATAeQASAbAOAZQAQAcARAkQARAkANAeQAOAiAQAuQAPAqAMAmQAMAnANAzIAXBaIAUBiQALA3AHArQAIAxAGAwQAIA5ADAqQADAoABA0QABAvgBArQgCA7gEBFQgEBHgGA4QgFA3gHA0QgJA+gJAsQgPBGgQA5QgUBLgUAyQgSAvgcAzQgdA2gdAlQgdAngvAuQgrAqgrAiQguAkhHAuQg7AlhAAlQgvAahDAgQg7Acg6AYQg+AbhGAaQhMAcg6ATQg6AShHASQhIASg7AMQhFANhYANQhVANhJAHQhAAHhVAEQhPAEhHABIg4AAIhcAAg");
	this.shape_32.setTransform(7.5,-19.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2EABB8").s().p("ADPZsQhSgChDgFQgzgEg8gHQg/gIgygJQg5gKhHgQQhGgQg5gQQg2gOhDgWQhBgVg2gUQgygSg9gaQg8gZgwgXQgjgRgrgXQgqgXgigWQglgXgrgeQgsgfghgaQghgagngiQgmgigfgeQgbgageghQgfgigXgdQgYgdgbglQgagmgUggIgohBQgWgogLgcQgMgdgFgXQgIggAEgVQACgPAPgRQAQgRALAHQAeASArA5QAyBBASARQCNB+AlAgQBvBeBPAwQCABPBdAtQCJBCBjAPQBTAMBpgYQBqgYBFgvQBDguA+hbQA7hXAZhUQAchbADiMQADhqgMiCQgIhhgdh7Qgch0gjhgQgXg/glg7QgphDgrglQgbgWgugIQgvgJgeAQQglASgpA7IhABfQgQAVhOB2Qg9BZgpAqQgqArg7AoQg9Aqg1AVQgxAShDAIQhBAGg2gGQg0gFhTgdIiDgwIhGgnIgsgbIgqgcIgpgfQgYgTgQgPQgegagcgdQgigigVgbQgUgYgcgoIgshDIgshGIgrhHIgzhRIgyhRIgvhQIguhPIgmhAQgXgpgNgYIgcg6QgQgkgJgYQgJgcgHgjQgIgigDgdQgEgcAAglQgBgjACgfQACgeAGgnQAFgkAGghQAEgSAUhFQARg5ACgeQABgNgJgRQgHgOgLgOIgJgBIgLABIgHgBIgHgDIgEgDIgEgEIgDgFIgCgFIAAgHIABgNIACgHIAMgXIAIgHIAIgFIAGgBIAHABIANAHIAFAEIASAWIAGAGIAVANIAYAIIAVAEIAmgBIAYgEIAegKIAOgCIAOABIAMAEIAJAHIAAAKIgCALIgDAHIgEAHIgMAMIgOAKIgfANIgIACIgIAAIgLgEIgGgEIgTgNIgNgBIgRAFQgJAKgIAUIgMAhQgEAMgDAVIgFAiIgHArIgEAqIgBAnQAAAVABASIAEAvQAEAdAFASQAHAcAKAaQAMAfAMAVQANAXAWAaQAVAaAUASQAeAcAiAaQAnAdAfAQQApAWA0AUQA1AUAsALQBXAVA/ALQBaAQA9gCQBSgCBwgSQBigRBdgYQBigaCzg+QDphSAqgNIDthMQCSgtBdgZQA+gQBrgWICsghIBkgUIBlgTQAcgFAsgFIBJgIIBQgIIBQgHIBRgGIBQgFIBJgCIBJgCIBGABIBGACIBLAEIBMAFIBJAHIBKAIIBCAIIBCAKIA+AJIA+ALIAkAHIAjAIIA0APQAgAJATAIQASAIAUALQAVAMAOALQASAOAUAUQAUATAOASQARAVATAdQASAbAOAaQAQAcARAkQASAkAMAeQAOAiAQAuIAbBQIAZBaIAXBaQAKAtAKA1QALA3AHArQAIAxAGAwQAIA5ADAqQADAoABAyQAAAxgBArQgBA7gEBFQgFBHgFA3QgGA4gHAzQgJA/gJArQgQBGgQA6QgUBLgUAxQgTAvgcAzQgdA1gdAlQgeAngvAuQgrApgrAiQgwAkhHAtQg7AlhBAkQgvAahEAfQg6Acg7AYQg/AahGAZQhMAcg7ASQg6AShIARQhIASg7ALQhGANhZAMQhWAMhJAHQhBAGhVAEQhPADhHABIgXABQg6AAhFgDg");
	this.shape_33.setTransform(20.3,-20.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2EABB8").s().p("AC1ZQQhSgDhDgFQgxgFg+gIQg/gIgygKQg6gLhGgQQhGgQg6gQQg1gPhDgXQhBgUg2gVQgygTg8gZQg8gZgwgXQgkgSgqgXQgqgXgigWQglgXgrgeQgrgegigaQgggZgogiQgmghgegeQgbgZgeghQgfghgYgcQgXgcgbglQgagkgUggQgYgkgQgbQgWgmgLgcQgMgbgFgWQgIgfAEgUQACgOAQgPQAQgQALAHQAeASArA3QAyA/ATARQCNB8AkAfQBvBcBOAvQCCBPBbAsQCKBCBiAPQBTANBqgWQBpgXBGgtQBEgsA+haQA8hVAZhTQAchaAEiLQADhqgLh/QgJhigdh6QgbhzglhhQgXg+gkg7QgqhEgrgkQgbgWgugIQgvgJgeAQQglATgpA7Ig/BfQgQAVhOB3Qg7BagpApQgqAsg6AoQg+Aqg1AVQgwAShEAIQhBAHg2gGQg0gFhUgdIiEguIhHglIgsgbQgbgQgQgLIgrgfQgYgTgQgOQgggbgcgcQgjgigWgaQgVgYgdgoIgvhDQgTgbgcgsIgthIIg1hUIg0hWQgVgkgagwIgshWIgihEQgUgqgLgdQgMgggJgfQgLglgEgaQgFgcgBgjQgBgjADgcQADgcAJgjQAIggAKgcQAKgcARghQAQggARgbQAMgTAqgzQAmguAOgZQAGgLABgSQABgQgDgPIgGgFIgKgCIgFgEIgEgFIgCgFIgBgEIAAgGIABgFIACgGIAIgLIAFgFIAVgQIAKgEIAKAAIAFABIAFADIAEAFIADAGIAEAMIACATIACAHIAFAKIAGAJIAQARIAQAKIAhANIAWAFIAfAEIANAEIAMAHIAHAHIAEAKIgEAIIgOANIgGAEIgIADIgYAFIghgBIgIgBIgHgDIgLgNIgJgSIgLgEIgRgDQgMAHgQAOQgLAJgOAPQgJAKgLAQIgTAdIgVAjIgUAkIgOAiIgMAjIgKAsQgFAagBARQAAAaADAbQAEAeAHAVQAIAZAQAcQAQAcARATQAaAfAgAdQAkAgAeATQAoAYA1AWQA2AXAsALQBRAUBJAKQBcAOBAgDQBSgDBzgXQBdgSBlgcQBhgbC1hBQDhhRA0gRQCcgzBSgZQCQgtBggaQA+gQBrgWICsghIBlgWQA+gMAngHQAcgEAtgFIBIgIIBRgIIBRgHIBQgGIBRgEIBJgEIBIgBIBHABIBGACIBLAEIBMAFIBJAHIBKAHIBCAJIBCAKIA/AJIA9ALIAkAHIAkAIIA0APQAfAKATAIQATAHAUAMQAUAMAPALQASAOAUAUQATAUAPARQARAVATAeQASAaAOAaQAQAcASAlQARAjAMAeQAPAjAQAtQAPArALAmQAMAmAOA0QAMAvAKArQAKAtAKA1QALA2AHAsIAOBhQAHA5ADApQADAoABA1QABAvgBArQgCA7gEBEQgEBIgGA3QgFA4gIAzQgJA+gJAsQgQBFgQA6QgUBKgUAyQgTAugcAyQgeA2gdAkQgeAngvAtQgsApgrAhQgvAkhIAsQg8AkhAAkQgwAZhDAfQg7Abg7AYQg/AZhGAZQhNAbg7ARQg6ARhIASQhIAQg7ALQhGAMhZAMQhWAKhJAHQhBAGhVADQhQADhGAAQhEgBhSgDg");
	this.shape_34.setTransform(22.4,-19.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2EABB8").s().p("AFCYnQhEAAhRgEQhSgEhDgGQgxgEg+gJQg+gIgzgKQg5gLhGgRQhGgQg5gRQg1gPhDgWQhAgWg3gUQgxgTg8gaQg8gZgwgXQgjgRgrgYQgpgXgigVQglgXgrgeQgrgegigaQgggZgngiQgmgggfgdQgbgageggQgfghgXgbQgYgcgbgkQgagjgVgfQgYgkgPgaQgXglgMgbQgLgbgGgVQgIgeAEgTQACgOAQgOQAQgPAKAGQAeASAsA2QAzA/ASAQICyCZQBvBbBOAvQCCBOBaAsQCJBBBiAQQBTANBpgVQBpgVBGgtQBDgrA+hYQA8hUAZhSQAchZAEiKQADhpgLh/QgJhhgdh6QgchzgkhgQgYg+gkg7QgqhEgrgkQgbgXgugHQgwgIgeAPQgkATgpA7Ig/BgQgQAVhNB2Qg7BagoAqQgqArg6ApQg9Aqg1AUQgwAThEAIQhBAHg2gFQg0gFhUgcIiFguIhHglIgtgaIgsgbIgqgeQgZgSgQgPQgggagdgcQgkgigXgaQgVgYgegoIgwhDQgUgdgcgrIgvhJIg2hXQggg0gUgkIgthYQgYgwgTgqQgQglgOgjQgRgrgJgfQgJgfgGghQgIglgBgcQgBgcADgiQAEgiAGgbQAHgZANgfQANgfAPgXQAPgZAWgbQAXgcAVgUQASgRAzgkQAxgiATgTQAJgIAIgQQAGgOADgPIgEgFIgIgFIgDgFIgCgFIgBgFIABgEIACgFIADgFIAEgFIAMgIIASgIIANgEIAKAAIAJABIAFADIADAEIACAGIABAFIgDASIgDAMIgBAHIADATIAJATIAGAHIALAMIAdAVIAlARIALAHIAJAJIAEAKIABAJIgHAHIgRAGIgQACIgYgCIgXgHIgOgGIgGgFIgEgIIgCgFIgCgTIgJgHIgOgGQgOACgTAJIgeAQQgMAHgPAMIgZAWIgeAbQgRARgKAMQgLAMgKAQQgMAQgHANIgSAmQgKAXgEAQQgFAYgBAZQgBAeAEAUQAFAZAMAcQAMAdAOAUQAYAhAdAfQAhAiAdATQApAcAzAYQA2AZAtALQBOAUBOALQBcANBCgEQBSgEB1gaQBYgTBrgfQBhgbC2hDQDdhQA5gTIDvhNQCPgtBhgaQA/gRBrgVICsgiIBlgVQA/gNAngGIBJgKIBIgIIBRgIIBRgHIBRgGIBQgEIBJgDIBJgBIBGAAIBHADIBLADIBMAGIBJAGIBJAIIBDAJIBCAJIA/AKIA+ALIAjAHIAkAIIA0APQAfAJAUAIQASAIAUALQAVAMAOAMQASAOAUAUQAUATAOASQARAVATAeQASAbAPAZQAQAdARAkIAeBCQAOAiAQAuQAPAqAMAmQAMAnANAzQANAwAJArQALAtAKA0IASBiIAOBiQAHA5ADApQADAoABA0QABAwgCArQgBA7gFBEQgEBHgGA4QgFA3gIAzQgJA/gJArQgQBFgQA6QgVBKgUAxQgTAvgcAyQgdA1gdAkQgfAngvAsQgrApgrAgQgwAkhHArQg8AkhBAjQgvAahEAeQg6Aag7AYQg/AYhGAZQhNAag7ARQg6ARhHARQhIAQg7AKQhGAMhZALQhVAKhKAGQhAAFhVADQhAABg6AAIgcAAg");
	this.shape_35.setTransform(23.4,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

	// Layer 9
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E08DBF").s().p("AiZCOQkRg4CFh+QCFiAD0AaQHGAxlnCsQiLBEh7AAQgjAAgjgFg");
	this.shape_36.setTransform(8.5,89.4,1.15,1.422,-29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).wait(35));

	// Layer 4
	this.instance_2 = new lib.bilbomouthint("synched",0);
	this.instance_2.setTransform(-0.1,10.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-4,y:15.8},16,cjs.Ease.get(-0.99)).to({x:0,y:10.8},18,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.1,-170.5,2452135.7,311.1);


(lib.biblobodywalkcycle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bilbo-ear
	this.instance = new lib.bilboear("synched",0);
	this.instance.setTransform(4.2,-58.5,1,1,0,0,0,-39.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-39.9,scaleX:1.01,scaleY:1,skewX:-1.9,skewY:-8.2,x:4.1,y:-44.4},4).to({regX:-39.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.2,y:-60.4},5).to({scaleX:1.01,skewY:-8.9,y:-44.5},4).to({scaleX:1,skewY:0,y:-59.4},4).to({scaleX:1.01,scaleY:1,skewX:-3.5,skewY:-7.3,y:-44.5},4).to({scaleX:1,scaleY:1,skewX:0,skewY:0,y:-60.4},5).to({regY:0.1,scaleX:1.01,scaleY:0.99,skewX:-3.5,skewY:-8.9,y:-44.4},4).to({regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,y:-58.4},4).wait(1));

	// bilbo-hat
	this.instance_1 = new lib.bilbohat("synched",0);
	this.instance_1.setTransform(-63.7,-103.2,1.436,1.436,0,0,0,4.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:-102.5},1).to({y:-99.2},1).to({y:-95.8},1).to({y:-89.1},1).to({y:-112},5,cjs.Ease.get(-0.99)).to({y:-114.4},1,cjs.Ease.get(1)).to({y:-115.5},1).to({y:-104.2},1).to({y:-97.1},1).to({regX:4.1,regY:12.6,rotation:3.3,x:-63.7,y:-99.1},1,cjs.Ease.get(-0.99)).to({regX:4.2,regY:12.5,rotation:5.8,x:-63.6,y:-102.2},1).to({scaleX:1.44,scaleY:1.44,rotation:7.5,y:-105.9},1).to({rotation:7.2,y:-107},1).to({y:-105},1).to({y:-102},1).to({y:-97.5},1).to({rotation:4.9,y:-89},1).to({scaleX:1.44,scaleY:1.44,rotation:0,y:-104.1},5,cjs.Ease.get(-0.99)).to({y:-108.4},1,cjs.Ease.get(1)).to({y:-110.5},1).to({y:-103.2},1).to({y:-93.6},1).to({y:-94.2},1,cjs.Ease.get(-0.99)).to({y:-97.2},1).to({y:-101.9},1).to({y:-102.7},1).wait(1));

	// bilbo-body
	this.instance_2 = new lib.bilbobody("synched",0);
	this.instance_2.setTransform(58.4,159.4,1,1,0,0,0,102,145);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:174.9,startPosition:4},4).to({y:156.1,startPosition:9},5,cjs.Ease.get(-0.99)).to({y:169.4,startPosition:13},4).to({y:159.4,startPosition:17},4).to({y:176.5,startPosition:21},4).to({y:159.4,startPosition:26},5,cjs.Ease.get(-0.99)).to({y:169.4,startPosition:30},4).to({y:159.4,startPosition:0},4).wait(1));

	// bilbo-tail
	this.instance_3 = new lib.bilbotail("synched",0);
	this.instance_3.setTransform(191.8,-91.9,1.436,1.436,0,0,0,-34,-15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-81.8,startPosition:4},4).to({y:-91.8,startPosition:9},5).to({y:-81.8,startPosition:13},4).to({y:-91.8,startPosition:17},4).to({y:-81.8,startPosition:21},4).to({y:-91.8,startPosition:26},5).to({y:-81.8,startPosition:30},4).to({y:-91.8,mode:"single",startPosition:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7909483.2,-162.1,10252176.3,222.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;