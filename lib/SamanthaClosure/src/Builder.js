/**
 * @fileoverview Generic builder class to build and modify DOM elements.
 */

goog.provide('SamanthaClosure.Builder');
goog.require('SamanthaClosure.Err');



/**
 * Constructor method
 *
 * @constructor
 * @param {string} id id for the builder. Can be used as the id of the DOM element this builder will build.
 * @return {SamanthaClosure.Builder} A builder object.
 */
SamanthaClosure.Builder = function(id) {
    this.id_ = id || '';
    return this;
};


/**
 * @type {jQueryObject}
 * @protected
 */
SamanthaClosure.Builder.prototype.$dom = null;


/**
 * @type {Object} Templates holder object.
 */
SamanthaClosure.Builder.templates = {};


/**
 * Builds the DOM element.
 * @param {*} owner Owner class for the builder.
 */
SamanthaClosure.Builder.prototype.buildDOM = goog.abstractMethod;


/**
 * Returns built ready-to-use DOM part in jQuery object format.Ï
 *
 * @return {?jQueryObject} the DOM object built by the builder.
 */
SamanthaClosure.Builder.prototype.getDOM = function() {
    return this.$dom;
};


/**
 * Removes the DOM part from document.
 */
SamanthaClosure.Builder.prototype.removeDOM = goog.abstractMethod;
