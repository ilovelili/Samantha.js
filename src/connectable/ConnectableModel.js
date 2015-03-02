/**
 * @fileoverview Base connectable component model. Hosts input and output buffer, chain and effects base.
 */

goog.provide('Samantha.ConnectableModel');
goog.require('Samantha.IConnectableModel');



/**
 * Component model for base connectables.
 *
 * @constructor
 * @implements {Samantha.IConnectableModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.ConnectableModel = function(context) {
    this.context = context;

    /**
     *
     * @type {GainNode}
     * @protected
     */
    this.inputBuffer = this.context.createGain();

    /**
     *
     * @type {GainNode}
     * @protected
     */
    this.outputBuffer = this.context.createGain();

    /**
 *
 * @type {Array.<AudioNode>}
 */
    this.chain = [];

    /**
 *
 * @type {Array.<AudioNode>}
 */
    this.effects = [];
};


/**
 * Connects the output of the audio node of this model to another audio node.
 *
 * @param {AudioNode} destination Next audio node where the output of this model's node will connect to.
 */
Samantha.ConnectableModel.prototype.connect = function(destination) {
    this.next = destination;
    this.chain = [].concat(this.inputBuffer, this.effects, this.outputBuffer, this.next);

    this.routeInternal();
};


/**
 * Gets the input buffer of a pedal.
 *
 * @return {AudioNode} The input buffer of this component.
 */
Samantha.ConnectableModel.prototype.getInput = function() {
    return this.inputBuffer;
};


/**
 * Gets the output buffer of a pedal.
 *
 * @return {AudioNode} The output buffer of this component.
 */
Samantha.ConnectableModel.prototype.getOutput = function() {
    return this.outputBuffer;
};


/**
 * Lets the model know who is connected to its effects node.
 *
 * @param {AudioNode} prev Previous node who is connected to this model's effects node.
 */
Samantha.ConnectableModel.prototype.setPrev = function(prev) {
    this.prev = prev;
};


/**
 * Routes the internal effects chain.
 *
 * @protected
 */
Samantha.ConnectableModel.prototype.routeInternal = function() {
    var chain = this.chain;

    for (var i = 0, len = chain.length - 1; i < len; i++) {
        chain[i].connect(chain[i + 1]);
    }
};


/**
 * Disconnects the output buffer of this pedal.
 */
Samantha.ConnectableModel.prototype.disconnect = function() {
    this.outputBuffer.disconnect();
};
