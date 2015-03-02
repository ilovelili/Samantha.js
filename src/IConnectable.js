/**
 * @fileoverview IConnectable interface for consistent routing between higher level stomp box components.
 * All the connectable pedal components and IO should implement this interface.
 */

goog.provide('Samantha.IConnectable');



/**
 * IConnectable interface. Sports connect method for output and setInput method for input.
 * @interface
 */
Samantha.IConnectable = function() {};


/**
 * Connects the output of this IConnectable to a node.
 *
 * @param {Samantha.IConnectable} destination Destination node to connect the output of this IConnectable.
 */
Samantha.IConnectable.prototype.connect = function(destination) {};


/**
 * Disconnects the output of this IConnectable.
 */
Samantha.IConnectable.prototype.disconnect = function() {};


/**
 * Sets the input of this IConnectable to a node.
 *
 * @param {Samantha.IConnectable} prev The node that will be connected to the input of this IConnectable.
 */
Samantha.IConnectable.prototype.setPrev = function(prev) {};


/**
 * Gets the main effects unit of a IConnectable, which is also the input node.
 *
 * @return {AudioNode} The effect node of the IConnectable.
 */
Samantha.IConnectable.prototype.getInput = function() {};

