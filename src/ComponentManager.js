goog.provide('Samantha.ui.ComponentManager');
goog.require('SamanthaClosure.ui.ComponentManager');

/**
 * @fileoverview Registry for Samantha.ui.Component. Manages DOM event interactions for these components.
 */


/**
 * @constructor
 * @extends {SamanthaClosure.ui.ComponentManager}
 */
Samantha.ui.ComponentManager = function() {
    goog.base(this);
    /** @type {Object.<string, Samantha.ui.Component>} */
    this.components = {};
};
goog.inherits(Samantha.ui.ComponentManager, SamanthaClosure.ui.ComponentManager);
goog.addSingletonGetter(Samantha.ui.ComponentManager);


/**
 * Set given component.
 * @param {Samantha.ui.Component} cmp Component which will be set to components.
 */
Samantha.ui.ComponentManager.prototype.set = function(cmp) {
    this.components[cmp.getId()] = cmp;
};


/**
 * Removes given component.
 * @param {Samantha.ui.Component} cmp Component which will be removed from components.
 */
Samantha.ui.ComponentManager.prototype.remove = function(cmp) {
    delete this.components[cmp.getId()];
};
