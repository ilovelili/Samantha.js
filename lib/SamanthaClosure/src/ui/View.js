goog.provide('SamanthaClosure.ui.View');
goog.require('SamanthaClosure.ui.DlgComponent');
goog.require('SamanthaClosure.ui.ViewManager');



/**
 * The default view class for all views. Handles default overrides for SamanthaClosure.ui.DlgComponent such as rendering
 * to body by default.
 *
 * @constructor
 * @extends {SamanthaClosure.ui.DlgComponent}
 */
SamanthaClosure.ui.View = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.ui.View, SamanthaClosure.ui.DlgComponent);


/**
 * View index in z-axis. This should be used as the z value for initial translate3d style declaration.
 *
 * @type {number}
 */
SamanthaClosure.ui.View.prototype.index = 0;


/**
 * Determines whether the view should support back gestures to go back in history or not.
 *
 * @type {boolean}
 */
SamanthaClosure.ui.View.prototype.supportsBackGesture = true;


/**
 * True if the view allows sidebar access. This lets the view manager orchestrate touch gestures for the sidebar menu.
 * Default is false.
 *
 * @type {boolean}
 */
SamanthaClosure.ui.View.prototype.hasSidebar = false;


/**
 * Defines CSS class names for the view.
 *
 * @type {string}
 */
SamanthaClosure.ui.View.prototype.className = '';


/**
 * @type {number} Gives the device width.
 */
SamanthaClosure.ui.View.WIDTH = parseInt(window.getComputedStyle(document.body, null).width, 10);


/**
 * Overridden to make document.body the default parent element. This method also saves if a view is already rendered.
 * Original opt_index parameter is also overridden with the view index. In this case, this view will always be appended
 * to the body.
 *
 * @override
 *
 * @param {(Element|number)=} opt_rootEl Root element to render this view in.
 * @param {number=} opt_index The index of this view in z-axis.
 */
SamanthaClosure.ui.View.prototype.render = function(opt_rootEl, opt_index) {
    this.onBeforeRender();
    this.rendered = true;
    if (goog.isNumber(opt_rootEl)) {
        opt_index = opt_rootEl;
        opt_rootEl = document.body;
    }

    if (goog.isDef(opt_index)) this.index = opt_index;
    goog.base(this, 'render', opt_rootEl || document.body);
    this.onAfterRender();
};


/**
 * Method called before a render process. Called automatically before each render. Subclasses should override
 * this method for tasks that should be done right before the View enters the document.
 */
SamanthaClosure.ui.View.prototype.onBeforeRender = function() {};


/**
 * Method called after a render process. Called automatically after each render. Subclasses should override
 * this method for tasks that should be done when the View is in document.
 */
SamanthaClosure.ui.View.prototype.onAfterRender = function() {};


/**
 * Returns the HTML markup for the initial state.
 *
 * @return {string} The template for the view.
 */
SamanthaClosure.ui.View.prototype.getTemplate = function() {
    return this.templates_base();
};


/**
 * Method called when the View is being activated by a ViewManager. Subclasses should override this method for tasks
 * that should be done when the View is in viewport, such as updating information, etc.
 */
SamanthaClosure.ui.View.prototype.activate = function() {};


/**
 * Overriden to include 'view' as a class name.
 *
 * @override
 */
SamanthaClosure.ui.View.prototype.templates_base = function() {
    return '<view id="' + this.id + '"' +
        'class="' + this.className + '"' +
        'style="-webkit-transform: translate3d(100%, 0, ' + this.index + 'px)">' +
        this.templates_content() +
        '</view>';
};


/**
 * Empty content template. Subclasses should override this method and implement necessary markup here.
 *
 * @return {string} Content markup for the view.
 */
SamanthaClosure.ui.View.prototype.templates_content = function() {
    return '';
};


/**
 * @override
 */
SamanthaClosure.ui.View.prototype.disposeInternal = function() {
    var element = this.element;
    goog.base(this, 'disposeInternal');

    goog.dom.removeNode(element);
};
