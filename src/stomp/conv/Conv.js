/**
 * @fileoverview Conv pedal.
 */

goog.provide('Samantha.stomp.Conv');
goog.require('Samantha.stomp.Box');
goog.require('Samantha.stomp.ConvModel');



/**
 * Conv pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.Box}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Conv = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.Conv, Samantha.stomp.Box);


/**
 * @override
 */
Samantha.stomp.Conv.prototype.modelClass = Samantha.stomp.ConvModel;


/**
 * @override
 */
Samantha.stomp.Conv.prototype.name = 'convo';


/**
 * @type {number} The gain multiplier for the level pot. Some IR responses are too high on volume and they need
 * to be tamed.
 */
Samantha.stomp.Conv.prototype.gainMultiplier = 1;


/**
 * @override
 */
Samantha.stomp.Conv.prototype.createPots = function() {
    this.volumePot = new Samantha.pot.Pot(this.model.convGain.gain, 'effect', this.gainMultiplier);
    this.pots = [].concat(this.volumePot);
};
