/**
 * @fileoverview Base pot component.
 */


goog.provide('Samantha.pot.Log');
goog.require('Samantha.pot.LogModel');
goog.require('Samantha.pot.Pot');



/**
 * Log pot component models a logarithmic potentiometer.
 *
 * @constructor
 * @extends {Samantha.pot.Pot}
 *
 * @param {AudioParam|Function} param Audio parameter this pot will adjust. Can be gain, etc. If more complex
 *     calculation is desired, one can pass a callback function which will be triggered each time the value of this pot
 *     changes.
 * @param {string} name Name of the pot. Will be written under it.
 * @param {number} multiplier The multiplier of the effect. Some effects (such as gain) need this to be on the order of
 *                       thousands.
 * @param {string=} opt_size Size of the pot. Might be one of the values in Samantha.pot.Pot.Size enum. Default is REGULAR.
 *     This size is added to the pot's class names for easier styling.
 * @param {number=} opt_max Optional minimum value for the pot. Default value is 0.
 * @param {number=} opt_min Optional maximum value for the pot. Default value is 1.
 * @param {number=} opt_default Optional default value for the pot. Default value is 0.5.
 */
Samantha.pot.Log = function(param, name, multiplier, opt_size, opt_min, opt_max, opt_default) {
    goog.base(this, param, name, multiplier, opt_size, opt_min, opt_max, opt_default);
};
goog.inherits(Samantha.pot.Log, Samantha.pot.Pot);


/**
 * @type {function(new: Samantha.pot.LogModel, (AudioParam|Function), string, number, number=, number=, number=)}
 *       The component model this pot component will work with.
 * @override
 */
Samantha.pot.Log.prototype.modelClass = Samantha.pot.LogModel;
