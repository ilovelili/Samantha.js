goog.require('SamanthaClosure.CircularPagination');
goog.require('SamanthaClosure.components.Carousel.Controller');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.Model');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.SpotView');

goog.provide('SamanthaClosure.components.ThumbnailedCarousel.SpotController');


/**
 * @constructor
 * @extends {SamanthaClosure.components.Carousel.Controller}
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController = function() {
    this.pagination = new SamanthaClosure.CircularPagination();
    goog.base(this);

};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.SpotController, SamanthaClosure.components.Carousel.Controller);

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.paginationClass = SamanthaClosure.CircularPagination;

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.itemCount = 1;

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.viewClass = SamanthaClosure.components.ThumbnailedCarousel.SpotView;

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.modelClass = SamanthaClosure.components.ThumbnailedCarousel.Model;

/**
 *  Thumbnailed Carousel's thumbnails template class
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.thumbnailsTemplateClass =
    SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsTemplate;

/**
 *  Thumbnailed Carousel's thumbnails controller class
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.thumbnailsControllerClass =
    SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController;

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.buildCarouselAction = function(visibleItems, totalItemCount) {
    goog.base(this, 'buildCarouselAction', visibleItems, totalItemCount);
    this.thumbnailsController = new this.thumbnailsControllerClass(this.model);
    var $thumbnails = this.thumbnailsController.getDOM();
    this.view.appendThumbnails($thumbnails);
};

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.SpotController.prototype.bindEvents = function() {
    goog.base(this, 'bindEvents');

    var that = this;
    goog.events.listen(this.modelPager, SamanthaClosure.Pagination.EventTypes.PAGE_CHANGED, function(e) {
        that.model.setActiveItem(e.newValue);
    });

    goog.events.listen(this.model, this.model.EventTypes.ACTIVE_ITEM, function(e) {
        that.modelPager.setCurrentPage(e.activeItem);
    });
};
