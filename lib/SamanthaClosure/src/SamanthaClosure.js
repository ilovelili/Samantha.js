
/**
 * @fileoverview SamanthaClosure base.
 */
goog.provide('SamanthaClosure');



/** @typedef {Object} */
SamanthaClosure.JSON;

(function() {
    var counter = Math.floor(Math.random() * 2147483648);
    SamanthaClosure.getUid = function() {
        return (counter++).toString(36);
    }
})();


/**
 * @typedef {{method, headers, url, data}}
 */
SamanthaClosure.XhrOptions;


/**
 * Makes XHR requests with given options. This is
 *
 * @param {SamanthaClosure.XhrOptions|string} options Options for this method. This can also be a simple string denoting the URL.
 * @param {function(boolean, Object, number)=} opt_callback Callback to execute when the request ends.
 *                                                          It will be invoked with errors, data and status code.
 * @param {Object=} opt_context The context of the callback to be applied.
 */
SamanthaClosure.xhr = function(options, opt_callback, opt_context) {
    var req = new XMLHttpRequest(),
        opts = options;

    if (typeof options == 'string')
        opts = {
            url: options
        };

    opts.method = opts.method || 'GET';
    opts.headers = opts.headers || {};

    if ((opts.method == 'PUT' || opts.method == 'POST') &&
        !opts.headers['Content-Type'] &&
        typeof opts.data == 'object')
        opts.headers['Content-Type'] = 'application/json';

    req.open(opts.method, opts.url, true);

    Object.keys(opts.headers).forEach(function(key) {
        req.setRequestHeader(key, opts.headers[key]);
    });

    req.onreadystatechange = function(e) {
        if (req.readyState != 4) return;

        var data,
            err = false;

        if ([200, 304].indexOf(req.status) == -1)
            err = true;

        try {
            data = JSON.parse(e.target.response);
        } catch (ex) {
            data = e.target.response;
        }

        opt_callback && opt_callback.call(opt_context || goog.global, err, data, req.status);
    };
    req.withCredentials = true;
    req.send(JSON.stringify(opts.data));
};
