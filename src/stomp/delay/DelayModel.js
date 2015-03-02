/**
 * @fileoverview Delay pedal component model.
 */

goog.provide('Samantha.stomp.DelayModel');
goog.require('Samantha.stomp.BoxModel');



/**
 * Component model for delay pedal.
 * @constructor
 * @extends {Samantha.stomp.BoxModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.DelayModel = function(context){
    goog.base(this, context);

    this.delayer = this.context.createDelay();
    this.delayer.delayTime.value = 0.4;

    this.feedbackGain = this.context.createGain();
    this.feedbackGain.gain.value = 0.9;

    this.effects = [this.delayer, this.feedbackGain, this.level];
};
goog.inherits(Samantha.stomp.DelayModel, Samantha.stomp.BoxModel);


/**
 * Sets the delay timer level.
 *
 * @param {number} newTimer New delay timer value to be set.
 */
Samantha.stomp.DelayModel.prototype.setDelayTimer = function(newTimer) {
    this.delayer.delayTime.value = newTimer;
};


/**
 * Sets the feedback gain level.
 *
 * @param {number} newGain New gain value to be set.
 */
Samantha.stomp.DelayModel.prototype.setFeedbackGain = function(newGain) {
    this.feedbackGain.gain.value = newGain;
};


/**
 * @override
 */
Samantha.stomp.DelayModel.prototype.routeInternal = function() {
    goog.base(this, 'routeInternal');

    this.feedbackGain.connect(this.delayer);
    this.inputBuffer.connect(this.outputBuffer);
};
