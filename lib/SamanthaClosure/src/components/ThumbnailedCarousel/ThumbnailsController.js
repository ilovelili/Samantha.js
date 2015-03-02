goog.require('SamanthaClosure.CircularPagination');
goog.require('SamanthaClosure.components.Carousel.Controller');
goog.require('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsView');

goog.provide('SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController');


/**
 * @constructor
 * @extends {SamanthaClosure.components.Carousel.Controller}
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController = function(model) {
    this.pagination = new this.paginationClass();
    this.model = model || new this.modelClass();
    this.modelPager = new SamanthaClosure.base.plugin.Pager(this.model, new this.paginationClass());
    this.modelPager.setOffset(0);
    this.modelPager.setLimit(this.itemCount);
    this.view = new this.viewClass();
    this.buildDOM();
    this.bindEvents();
    var items = this.model.getItems(); // true = trigger load event after items loaded
    this.buildCarouselAction(items, this.model.getTotalItemCount());
};
goog.inherits(SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController, SamanthaClosure.components.Carousel.Controller);

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController.prototype.viewClass = SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsView;

/**
 * @override
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController.prototype.bindEvents = function() {
    goog.base(this, 'bindEvents');
    var that = this;
    goog.events.listen(that.model, this.model.EventTypes.ACTIVE_ITEM, function(e) {
        that.modelPager.setCurrentPage(Math.ceil(e.activeItem / that.modelPager.pagination_.getItemPerPage()));
        that.view.setActiveItem(e.activeItem);
    });
};

/**
 *
 * @param visibleItems
 * @param totalItemCount
 */
SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController.prototype.buildCarouselAction = function(visibleItems, totalItemCount) {
    goog.base(this, 'buildCarouselAction', visibleItems, totalItemCount);

    this.bindThumbnailEvents();
    this.view.setActiveItem(1);
};

SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController.prototype.goToPageAction = function(p) {
    goog.base(this, 'goToPageAction', p, null);

    this.bindThumbnailEvents();
};

SamanthaClosure.components.ThumbnailedCarousel.ThumbnailsController.prototype.bindThumbnailEvents = function() {
    var that = this;
    var items = that.model.getItems();

    goog.array.forEach(items, function(item, i) {
        goog.events.removeAll(item.$thumbnail[0], goog.events.EventType.CLICK);
        (function(item, i) {
            goog.events.listen(item.$thumbnail[0], goog.events.EventType.CLICK, function(e) {
                var offset = (that.modelPager.getCurrentPage() - 1) * that.modelPager.getLimit();
                that.model.setActiveItem(offset + i);
            });
        })(item, i + 1);
    });
};


