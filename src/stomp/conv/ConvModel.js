/**
 * @fileoverview Conv pedal component model.
 *
 * Impulse response buffer taken from
 *
 * http://www.adventurekid.se/akrt/free-conv-impulse-responses/
 */

goog.provide('Samantha.stomp.ConvModel');
goog.require('Samantha.stomp.BoxModel');



/**
 * Component model for conv pedal.
 *
 * @constructor
 * @extends {Samantha.stomp.BoxModel}
 * @param {AudioContext} context The context this component model will operate on.
 */
Samantha.stomp.ConvModel = function(context) {
    goog.base(this, context);
    this.conv = this.context.createConvolver();
    this.convGain = this.context.createGain();
    this.effects = [this.conv, this.convGain];

    this.iRPath && this.loadIR();
};
goog.inherits(Samantha.stomp.ConvModel, Samantha.stomp.BoxModel);


/**
 * The path of the impulse response of this conv.
 *
 * @type {string}
 */
Samantha.stomp.ConvModel.prototype.iRPath;


/**
 * @override
 */
Samantha.stomp.ConvModel.prototype.routeInternal = function() {
    goog.base(this, 'routeInternal');
    this.inputBuffer.connect(this.outputBuffer);
};


/**
 * Loads the impulse response.
 */
Samantha.stomp.ConvModel.prototype.loadIR = function() {
    var that = this,
        request = new XMLHttpRequest();

    request.open('GET', this.iRPath, true);
    request.responseType = 'arraybuffer';


    request.onload = function() {
        that.context.decodeAudioData(/** @type {ArrayBuffer} */(request.response), function(buffer) {
            that.conv.buffer = buffer;
        });
    };
    request.send();
};
