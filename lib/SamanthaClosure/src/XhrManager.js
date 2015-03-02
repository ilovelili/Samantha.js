/**
 * @fileoverview SamanthaClosure.XhrManager static class to handle XHR requests.
 */

goog.provide('SamanthaClosure.XhrManager');


/**
 * jQuery GET's wrapper
 *
 * @param {string} url url to send request.
 * @param {Object} params POST/GET parameters.
 * @param {?function(Object)} success success callback.
 * @param {?function(Object)=} opt_fail fail callback.
 * @param {string=} opt_dataType data type.
 * @return {Object} .
 */
SamanthaClosure.XhrManager.get = function(url, params, success, opt_fail, opt_dataType) {
    return SamanthaClosure.XhrManager.ajax('GET', url, params, success, opt_fail, opt_dataType);
};


/**
 * jQuery POST's wrapper
 *
 * @param {string} url url to send request.
 * @param {Object} params POST/GET parameters.
 * @param {?function(Object)} success success callback.
 * @param {?function(Object)=} opt_fail fail callback.
 * @param {string=} opt_dataType data type.
 * @return {Object} .
 */
SamanthaClosure.XhrManager.post = function(url, params, success, opt_fail, opt_dataType) {
    return SamanthaClosure.XhrManager.ajax('POST', url, params, success, opt_fail, opt_dataType);
};


/**
 * jQuery POST's wrapper
 *
 * @param {string} type request type.
 * @param {string} url url to send request.
 * @param {Object} params POST/GET parameters.
 * @param {?function(Object)} success success callback.
 * @param {?function(Object)=} opt_fail fail callback.
 * @param {string=} opt_dataType data type.
 * @return {Object} .
 */
SamanthaClosure.XhrManager.ajax = function(type, url, params, success, opt_fail, opt_dataType) {
    return $.ajax({
        'type': type,
        'url': url,
        'data': params,
        'dataType': opt_dataType || 'json',
        'xhrFields': {
               'withCredentials': true
        },
        'success': function(response) {
            success && success(response);
        },
        'error': function(response) {
            opt_fail && opt_fail(response);
        }
    });
};
