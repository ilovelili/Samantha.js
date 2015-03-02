goog.require('SamanthaClosure.components.Carousel.Model');
goog.provide('SamanthaClosure.components.ThumbnailedCarousel.Model');


/**
 * @extends {SamanthaClosure.components.Carousel.Model}
 * @constructor
 */
SamanthaClosure.components.ThumbnailedCarousel.Model = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.Model, SamanthaClosure.components.Carousel.Model);

/**
 * @param {Array} activeItem Active carousel items.
 */
SamanthaClosure.components.ThumbnailedCarousel.Model.prototype.setActiveItem = function(activeItem) {
    this.activeItem = activeItem;
    this.dispatchEvent({
        type: this.EventTypes.ACTIVE_ITEM,
        activeItem: activeItem
    });
};

SamanthaClosure.components.ThumbnailedCarousel.Model.prototype.EventTypes = {
    ACTIVE_ITEM: 'activeItem'
};
