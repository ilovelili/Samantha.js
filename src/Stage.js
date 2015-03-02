/**
 * @fileoverview A stage is unique per session, has an Input, an Output and a Board.
 * Its board can be swapped with other boards.
 */

goog.provide('Samantha.Stage');
goog.require('Samantha.Board');
goog.require('Samantha.io.FileInput');
goog.require('Samantha.io.Output');
goog.require('Samantha.io.StreamInput');
goog.require('Samantha.ui.Component');



/**
 * Stage hosts pedal boards, input and output.
 *
 * @constructor
 * @extends {Samantha.ui.Component}
 */
Samantha.Stage = function() {
    goog.base(this);
    /**
     * The audio context for this stage.
     *
     * @protected
     * @type {AudioContext}
     */
    this.context = new AudioContext();

    this.initIO();
};
goog.inherits(Samantha.Stage, Samantha.ui.Component);


/**
 * Gives the audio context created for this stage. Every effect, input and output in this stage should be declared on
 * this context.
 *
 * @return {AudioContext} The audio context of this stage.
 */
Samantha.Stage.prototype.getContext = function() {
    return this.context;
};


/**
 * Initializes the input and the output.
 */
Samantha.Stage.prototype.initIO = function() {
    /*
        Example for FileInput:
           this.input = new Samantha.io.FileInput(this.context, 'audio/samples/sample1.mp3');

           goog.events.listen(this.input, 'loaded', function() {
               this.route();
           }, false, this);
     */

    this.input = new Samantha.io.Input(this.context);
    this.output = new Samantha.io.Output(this.context);
};


/**
 * Initializes the pedal components.
 * @param {Samantha.Board} board Board component.
 */
Samantha.Stage.prototype.setBoard = function(board) {
    this.board && this.board.dispose();

    this.board = board;
    this.mediaStreamDestination && this.board.setMediaStreamDestination(this.mediaStreamDestination);

    this.route();

    this.addChild(this.board);
};


/**
 * Routes the signal.
 * Input -> volume pedal -> reverb pedal
 */
Samantha.Stage.prototype.route = function() {
    this.input.disconnect();
    this.input.connect(this.board);
    this.board.connect(this.output);
};


/**
 * Sets the media stream destination for this stage. It will be forwarded to this stage's board.
 *
 * @param {MediaStreamDestination} destination Media stream destination for RTC peer connections.
 */
Samantha.Stage.prototype.setMediaStreamDestination = function(destination) {
    this.mediaStreamDestination = destination;
    this.board.setMediaStreamDestination(this.mediaStreamDestination);
};


/**
 * Plays the input.
 *
 * @param {string} url The url of the external sample. Since it will be interpreted as a relative path, it should
 * reside at the domain where the application runs.
 */
Samantha.Stage.prototype.play = function(url) {
    this.input.disconnect();
    this.input = new Samantha.io.FileInput(this.context, url);
    this.route();
    this.input.addEventListener('loaded', this.input.play.bind(this.input, 0), false);
};


/**
 * Stops the input.
 */
Samantha.Stage.prototype.stop = function() {
    this.input.stop();
};


/**
 * @override
 */
Samantha.Stage.prototype.templates_base = function() {
    return '<div id="' + this.getId() + '" class="stage"></div>';
};
