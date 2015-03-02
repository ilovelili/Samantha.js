/**
 * @fileoverview Volume pedal component model.
 */

goog.provide('Samantha.stomp.VolumeModel');
goog.require('Samantha.stomp.BoxModel');



/**
 * Component model for volume pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.BoxModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.VolumeModel = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.VolumeModel, Samantha.stomp.BoxModel);
