/**
 * @fileoverview SamanthaClosure.components.Carousel.Controller is a base class for all carousel Controller's.
 */


goog.require('goog.events.EventTarget');
goog.require('goog.events.EventTarget');
goog.require('SamanthaClosure.Pagination');
goog.require('SamanthaClosure.base.plugin.Pager');
goog.require('SamanthaClosure.components.Carousel.Model');
goog.require('SamanthaClosure.components.Carousel.Template');
goog.require('SamanthaClosure.components.Carousel.View');
goog.require('SamanthaClosure.components.Controller');

goog.provide('SamanthaClosure.components.Carousel.Controller');



/**
 * Example controller class
 *
 * @extends {SamanthaClosure.components.Controller}
 *
 * @constructor
 */
SamanthaClosure.components.Carousel.Controller = function() {
    this.model = this.model || new this.modelClass();
    this.modelPager = new SamanthaClosure.base.plugin.Pager(this.model, new this.paginationClass());
    this.modelPager.setOffset(0);
    this.modelPager.setLimit(this.itemCount);
    this.view = new this.viewClass();
    this.buildDOM();
    this.bindEvents();
};
goog.inherits(SamanthaClosure.components.Carousel.Controller, SamanthaClosure.components.Controller);

/**
 * Carousel's View Class
 */
SamanthaClosure.components.Carousel.Controller.prototype.viewClass = SamanthaClosure.components.Carousel.View;

/**
 * Carousel's Model Class
 */
SamanthaClosure.components.Carousel.Controller.prototype.modelClass = SamanthaClosure.components.Carousel.Model;

/**
 * Carousel's Pagination Class
 */
SamanthaClosure.components.Carousel.Controller.prototype.paginationClass = SamanthaClosure.Pagination;

/**
 * Number of carousel items
 */
SamanthaClosure.components.Carousel.Controller.prototype.itemCount = 5;


/**
 * Build carousel after items' loaded
 * @param {Object} visibleItems visible items.
 * @param {number} totalItemCount total item count.
 */
SamanthaClosure.components.Carousel.Controller.prototype.buildCarouselAction = function(visibleItems, totalItemCount) {
    if (visibleItems.length == 0)
		this.view.noResults();
	else {
	    //build carousel
	    this.view.buildCarouselItems(visibleItems);
	    //build pagination
	    this.modelPager.setTotalItems(totalItemCount);
	    if (totalItemCount > this.itemCount) {
	        this.view.buildPager(this.modelPager);
	    }
	}
    
	this.view.handleNavigationButtons(this.modelPager.hasNext(), this.modelPager.hasPrev());
};


/**
 * Go to page in given direction
 * @param {string} direction move direction.
 * @param {Number} pageNumber page number to go.
 */
SamanthaClosure.components.Carousel.Controller.prototype.goToPageAction = function(direction, pageNumber) {
    var items = this.model.getItems();
    this.view.move(direction, items, this.modelPager.getLimit());
    this.view.setPageSelected(pageNumber);
};


/**
 * move next page
 */
SamanthaClosure.components.Carousel.Controller.prototype.nextAction = function() {
    this.modelPager.next();
};


/**
 * move previous page
 *
 */
SamanthaClosure.components.Carousel.Controller.prototype.prevAction = function() {
    this.modelPager.prev();
};


/**
 * Bind controller events
 * @protected
 */
SamanthaClosure.components.Carousel.Controller.prototype.bindEvents = function() {
    var that = this;

    //triggered when model.getItems() called
    goog.events.listen(that.model, SamanthaClosure.components.Carousel.Model.EventTypes.ITEMS_LOADED, function(e) {
        that.buildCarouselAction(e.visibleItems, e.totalItemCount);
        if (e.visibleItems.length > 0) {
            goog.style.setStyle(that.view.getDOM(), 'display', 'block');
        }
    });

    //Triggered when page changed
    goog.events.listen(that.modelPager, SamanthaClosure.Pagination.EventTypes.PAGE_CHANGED, function(e) {

        //dont do anything if page not changed

        if (e.oldValue != e.newValue) {
            var direction;
            if (e.newValue > e.oldValue) {
                direction = 'next';
            }
            else {
                direction = 'prev';
            }
            that.goToPageAction(direction, e.newValue);
        }
        that.view.handleNavigationButtons(that.modelPager.hasNext(), that.modelPager.hasPrev());
    });

    goog.events.listen(that.view.get(that.view.domMappings.NEXT)[0], goog.events.EventType.CLICK,
	        this.nextAction, false, this);
    goog.events.listen(that.view.get(that.view.domMappings.PREV)[0], goog.events.EventType.CLICK,
	        this.prevAction, false, this);
};