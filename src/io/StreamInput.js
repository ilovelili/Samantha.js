/**
 * @fileoverview Input abstraction for an audio context. There can be many input sources in an audio context and this
 * class is an abstraction of an input that also implements the Samantha.Connectable interface so that it can be chained
 * before a Samantha.stomp.BoxModel.
 */

goog.provide('Samantha.io.StreamInput');
goog.require('Samantha.io.Input');



/**
 * The input wrapper for an audio context.
 *
 * @constructor
 * @extends {Samantha.io.Input}
 * @param {AudioContext} context Audio context for this input.
 */
Samantha.io.StreamInput = function(context) {
    goog.base(this, context);
    var that = this;

    navigator.getUserMedia({'audio': true}, function(stream) {
        that.disconnect();
        that.source = context.createMediaStreamSource(stream);
        that.dispatchEvent('loaded');
    }, function(err) {
        throw new Error(err);
    });
};
goog.inherits(Samantha.io.StreamInput, Samantha.io.Input);


Samantha.io.StreamInput.prototype.stop = function() {
    this.source.disconnect();
};
