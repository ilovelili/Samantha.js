/**
 * @fileoverview Event Manager.
 *
 * Provides browser event handling routines.
 *
 * This module extends goog.events for additional support.
 */

goog.provide('SamanthaClosure.events');


/**
 * Constants for event names.
 *
 * @enum {string} Type definitions
 */
SamanthaClosure.events.EventType = {
    MOUSEENTER: 'mouseenter',
    MOUSELEAVE: 'mouseleave',
    TAP: 'tap',
    SWIPE_RIGHT: 'swipeRight',
    SWIPE_UP: 'swipeUp',
    SWIPE_LEFT: 'swipeLeft',
    SWIPE_DOWN: 'swipeDown'
};
