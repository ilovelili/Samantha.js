/**
 * @fileoverview SamanthaClosure.components.Carousel.Widget is a base for all carousel widgets.
 */

goog.provide('SamanthaClosure.components.Carousel.Widget');

goog.require('SamanthaClosure.components.Carousel.Controller');
goog.require('SamanthaClosure.components.Widget');


/**
 * @constructor
 * @extends {SamanthaClosure.components.Widget}
 */
SamanthaClosure.components.Carousel.Widget = function() {
    this.controller = new this.controllerClass();
    goog.base(this);
    this.init();
};
goog.inherits(SamanthaClosure.components.Carousel.Widget, SamanthaClosure.components.Widget);

/**
 *
 */
SamanthaClosure.components.Carousel.Widget.prototype.controllerClass = SamanthaClosure.components.Carousel.Controller;

SamanthaClosure.components.Carousel.Widget.prototype.init = function() {
    this.controller.model.getItems(true);
};
