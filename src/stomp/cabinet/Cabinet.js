/**
 * @fileoverview Cabinet pedal. This pedal simulates amp cabinets.
 */

goog.provide('Samantha.stomp.Cabinet');
goog.require('Samantha.stomp.Conv');
goog.require('Samantha.stomp.CabinetModel');



/**
 * Cabinet pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.Conv}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Cabinet = function(context) {
    goog.base(this, context);

    this.volumePot.setValue(1);
};
goog.inherits(Samantha.stomp.Cabinet, Samantha.stomp.Conv);


/**
 * @override
 */
Samantha.stomp.Cabinet.prototype.modelClass = Samantha.stomp.CabinetModel;


/**
 * @override
 */
Samantha.stomp.Cabinet.prototype.name = 'cabinet';


/**
 * @override
 */
Samantha.stomp.Cabinet.prototype.gainMultiplier = 10;
