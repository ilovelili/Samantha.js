goog.provide('Samantha.io.Input');
goog.require('goog.events.EventTarget');
goog.require('Samantha.IConnectable');



/**
 * The input wrapper for an audio context.
 *
 * @constructor
 * @implements {Samantha.IConnectable}
 * @extends {goog.events.EventTarget}
 * @param {AudioContext} context Audio context for this input.
 */
Samantha.io.Input = function(context) {
    this.source = context.createBufferSource(); // creates a sound source
    this.source.loop = true;

    this.state = Samantha.io.Input.State.NOT_STARTED;
    this.source.addEventListener('ended', this.onEnded.bind(this));
};
goog.inherits(Samantha.io.Input, goog.events.EventTarget);


/**
 * Playback states that partially fulfills the deprecated playbackState in Web Audio API. Basically it helps to avoid
 * exceptions when start or stop is called inappropriately.
 *
 * @enum {string}
 */
Samantha.io.Input.State = {
    NOT_STARTED: 'notStarted',
    PLAYING: 'playing',
    FINISHED: 'finished'
};


/**
 * Starts playing the input.
 *
 * @param {number=} opt_time Milliseconds after whom this input will start playing.
 */
Samantha.io.Input.prototype.play = function(opt_time) {
    if (this.state == Samantha.io.Input.State.NOT_STARTED) {
        this.source.start(opt_time || 0);
        this.state = Samantha.io.Input.State.PLAYING;
    }
};


/**
 * Stops playing the input.
 *
 * @param {number=} opt_time Milliseconds after whom this input will stop playing.
 */
Samantha.io.Input.prototype.stop = function(opt_time) {
    if (this.state == Samantha.io.Input.State.PLAYING) {
        this.source.stop(opt_time || 0);
        this.state = Samantha.io.Input.State.FINISHED;
    }
};


/**
 * Sets the source buffer of this input.
 *
 * @protected
 * @param {AudioBuffer} sourceBuffer The new buffer.
 */
Samantha.io.Input.prototype.setSourceBuffer = function(sourceBuffer) {
    this.source.buffer = sourceBuffer;
};


/**
 * Connects this input to a destination pedal.
 *
 * @param {Samantha.IConnectable} destination Next pedal where this input will connect to.
 */
Samantha.io.Input.prototype.connect = function(destination) {
    destination.setPrev(this);
    this.source.connect(destination.getInput());
};


/**
 * Disconnects this input from wherever it's connected to.
 */
Samantha.io.Input.prototype.disconnect = function() {
    this.source.disconnect();
};


/**
 * Gets the source of this input.
 *
 * @return {AudioBufferSourceNode} The source of this input.
 */
Samantha.io.Input.prototype.getOutput = function() {
    return this.source;
};


/**
 * Handler for the end event. When the playback of the input ends, this method correctly sets the State to FINISHED.
 */
Samantha.io.Input.prototype.onEnded = function() {
    this.state = Samantha.io.Input.State.FINISHED;
};


/**
 * Dummy method for the Connectable interface. It's meaningless for an input to be connected to the output of another
 * thing.
 */
Samantha.io.Input.prototype.setPrev = function() {};


/**
 * Dummy method for the Connectable interface. It's meaningless for an input to have an input.
 */
Samantha.io.Input.prototype.getInput = function() {};
