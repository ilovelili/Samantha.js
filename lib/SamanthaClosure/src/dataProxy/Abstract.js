/**
 * @fileoverview SamanthaClosure.dataProxy.Abstract base abstract class for local and xhr data proxies.
 */

goog.provide('SamanthaClosure.dataProxy.Abstract');

goog.require('goog.structs.Map');

/**
 * Base model to handle xhr requests
 *
 * @constructor
 */
SamanthaClosure.dataProxy.Abstract = function() {
    /** @protected **/
    this.params = new goog.structs.Map();
};


/**
 * Set params as hash map.
 * @param {goog.structs.Map} params hash map to hold fetch params
 */
SamanthaClosure.dataProxy.Abstract.prototype.setParams = function (params) {
    this.params = new goog.structs.Map(params);
};

/**
 * Abstract method, which all inherited classes should implement
 * @param {Function} callback callback method after fetch.
 */
SamanthaClosure.dataProxy.Abstract.prototype.fetch = function(callback) {
    goog.abstractMethod();
};
