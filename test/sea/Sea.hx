package lib;

import createjs.easeljs.MovieClip;
import createjs.easeljs.Rectangle;
import createjs.easeljs.Text;
import createjs.easeljs.Shadow;
import createjs.easeljs.Bitmap;
import createjs.easeljs.Container;
import createjs.easeljs.Shape;

@:native("lib.properties")
extern class Properties {
	public static var width:Int;
	public static var height:Int;
	public static var fps:Int;
	public static var color:Int;
	public static var manifest:Dynamic;
}

@:native("lib.Sea")
extern class Sea extends MovieClip {
	static public var nominalBounds:Rectangle;
	public var text:Text;
	public var shadow:Shadow;
	public var seaweed:Seaweed;
	public var instance:Star;
	public var instance_1:Star;
	public var instance_2:Star;
	public var instance_3:Star;
	public var octopus:Octopus;
	public var octopus_1:Octopus;
	public var octopus_2:Octopus;
	public var seaweed_1:Seaweed;
	public var seaweed_2:Seaweed;
	public var seaweed_3:Seaweed;
	public var seaweed_4:Seaweed;
	public var seaweed_5:Seaweed;
	public var seaweed_6:Seaweed;
	public var octopus_3:Octopus;
	public var shadow:Shadow;
	public var seaweed_7:Seaweed;
	public var octopus_4:Octopus;
	public var instance_4:Background;
}

@:native("lib.bg")
extern class Bg extends Bitmap {
	static public var nominalBounds:Rectangle;
}

@:native("lib.Star")
extern class Star extends Container {
	static public var nominalBounds:Rectangle;
	public var shape:Shape;
}

@:native("lib.Seaweed")
extern class Seaweed extends Container {
	static public var nominalBounds:Rectangle;
	public var shape:Shape;
	public var shape_1:Shape;
	public var shape_2:Shape;
}

@:native("lib.Octopus")
extern class Octopus extends Container {
	static public var nominalBounds:Rectangle;
	public var shape:Shape;
	public var shape_1:Shape;
	public var shape_2:Shape;
	public var shape_3:Shape;
	public var shape_4:Shape;
	public var shape_5:Shape;
	public var shape_6:Shape;
	public var shape_7:Shape;
	public var shape_8:Shape;
	public var shape_9:Shape;
	public var shape_10:Shape;
	public var shape_11:Shape;
	public var shape_12:Shape;
	public var shape_13:Shape;
	public var shape_14:Shape;
	public var shape_15:Shape;
	public var shape_16:Shape;
	public var shape_17:Shape;
	public var shape_18:Shape;
	public var shape_19:Shape;
	public var shape_20:Shape;
	public var shape_21:Shape;
	public var shape_22:Shape;
	public var shape_23:Shape;
	public var shape_24:Shape;
	public var shape_25:Shape;
	public var shape_26:Shape;
	public var shape_27:Shape;
	public var shape_28:Shape;
	public var shape_29:Shape;
	public var shape_30:Shape;
	public var shape_31:Shape;
	public var shape_32:Shape;
	public var shape_33:Shape;
	public var shape_34:Shape;
	public var shape_35:Shape;
	public var shape_36:Shape;
	public var shape_37:Shape;
	public var shape_38:Shape;
	public var shape_39:Shape;
	public var shape_40:Shape;
	public var shape_41:Shape;
}

@:native("lib.Background")
extern class Background extends Container {
	static public var nominalBounds:Rectangle;
	public var instance:Bg;
	public var shape:Shape;
}


