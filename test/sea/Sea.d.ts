/// <reference path="easeljs/easeljs.d.ts" />

module lib {

	export class Sea extends createjs.MovieClip {
		static nominalBounds: createjs.Rectangle;
		text: Text;
		shadow: Shadow;
		seaweed: Seaweed;
		instance: Star;
		instance_1: Star;
		instance_2: Star;
		instance_3: Star;
		octopus: Octopus;
		octopus_1: Octopus;
		octopus_2: Octopus;
		seaweed_1: Seaweed;
		seaweed_2: Seaweed;
		seaweed_3: Seaweed;
		seaweed_4: Seaweed;
		seaweed_5: Seaweed;
		seaweed_6: Seaweed;
		octopus_3: Octopus;
		shadow: Shadow;
		seaweed_7: Seaweed;
		octopus_4: Octopus;
		instance_4: Background;
	}

	export class bg extends createjs.Bitmap {
		static nominalBounds: createjs.Rectangle;
	}

	export class Star extends createjs.Container {
		static nominalBounds: createjs.Rectangle;
		shape: createjs.Shape;
	}

	export class Seaweed extends createjs.Container {
		static nominalBounds: createjs.Rectangle;
		shape: createjs.Shape;
		shape_1: createjs.Shape;
		shape_2: createjs.Shape;
	}

	export class Octopus extends createjs.Container {
		static nominalBounds: createjs.Rectangle;
		shape: createjs.Shape;
		shape_1: createjs.Shape;
		shape_2: createjs.Shape;
		shape_3: createjs.Shape;
		shape_4: createjs.Shape;
		shape_5: createjs.Shape;
		shape_6: createjs.Shape;
		shape_7: createjs.Shape;
		shape_8: createjs.Shape;
		shape_9: createjs.Shape;
		shape_10: createjs.Shape;
		shape_11: createjs.Shape;
		shape_12: createjs.Shape;
		shape_13: createjs.Shape;
		shape_14: createjs.Shape;
		shape_15: createjs.Shape;
		shape_16: createjs.Shape;
		shape_17: createjs.Shape;
		shape_18: createjs.Shape;
		shape_19: createjs.Shape;
		shape_20: createjs.Shape;
		shape_21: createjs.Shape;
		shape_22: createjs.Shape;
		shape_23: createjs.Shape;
		shape_24: createjs.Shape;
		shape_25: createjs.Shape;
		shape_26: createjs.Shape;
		shape_27: createjs.Shape;
		shape_28: createjs.Shape;
		shape_29: createjs.Shape;
		shape_30: createjs.Shape;
		shape_31: createjs.Shape;
		shape_32: createjs.Shape;
		shape_33: createjs.Shape;
		shape_34: createjs.Shape;
		shape_35: createjs.Shape;
		shape_36: createjs.Shape;
		shape_37: createjs.Shape;
		shape_38: createjs.Shape;
		shape_39: createjs.Shape;
		shape_40: createjs.Shape;
		shape_41: createjs.Shape;
	}

	export class Background extends createjs.Container {
		static nominalBounds: createjs.Rectangle;
		instance: bg;
		shape: createjs.Shape;
	}

}

