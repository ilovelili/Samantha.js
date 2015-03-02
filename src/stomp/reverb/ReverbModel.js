/**
 * @fileoverview Reverb pedal component model.
 *
 * Inspiration and impulse response buffer taken from
 *
 * http://kevincennis.com/audio/
 * http://kevincennis.com/audio/assets/sounds/pcm90cleanplate.wav
 *
 * More can be found at
 * http://www.dubbhism.com/2008/10/free-download-60-classic-and-king-tubby.html
 * http://www.adventurekid.se/akrt/free-reverb-impulse-responses/
 */

goog.provide('Samantha.stomp.ReverbModel');
goog.require('Samantha.stomp.ConvModel');



/**
 * Component model for reverb pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.ConvModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.ReverbModel = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.ReverbModel, Samantha.stomp.ConvModel);


/**
 * @override
 */
Samantha.stomp.ReverbModel.prototype.iRPath = 'audio/ir/reverb/pcm90cleanplate.wav';
