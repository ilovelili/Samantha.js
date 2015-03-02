/**
 * @fileoverview Base switch component model.
 */


goog.provide('Samantha.footswitch.MomentaryModel');
goog.require('Samantha.footswitch.SwitchModel');



/**
 * @constructor
 * @extends {Samantha.footswitch.SwitchModel}
 *
 * @param {string=} opt_name Name of the switch. Will be written under it.
 */
Samantha.footswitch.MomentaryModel = function(opt_name) {
    goog.base(this, opt_name);
    this.state = false;
};
goog.inherits(Samantha.footswitch.MomentaryModel, Samantha.footswitch.SwitchModel);
