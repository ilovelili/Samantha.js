/**
 * @fileoverview This file provides utility functions and classes for dateranges.
 */

goog.require('goog.date.DateRange');

goog.provide('SamanthaClosure.date.DateRange');


/**
 * @constructor
 * @extends {goog.date.DateRange}
 * @inheritDoc
 */
SamanthaClosure.date.DateRange = function(ssamanthaClosureDate, endDate) {
    goog.base(this, ssamanthaClosureDate, endDate);
};
goog.inherits(SamanthaClosure.date.DateRange, goog.date.DateRange);


/**
 * Returns the range that includes the thirty days that end today.
 * @param {goog.date.Date=} opt_today The date to consider today.
 *     Defaults to today.
 * @return {goog.date.DateRange} The range that includes the thirty days that end today.
 */
SamanthaClosure.date.DateRange.last30Days = function(opt_today) {
    var today = opt_today || new goog.date.Date();
    var month = today.clone();
    month.add(new goog.date.Interval(goog.date.Interval.DAYS, -30));
    return new goog.date.DateRange(month, today);
};
