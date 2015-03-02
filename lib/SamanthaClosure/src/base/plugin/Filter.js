/**
 * @fileoverview SamanthaClosure.base.plugin.Filter model filter plugin.
 */

goog.provide('SamanthaClosure.base.plugin.Filter');

goog.require('SamanthaClosure.base.plugin.BasePlugin');


/**
 * @param {SamanthaClosure.base.Model} model
 *
 * @extends {SamanthaClosure.base.plugin.BasePlugin}
 * @constructor
 */
SamanthaClosure.base.plugin.Filter = function (model) {
    goog.base(this, model);
};
goog.inherits(SamanthaClosure.base.plugin.Filter, SamanthaClosure.base.plugin.BasePlugin);

/**
 * Set plugins param key
 */
SamanthaClosure.base.plugin.Filter.prototype.key = "filterParams";



/**
 * @param {string} field field to be filtereded.
 * @param {string} condition condition operator.
 * @param {string} value field value to filter field for.
 */
SamanthaClosure.base.plugin.Filter.prototype.addFilter = function (field, condition, value) {

    /**
     * There can be multiple condition-value pair for a field
     */
    var fieldFilter = this.map.get(field);

    //and if this field did not set before create a new object
    if (!fieldFilter) {
        fieldFilter = {};
    }

    fieldFilter[condition] = value;

    this.map.set(field, fieldFilter);
};
