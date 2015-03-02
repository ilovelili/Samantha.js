/**
 * @fileoverview Output abstraction for a given audio context. There can only be one output per audio context, and this
 * class is an abstraction of it that also implements the Samantha.Connectable interface so that it can be chained after
 * a Samantha.stomp.BoxModel.
 */

goog.provide('Samantha.io.Output');
goog.require('Samantha.IConnectable');



/**
 * The output wrapper for an audio context.
 *
 * @constructor
 * @param {AudioContext} context Audio context for this output.
 * @implements {Samantha.IConnectable}
 */
Samantha.io.Output = function(context) {
    this.source = context.destination; // creates a sound source
};


/**
 * Gets the destination node.
 *
 * @return {AudioDestinationNode} The final node in the signal chain.
 */
Samantha.io.Output.prototype.getInput = function() {
    return this.source;
};


/**
 * Lets the output know who is connected to it.
 *
 * @param {Samantha.IConnectable} prev Input node.
 */
Samantha.io.Output.prototype.setPrev = function(prev) {
    this.prev = prev;
};


/**
 * Dummy method for the Connectable interface. It's meaningless for an output to be connected to another Connectable.
 * It's already the final node in the signal chain.
 */
Samantha.io.Output.prototype.connect = function() {};


/**
 * Dummy method for the Connectable interface. It's meaningless for an output to have an output.
 */
Samantha.io.Output.prototype.getOutput = function() {};


/**
 * Dummy method for the Connectable interface. The output is never connected to anything else.
 */
Samantha.io.Output.prototype.disconnect = function() {};
