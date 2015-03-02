/**
 * @fileoverview SamanthaClosure.dataProxy.Xhr XHR data proxy.
 */

goog.provide('SamanthaClosure.dataProxy.Xhr');

goog.require('SamanthaClosure.XhrManager');
goog.require('SamanthaClosure.dataProxy.Abstract');



/**
 * Base model to handle xhr requests
 *
 * @extends {SamanthaClosure.dataProxy.Abstract}
 * @constructor
 */
SamanthaClosure.dataProxy.Xhr = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.dataProxy.Xhr, SamanthaClosure.dataProxy.Abstract);


/**
 * Fetch data from xhr and call a function with returned data
 * @param {?function(Object)} callback function to call with returned data.
 * @param {function(Object)=} opt_fail function to call when request failed.
 */
SamanthaClosure.dataProxy.Xhr.prototype.fetch = function(callback, opt_fail) {
    var url = this.params.get('url_');
    this.params.remove('url_');
    url = '' + url; //cast to string to make it type safe for XhrManager.get

    var method = this.params.get('method_');
    var methodFn;
    this.params.remove('method_');

    switch (method) {
        case 'post' :
            methodFn = SamanthaClosure.XhrManager.post;
            break;
        default:
            methodFn = SamanthaClosure.XhrManager.get;
    }

    /**
     * get plain objects from Maps from given plugins
     */
    var pluginParams = this.params.getKeys();

    for (var i = 0, ii = pluginParams.length; i < ii; i++) {
        var param = this.params.get(pluginParams[i]);
        if (param && param.constructor == goog.structs.Map) {
            this.params.set(pluginParams[i], param.toObject());
        }
        else {
            this.params.set(pluginParams[i], param);
        }
    }

    methodFn(url, this.params.toObject(), callback, opt_fail);
};
