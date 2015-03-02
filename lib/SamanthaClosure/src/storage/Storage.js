/**
 * @fileoverview This file provides localStorage extensions that are essential to SamanthaClosure. Basically, the localStorage
 * only allows you to store strings. SamanthaClosure.storage.Storage can store any type of object via serialization.
 *
 * Example usage:
 * var storage = new SamanthaClosure.storage.Storage();
 * storage.set('foo', {bar: 'baz'});
 * storage.get('foo');
 * // you can still iterate through localStorage as before with for .. in;
 * for (var key in localStorage) {
 *     var object = storage.get(key);
 *     //do something with the object
 * }
 */


goog.provide('SamanthaClosure.storage.Storage');
goog.require('goog.json');



/**
* Basic local storage class that adds object storage abilities to the standard html5 localStorage by
* serializing objects.
* @constructor
*/
SamanthaClosure.storage.Storage = function() {
};


/**
* Sets a key value pair to the local storage.
* @param {string} key Key of the pair to be stored.
* @param {*} value Value of the pair to be stored. The value will be stored serialized.
*/
SamanthaClosure.storage.Storage.prototype.set = function(key, value) {
    var val;
    try {
        val = JSON.stringify(value);
    }
    catch (e) {
        val = goog.json.serialize(value);
    }

    localStorage.setItem(key, val);
};


/**
* Fetches an item from the storage.
* @param {string} key Key of the value to be fetched from the storage.
* @return {*} Value of the item.
*/
SamanthaClosure.storage.Storage.prototype.get = function(key) {
    var rv = null,
        val = localStorage.getItem(key);

    try {
        rv = JSON.parse(val);
    }
    catch (e) {
        rv = goog.json.parse(val);
    }

    return rv;
};


/**
 * Remove value from storage.
 *
 * @param {string} key Key of the associated pair.
 */
SamanthaClosure.storage.Storage.prototype.remove = function(key) {
    localStorage.removeItem(key);
};


/**
 * Clear all values from storage.
 */
SamanthaClosure.storage.Storage.prototype.clear = function() {
    localStorage.clear();
};


/**
 * Get the number of stored key-value pairs.
 * @return {number} Number of stored elements
 */
SamanthaClosure.storage.Storage.prototype.getCount = function() {
    return localStorage.length;
};
