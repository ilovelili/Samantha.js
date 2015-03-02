/**
 * @fileoverview Linear pot component model.
 */


goog.provide('Samantha.pot.LinearModel');
goog.require('Samantha.pot.PotModel');



/**
 * Linear model provides a potentiometer behavior similar to real world linear potentiometers.
 *
 * @constructor
 * @extends {Samantha.pot.PotModel}
 *
 * @param {AudioParam|Function} param Audio parameter this pot will adjust. Can be gain, etc.
 * @param {string} name Name of the pot. Will be written under it.
 * @param {number} multiplier The multiplier of the effect. Some effects (such as gain) need this to be on the order of
 *                       thousands.
 * @param {number=} opt_max Optional minimum value for the pot. Default value is 0.
 * @param {number=} opt_min Optional maximum value for the pot. Default value is 1.
 * @param {number=} opt_default Optional default value for the pot. Default value is 0.5.
 */
Samantha.pot.LinearModel = function(param, name, multiplier, opt_min, opt_max, opt_default) {
    goog.base(this, param, name, multiplier, opt_min, opt_max, opt_default);
};
goog.inherits(Samantha.pot.LinearModel, Samantha.pot.PotModel);
