/**
 * @fileoverview Delay pedal.
 */

goog.provide('Samantha.stomp.Delay');
goog.require('Samantha.pot.Linear');
goog.require('Samantha.stomp.Box');
goog.require('Samantha.stomp.DelayModel');



/**
 * Delay pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.Box}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Delay = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.Delay, Samantha.stomp.Box);


/**
 * @override
 */
Samantha.stomp.Delay.prototype.modelClass = Samantha.stomp.DelayModel;


/**
 * @override
 */
Samantha.stomp.Delay.prototype.createPots = function() {
    goog.base(this, 'createPots');
    var delayTimeHandler = goog.bind(this.model.setDelayTimer, this.model);
    var feedbackGainHandler = goog.bind(this.model.setFeedbackGain, this.model);

    this.delayTimerPot = new Samantha.pot.Log(delayTimeHandler, 'delay time', 5);
    this.feedbackGainPot = new Samantha.pot.Linear(feedbackGainHandler, 'feedback gain', 0.95);
    this.pots.push(this.delayTimerPot, this.feedbackGainPot);
};


/**
 * Sets the delay timer pot.
 *
 * @param {number} newTimer New delay timer value in range 0-5 seconds.
 */
Samantha.stomp.Delay.prototype.setDelayTimer = function(newTimer) {
    this.delayTimerPot.setValue(newTimer);
};


/**
 * Sets the feedback gain pot.
 *
 * @param {number} newGain New gain value in range 0-0.95.
 */
Samantha.stomp.Delay.prototype.setFeedbackGain = function(newGain) {
    this.feedbackGainPot.setValue(newGain);
};


/**
 * @override
 */
Samantha.stomp.Delay.prototype.name = 'delay';
