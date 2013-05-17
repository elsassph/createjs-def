(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Sea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("bubbles",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// text
	this.text = new cjs.Text("Under The Sea!", "bold 48px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.lineWidth = 412;
	this.text.setTransform(285.4,18.8,1,1,0,30,0);
	this.text.shadow = new cjs.Shadow("rgba(18,69,98,1)",3,3,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(1));

	// foreground
	this.seaweed = new lib.Seaweed();
	this.seaweed.setTransform(361.8,358.8,0.7,0.7,-19.9);

	this.instance = new lib.Star();
	this.instance.setTransform(438.4,278,0.75,0.75,-19.9);
	this.instance.alpha = 0.602;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.Star();
	this.instance_1.setTransform(438.4,277,0.378,0.378,45);
	this.instance_1.alpha = 0.391;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Star();
	this.instance_2.setTransform(439.4,279,0.54,0.54,30);
	this.instance_2.alpha = 0.391;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.Star();
	this.instance_3.setTransform(438.4,278,0.6,0.6);
	this.instance_3.alpha = 0.602;
	this.instance_3.compositeOperation = "lighter";

	this.octopus = new lib.Octopus();
	this.octopus.setTransform(385.8,170.5,0.253,0.253,70);
	this.octopus.alpha = 0.449;

	this.octopus_1 = new lib.Octopus();
	this.octopus_1.setTransform(432.8,103,0.178,0.178,70);
	this.octopus_1.alpha = 0.289;

	this.octopus_2 = new lib.Octopus();
	this.octopus_2.setTransform(481.8,104,0.22,0.22,60);
	this.octopus_2.alpha = 0.359;

	this.seaweed_1 = new lib.Seaweed();
	this.seaweed_1.setTransform(451.8,366.8);

	this.seaweed_2 = new lib.Seaweed();
	this.seaweed_2.setTransform(507.8,385.8,1.25,1.25,-11.9);

	this.seaweed_3 = new lib.Seaweed();
	this.seaweed_3.setTransform(274.7,389.8,1.322,1.322,7);

	this.seaweed_4 = new lib.Seaweed();
	this.seaweed_4.setTransform(72.7,360.8,1.013,1.013,-14.9);

	this.seaweed_5 = new lib.Seaweed();
	this.seaweed_5.setTransform(171.7,382.8);

	this.seaweed_6 = new lib.Seaweed();
	this.seaweed_6.setTransform(217.8,353.8,0.7,0.7,-19.9);

	this.octopus_3 = new lib.Octopus();
	this.octopus_3.setTransform(134.8,193.9,1,1,-4.9);
	this.octopus_3.shadow = new cjs.Shadow("rgba(0,204,255,1)",0,0,32);

	this.seaweed_7 = new lib.Seaweed();
	this.seaweed_7.setTransform(263.7,351.8,0.9,0.9,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.seaweed_7},{t:this.octopus_3},{t:this.seaweed_6},{t:this.seaweed_5},{t:this.seaweed_4},{t:this.seaweed_3},{t:this.seaweed_2},{t:this.seaweed_1},{t:this.octopus_2},{t:this.octopus_1},{t:this.octopus},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.seaweed}]}).wait(1));

	// background
	this.octopus_4 = new lib.Octopus();
	this.octopus_4.setTransform(499.5,282.8,0.54,0.54,10);
	this.octopus_4.alpha = 0.898;

	this.instance_4 = new lib.Background();
	this.instance_4.setTransform(275.2,200,1,1,0,0,0,275.2,200);
	this.instance_4.cache(-1,-1,554,404);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.octopus_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,569.9,400);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,160);


(lib.Star = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0B3579","#04A18A"],[0,1],-69.7,0,69.9,0).s().p("AhvB2IpKFPIH0nFIn0nEIJKFPIEUpoIiKKWIKfBHIqfBJICKKUg");
	this.shape.setTransform(6.9,3.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-69.9,139.7,146.8);


(lib.Seaweed = function() {
	this.initialize();

	// leaf1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiWHMQgHgPAAgfQAAiCAzhpQAZgwAJgXQAQglAAghIgJiMQAAgVAWgmQAGgLAqhAQBIhqAAg/QAAgSgNgRQgOgQAAgCQAAgIAEgDQAFgDAPAAQAeAAAXAaQAfAiAAA/QAAAbgQAdQgRAegnAnQhEBEgJBRQgFAtAJBEQAAArgOAlQgFALghA5Qg9BqgUCbQgCgBgDgMQgCgLAAgIQAAh8BBheIAthBQASgkAAgmQgIh1AAgKQAAhPBIhKQApgoAKgQQAYggAAglQAAgugSgcQgQgbgdgGIgOgCQAeAYAAAhQAAAzhKBrQhHBrAAAlQAAAKAJBvQAAApgQAtQgFAOgfBFQg0B1AABxQAAAKADAQQACARAEAHQgIgGgEgHg");
	this.shape.setTransform(11.9,-37,0.696,0.696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkuISQgDgUAAgLQAAhNA5g2QAhgfBdgyQBZgwAigmQA5g7AAhXQgIhnAEhCQAJh5BFgpICOhTQA0gkAAgyQgBgPgSghQgXgngZgPIADAKQANAcgkAwQggAshRBGQgnAhgMAPQgZAdgKAnQgbBkgIA9QgFAhAAAkQgHA6g2A+QgXAahbBSQhNBFghAxQgyBIAABQIAGATQAEAUADAFIgCgCIgLgbIgGgUQAAhfAyhOQAkg1BMhAQBfhPAQgSQAzg3AAg3QAAkACChrQAigbA5goQApgkAAgzIgQgnIAEgEQADgBAGAAQAkAAAdAcQAjAjAAA/QAAA2grAfQgMAJhTAlQhAAdgeAnQgrA3AABgQAAAIAGAVQAEAkAABSQABBag7A8QgeAihgA4QhcA1gmAsQg6BFAABoQgFgMgCgZg");
	this.shape_1.setTransform(26.7,-37.8,0.696,0.696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21B573").s().p("Ak/H+QgYgrAAgSQAAilA1hdQAbgqAKgWQAQgkAAgtQABgrgKghQgJgcAAgGQAAgtBLh1QBKh1AAgsQgagqgCgRIABgEQAAgCAHAAQAeAAAYAgQAbAkAAA1QAAAigXAiQgLAPgpArQhKBQAABOQgBAKALBbQgBAagbA5QgaA3geApQgMARgSBYQgOBCgFAqIAAAGQAZhLAjgvQAiguBdhTQAZgWAfgWQAcgRAIgKQAagdAYh7QAMhlAJgrQAPhIA3hJQAQgXBhhYQA8g3AAg1QAAgOAJgHQAlAkAIANQAOAVAAAlQAAA2gmAdQg2AegfAUIguAZQgLAGgeAiQg+BHAGB9QAFBYgBAMQgBA6gUAtQgjBThbAqIhGAcQgmAPgSARQhCA/gTA9QgNAmAGAvIAAADQAAACgHAAQgGAAgXgqg");
	this.shape_2.setTransform(25.4,-38,0.696,0.696);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-77.4,49.7,79);


(lib.Octopus = function() {
	this.initialize();

	// octoAnim
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA4QgIgYAIgiQAHggAOgYQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgMAbgCAjIABAZQAAAPgCAJQgBAEgEAAQgEAAgBgEg");
	this.shape.setTransform(-7.7,34.1,0.701,0.701);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRFRQgUAIgogUQgqgWgMgyQgDgKACgcQACghALAGQgDgBAHAnQAGAoAFAHQAMAUAXAMQAVAMAYABQgPhDA6huQAohJAoheQASgtAAg6QAAg0gPg0QgKghgVgjQgCgDgSgPIgRgOQgBgKATAGQAQAEAFAFQARAPAQAiQAaA8ACBFIAAAAQACA8gRA8QgOAuggBBQgPAfghA+QgZA3gEAsIgBAqQgCAZgGAAQgCAAgCgDg");
	this.shape_1.setTransform(32.4,37.1,0.701,0.701);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgvErQgbgKgXgiQgNgTgVgpQgZgygCgnQAAgHAGgVQAGgXAEAOQAaB0AGAOQAfBXA1AGQgSg+BIh3IAuhIQAZgnAPgjQAihPgLhVQgGgrgQgfIgOgQQgNgNAAABQACgGAUASQATARADAGQAQAXAFAZIADAPQAGAhgIgnQANBNgbBPQgUA4g3BXQgcArgPAeQgUAogGAnQgEARgBAgQgDANgOAAQgIAAgNgFg");
	this.shape_2.setTransform(19.1,44.4,0.701,0.701);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhSD0QgYglgOggQgLgYgFgeQgGgkAIgTQADgGAFAUIADATQAIAoAMAfQANAgAJAPQAPAcASAKQAHgcAbgnQAegrAMgVIAnhCQAVgmAMgdQAahFgJhZQgBgMgZg0Qgag1gDADQAKgLAgBAQAdA6ADARQAKA+gUBDQgRAygnBCQgYApgxBQIgPAkQgLAagHACQgDAGgFAAQgMAAgagng");
	this.shape_3.setTransform(2,47.5,0.701,0.701);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA1GGQAKg3AAgNQABgkgdg3QgOBIhBAlQgxAbgzAAQgMAAgFgFQgEgEAAgEQAAgIAJgkQAJgjAAgGQAAgagUgxIgrhlQg/iTAAh1QAAhfAihHQAmg7AGgPIAGAAQAEACAAAGIgkBfQgjBdAAA2QAABzA/B9QAjBGAIAXQAUA0AAAzQAAArgOAdQBNgFAsgsQAigkAAgvQAAgOgfhGQgihHAAhGQAEgcAGgeQALg9ANgJIADACIgUA7QAABYA7CNQA9COAAAsQAAALgCARQgDAVgDAAIAXACQAxAAAug0QA+hGAAh+QAAg8gUg2QgUgzg0hTIABgBQAeAMAhA3QAvBMAABpQAACMhPBNQg5A3g1AAQggAAAAgWg");
	this.shape_4.setTransform(-25.1,37.6,0.701,0.701);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggA/IAageQAUgaADgJQAGgYADgVIADgRIAAgBIAEAWQgCAcgXAlQgVAlgPAHQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_5.setTransform(31.4,23.4,0.701,0.701);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGBEQgXgYAAgtQAAggABgMQAEgfAPgPQAHAKgDAtQgCAWgDAUQAAAWASAaQAVAbABAKQgdgPgHgIg");
	this.shape_6.setTransform(-36.5,18.2,0.701,0.701);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AmWJjQhpgfg9isQgziOAAiiQAAkpC/jPQDBjSEZAAQCbAACABsQCFBwBYDbQAYA8AaBdQAcBiAAAmQAADciTCUQhJBMhPAfIgHAAIAAgBIgDgGQBTgUBjiUQBpidAAiEQAAhOghhwQgliDhBhuQitkkkQAAQkDAAi4DNQi3DNAAEhQAADNBPCWQAyBeBGA5g");
	this.shape_7.setTransform(1.2,-19.4,0.701,0.701);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMAZQgGgLAAgOQAAgNAGgLQAFgKAHAAQAIAAAFAKQAGALAAANQAAAOgGALQgFALgIAAQgHAAgFgLg");
	this.shape_8.setTransform(25.5,-22.2,0.701,0.701);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAZQgGgLAAgOQAAgOAGgKQAFgKAHAAQAHAAAGAKQAGAKAAAOQAAAOgGALQgGALgHAAQgHAAgFgLg");
	this.shape_9.setTransform(-17.1,-20.1,0.701,0.701);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgtAMQgUgKgJgKQAJAHAQAGQAZALAYAAQAVgBAbgQIAYgWQADABAAAKQgBARgbALQgXAHgdABQgUAAgUgMg");
	this.shape_10.setTransform(8.2,8.9,0.701,0.701);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AipBJQgUgQABghQAAgPAQgeQAPghANgKIADACQgJAZgZA4QAAAZANAOQAMANATAAQAZAAA5gSIA3gTQAUAAAmAJQAmAKAJgBQAhABARgWQAOgSAAgYQAAgUgHgPIAHAJQAOAQAAAVQABAcgWAUQgVATgeAAQgKAAhcgQQgYAAg/ASIg6ASQgYAAgPgOgACFhSIABgEIAPATIgQgPg");
	this.shape_11.setTransform(8.1,1.4,0.701,0.701);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfARIgWgIQAHgEAugDQArgEALgTIgHANQgbAdglAAIgOgEg");
	this.shape_12.setTransform(26.7,-17.7,0.701,0.701);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglAyQgQgUABgeQgBgdAQgUQAQgWAVAAQAWAAAQAWQAQAUAAAdQAAAegQAUQgQAWgWgBQgVABgQgWgAgZgqQgLARAAAYQAAAWALARQALARAPAAQARAAALgRQAMgRgBgWQABgYgMgRQgLgRgRAAQgPAAgLARg");
	this.shape_13.setTransform(25.1,-21.7,0.701,0.701);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKACQgegKgIgEQAOADBSAJQgFAFgDAFQgCADgRAAQgDAAgcgLg");
	this.shape_14.setTransform(-20.7,-15,0.701,0.701);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AglA1QgQgWAAgfQAAgeAQgWQAQgWAVAAQAWAAAQAWQAQAWAAAeQAAAfgQAWQgQAWgWAAQgVAAgQgWgAgcgqQgNATAAAYQAAAaANASQAMASAQABQARgBAMgSQAMgSABgaQgBgYgMgTQgMgSgRAAQgQAAgMASg");
	this.shape_15.setTransform(-17.6,-19.7,0.701,0.701);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00C1AE").s().p("AhSENIgBgBQgDgXAAgKQAAgpAWgtQAKgTAng/QBGhvAAhiQAAg7gOgdQgRgYgHgQQAaAFAOARQAeAoAABrQAAAyggA1QhFB5gQAiQgDAGgRA+QgMAugMAAQgGAAgCgCg");
	this.shape_16.setTransform(35,37.5,0.701,0.701);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00C1AE").s().p("AhYD0IgCgdQAAgpBOiNQBKiKAAhAQAAgVgIgZIgMgiQAYAZALAVQANAdAAAqQAABOgvBOQhZCagfBIQgJgHgCABg");
	this.shape_17.setTransform(21.9,42.8,0.701,0.701);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00C1AE").s().p("AgGAGIAAgLIANAAIAAALg");
	this.shape_18.setTransform(-3.1,42.4,0.701,0.701);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00C1AE").s().p("AAGBpQgKgJgJgeIgHgcQAAghAQgzQAOgyALgIQABASgIAzIgIA2IAKBSIgBAEg");
	this.shape_19.setTransform(-4.3,52.3,0.701,0.701);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00C1AE").s().p("AA9D6QgzhigbhDQg1h7AAhNQAAhLATggQAKgRAYgKQgTBeAAALQAAB1A0BjIAmBIQARAoAAAnQAAAKgDARg");
	this.shape_20.setTransform(-22.3,43.5,0.701,0.701);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00C1AE").s().p("AAxDQQgLgfgmhJQhKiUAAh7QAAhWAohCQAEAGACAAQADARgBAMQAAAKgCARIgHAbQgEANABAFQAACEA3CWIAoBoQASA0AAAiQAAAJgFAUQgEAVgFAKQAHg2gTg6g");
	this.shape_21.setTransform(-37.4,35.5,0.701,0.701);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00C1AE").s().p("AgBBRQhAhIg6iRIADgGQAZABAjA6IAyBSQAUAWBCA3QAwAoAAAQQAAAGgCACIgBACIgOABQg3AAg1g+g");
	this.shape_22.setTransform(-28.3,11.9,0.701,0.701);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00C1AE").s().p("AAsAXQgjgMgRAAQgPAAgaAMIgYALQgKAAgCgDIgCgIQAHgPAdgTQAfgZAUAAQAiABAdAYQAZAUAAAVQAAACAAACQAAACAAAAQAAABAAgBQAAAAAAgCIgBABQgCABgGAAg");
	this.shape_23.setTransform(-16.8,-25.2,0.701,0.701);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00C1AE").s().p("AhHAUQAAg+BHAKQAaAEAYAMQAWAMAAAJQAAAKgDAAIgQABIgdgEIgcgEIgRANQgUANgSAAQgMAAAAgOg");
	this.shape_24.setTransform(24,-26.5,0.701,0.701);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00C1AE").s().p("AgKAQQgEgHAAgJQAAgIAEgHQAFgHAFAAQAGAAAFAHQAEAHAAAIQAAAJgEAHQgFAHgGAAQgFAAgFgHg");
	this.shape_25.setTransform(36.9,-24.8,0.701,0.701);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00C1AE").s().p("ACGDEIgqg9IhUh9QgagphGhOQg2g8AAgQIALgKQARAHAqAkQAxAqAqAxQB8CJAABqQAAAHgCADQgBACgFACg");
	this.shape_26.setTransform(25.9,-42.1,0.701,0.701);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00C1AE").s().p("AgNBIQgJgGABgFQAAgUAKgMQAKgJAAgBQAAgRgWglQgYgmAAgFQBegCABBgQgBAagFANQgLAYgdAAQgHAAgIgHg");
	this.shape_27.setTransform(17.3,0,0.701,0.701);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009183").s().p("AgcAgIgCgHQAKgJAZggQALgOAPgDQgCAegwAlQgHAAgCgCg");
	this.shape_28.setTransform(29.2,-19.4,0.701,0.701);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009183").s().p("AgSAJQgYgYgCgRQAnAWAbANQAPAIAIAGIgEAOQgHACgIAAQgYAAgUgYg");
	this.shape_29.setTransform(-22.1,-15.8,0.701,0.701);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009183").s().p("AhDDgIgFgdIAohtQAmhtAAhHQAAgFgFgXIgDgWQAAgTAHgGIATgHQAcgIAAg1IgBgOIgBgKQAPADAEAKQAEAIAAAUQAAAEgIAZQgKAfgMARIAKBIQgBA9gPAoQgMAegYAfQgeApgHAuQgCAPAABFQgTgIgKgeg");
	this.shape_30.setTransform(29.8,39.4,0.701,0.701);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009183").s().p("AAdD+QgxhDAAgwQAAgUAOhGQAMhDAAgcQAAg4gdhJQgghAAAgIIAAgHIAAABQAGAGAWASQAYATAMAQQAvA4AABeQAAAdgPBTQgPBVAAAHQABAQAFAfQAGAfAAAKQAAAHgFAAIgEgBg");
	this.shape_31.setTransform(10.6,44,0.701,0.701);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009183").s().p("AhEEBIgGAAQgFgEAAgQQAAgiAVgrIAuhSQBBh1AAh2QAAgGgIghQgJgfAAgXQAAgFACgBIADABIABACQAMALALAjQAPAxAAA+QAABHgzBpIheCxIADAAg");
	this.shape_32.setTransform(2.3,45.6,0.701,0.701);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009183").s().p("AAhAuIhohjIAEgGQApAVA7AdQAoAVgBAYQAAAYgMAAQgKAAgRgOg");
	this.shape_33.setTransform(-12.3,30.6,0.701,0.701);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009183").s().p("AiBBGQA/gLBWg9QBlhKAFgCQASAdhEA8QhHBChEAAIggACQgcAAgGgJg");
	this.shape_34.setTransform(27.2,18.7,0.701,0.701);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009183").s().p("AguAdQgqgUgNgiIABgIQAPgGAUAPQAaAUApAAQAKAAApgTIApgTQAKAAgCAEQgDAYgXAZQgdAggjAAQgaAAgggOg");
	this.shape_35.setTransform(7.9,10.1,0.701,0.701);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009183").s().p("AgrD5QAkhVAPhHQALgxAAgaQAAhigvhRIgigzQgQgYAAgOQAAgGADAAIADABQBRBBAVAdQAxBFAAB8QAABIgiA5QgaArg6A1QgDgBgBgHg");
	this.shape_36.setTransform(-11.6,45,0.701,0.701);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009183").s().p("AgKEsIgBgHIAhg5QAagsAAgRIgWhBQgXhDAAguIAPhZQgvgLgmg8Qgjg1AAgsQAKggAHgKQACA3AuA2QAlAsAnANIAjgsQAHABABAHQgCAGgPAfQgPAlAAAwQAAAfAOA0QAFAUAOAuIANAqQAHASgBALQABAngZApQgfA1gwAAQgGAAgDgDg");
	this.shape_37.setTransform(-32,39.4,0.701,0.701);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009183").s().p("Ag3ARQgwhCATgjIAJgCIAGgDQADgCAAAGQAAAlA2AzQAxAwA1AZIgGAHQgOAIgKAAQhBAAgyhKg");
	this.shape_38.setTransform(-31.3,18.7,0.701,0.701);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F2F2F2").s().p("AgdAwQgNgVAAgbQAAgbANgUQAMgTARgBQASABAMATQANAUAAAbQAAAbgNAVQgMATgSAAQgRAAgMgTg");
	this.shape_39.setTransform(25.1,-21.6,0.701,0.701);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F2F2F2").s().p("AgdAwQgNgUAAgcQAAgbANgUQANgUAQAAQARAAANAUQANAUAAAbQAAAcgNAUQgNAUgRAAQgQAAgNgUg");
	this.shape_40.setTransform(-17.6,-19.5,0.701,0.701);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A99D").s().p("Ag1N7QgWg7gdg1QgSAWgmA8QgpAxg/AAQggAAAAgVQAAgJAHgRQAHgQAAgFQAAgagxhYIgIgNQgPBSguAoQgmAhgzAAQgXAAAAgVQAAgHAJgcQAIgcAAgLQAAgbgTgwIgrhhQg/iQAAh0QAAhTAihTQAhhTAAgOQAAgdgYhJQgYhLAAhsQAAlADtjXQBbhRBrgwQBegrBDAAQEAAACdCsQCqC4AoFzIAAgNIADAdQAABDgkBbQgXA4g9B3QAEABAKAKQAPAQANAWQApBIAAByQAAACgiBYQglBggRAmQgqBcgNBNQgEAZgDAFQgEAHgPAAQgqAAgYguQgQgeAAgUQAAgNAGgYIADgMQgQAbgrBvQghBRgQAAQgTAAgagpQgkg2gZhnQgkAyhMBzQgaArgSAAQgRAAgIgWg");
	this.shape_41.setTransform(0.1,1.8,0.701,0.701);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.4,-62.3,89.5,129.8);


(lib.Background = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(0.5,240);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0B3579","#04A18A"],[0,1],-256.3,199.3,-289.4,-159.2).s().dr(-275,-200,550,400);
	this.shape.setTransform(275,200);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550.5,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;