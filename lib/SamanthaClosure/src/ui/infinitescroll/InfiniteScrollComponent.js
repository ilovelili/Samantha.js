goog.provide('SamanthaClosure.ui.InfiniteScrollComponent');
goog.require('goog.async.Throttle');
goog.require('SamanthaClosure.ui.InfiniteScrollComponentModel');
goog.require('SamanthaClosure.ui.DlgComponent');



/**
 * InfiniteScrollComponent is a small component which checks the scroll position of a given DOM element, and if it's in
 * an appropriate position, fires a LOAD event for the parent component to act upon. When the parent component is
 * done loading new items, it should reset this InfiniteScrollComponent with the reset() method.
 *
 * @constructor
 * @extends {SamanthaClosure.ui.DlgComponent}
 *
 * @param {Element=} opt_el Optional element to track its scroll.
 */
SamanthaClosure.ui.InfiniteScrollComponent = function(opt_el) {
    this.model = new SamanthaClosure.ui.InfiniteScrollComponentModel();
    this.model.setParentEventTarget(this);
    goog.base(this);

    this.EventType = this.model.EventType;
    this.throttle = new goog.async.Throttle(this.checkShouldLoadMore_, 100, this);

    if (opt_el) this.register(opt_el);
};
goog.inherits(SamanthaClosure.ui.InfiniteScrollComponent, SamanthaClosure.ui.DlgComponent);


/**
 * Message to show when no more items are available to load.
 *
 * @type {string}
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.endOfListText = '';


/**
 * @override
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.render = function(opt_base, opt_index) {
    goog.base(this, 'render', opt_base, opt_index);

    if (!this.el) this.register(this.getElement().parentNode);
};


/**
 * Resets the component state to default. This should be used to signal the end of loading so that this component
 * can again check for loading.
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.reset = function() {
    this.model.reset();
};


/**
 * Registers an element to track its scroll. This can be used for lazily introducing an element to track.
 *
 * @param {Node} el Element to track.
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.register = function(el) {
    this.reset();

    this.el = el;

    goog.events.unlistenByKey(this.scrollListener);
    this.scrollListener = goog.events.listen(el, goog.events.EventType.SCROLL, this.onScroll_, false, this);
};


/**
 * Scroll event handler for infinite scroll. Fires the throttle to check for the correct load more position.
 *
 * @private
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.onScroll_ = function() {
    this.throttle.fire();
};


/**
 * If in an appropriate state, checks if the scroll position is right and if so triggers a load more event.
 *
 * @private
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.checkShouldLoadMore_ = function() {
    this.model.triggerShouldCheckState();
    if (!this.model.shouldCheck()) return;

    var el = this.el;
    if (!el) return;

    if (el.scrollHeight > el.offsetHeight && // the element can actually scroll
        el.scrollTop > el.scrollHeight - el.offsetHeight - 400) // and we're in a good position to load more
        this.model.load();
};


/**
 * Shows spinner during load.
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.showSpinner = function() {
    this.getElement().classList.add('spinner');
    this.getElement().innerText = '';
    this.reset();
};


/**
 * Shows end of list message if no more items are available.
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.showEndOfList = function() {
    this.getElement().innerText = this.endOfListText;
    this.getElement().classList.remove('spinner');
};


/**
 * @override
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.templates_base = function() {
    return '<div id="' + this.getId() + '" class="inf-scroll"></div>';
};


/**
 * @override
 */
SamanthaClosure.ui.InfiniteScrollComponent.prototype.disposeInternal = function() {
    this.model.dispose();
    this.throttle.dispose();
    goog.events.unlistenByKey(this.scrollListener);

    goog.dom.removeNode(this.getElement());
    goog.base(this, 'disposeInternal');
};
