/**
 * @fileoverview Base switch component.
 */


goog.provide('Samantha.footswitch.Toggle');
goog.require('Samantha.footswitch.Switch');
goog.require('Samantha.footswitch.ToggleModel');



/**
 * Toggle switch component models a toggle footswitch. It's on after you press it once and stays on until you press it
 * a second time when it will then be off.
 *
 * @constructor
 * @extends {Samantha.footswitch.Switch}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
Samantha.footswitch.Toggle = function(opt_name) {
    goog.base(this, opt_name);
};
goog.inherits(Samantha.footswitch.Toggle, Samantha.footswitch.Switch);


/**
 * @type {function(new: Samantha.footswitch.SwitchModel, string=)}
 *       The component model this switch component will work with.
 */
Samantha.footswitch.Toggle.prototype.modelClass = Samantha.footswitch.ToggleModel;
