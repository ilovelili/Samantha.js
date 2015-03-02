/**
 * @fileoverview SamanthaClosure.dataProxy.Local XHR data proxy.
 */

goog.provide('SamanthaClosure.dataProxy.Local');

goog.require('SamanthaClosure.dataProxy.Abstract');
goog.require('goog.array');

/**
 * Base model to handle xhr requests
 *
 * @extends {SamanthaClosure.dataProxy.Abstract}
 * @constructor
 */
SamanthaClosure.dataProxy.Local = function() {
    goog.base(this);
    /** @private **/
    this.data_ = undefined;
};
goog.inherits(SamanthaClosure.dataProxy.Local, SamanthaClosure.dataProxy.Abstract);

/**
 * Fetch data from xhr and call a function with returned data
 * @param {Function=} callback function to call with returned data.
 */
SamanthaClosure.dataProxy.Local.prototype.fetch = function(callback) {

    var fetchedData = this.data_;

    var pagerParam = this.params.get("paginationParams");

    if (pagerParam) {
        var offset = pagerParam.get("offset");
        var limit = pagerParam.get("limit");
        var tmp = [];

        for(var i = offset; i < offset + limit; i++) {
            if (fetchedData && fetchedData[i]) {
                tmp.push(fetchedData[i]);
            }
        }

        fetchedData = tmp;
    }

    callback.call(this, fetchedData);
};

SamanthaClosure.dataProxy.Local.prototype.setData = function(data) {
    this.data_ = data;
};

SamanthaClosure.dataProxy.Local.prototype.getData = function() {
    return this.data_;
};

