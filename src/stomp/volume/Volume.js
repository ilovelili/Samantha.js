/**
 * @fileoverview Volume pedal.
 */

goog.provide('Samantha.stomp.Volume');
goog.require('Samantha.stomp.Box');
goog.require('Samantha.stomp.VolumeModel');



/**
 * Volume pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.Box}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Volume = function(context) {
    goog.base(this, context);

    this.volumePot.setValue(1);
};
goog.inherits(Samantha.stomp.Volume, Samantha.stomp.Box);


/**
 * @override
 */
Samantha.stomp.Volume.prototype.modelClass = Samantha.stomp.VolumeModel;


/**
 * @override
 */
Samantha.stomp.Volume.prototype.name = 'volume';
