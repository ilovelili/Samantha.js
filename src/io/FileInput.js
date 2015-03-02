/**
 * @fileoverview File input reads a given file as an input buffer.
 */

goog.provide('Samantha.io.FileInput');
goog.require('Samantha.io.Input');



/**
 * Reads a file at a given URL, converts it to a source buffer and makes it available for the context.
 *
 * @constructor
 * @extends {Samantha.io.Input}
 * @param {AudioContext} context Context for this input.
 * @param {string} url URL for the input file.
 */
Samantha.io.FileInput = function(context, url) {
    goog.base(this, context);

    var that = this,
        request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.responseType = 'arraybuffer';


    request.onload = function() {
        context.decodeAudioData(/** @type {ArrayBuffer} */(request.response), function(buffer) {
            that.setSourceBuffer(buffer);
            that.dispatchEvent('loaded');
        });
    };
    request.send();
};
goog.inherits(Samantha.io.FileInput, Samantha.io.Input);
