/**
 * @fileoverview Pedal board is responsible for hosting pedals and routing them.
 */

goog.provide('Samantha.Board');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');
goog.require('Samantha.stomp.Cabinet');
goog.require('Samantha.stomp.Overdrive');
goog.require('Samantha.stomp.Reverb');
goog.require('Samantha.stomp.Volume');
goog.require('Samantha.stomp.Delay');
goog.require('SamanthaClosure.ui.DlgComponent');



/**
 * Board that hosts pedals.
 *
 * @constructor
 * @extends {Samantha.Connectable}
 *
 * @param {AudioContext} context The audio context of this board.
 */
Samantha.Board = function(context) {
    goog.base(this, context);
    this.context = context;
};
goog.inherits(Samantha.Board, Samantha.Connectable);


/**
 * Pedals of this board.
 *
 * @protected
 * @type {Array.<Samantha.stomp.Box>}
 */
Samantha.Board.prototype.pedals = null;


/**
 * Adds pedals to this board. An alias method for addChildren.
 * @param {Array.<Samantha.stomp.Box>} pedals Pedals.
 */
Samantha.Board.prototype.addPedals = function(pedals) {
    Samantha.ui.Component.prototype.addChildren.call(this, pedals);
};


/**
 * Calculates and draws shadows for pedals and their pots.
 */
Samantha.Board.prototype.doShadows = function() {
    this.getPedals().forEach(function(pedal) {
        Samantha.shadowMaker(pedal.getElement(), 40, 0.5, 0.7);
        pedal.pots.forEach(function(pot) {
            Samantha.shadowMaker(pot.$(pot.mappings.KNOB_HOLDER)[0], 10, 0.5, 4);
        });
    });
};


/**
 * @override
 *
 * @param {Samantha.stomp.Box} child Child pedal to add to this board.
 * @param {number} index Where the child pedal should be put at.
 * @param {boolean=} opt_render Whether the pedal should be rendered after the call to this function.
 */
Samantha.Board.prototype.addChildAt = function(child, index, opt_render) {
    goog.base(this, 'addChildAt', child, index, opt_render);

    if (this.getPedals().length)
        goog.dom.removeNode(this.$(this.mappings.EMPTY)[0]);

    this.routeInternal();
    if (this.isInDocument()) this.doShadows();
};


/**
 * Convenience method for adding pedals at a given index.
 *
 * @param {Samantha.stomp.Box} child Child pedal to add to this board.
 * @param {number} index Where the child pedal should be put at.
 * @param {boolean=} opt_render Whether the pedal should be rendered after the call to this function.
 */
Samantha.Board.prototype.addPedalAt = function(child, index, opt_render) {
    this.addChildAt(child, index, opt_render);
};


/**
 * @override
 */
Samantha.Board.prototype.removeChild = function(child, opt_unrender) {
    var el = goog.base(this, 'removeChild', child, opt_unrender);

    if (this.getPedals().length == 0)
        this.getElement().innerHTML = this.templates_empty();

    this.routeInternal();
    return el;
};


/**
 * @override
 */
Samantha.Board.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');
    this.doShadows();
};


/**
 * Returns the pedals in this board.
 *
 * @return {Array.<Samantha.stomp.Box>} Pedals in this board.
 */
Samantha.Board.prototype.getPedals = function() {
    return this.getChildren();
};


/**
 * @override
 */
Samantha.Board.prototype.templates_base = function() {
    return '<div id="' + this.getId() + '" class="board">' +
               this.templates_empty() +
           '</div>';
};


Samantha.Board.prototype.templates_empty = function() {
    return '<div class="empty"><div class="text">board is empty</div></div>';
};


/**
 * @override
 */
Samantha.Board.prototype.connect = function(destination) {
    goog.base(this, 'connect', destination);
    this.output = destination;
    this.routeInternal();
};


/**
 * Routes the pedals.
 *
 * @protected
 */
Samantha.Board.prototype.routeInternal = function() {
    var fx = this.getPedals();

    this.getInput().disconnect();

    if (fx.length) {
        this.getInput().connect(fx[0].getInput());
        this.output && fx[fx.length - 1].connect(this.output);

        fx.forEach(function(pedal, i) {
            pedal.disconnect();
            fx[i + 1] && pedal.connect(fx[i + 1]);
        });
        this.output && this.mediaStreamDestination && fx[fx.length - 1].model.getOutput().connect(this.mediaStreamDestination);
    }
    else {
        this.getInput().connect(this.getOutput());
        this.mediaStreamDestination && this.getInput().connect(this.mediaStreamDestination);
    }
};


/**
 * Sets the media stream destination for this board. The output will be sent to the media stream destination, too.
 *
 * @param {MediaStreamDestination} destination Media stream destination for RTC peer connections.
 */
Samantha.Board.prototype.setMediaStreamDestination = function(destination) {
    this.mediaStreamDestination = destination;
};


/**
 * @enum {string} DOM mappings.
 */
Samantha.Board.prototype.mappings = {
    EMPTY: '.empty'
};
