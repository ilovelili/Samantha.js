/**
 * @fileoverview This class offers a base class for model implementations. It makes no enforcements as how to shape
 * your model, it's just a basic container. Subclasses of this class should accept either a JS object or a value class
 * instance.
 *
 * See SamanthaClosure.ui.Component for details on the model's responsibilities.
 */

goog.provide('SamanthaClosure.ui.ComponentModel');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
SamanthaClosure.ui.ComponentModel = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.ui.ComponentModel, goog.events.EventTarget);

