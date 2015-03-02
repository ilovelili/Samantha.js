/**
 * @fileoverview Reverb pedal.
 */

goog.provide('Samantha.stomp.Reverb');
goog.require('Samantha.stomp.Conv');
goog.require('Samantha.stomp.ReverbModel');



/**
 * Reverb pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.Conv}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Reverb = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.Reverb, Samantha.stomp.Conv);


/**
 * @override
 */
Samantha.stomp.Reverb.prototype.modelClass = Samantha.stomp.ReverbModel;


/**
 * @override
 */
Samantha.stomp.Reverb.prototype.name = 'reverb';


/**
 * @override
 */
Samantha.stomp.Reverb.prototype.gainMultiplier = 1;
