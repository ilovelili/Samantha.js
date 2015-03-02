goog.require('SamanthaClosure.components.Carousel.Template');
goog.provide('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate');


/**
 * @extends {SamanthaClosure.components.Carousel.Template}
 * @constructor
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate, SamanthaClosure.components.Carousel.Template);

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate.prototype.footer = function() {
    return '';
}
