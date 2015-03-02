/**
 * @fileoverview Delegated Component class offers a component architecture that is an improved version of
 * SamanthaClosure.ui.Component. Like SamanthaClosure.ui.Component, it carries Controller, View and Template in classical MVC role separation.
 *
 * Now, this class is not listening to any of dom events itself. Additionally, it uses ComponentManager
 * which keeps components and controls user interactions of these components.  For this
 * reason templates of all components have to include a unique id attribute.
 */

goog.provide('SamanthaClosure.ui.DlgComponent');
goog.require('goog.dom.query');
goog.require('SamanthaClosure.ui.ComponentManager');
goog.require('goog.events.EventTarget');
goog.require('SamanthaClosure');
goog.require('SamanthaClosure.dom');


/**
 * Base class for all tuttur components.
 * @extends {goog.events.EventTarget}
 * @constructor
 */
SamanthaClosure.ui.DlgComponent = function() {
    this.id = SamanthaClosure.getUid();

    SamanthaClosure.ui.ComponentManager.getInstance().set(this);
    this.bindModelEvents();
};
goog.inherits(SamanthaClosure.ui.DlgComponent, goog.events.EventTarget);


/**
 * Returns the dom element attached with the Component instance.
 * @return {?Element}
 */
SamanthaClosure.ui.DlgComponent.prototype.getElement = function() {
    var rv = this.element;
    if (!rv) rv = this.element = goog.dom.getElement(this.id);
    return rv;
};


/**
 * Returns base template of component
 * @return {string}
 */
SamanthaClosure.ui.DlgComponent.prototype.getPlaceholder = function() {
    return this.templates_base();
};


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
SamanthaClosure.ui.DlgComponent.prototype.bindModelEvents = function() {

};


/**
 * Returns children of component's element
 * @param {string} selector Expression which is searching in component element. This is kind of $ for selecting
 * dom element.
 * @return ({length: number})
 */
SamanthaClosure.ui.DlgComponent.prototype.getChild = function (selector) {
    var rv = null, el = this.getElement();

    if (el)
        rv = goog.dom.query(selector, el);

    return rv;
};


/**
 * This method should be called after the DlgComponent is inserted into the document. Any work (rendering child
 * components, updating DOM, etc.) should be done in this method.
 *
 * @param {Element=} opt_base Optional element to render this item into.
 * @param {number=} opt_index Place to render element in base element's children list.
 */
SamanthaClosure.ui.DlgComponent.prototype.render = function(opt_base, opt_index) {
    if (opt_base) {
        this.element = SamanthaClosure.dom.createElement(this.getPlaceholder());
        opt_base.insertBefore(this.element, opt_base.childNodes[opt_index] || null);
    }
};


/**
 * Returns the id of this component.
 * @return {string} The id of this component.
 */
SamanthaClosure.ui.DlgComponent.prototype.getId = function() {
    return this.id;
}


/**
 * Template of the root element. This method can be overridden if necessary. Other templates should be named with the
 * templates_ prefix as necessary. Also this template carries related component's id.
 * @return {string}
 */
SamanthaClosure.ui.DlgComponent.prototype.templates_base = function() {
    return '<div id="' + this.id + '"></div>';
};


/**
 * @override
 */
SamanthaClosure.ui.DlgComponent.prototype.disposeInternal = function() {
    SamanthaClosure.ui.ComponentManager.getInstance().remove(this);
    this.element = null;
    this.id = null;
};
