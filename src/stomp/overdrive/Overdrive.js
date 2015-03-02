/**
 * @fileoverview Overdrive pedal.
 */

goog.provide('Samantha.stomp.Overdrive');
goog.require('Samantha.pot.Log');
goog.require('Samantha.stomp.Box');
goog.require('Samantha.stomp.OverdriveModel');



/**
 * Overdrive pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.Box}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Overdrive = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.Overdrive, Samantha.stomp.Box);


/**
 * @override
 */
Samantha.stomp.Overdrive.prototype.modelClass = Samantha.stomp.OverdriveModel;


/**
 * @override
 */
Samantha.stomp.Overdrive.prototype.createPots = function() {
    goog.base(this, 'createPots');
    var driveHandler = goog.bind(this.model.setDrive, this.model);
    var toneHandler = goog.bind(this.model.setTone, this.model);

    this.drivePot = new Samantha.pot.Log(driveHandler, 'drive', 2000);
    this.tonePot = new Samantha.pot.Log(toneHandler, 'tone', 3000, Samantha.pot.Pot.Size.SMALL);
    this.pots.push(this.drivePot, this.tonePot);
};


/**
 * Sets the drive pot.
 *
 * @param {number} newValue New drive value, ranges between 0-10.
 */
Samantha.stomp.Overdrive.prototype.setDrive = function(newValue) {
    this.drivePot.setValue(newValue);
};


/**
 * Sets the tone pot.
 *
 * @param {number} newValue New tone value.
 */
Samantha.stomp.Overdrive.prototype.setTone = function(newValue) {
    this.tonePot.setValue(newValue);
};


/**
 * @override
 */
Samantha.stomp.Overdrive.prototype.name = 'overdrive';
