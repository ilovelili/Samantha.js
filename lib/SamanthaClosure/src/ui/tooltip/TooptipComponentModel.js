/**
 * @fileoverview
 */

goog.provide('SamanthaClosure.ui.TooltipComponentModel');
goog.require('SamanthaClosure.ui.ComponentModel');
goog.require('SamanthaClosure.StateMachine');



/**
 * @constructor
 * @extends {SamanthaClosure.ui.ComponentModel}
 */
SamanthaClosure.ui.TooltipComponentModel = function(options) {
    options = options || {};
    this.options = {};
    this.options.timeout = options.timeout || this.timeout;
    this.options.type = options.type || this.type;
    this.options.direction = options.direction || this.direction;
    this.initStateMachine();
};
goog.inherits(SamanthaClosure.ui.TooltipComponentModel, SamanthaClosure.ui.ComponentModel);


/**
 * How long it should take the tooltip to appear for a given event type, in milliseconds.
 * Timeout 0 is instant activation.
 *
 * @type {number}
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.timeout = 0;


/**
 * Actions to trigger this tooltip. It can be triggered on click or on hover. Default is hover.
 *
 * @enum {string}
 */
SamanthaClosure.ui.TooltipComponentModel.Type = {
    CLICK: 'click',
    HOVER: 'hover'
};


/**
 * Tooltip is triggered on hover by default.
 *
 * @type {SamanthaClosure.ui.TooltipComponentModel.Type}
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.type = SamanthaClosure.ui.TooltipComponentModel.Type.HOVER;


/**
 * How many pixels away the tip should be with respect to the reference element. For top and bottom directions, this
 * is horizontal. For left and right this is vertical. Element (box) positioning is fluid, but this distance should
 * always be kept.
 *
 * @type {number}
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.tipOffset = 20;


/**
 * How many pixels away the box (element) should be positioned with respect to the reference element.
 *
 * @type {number}
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.boxOffset = 3;


/**
 * If the size of the reference element is greater than this threshold, the tip should be placed at a distance of
 * tipOffset. Else, the tip should point to the center of the reference element.
 *
 * @type {number}
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.offsetThreshold = 30;


/**
 * Events that this model dispatches at corresponding states
 *
 * @enum {string}
 */
SamanthaClosure.ui.TooltipComponentModel.EventType = {
    INIT: 'init',
    SHOW: 'show',
    CLICK_WAIT: 'clickWait',
    HOVER_WAIT: 'hoverWait'
};


/**
 * Transition events for the internal state machine
 * @enum {string}
 */
SamanthaClosure.ui.TooltipComponentModel.SMEventType = {
    TIMEOUT: 'timeout',
    BODY_CLICK: 'bodyClick',
    MOUSEOVER: goog.events.EventType.MOUSEOVER,
    MOUSEOUT: goog.events.EventType.MOUSEOUT,
    CLICK: goog.events.EventType.CLICK
};


/**
 * Direction this tooltip will be shown regarding the reference element.
 * @enum {string}
 */
SamanthaClosure.ui.TooltipComponentModel.Direction = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
    TOP_LEFT: 'topLeft'
};

SamanthaClosure.ui.TooltipComponentModel.prototype.direction = SamanthaClosure.ui.TooltipComponentModel.Direction.TOP;


/**
 * @protected
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.initStateMachine = function() {
    var that = this;
    this.mEvents = SamanthaClosure.ui.TooltipComponentModel.EventType;

    /** @protected */
    this.stateMachine = new SamanthaClosure.StateMachine();
    this.stateMachine.smEvents = SamanthaClosure.ui.TooltipComponentModel.SMEventType;

    this.timeoutHandler = false;

    this.stateMachine.createStates = function() {
        var sm = this;

        var INIT = new SamanthaClosure.State(function() {
            clearTimeout(that.timeoutHandler);
            that.dispatchEvent({
                type: that.mEvents.INIT
            });
        });
        var CLICK_WAIT = new SamanthaClosure.State(function() {
            that.dispatchEvent({
                type: that.mEvents.CLICK_WAIT
            });
            that.timeoutHandler = setTimeout(function() {
                sm.publish(sm.smEvents.TIMEOUT);
            }, that.options.timeout);
        });
        var SHOW = new SamanthaClosure.State(function() {
            clearTimeout(that.timeoutHandler);
            that.dispatchEvent({
                type: that.mEvents.SHOW
            });
        });
        var HOVER_WAIT = new SamanthaClosure.State(function() {
            that.dispatchEvent({
                type: that.mEvents.HOVER_WAIT
            });
            that.timeoutHandler = setTimeout(function() {
                sm.publish(sm.smEvents.TIMEOUT);
            }, that.options.timeout);
        });

        switch (that.options.type) {
            case SamanthaClosure.ui.TooltipComponentModel.Type.CLICK:
                INIT.transitions[this.smEvents.CLICK] = CLICK_WAIT;
                CLICK_WAIT.transitions[this.smEvents.BODY_CLICK] = INIT;
                CLICK_WAIT.transitions[this.smEvents.TIMEOUT] = SHOW;
                SHOW.transitions[this.smEvents.BODY_CLICK] = INIT;
                SHOW.transitions[this.smEvents.CLICK] = INIT;

                break;

            case SamanthaClosure.ui.TooltipComponentModel.Type.HOVER:
            default:
                INIT.transitions[this.smEvents.MOUSEOVER] = HOVER_WAIT;
                HOVER_WAIT.transitions[this.smEvents.MOUSEOUT] = INIT;
                HOVER_WAIT.transitions[this.smEvents.TIMEOUT] = SHOW;
                SHOW.transitions[this.smEvents.MOUSEOUT] = INIT;
        }

        this.addState(INIT);
        this.addState(CLICK_WAIT);
        this.addState(SHOW);
        this.addState(HOVER_WAIT);
        return INIT;
    }

    this.stateMachine.startMachine();
};


/**
 * @param {string} type
 */
SamanthaClosure.ui.TooltipComponentModel.prototype.handleEvent = function(type) {
    this.stateMachine.publish(type);
};


SamanthaClosure.ui.TooltipComponentModel.prototype.reset = function() {
    this.stateMachine.reset();
};
