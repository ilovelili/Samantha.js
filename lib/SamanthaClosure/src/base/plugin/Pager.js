/**
 * @fileoverview SamanthaClosure.base.plugin.Pager model pager plugin to handle pagination.
 */

goog.provide('SamanthaClosure.base.plugin.Pager');

goog.require('SamanthaClosure.Pagination');
goog.require('SamanthaClosure.base.plugin.BasePlugin');


/**
 * @param {SamanthaClosure.base.Model} model SamanthaClosure.base.Model instance to set pager params.
 * @param {SamanthaClosure.Pagination=} pagination optional SamanthaClosure.Pagination instance to handle pagination.
 *
 * @extends {SamanthaClosure.base.plugin.BasePlugin}
 * @constructor
 */
SamanthaClosure.base.plugin.Pager = function(model, pagination) {
    goog.base(this, model);

    var that = this;

    /** @private */
    that.pagination_ = pagination || new SamanthaClosure.Pagination();
    that.pagination_.setParentEventTarget(this);

    /**
     * Change offset on page change events
     */
    goog.events.listen(that.pagination_, SamanthaClosure.Pagination.EventTypes.PAGE_CHANGED, function(e) {
        var limit = parseInt(that.map.get('limit'), 10);
        var newOffset = (e.newValue - 1) * limit;
        that.map.set('offset', newOffset);
        that.model.params.set(that.key, that.map);
    });
};
goog.inherits(SamanthaClosure.base.plugin.Pager, SamanthaClosure.base.plugin.BasePlugin);

/**
 * Plugin's parameter key which is inherited from BasePlugin and should be defined
 */
SamanthaClosure.base.plugin.Pager.prototype.key = 'paginationParams';


/**
 * @param {number} pageCount number of pages.
 */
SamanthaClosure.base.plugin.Pager.prototype.setTotalPageCount = function(pageCount) {
    this.map.set('pageCount', pageCount);
};

/**
 * @param {number} offset cursor sSamanthaClosure point for paging.
 */
SamanthaClosure.base.plugin.Pager.prototype.setOffset = function(offset) {
    this.map.set('offset', offset);
};


/**
 *
 * @param {number} limit item count to fetch.
 */
SamanthaClosure.base.plugin.Pager.prototype.setLimit = function(limit) {
    this.map.set('limit', limit);
    this.pagination_.setItemPerPage(limit);
};

/**
 *
 * @return {number} current limit.
 */
SamanthaClosure.base.plugin.Pager.prototype.getLimit = function() {
    return this.pagination_.getItemPerPage();
};


/**
 * @param {number} totalItemCount set total item count for paginator.
 */
SamanthaClosure.base.plugin.Pager.prototype.setTotalItems = function(totalItemCount) {
    this.pagination_.setTotalItems(totalItemCount);
};

/**
 * Next wrapper for paginator.
 */
SamanthaClosure.base.plugin.Pager.prototype.next = function() {
    this.pagination_.next();
};

/**
 * Prev wrapper for paginator.
 */
SamanthaClosure.base.plugin.Pager.prototype.prev = function() {
    this.pagination_.prev();
};

/**
 * setCurrentPage wrapper for paginator.
 * @param {number} currentPageNum current page number.
 */
SamanthaClosure.base.plugin.Pager.prototype.setCurrentPage = function(currentPageNum) {
    this.pagination_.setCurrentPage(currentPageNum);
};

/**
 * @return {number} number of pages.
 */
SamanthaClosure.base.plugin.Pager.prototype.getTotalPage = function() {
    return this.pagination_.getTotalPage();
};

/**
 * @return {number} current page number.
 */
SamanthaClosure.base.plugin.Pager.prototype.getCurrentPage = function() {
    return this.pagination_.getCurrentPage();
};


/**
 * @return {boolean} Whether there is a previous page available.
 */
SamanthaClosure.base.plugin.Pager.prototype.hasPrev = function() {
    return this.pagination_.hasPrev();
};


/**
 * @return {boolean} Whether there is a next page available.
 */
SamanthaClosure.base.plugin.Pager.prototype.hasNext = function() {
    return this.pagination_.hasNext();
};
