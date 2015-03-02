goog.provide('SamanthaClosure.ui.InfiniteScrollComponentModel');
goog.require('SamanthaClosure.ui.ComponentModel');



/**
 * Model for the load more component. Manages loading states to prevent
 * performance problems like double actions.
 *
 * @constructor
 * @extends {SamanthaClosure.ui.ComponentModel}
 */
SamanthaClosure.ui.InfiniteScrollComponentModel = function() {
    this.reset();
};
goog.inherits(SamanthaClosure.ui.InfiniteScrollComponentModel, SamanthaClosure.ui.ComponentModel);


/**
 * Resets the component state to default state.
 */
SamanthaClosure.ui.InfiniteScrollComponentModel.prototype.reset = function() {
    this.state_ = this.State.DEFAULT;
};


/**
 * If the component is not in LOADING state, it should check to see if it
 * should load. This method will be triggered on every scroll event.
 */
SamanthaClosure.ui.InfiniteScrollComponentModel.prototype.triggerShouldCheckState = function() {
    if (this.state_ != this.State.LOADING)
        this.state_ = this.State.SHOULD_CHECK;
};


/**
 * Informs the caller if this model is in an appropriate state for checking
 * the right (scroll) position.
 *
 * @return {boolean} Whether the component should check for the right
 *                   (scroll) position.
 */
SamanthaClosure.ui.InfiniteScrollComponentModel.prototype.shouldCheck = function() {
    return this.state_ == this.State.SHOULD_CHECK;
};


/**
 * Dispatches a load event to inform the parent component that it's at the end
 * of a scroll and should load more items.
 */
SamanthaClosure.ui.InfiniteScrollComponentModel.prototype.load = function() {
    if (!this.shouldCheck()) return;

    this.state_ = this.State.LOADING;

    this.dispatchEvent(this.EventType.SHOULD_LOAD);
};


/**
 * Load more states.
 *
 * @enum {string}
 */
SamanthaClosure.ui.InfiniteScrollComponentModel.prototype.State = {
    DEFAULT: 'default',
    SHOULD_CHECK: 'shouldCheck',
    LOADING: 'loading'
};


/**
 * Event types for this model.
 *
 * @enum {string}
 */
SamanthaClosure.ui.InfiniteScrollComponentModel.prototype.EventType = {
    SHOULD_LOAD: 'load'
};
