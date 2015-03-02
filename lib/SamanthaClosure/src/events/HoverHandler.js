/**
 * @fileoverview Google Closure Library doesn't like mouseenter and mouseleave events, and provides no easy
 * way to listen to it. Therefore, HoverHandler provides a consistent behavior of mouseenter and leave actions.
 *
 * Example usage:
 *
 * var handler = new SamanthaClosure.events.HoverHandler(elementToListen); // default is body.
 * goog.events.listen(handler, SamanthaClosure.events.EventType.MOUSEENTER, function() {
 *     console.log("i'm on hover");
 * });
 *
 */

goog.provide('SamanthaClosure.events.HoverHandler');
goog.require('goog.dom');
goog.require('goog.events.EventTarget');



/**
 * Tracks and fires mouseenter and mouseleave events on DOM elements.
 *
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {Element=} opt_el Optional element to bind mouseover and mouseout events to. Default is document.body.
 */
SamanthaClosure.events.HoverHandler = function(opt_el) {
    goog.base(this);

    var target = opt_el || document.body;
    goog.events.listen(target, [goog.events.EventType.MOUSEOVER, goog.events.EventType.MOUSEOUT], this);
};
goog.inherits(SamanthaClosure.events.HoverHandler, goog.events.EventTarget);


/**
 * This handles the underlying events and dispatches a new event.
 * @param {goog.events.BrowserEvent} e  The underlying browser event.
 */
SamanthaClosure.events.HoverHandler.prototype.handleEvent = function(e) {
    // fire mouseenter event
    if (e.type == goog.events.EventType.MOUSEOVER) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = SamanthaClosure.events.EventType.MOUSEENTER;
            this.dispatchEvent(a);
        }
    }

    // fire mouseleave event
    else if (e.type == goog.events.EventType.MOUSEOUT) {
        if (e.relatedTarget && !goog.dom.contains(e.target, e.relatedTarget)) {
            var a = new goog.events.BrowserEvent(e.getBrowserEvent());
            a.type = SamanthaClosure.events.EventType.MOUSELEAVE;
            this.dispatchEvent(a);
        }
    }
};
