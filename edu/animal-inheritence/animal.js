var bits = bits || {};
bits.demo = {};

/**
	Quick demonstration on how Javascript inheritence works.
	There are 2 interfaces and 1 abstract class (Though in JS, they're basically the same thing.  I'm using these to create contracts).
		- ISpeakable means they can speak
		- IFurry means they can be pet
		- Animal will have a name and can emote
	There is are 2 concrete classes:
		- Dog - is furry and can speak
		- Lizard - can speak but is not furry
 */

/** Interface */
bits.demo.ISpeakable = function() {};
bits.utils.addInterfaceMethod(bits.demo.ISpeakable, 'speak');

bits.demo.IFurry = function() {};
bits.utils.addInterfaceMethod(bits.demo.IFurry, 'pet');

/** Abstract */
bits.demo.Animal = function(name) {
	bits.demo.ISpeakable.call(this);
	this.name = name || null;
};
bits.utils.implements(bits.demo.Animal, bits.demo.ISpeakable);

bits.demo.Animal.prototype.emote = bits.utils.methodNotImplementedFunction;

/** Concrete */
bits.demo.Dog = function(name) {
	bits.demo.Animal.call(this, name);
	bits.demo.IFurry.call(this);
};
bits.utils.extends(bits.demo.Dog, bits.demo.Animal);
bits.utils.implements(bits.demo.Dog, bits.demo.IFurry);

bits.demo.Dog.prototype.speak = function() {
	return 'woof';
};

bits.demo.Dog.prototype.pet = function() {
	return this.emote() + ' ' + this.speak();
};

bits.demo.Dog.prototype.emote = function() {
	return '*tail wag*';
};

bits.demo.Lizard = function(name) {
	bits.demo.Animal.call(this, name);
};
bits.utils.extends(bits.demo.Lizard, bits.demo.Animal);

bits.demo.Lizard.prototype.speak = function() {
	return '*nothingness*';
};

bits.demo.Lizard.prototype.emote = function() {
	return '*tongue flick*';
};