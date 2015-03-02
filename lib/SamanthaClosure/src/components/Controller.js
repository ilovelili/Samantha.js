/**
 * @fileoverview SamanthaClosure.components.Controller is a base class for all components Controller's.
 *
 * Example usage:
 *      var ViewClass = function () {
 *          goog.base(this);
 *      };
 *      goog.inherits(ViewClass, SamanthaClosure.components.View);
 *
 *      ViewClass.prototype.render = function () {
 *          return "<h1>Foo</h1>";
 *      };
 *      var view = new ViewClass();
 *
 *      var ModelClass = function () {
 *          goog.base(this);
 *      };
 *      goog.inherits(ModelClass, SamanthaClosure.base.Model);
 *
 *
 *      var model = new ModelClass();
 *
 *      var ControllerClass = function () {
 *          goog.base(this);
 *      };
 *      goog.inherits(ControllerClass, SamanthaClosure.components.Controller);
 *
 *      var controller = new ControllerClass(model, view);
 *      var dom = controller.buildDOM();
 */

goog.require('SamanthaClosure.base.Model');
goog.require('SamanthaClosure.components.View');

goog.provide('SamanthaClosure.components.Controller');



/**
 * Base controller
 *
 * @param {SamanthaClosure.base.Model=} opt_model Data model.
 * @param {SamanthaClosure.components.View=} opt_view View object.
 * @constructor
 */
SamanthaClosure.components.Controller = function(opt_model, opt_view) {
    this.model = opt_model || new SamanthaClosure.base.Model();
    this.view = opt_view || new SamanthaClosure.components.View();
};


/**
 * Build DOM from view
 *
 * @return {Element} generated DOM of attached View object.
 */
SamanthaClosure.components.Controller.prototype.buildDOM = function() {
    var dom = this.view.render();
    // TODO : render should always be string so we should remove string check.
    if(goog.isString(dom))
        dom = /** @type {Element} */(SamanthaClosure.dom.createElement(dom));
    this.view.setDOM(/** @type {Element} */(dom));
    return /** @type {Element} */ (dom);
};


/**
 * Get DOM generated by view and attached by controller
 *
 * @return {Element} DOM reference.
 */
SamanthaClosure.components.Controller.prototype.getDOM = function() {
    return this.view.getDOM();
};