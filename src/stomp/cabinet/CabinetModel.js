/**
 * @fileoverview Cabinet pedal component model.
 *
 * Impulse response buffer taken from
 *
 * http://www.adventurekid.se/akrt/free-reverb-impulse-responses/
 */

goog.provide('Samantha.stomp.CabinetModel');
goog.require('Samantha.stomp.ConvModel');



/**
 * Component model for Cabinet pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.ConvModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.CabinetModel = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.CabinetModel, Samantha.stomp.ConvModel);


/**
 * @override
 */
Samantha.stomp.CabinetModel.prototype.iRPath = 'audio/ir/speaker/AK-SPKRS_VinUs_002.wav';
