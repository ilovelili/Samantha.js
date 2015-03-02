
/**
 * @fileoverview SamanthaClosure.components.Widget is a base class for all components Widget's.
 */

goog.require('SamanthaClosure');
goog.provide('SamanthaClosure.components.Widget');

/**
 * Base widget
 * @constructor
 */
SamanthaClosure.components.Widget = function() {
    /** @private */
    this.componentId_ = SamanthaClosure.getUid();
};

/**
 * Renders the component in a given element or in its placeholder that should already be in the DOM.
 *
 * @param {Element=} rootEl If provided, the widget will render into this rootEl.
 *                              Otherwise, it will look for its placeholder in DOM.
 */
SamanthaClosure.components.Widget.prototype.render = function (rootEl) {
    rootEl = rootEl || goog.dom.getElement(this.componentId_);
    rootEl.appendChild(this.controller.getDOM());
};

/**
 * Get placeholder template
 * @return {string} placeholder markup.
 */
SamanthaClosure.components.Widget.prototype.getPlaceholder = function () {
    return this.templates_placeholder();
};

/**
 * Component's placeholder template
 * @return {string} placeholder markup.
 */
SamanthaClosure.components.Widget.prototype.templates_placeholder = function () {
    return '<div class="widgetPlaceholder" id="' + this.componentId_ + '"></div>';
};

/**
 * Get component id
 * @return {Number} component id.
 */
SamanthaClosure.components.Widget.prototype.getId = function () {
    return this.componentId_;
};

