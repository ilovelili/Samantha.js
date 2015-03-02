/**
 * @fileoverview Base switch component.
 */


goog.provide('Samantha.footswitch.Momentary');
goog.require('Samantha.footswitch.MomentaryModel');
goog.require('Samantha.footswitch.Switch');



/**
 * Momentary switch component models a Momentary footswitch. It's on as long as you press it and turns off when you
 * release.
 *
 * @constructor
 * @extends {Samantha.footswitch.Switch}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
Samantha.footswitch.Momentary = function(opt_name) {
    goog.base(this, opt_name);
    this.state = false;
};
goog.inherits(Samantha.footswitch.Momentary, Samantha.footswitch.Switch);


/**
 * @type {function(new: Samantha.footswitch.SwitchModel, string=)}
 *       The component model this switch component will work with.
 */
Samantha.footswitch.Momentary.prototype.modelClass = Samantha.footswitch.MomentaryModel;

(function(proto) {
    proto.events = {};
    var mousedown = proto.events[goog.events.EventType.MOUSEDOWN] = {};
    var mouseup = proto.events[goog.events.EventType.MOUSEUP] = {};

    mousedown[proto.mappings.BUTTON] = proto.toggle;
    mouseup[proto.mappings.BUTTON] = proto.toggle;
})(Samantha.footswitch.Momentary.prototype);
