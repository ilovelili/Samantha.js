/**
 * @fileoverview Overdrive pedal component model.
 */

goog.provide('Samantha.stomp.OverdriveModel');
goog.require('Samantha.stomp.BoxModel');



/**
 * Component model for overdrive pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.BoxModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.OverdriveModel = function(context) {
    goog.base(this, context);
    this.lowPassFreq = 3000;

    this.lowPass = this.context.createBiquadFilter();
    this.lowPass.type = 0;
    this.lowPass.frequency.value = this.lowPassFreq;

    this.waveShaper = this.context.createWaveShaper();

    this.effects = [
        this.waveShaper,
        this.lowPass,
        this.level
    ];
};
goog.inherits(Samantha.stomp.OverdriveModel, Samantha.stomp.BoxModel);


/**
 * Creates two wave shaper curves that introduce distortion to the incoming signal.
 *
 * @param {number} amount Amount of distortion to be applied.
 */
Samantha.stomp.OverdriveModel.prototype.createWSCurve = function(amount) {
    var k = amount;
    var n_samples = 22050;
    this.wsCurve = new Float32Array(n_samples);
    var deg = Math.PI / 180;
    for (var i = 0; i < n_samples; i += 1) {
        var x = i * 2 / n_samples - 1;
        this.wsCurve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
    }
    this.waveShaper.curve = this.wsCurve;
};


/**
 * Sets the drive level.
 *
 * @param {number} newDrive Drive level to set.
 */
Samantha.stomp.OverdriveModel.prototype.setDrive = function(newDrive) {
    this.createWSCurve(10 * newDrive);
};


/**
 * Sets the tone level.
 * @param {number} newTone Tone level to set.
 */
Samantha.stomp.OverdriveModel.prototype.setTone = function(newTone) {
    this.lowPass.frequency.value = 2000 + newTone;
};
