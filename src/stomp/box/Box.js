/**
 * @fileoverview Base pedal.
 */

goog.provide('Samantha.stomp.Box');
goog.require('Samantha.Connectable');
goog.require('Samantha.Led');
goog.require('Samantha.footswitch.Momentary');
goog.require('Samantha.footswitch.Toggle');
goog.require('Samantha.pot.Linear');
goog.require('Samantha.shadowMaker');
goog.require('Samantha.stomp.BoxModel');



/**
 * Base pedal.
 *
 * @constructor
 * @extends {Samantha.Connectable}
 * @param {AudioContext} context Audio context the pedal will work on.
 */
Samantha.stomp.Box = function(context) {
    goog.base(this, context);
};
goog.inherits(Samantha.stomp.Box, Samantha.Connectable);


/**
 * @type {function(new: Samantha.stomp.BoxModel, AudioContext)} The component model this component will
 *       work with.
 */
Samantha.stomp.Box.prototype.modelClass = Samantha.stomp.BoxModel;


/**
 * @override
 */
Samantha.stomp.Box.prototype.createChildComponents = function() {
    this.createPots();
    this.createSwitches();
};


/**
 * Creates the potentiometers of this stomp box.
 */
Samantha.stomp.Box.prototype.createPots = function() {
    this.volumePot = new Samantha.pot.Linear(this.model.level.gain, 'volume', 1);
    this.volumePot.setValue(1);

    this.pots = [this.volumePot];
};


/**
 * Creates the switches of this stomp box.
 */
Samantha.stomp.Box.prototype.createSwitches = function() {
    this.bypassSwitch = new Samantha.footswitch.Toggle();
    this.led = new Samantha.Led(this.bypassSwitch);
    this.leds = [this.led];
    this.switches = [this.bypassSwitch];

    var that = this;
    goog.events.listen(this.bypassSwitch.model, Samantha.footswitch.SwitchModel.EventType.ON, function() {
        this.model.routeInternal();
        setTimeout(function() {
            that.model.routeInternal();
        }, 10);
    }, false, this);
};


/**
 * @override
 */
Samantha.stomp.Box.prototype.connect = function(destination) {
    goog.base(this, 'connect', destination);

    this.bypassSwitch.setNodes(this.model.nodes);
};


/**
 * Sets the level of the effect.
 *
 * @param {number} newLevel The new level of the effect.
 */
Samantha.stomp.Box.prototype.setLevel = function(newLevel) {
    this.volumePot.setValue(newLevel);
};


/**
 * @override
 */
Samantha.stomp.Box.prototype.templates_base = function() {
    return '' +
        '<div id="' + this.getId() + '" class="box ' + this.name + '">' +
           '<div class="pots"></div>' +
           '<div class="name">' + this.name + '</div>' +
           '<div class="leds"></div>' +
           '<div class="switches"></div>' +
        //           '<div class="obg"></div>' +
        //           '<div class="bg"></div>' +
        //           '<div class="bgs">' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //               '<div class="bg"></div>' +
        //           '</div>'+
        '</div>';
};


/**
 * This method is called after the stomp box is appended to DOM. It then renders all its potentiometers.
 */
Samantha.stomp.Box.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');

    this.pots.forEach(function(pot) {
        pot.render(this.$(this.mappings.POTS)[0]);
    }, this);

    this.switches.forEach(function(sw) {
        sw.render(this.$(this.mappings.SWITCHES)[0]);
    }, this);

    this.leds.forEach(function(led) {
        led.render(this.$(this.mappings.LEDS)[0]);
    }, this);
};


/**
 * DOM selector mappings.
 *
 * @enum {string}
 */
Samantha.stomp.Box.prototype.mappings = {
    POTS: '.pots',
    SWITCHES: '.switches',
    LEDS: '.leds'
};


/**
 * Name of the pedal. It's written on top plate.
 *
 * @type {string}
 */
Samantha.stomp.Box.prototype.name = 'Samantha';
