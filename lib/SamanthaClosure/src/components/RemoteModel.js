/**
 * @fileoverview SamanthaClosure.components.RemoteModel RemoteModel which gets data from Xhr.
 */

goog.provide('SamanthaClosure.components.models.RemoteModel');
goog.require('SamanthaClosure.base.Model');
goog.require('SamanthaClosure.dataProxy.Xhr');


/**
 * Remote Model
 *
 * @extends {SamanthaClosure.base.Model}
 * @constructor
 */
SamanthaClosure.components.models.RemoteModel = function() {
    goog.base(this);
    this.params.set('method_', 'post');
    this.params.set('url_', this.url);
    this.totalCount = 0;
    this.proxy = new this.proxyClass();
};
goog.inherits(SamanthaClosure.components.models.RemoteModel, SamanthaClosure.base.Model);

/**
 * RemoteModel's entity class. Default value is undefined.
 */
SamanthaClosure.components.models.RemoteModel.prototype.entityClass = undefined;

SamanthaClosure.components.models.RemoteModel.prototype.proxyClass = SamanthaClosure.dataProxy.Xhr;

/**
 * RemoteModel's request url. Default value is undefined.
 */
SamanthaClosure.components.models.RemoteModel.prototype.url = undefined;


/**
 * Load data and map data to entity.
 * @param {Function=} opt_callback method to call after load.
 */
SamanthaClosure.components.models.RemoteModel.prototype.load = function(opt_callback) {
    var that = this;

    that.proxy.setParams(this.params);
    that.proxy.fetch(function(data) {
        that.mapDataToEntities(data);
        if (opt_callback) {
            opt_callback.call(this, that.getItems());
        }
    });
};


/**
 * map data to entity class.
 * @param {Object} xhrData data returned from xhr request.
 * @protected
 */
SamanthaClosure.components.models.RemoteModel.prototype.mapDataToEntities = function(xhrData) {

    var items = [], collection = xhrData['data'];

    for (var i = 0, l = collection.length; i < l; i++) {
        items.push(new this.entityClass(collection[i]));
    }

    this.totalCount = items.length;

    this.setItems(items);
};
