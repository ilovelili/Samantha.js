/**
 * @fileoverview Base pedal component model.
 */

goog.provide('Samantha.stomp.BoxModel');
goog.require('Samantha.ConnectableModel');



/**
 * Component model for base pedal.
 *
 * @constructor
 * @extends {Samantha.ConnectableModel}
 *
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.BoxModel = function(context) {
    goog.base(this, context);

    this.level = this.context.createGain();

    this.effects.push(this.level);
};
goog.inherits(Samantha.stomp.BoxModel, Samantha.ConnectableModel);


/**
 * Sets the level of the effect.

 * @param {number} newLevel The new level of the effect.
 */
Samantha.stomp.BoxModel.prototype.setLevel = function(newLevel) {
    newLevel = Math.min(newLevel, 10);
    newLevel = newLevel / 10;
    this.level.gain.value = newLevel;
};


/**
 * Routes the internal effects chain.
 *
 * @protected
 */
Samantha.stomp.BoxModel.prototype.routeInternal = function() {
    var chain = this.chain;

    for (var i = 0, len = chain.length - 1; i < len; i++) {
        chain[i].connect(chain[i + 1]);
    }

    this.nodes = [
        [this.effects[0], this.inputBuffer, this.outputBuffer],
        [this.outputBuffer, goog.array.peek(this.effects), null]
    ];
};
