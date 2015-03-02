/**
 * @fileoverview Base switch component.
 */


goog.provide('Samantha.footswitch.Switch');
goog.require('Samantha.footswitch.SwitchModel');
goog.require('Samantha.ui.Component');



/**
 * Switch component models a footswitch. This base class is used to toggle stompbox nodes.
 *
 * @constructor
 * @extends {Samantha.ui.Component}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
Samantha.footswitch.Switch = function(opt_name) {
    this.model = new this.modelClass(opt_name);
    goog.base(this);
};
goog.inherits(Samantha.footswitch.Switch, Samantha.ui.Component);


/**
 * @type {function(new: Samantha.footswitch.SwitchModel, string=)}
 *       The component model this switch component will work with.
 */
Samantha.footswitch.Switch.prototype.modelClass = Samantha.footswitch.SwitchModel;


/**
 * Sets the nodes this switch will toggle.
 *
 * @param {Array.<Array.<AudioNode>>} nodes Nodes of this switch.
 */
Samantha.footswitch.Switch.prototype.setNodes = function(nodes) {
    this.model.setNodes(nodes);
};


/**
 * Returns the current state of the switch. Return value is true if the switch is on, and false if otherwise.
 *
 * @return {boolean} Whether the switch is on or off.
 */
Samantha.footswitch.Switch.prototype.getState = function() {
    return this.model.state;
};


/**
 * Toggles the switch.
 */
Samantha.footswitch.Switch.prototype.toggle = function() {
    this.model.toggle();
};


/**
 * @override
 */
Samantha.footswitch.Switch.prototype.templates_base = function() {
    return '<div class="switch" id="' + this.getId() + '">' +
               '<div class="button"></div>' +
               this.templates_name() +
           '</div>';
};


/**
 * @return {string} Name template. Returns empty string if no name is given.
 */
Samantha.footswitch.Switch.prototype.templates_name = function() {
    return this.model.name ? ('<div class="name">' + this.model.name + '</div>') : '';
};


/**
 * @enum {string} DOM mappings.
 */
Samantha.footswitch.Switch.prototype.mappings = {
    BUTTON: '.button'
};


(function(proto) {
    proto.events = {};
    var click = proto.events[goog.events.EventType.CLICK] = {};

    click[proto.mappings.BUTTON] = proto.toggle;
})(Samantha.footswitch.Switch.prototype);
