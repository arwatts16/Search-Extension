var bits = bits || {};
bits.utils = {};

/**
 * Constant function to represent an interface or abstract method
 */
bits.utils.methodNotImplementedFunction = function() {
	throw new Error('method not implemented');
};

/**
 * Utility function to add an interface method to any interface class
 */
bits.utils.addInterfaceMethod = function(o, fxnName) {
	o.prototype[fxnName] = bits.utils.methodNotImplementedFunction;
};

/**
 * Utility function to make a class inherit interface functions from a parent interface
 */
bits.utils.implements = function(child, parent) {
	if (child && parent) {
		child.prototype = Object.create(parent.prototype);
	}
	else {
		throw new error('invalid arguments');
	}
};

/**
 * Utility function to make a class inherit functions from a parent class
 */
bits.utils.extends = bits.utils.implements;