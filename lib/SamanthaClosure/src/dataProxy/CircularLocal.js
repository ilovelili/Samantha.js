/**
 * @fileoverview SamanthaClosure.dataProxy.CircularLocal XHR data proxy.
 */

goog.provide('SamanthaClosure.dataProxy.CircularLocal');
goog.require('SamanthaClosure.dataProxy.Local');



/**
 *
 * Base model to handle xhr requests
 *
 * @extends {SamanthaClosure.dataProxy.Local}
 * @constructor
 */
SamanthaClosure.dataProxy.CircularLocal = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.dataProxy.CircularLocal, SamanthaClosure.dataProxy.Local);


/**
 * Fetch data from xhr and call a function with returned data
 * @param {Function=} callback function to call with returned data.
 */
SamanthaClosure.dataProxy.CircularLocal.prototype.fetch = function(callback) {
    var fetchedData = this.getData();
    var pagerParam = this.params.get('paginationParams');

    if (!fetchedData || !pagerParam)
        callback.call(this);

    var offset = pagerParam.get('offset'),
        limit = pagerParam.get('limit'),
        length = fetchedData.length,
        tmp = [],
        pos;

    if (limit > length) limit = length;

    for (var i = offset, loopCount = offset + limit; i < loopCount; i++) {
        pos = (i % length + length) % length;

        tmp.push(fetchedData[pos]);
    }

    fetchedData = tmp;
    
    callback.call(this, fetchedData);
};
