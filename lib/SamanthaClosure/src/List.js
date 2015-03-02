/**
 * @fileoverview SamanthaClosure.List to handle List typed data structures extended from SamanthaClosure.Collection.
 */

goog.provide('SamanthaClosure.List');

goog.require('SamanthaClosure.Collection');



/**
 * List data structure
 *
 * @extends {SamanthaClosure.Collection}
 * @constructor
 */
SamanthaClosure.List = function() {
    goog.base(this);

    /** @private **/
    this.keyCount_ = 0;
};
goog.inherits(SamanthaClosure.List, SamanthaClosure.Collection);


/**
 * Adds a new item to list .
 *
 * @param {*} value Value for the pair.
 * @return {boolean} .
 */
SamanthaClosure.List.prototype.addItem = function(value) {
    return SamanthaClosure.Collection.prototype.addItem.call(this, this.keyCount_++, value);
};
