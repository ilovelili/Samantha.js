/**
 * @fileoverview Base switch component model.
 */


goog.provide('Samantha.footswitch.ToggleModel');
goog.require('Samantha.footswitch.SwitchModel');



/**
 * @constructor
 * @extends {Samantha.footswitch.SwitchModel}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
Samantha.footswitch.ToggleModel = function(opt_name) {
    goog.base(this, opt_name);
    this.state = true;
};
goog.inherits(Samantha.footswitch.ToggleModel, Samantha.footswitch.SwitchModel);
