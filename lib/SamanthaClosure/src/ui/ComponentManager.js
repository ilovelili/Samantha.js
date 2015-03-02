goog.provide('SamanthaClosure.ui.ComponentManager');
goog.require('SamanthaClosure.events');
goog.require('goog.array');
goog.require('goog.events.EventType');
goog.require('SamanthaClosure.events.HoverHandler');
goog.require('SamanthaClosure.events.GestureHandler');

/**
 * @fileoverview Registry for SamanthaClosure.ui.DlgComponent. Manages DOM event interactions for these components.
 */


/**
 *
 * @constructor
 */
SamanthaClosure.ui.ComponentManager = function() {
    /** @type {Object.<string, SamanthaClosure.ui.DlgComponent>} */
    this.components = {};
    this.gestureHandler = SamanthaClosure.events.GestureHandler.getInstance();
    this.hoverHandler = new SamanthaClosure.events.HoverHandler();

    goog.events.listen(document.body, SamanthaClosure.ui.ComponentManager.eventTypes, this);
    goog.events.listen(this.hoverHandler, [SamanthaClosure.events.EventType.MOUSEENTER, SamanthaClosure.events.EventType.MOUSELEAVE], this);
};
goog.addSingletonGetter(SamanthaClosure.ui.ComponentManager);


/**
 * Returns parent components (if available) of a given DOM node.
 *
 * @private
 *
 * @param {Node} child DOM node that will be used for finding parent components.
 * @return {Array.<SamanthaClosure.ui.DlgComponent>} Parent components.
 */
SamanthaClosure.ui.ComponentManager.prototype.getParentComponents_ = function(child) {
    var node = child, cmps = [], cmp, ids;

    if (ids = node.getAttribute && node.getAttribute('data-cmp')) {
        ids.split(',').forEach(function(id) {
            if (id) cmps.push(this.components[id]);
        }, this);

        return cmps;
    }

    ids = [];

    do {
        if (cmp = this.components[node.id]) {
            cmps.push(cmp);
            ids.push(node.id);
        }
    } while (node = node.parentNode);

    child.setAttribute('data-cmp', ids.join(','));
    return cmps;
};


/**
 * Keeps event types.
 * @type {Array.<goog.events.EventType>}
 */
SamanthaClosure.ui.ComponentManager.eventTypes = [
    goog.events.EventType.CLICK,
    goog.events.EventType.MOUSEOVER,
    goog.events.EventType.MOUSEOUT,
    goog.events.EventType.MOUSEMOVE,
    goog.events.EventType.MOUSEDOWN,
    goog.events.EventType.MOUSEUP,
    SamanthaClosure.events.EventType.MOUSEENTER,
    SamanthaClosure.events.EventType.MOUSELEAVE,
    SamanthaClosure.events.EventType.TAP,
    SamanthaClosure.events.EventType.SWIPE_LEFT,
    SamanthaClosure.events.EventType.SWIPE_RIGHT,
    SamanthaClosure.events.EventType.SWIPE_UP,
    SamanthaClosure.events.EventType.SWIPE_DOWN,
    goog.events.EventType.SCROLL,
    goog.events.EventType.KEYUP,
    goog.events.EventType.FOCUSIN,
    goog.events.EventType.FOCUSOUT,
    goog.events.EventType.TOUCHSTART,
    goog.events.EventType.TOUCHMOVE,
    goog.events.EventType.TOUCHEND
];


/**
 * @param {goog.events.BrowserEvent} e Browser event to be executed.
 */
SamanthaClosure.ui.ComponentManager.prototype.handleEvent = function (e) {
    var cmps = this.getParentComponents_(e.target),
        broken = false;

    do {
        if (broken) break;

        if (e.type == SamanthaClosure.events.EventType.MOUSEENTER || e.type == SamanthaClosure.events.EventType.MOUSELEAVE) {
            if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
                broken = this.callHandlers_(cmps, e);
            }
        }
        else {
            broken = this.callHandlers_(cmps, e);
        }
    } while (e.target = e.target.parentNode);
};


/**
 * Given a list of components, checks whether any component would respond to the given event and if so, executes the
 * event handler defined in the component.
 *
 * @private
 *
 * @param {Array.<SamanthaClosure.ui.DlgComponent>} cmps Array of components to look for handlers about the event's target.
 * @param {goog.events.BrowserEvent} e Browser event that will be executed for the target.
 */
SamanthaClosure.ui.ComponentManager.prototype.callHandlers_ = function(cmps, e) {
    var broken = false;

    for (var i = 0; i < cmps.length; i++) {
        var cmp = cmps[i];
        var handlers = cmp && cmp.events && cmp.events[e.type];

        if (!handlers) continue;

        var selectors = goog.object.getKeys(handlers);

        if (this.callHandler_(cmp, e, handlers, selectors) === false) {
            broken = true;
            break;
        }
    }

    return broken;
};


/**
 * @private
 *
 * @param cmp
 * @param e
 * @param handlers
 * @param selectors
 * @return {boolean}
 */
SamanthaClosure.ui.ComponentManager.prototype.callHandler_ = function(cmp, e, handlers, selectors){
    var rv = true;
    goog.array.forEach(selectors, function(selector) {
        // event's target equals to handler's selector
        if (this.matchesSelector(e.target, selector)) {
            rv = handlers[selector].call(cmp, e);
        }
    }, this);
    return rv;
};


/**
 *
 * @param el
 * @param selector
 * @return {*}
 */
SamanthaClosure.ui.ComponentManager.prototype.matchesSelector = function(el, selector) {
    return goog.array.indexOf(goog.dom.query(selector), el) >= 0;
};


/**
 * Set given component.
 * @param {SamanthaClosure.ui.DlgComponent} cmp Component which will be set to components.
 */
SamanthaClosure.ui.ComponentManager.prototype.set = function(cmp) {
    this.components[cmp.getId()] = cmp;
};


/**
 * Removes given component.
 * @param {SamanthaClosure.ui.DlgComponent} cmp Component which will be removed from components.
 */
SamanthaClosure.ui.ComponentManager.prototype.remove = function(cmp) {
    delete this.components[cmp.getId()];
};
