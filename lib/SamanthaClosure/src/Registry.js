/**
 * @fileoverview SamanthaClosure.Registry is a convenience class that wraps goog.structs.Map and is intended to use as
 * a global registry across a web application.
 */

goog.provide('SamanthaClosure.Registry');
goog.require('goog.structs.Map');



/**
 * SamanthaClosure Registry class.
 * @constructor
 * @extends {goog.structs.Map}
 */
SamanthaClosure.Registry = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.Registry, goog.structs.Map);
