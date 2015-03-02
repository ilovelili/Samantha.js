/**
 * @fileoverview The base component class.
 */

goog.provide('Samantha.ui.Component');
goog.require('goog.ui.Component');
goog.require('goog.ui.Container');
goog.require('goog.ui.Control');
goog.require('Samantha.ui.ComponentManager');
goog.require('SamanthaClosure.dom');



/**
 * Samantha.ui.Component is a mix between SamanthaClosure.ui.Component and goog.ui.Component.
 *
 * @constructor
 * @extends {goog.ui.Component}
 */
Samantha.ui.Component = function() {
    goog.base(this);

    Samantha.ui.ComponentManager.getInstance().set(this);
};
goog.inherits(Samantha.ui.Component, goog.ui.Component);


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
Samantha.ui.Component.prototype.bindModelEvents = function() {};


/**
 * @override
 */
Samantha.ui.Component.prototype.createDom = function() {
    this.setElementInternal(/** @type {Element} */(SamanthaClosure.dom.createElement(this.templates_base())));
};


/**
 * @override
 */
Samantha.ui.Component.prototype.setModel = function(model) {
    goog.base(this, 'setModel', model);
    this.model = this.getModel();
};


/**
 * @override
 */
Samantha.ui.Component.prototype.addChildAt = function(child, index, opt_render) {
    if (opt_render != false) opt_render = true;

    goog.base(this, 'addChildAt', child, index, opt_render);
};


/**
 * Adds the specified children to this component, appending at the end.
 *
 * @param {Array.<Samantha.ui.Component>} children The new child components.
 * @param {boolean=} opt_render If false, the child component will not be rendered into the parent.
 */
Samantha.ui.Component.prototype.addChildren = function(children, opt_render) {
    var that = this;
    children.forEach(function(child) {
        that.addChild(child, opt_render);
    }, this);
};


/**
 * Returns the child components of this component (if any).
 * @return {Array.<Samantha.ui.Component>} Child components.
 */
Samantha.ui.Component.prototype.getChildren = function() {
    var ids = this.getChildIds(), that = this;
    return ids.map(function(id) {
        return that.getChild(id);
    });
};


/**
 * @override
 */
Samantha.ui.Component.prototype.disposeInternal = function() {
    goog.base(this, 'disposeInternal');
    this.model = null;
};


/**
 * Much like jQuery, this method gets a DOM element that is a child of this component. It's a convenience method and
 * wraps goog.dom.query.
 *
 * @param {string} selector A selector string as understood by the querySelector.
 * @return { {length: number} } The elements as the result of the query.
 */
Samantha.ui.Component.prototype.$ = function(selector) {
    return goog.dom.query(selector, this.getElement());
};


/**
 * template for the component's root element.
 *
 * @return {string} template.
 */
Samantha.ui.Component.prototype.templates_base = function() {
    return '<div id="' + this.getId() + '"></div>';
};
