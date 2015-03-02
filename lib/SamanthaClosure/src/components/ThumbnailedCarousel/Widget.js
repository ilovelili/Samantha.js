goog.require('SamanthaClosure.components.Carousel.Widget');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.SpotController');
goog.provide('SamanthaClosure.components.ThumbnailedCarousel.Widget');



/**
 * @extends {SamanthaClosure.components.Carousel.Widget}
 * @constructor
 */
SamanthaClosure.components.ThumbnailedCarousel.Widget = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.Widget, SamanthaClosure.components.Carousel.Widget);

SamanthaClosure.components.ThumbnailedCarousel.Widget.prototype.controllerClass = SamanthaClosure.components.ThumbnailedCarousel.SpotController;
