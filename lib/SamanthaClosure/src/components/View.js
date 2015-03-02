/**
 * @fileoverview SamanthaClosure.components.View is a base class for all components View's.
 *
 * Example usage:
 *
 * SubViewClass = function() {
 *     goog.base(this);
 *
 *     this.domMappings = {
 *         HEADER: 'h1'
 *     };
 * };
 * goog.inherits(SubViewClass, SamanthaClosure.components.View);
 *
 * SubViewClass.prototype.templates_header = function(text) {
 *     text = text || '';
 *     return '<h1>' + text + '</h1>';
 * };
 *
 * SubViewClass.prototype.render = function() {
 *    return this.templates_header();
 * };
 *
 * var subView = new SubViewClass();
 *
 * var dummyDiv = SamanthaClosure.dom.createElement(subView.render());
 *
 * subView.setDOM(dummyDiv);
 * subView.get(subView.domMappings.HEADER);
 *
 *  Known issues:
 *  - Templates will be injected withing Templates object
 */

goog.provide('SamanthaClosure.components.View');



/**
 * View class base
 * @constructor
 */
SamanthaClosure.components.View = function() {
    /** @protected */
    this.domCache = {};
};


/** @type {Element} */
SamanthaClosure.components.View.prototype.dom;


/**
 * Render abstract method, which all subclasses should implement
 * @throws {Error}
 * @return {string}
 */
SamanthaClosure.components.View.prototype.render = function() {
    throw new Error('Not implemented yet');
};


/**
 * Sets base DOM tree for component
 * @param {Element} dom base DOM reference for component.
 */
SamanthaClosure.components.View.prototype.setDOM = function(dom) {
    this.dom = dom;
};


/**
 * get current DOM reference
 *
 * @return {Element}
 */
SamanthaClosure.components.View.prototype.getDOM = function() {
    return this.dom;
};


/**
 * Get item, which is indicated on domMappings node
 * Cache them to domCache and return item
 * Example of usage with an id as selector:
 * this.get("[id='elementId']") or this.get("[id=elementId]")
 *
 * @param {string} key Object key from domMappings node.
 * @return {{length: number}} found object after traverse.
 */
SamanthaClosure.components.View.prototype.get = function(key) {
    if (!this.dom) {
        throw new Error('DOM not set yet');
    }

    this.domCache[key] = this.domCache[key] || goog.dom.query(key, this.dom);
    return this.domCache[key];
};


/**
 * Clears the view's dom cache. This might come in handy where you find yourself with dangling HTMLElement's who are
 * not in DOM anymore but bugs you because they are in cache. This also helps with memory leaks; you should often clear
 * your cache. TODO: Make this default with a deconstructor for view
 */
SamanthaClosure.components.View.prototype.clearCache = function() {
    this.domCache = {};
};
