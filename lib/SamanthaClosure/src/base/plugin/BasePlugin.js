/**
 * @fileoverview SamanthaClosure.base.plugin.BasePlugin to get common properties for a plugin in one class.
 */

goog.provide('SamanthaClosure.base.plugin.BasePlugin');

goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');
goog.require('goog.structs.Map');


/**
 * @param {SamanthaClosure.base.Model} model
 * @extends {goog.events.EventTarget}
 * @constructor
 */
SamanthaClosure.base.plugin.BasePlugin = function (model) {
    goog.events.EventTarget.call(this);

    /** @protected */
    this.model = model;

    /** @protected **/
    this.map = new goog.structs.Map();
    
    this.model.params.set(this.key, this.map);
};
goog.inherits(SamanthaClosure.base.plugin.BasePlugin, goog.events.EventTarget);

/**
 * clear map for plugin
 */
SamanthaClosure.base.plugin.BasePlugin.prototype.clear = function () {
    this.map.clear();
};

/**
 * Getter for model
 */
SamanthaClosure.base.plugin.BasePlugin.prototype.getModel = function () {
    return this.model;
};



/**
 * models key
 */
SamanthaClosure.base.plugin.BasePlugin.prototype.key = undefined;
