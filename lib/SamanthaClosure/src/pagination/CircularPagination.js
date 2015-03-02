goog.require('SamanthaClosure.Pagination');
goog.provide('SamanthaClosure.CircularPagination');

/**
 * CircularPagination class to handle circular paging events
 *
 * @constructor
 * @extends {SamanthaClosure.Pagination}
 */
SamanthaClosure.CircularPagination = function() {

    goog.base(this);
};
goog.inherits(SamanthaClosure.CircularPagination, SamanthaClosure.Pagination);


/**
 * Overriding SamanthaClosure.Pagination's hasPrev method, to return true for all conditions to make circular pages.
 *
 * @override
 * @return {boolean} Whether previous page is available .
 */
SamanthaClosure.CircularPagination.prototype.hasPrev = function() {
    return true;
};


/**
 * Overriding SamanthaClosure.Pagination's hasNext method, to return true for all conditions to make circular pages.
 *
 * @override
 * @return {boolean} Whether next page is available .
 */
SamanthaClosure.CircularPagination.prototype.hasNext = function() {
    return true;
};


/**
 * @override
 */
SamanthaClosure.CircularPagination.prototype.getNext = function() {
    return this.currentPage == this.getTotalPage() ? 1 : this.currentPage + 1;
};


/**
 * @override
 */
SamanthaClosure.CircularPagination.prototype.getPrev = function() {
    return this.currentPage == 1 ? this.getTotalPage() : this.currentPage - 1;
};


/**
 * @override
 */
SamanthaClosure.CircularPagination.prototype.setCurrentPage = function(page) {
    if (this.getTotalItems() > this.getItemPerPage()) {
        var oldValue = this.currentPage;
        this.currentPage = page;

        this.triggerPageChange_(oldValue, page);
    }

    return this;
};
