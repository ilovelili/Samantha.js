/**
 * @fileoverview SamanthaClosure.base.Model base model.
 */

goog.provide('SamanthaClosure.base.Model');

goog.require('goog.structs.Map');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');


/**
 * Base model
 *
 * @extends {goog.events.EventTarget}
 * @constructor
 */
SamanthaClosure.base.Model = function() {
    goog.events.EventTarget.call(this);

    /** @private **/
    this.items_ = null;

    /** @private **/
    this.totalItemCount_ = 0;

    this.params = new goog.structs.Map();
};
goog.inherits(SamanthaClosure.base.Model, goog.events.EventTarget);


/**
 * Abstract method to load data from any resource
 * @param {Function=} opt_callback method after load.
 */
SamanthaClosure.base.Model.prototype.load = function (opt_callback) {
    goog.abstractMethod();
};


/**
 * getter for items
 * @param {boolean=} dispatchEvent Whether this method should throw an event when its items are loaded. This may be used in classes that
 * extend SamanthaClosure.base.Model.
 * @return {Object} items all items.
 */
SamanthaClosure.base.Model.prototype.getItems = function(dispatchEvent) {
    return this.items_;
};


/**
 * Setter for items
 * @param {Object} items items to be set.
 */
SamanthaClosure.base.Model.prototype.setItems = function(items) {
    this.items_ = items;
};

/**
 * Set total item count
 * @param {number} itemCount total item count for this model.
 */
SamanthaClosure.base.Model.prototype.setTotalItemCount = function(itemCount) {
    this.totalItemCount_ = itemCount;
};

/**
 * Get total item count
 * @return {number} total item count for this model.
 */
SamanthaClosure.base.Model.prototype.getTotalItemCount = function() {
    return this.totalItemCount_;
};

/** @typedef {{type: string, oldValue, newValue}} */
SamanthaClosure.base.Model.Event;


/**
 * Overriding goog.events.EventTarget's dispatchEvent method, to make this event consistent in application
 *
 * @param {Object|string} modelEvent event object which has type, oldValue and newValue fields.
 * @return {boolean} .
 * @override
 */
SamanthaClosure.base.Model.prototype.dispatchEvent = function(modelEvent) {
    return goog.base(this, 'dispatchEvent', modelEvent);
};

