/**
 * @fileoverview Base switch component model.
 */

goog.require('SamanthaClosure.ui.ComponentModel');
goog.provide('Samantha.footswitch.SwitchModel');



/**
 * @constructor
 * @extends {SamanthaClosure.ui.ComponentModel}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
Samantha.footswitch.SwitchModel = function(opt_name) {
    goog.base(this);

    this.name = opt_name;
    this.nodes = [[], [], []];
    this.state = false;
};
goog.inherits(Samantha.footswitch.SwitchModel, SamanthaClosure.ui.ComponentModel);


/**
 * Toggles the switch and fires an event accordingly.
 */
Samantha.footswitch.SwitchModel.prototype.toggle = function() {
    var oldState = this.state,
        eventType;

    this.state = !this.state;

    if (this.state) this.turnOn();
    else this.turnOff();

    eventType = this.state ? Samantha.footswitch.SwitchModel.EventType.ON :
        Samantha.footswitch.SwitchModel.EventType.OFF;

    this.dispatchEvent({
        type: eventType,
        newValue: this.state,
        oldValue: oldState
    });
};


/**
 * Fired when the switch should be toggled on. Togges internal nodes; middle nodes are connected to the first.
 */
Samantha.footswitch.SwitchModel.prototype.turnOn = function() {
    var work = function(nodes) {
        nodes[1].disconnect();
        if (nodes[0]) nodes[1].connect(nodes[0]);
    }

    goog.array.forEach(this.nodes, function(nodes) {
        if (nodes) {
            (function(nodes) {
                work(nodes);
                setTimeout(function() {
                    work(nodes);
                }, 10);
            })(nodes);
        }
    });
};


/**
 * Fired when the switch should be toggled off. Toggles internal nodes; middle nodes are connected to the third.
 */
Samantha.footswitch.SwitchModel.prototype.turnOff = function() {
    var work = function(nodes) {
        nodes[1].disconnect();
        if (nodes[2]) nodes[1].connect(nodes[2]);
    }

    goog.array.forEach(this.nodes, function(nodes) {
        (function(nodes) {
            work(nodes);
            setTimeout(function() {
                work(nodes);
            }, 10);
        })(nodes);
    });
};


/**
 * Sets the nodes this switch will toggle.
 *
 * @param {Array.<Array.<AudioNode>>} nodes Nodes of this switch.
 */
Samantha.footswitch.SwitchModel.prototype.setNodes = function(nodes) {
    this.nodes = nodes;

    // Kick off toggling. Since this.toggle will invert the state and we just want to make an initial event dispatch,
    // we invert the state; so that toggle will correct it and dispatch the correct event.
    this.state = !this.state;
    this.toggle();
};


/**
 *
 * @enum {string}
 */
Samantha.footswitch.SwitchModel.EventType = {
    ON: 'on',
    OFF: 'off'
};
