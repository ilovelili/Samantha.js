/**
 * @fileoverview SamanthaClosure.components.Carousel.Model is a base class for all carousel Model's.
 */


goog.require('goog.events.EventTarget');
goog.require('SamanthaClosure.Carousel');
goog.require('SamanthaClosure.base.Model');
goog.require('SamanthaClosure.dataProxy.CircularLocal');
goog.provide('SamanthaClosure.components.Carousel.Model');
goog.provide('SamanthaClosure.components.Carousel.Model.EventTypes');

/**
 * All component models should be inherited from goog.events.EventTarget
 * to publish events to controllers
 *
 * @extends {SamanthaClosure.base.Model}
 * @constructor
 */
SamanthaClosure.components.Carousel.Model = function() {
    goog.base(this);
    /** @protected */
    this.proxy = new SamanthaClosure.dataProxy.CircularLocal();
};
goog.inherits(SamanthaClosure.components.Carousel.Model, SamanthaClosure.base.Model);


/**
 *  Model's default offset value.
 */
SamanthaClosure.components.Carousel.Model.prototype.offset = 0;


/**
 * Model's default limit value.
 */
SamanthaClosure.components.Carousel.Model.prototype.limit = 0;

/**
 * WidgetModel's remoteModelClass's default value is  undefined.
 */
SamanthaClosure.components.Carousel.Model.prototype.remoteModelClass = undefined;


/**
 * WidgetModel's RemoteModelClass's default value is undefined.
 */
SamanthaClosure.components.Carousel.Model.prototype.remoteModelClassParams = undefined;


/**
 * event types enumaration
 * @enum {string}
 */
SamanthaClosure.components.Carousel.Model.EventTypes = {
    ITEMS_LOADED: 'loaded'
};


/**
 * Get carousel items
 * @param {boolean} dispatchEvent whether it dispatches an event.
 * @return {Array} modelItems is count of items..
 */
SamanthaClosure.components.Carousel.Model.prototype.getItems = function(dispatchEvent) {
    var that = this;
    var modelItems;

    this.load(function(items) {
        if (dispatchEvent) {
            var eventObject = {type: SamanthaClosure.components.Carousel.Model.EventTypes.ITEMS_LOADED,
                visibleItems: items,
                totalItemCount: that.getTotalItemCount()
            };

            that.dispatchEvent(eventObject);
        }
        modelItems = items;
    });

    return modelItems;
};

/**
 * @param {Function} callback load callback function.
 */
SamanthaClosure.components.Carousel.Model.prototype.load = function(callback) {
    var that = this;
    var remoteModel;

    var onProxyFetch = function(data) {
        that.setItems(data);
        callback.call(this, data);
    };

    var getremoteModelData = function() {
        var data = remoteModel.getItems();
        that.proxy.setData(data);
        that.setTotalItemCount(data.length);
        that.proxy.fetch(onProxyFetch);
    };


    that.proxy.setParams(this.params);

    if (that.proxy.getData()) {
        that.proxy.fetch(onProxyFetch);
    }
    else if (this.remoteModelClass) {
        remoteModel = new this.remoteModelClass(this.remoteModelClassParams);
        if (this.pagination) {
            var remoteModelPager = new SamanthaClosure.base.plugin.Pager(remoteModel, this.pagination);
            remoteModelPager.setOffset(this.offset);
            remoteModelPager.setLimit(this.limit);
        }

        remoteModel.load(getremoteModelData);
    }
};
