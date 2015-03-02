goog.require('SamanthaClosure.components.Carousel.Template');
goog.provide('SamanthaClosure.components.ThumbnailedCarousel.SpotTemplate');


/**
 * @extends {SamanthaClosure.components.Carousel.Template}
 * @constructor
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotTemplate = function() {
    goog.base(this);
    this.domMappings.THUMBNAILS_CONTAINER = '.thumbs';
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.SpotTemplate, SamanthaClosure.components.Carousel.Template);

/**
 * Base function to create dom.
 *
 * @return {string} base markup of spot.
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotTemplate.prototype.base = function() {
    var markup = '<div class="carousel loading thumbnailedCarousel">' +
        '<span class="navigation next" title="ileri"></span>' +
        '<span class="navigation prev" title="geri"></span>' +
        '<div class="contentsWrapper">' +
        '<div class="contents"></div>' +
        '</div>' +
        '<div class="thumbs"></div>';

    return markup;
};
