/**
 * @fileoverview IConnectableModel interface for consistent routing. All the connectable component models should
 * implement this interface.
 */

goog.provide('Samantha.IConnectableModel');



/**
 * IConnectableModel interface. Sports connect method for output and setInput method for input.
 * @interface
 */
Samantha.IConnectableModel = function() {};


/**
 * Connects the output of this IConnectableModel to a node.
 *
 * @param {AudioNode} destination Destination node to connect the output of this IConnectableModel.
 */
Samantha.IConnectableModel.prototype.connect = function(destination) {};


/**
 * Disconnects the output of this IConnectableModel.
 */
Samantha.IConnectableModel.prototype.disconnect = function() {};


/**
 * Sets the previous node of this IConnectableModel.
 *
 * @param {AudioNode} prev The node that will be connected to the input of this IConnectableModel.
 */
Samantha.IConnectableModel.prototype.setPrev = function(prev) {};


/**
 * Gets the input of a IConnectableModel.
 *
 * @return {AudioNode} The input of this IConnectableModel.
 */
Samantha.IConnectableModel.prototype.getInput = function() {};


/**
 * Gets the output of a IConnectableModel.
 *
 * @return {AudioNode} The output of this IConnectableModel.
 */
Samantha.IConnectableModel.prototype.getOutput = function() {};
