/**
 * @fileoverview SamanthaClosure.base.plugin.Sorter model sorter plugin.
 */

goog.provide('SamanthaClosure.base.plugin.Sorter');

goog.require('SamanthaClosure.base.plugin.BasePlugin');


/**
 * @param {SamanthaClosure.base.Model} model
 *
 * @extends {SamanthaClosure.base.plugin.BasePlugin}
 * @constructor
 */
SamanthaClosure.base.plugin.Sorter = function (model) {
    goog.events.EventTarget.call(this);

    /** @protected */
    this.model = model;

    /** @protected **/
    this.sorts = [];

    this.model.params.set(this.key, this.sorts);
};
goog.inherits(SamanthaClosure.base.plugin.Sorter, SamanthaClosure.base.plugin.BasePlugin);

/**
 * Set plugin's param
 */
SamanthaClosure.base.plugin.Sorter.prototype.key = "sortParams";


/**
 * @param {string} field field to be sorted.
 * @param {string} order order by directive, which is asc or desc.
 */
SamanthaClosure.base.plugin.Sorter.prototype.addSort = function (field, order) {

    /**
     * There can be multiple condition-value pair for a field
     */
    var fieldSorter = goog.array.find(this.sorts, function(item){
        return goog.object.getAnyKey(item) == field;
    });

    //and if this field did not set before create a new object
    if (!fieldSorter) {
        fieldSorter = {};
    }

    fieldSorter[field] = order;
    this.model.params.get(this.key).push(fieldSorter);
};

/**
 * clear map for plugin
 */
SamanthaClosure.base.plugin.Sorter.prototype.clear = function () {
    this.sorts = [];
    this.model.params.set(this.key, this.sorts);
};
