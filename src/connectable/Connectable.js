/**
 * @fileoverview Base Connectable component. It hosts other components as children, has a model and IO functionality.
 */

goog.provide('Samantha.Connectable');
goog.require('Samantha.ConnectableModel');
goog.require('Samantha.IConnectable');
goog.require('Samantha.ui.Component');



/**
 * Base component.
 *
 * @constructor
 * @extends {Samantha.ui.Component}
 * @implements {Samantha.IConnectable}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.Connectable = function(context) {
    goog.base(this);

    this.setModel(new this.modelClass(context));

    this.createChildComponents();

    this.bindModelEvents();
};
goog.inherits(Samantha.Connectable, Samantha.ui.Component);


/**
 * @type {function(new: Samantha.ConnectableModel, AudioContext)} The component model this component will
 *       work with.
 */
Samantha.Connectable.prototype.modelClass = Samantha.ConnectableModel;


/**
 * Creates child components such as pots and switches.
 */
Samantha.Connectable.prototype.createChildComponents = function() {
    this.components = [];
};


/**
 * Gets the input buffer of a pedal.
 *
 * @return {AudioNode} The input buffer of this component.
 */
Samantha.Connectable.prototype.getInput = function() {
    return this.model.getInput();
};


/**
 * Gets the output buffer of a pedal.
 *
 * @return {AudioNode} The output buffer of this component.
 */
Samantha.Connectable.prototype.getOutput = function() {
    return this.model.getOutput();
};


/**
 * Lets the pedal instance know who is connected to its input.
 *
 * @param {Samantha.IConnectable} prev Previous pedal whose output will connect to this pedal's input.
 */
Samantha.Connectable.prototype.setPrev = function(prev) {
    this.model.setPrev(prev.getOutput());
};


/**
 * Connects the output of this pedal to another pedal.
 *
 * @param {Samantha.IConnectable} destination Next pedal where the output of this pedal will connect to.
 */
Samantha.Connectable.prototype.connect = function(destination) {
    destination.setPrev(this);
    this.model.connect(destination.getInput());
};


/**
 * Disconnects the output of this pedal.
 */
Samantha.Connectable.prototype.disconnect = function() {
    this.model.disconnect();
};
