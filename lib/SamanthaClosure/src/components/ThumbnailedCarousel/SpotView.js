goog.require('SamanthaClosure.components.Carousel.View');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.SpotTemplate');

goog.provide('SamanthaClosure.components.ThumbnailedCarousel.SpotView');


/**
 * @extends {SamanthaClosure.components.Carousel.View}
 * @constructor
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotView = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.SpotView, SamanthaClosure.components.Carousel.View);

SamanthaClosure.components.ThumbnailedCarousel.SpotView.prototype.templateClass = SamanthaClosure.components.ThumbnailedCarousel.SpotTemplate;

/**
 * @param {string|jQueryObject} $dom for append thumbnails to carousel.
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotView.prototype.appendThumbnails = function($dom) {
    this.get(this.domMappings.THUMBNAILS_CONTAINER).append($dom);
};
