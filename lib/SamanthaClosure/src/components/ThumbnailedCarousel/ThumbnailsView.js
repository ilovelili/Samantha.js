goog.require('SamanthaClosure.components.Carousel.View');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate');

goog.provide('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsView');


/**
 * @extends {SamanthaClosure.components.Carousel.View}
 * @constructor
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsView = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsView, SamanthaClosure.components.Carousel.View);

SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsView.prototype.templateClass = SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate;
