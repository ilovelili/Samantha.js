goog.provide('SamanthaClosure.ui.P2RComponentModel');
goog.require('SamanthaClosure.ui.ComponentModel');



/**
 * Model for the pull to refresh component. Manages refreshing states to prevent
 * performance problems like double actions.
 *
 * @constructor
 * @extends {SamanthaClosure.ui.ComponentModel}
 */
SamanthaClosure.ui.P2RComponentModel = function() {
    this.reset();
};
goog.inherits(SamanthaClosure.ui.P2RComponentModel, SamanthaClosure.ui.ComponentModel);


/**
 * Resets the component state to default state.
 */
SamanthaClosure.ui.P2RComponentModel.prototype.reset = function() {
    this.state_ = this.State.DEFAULT;
};


/**
 * If the component is not in REFRESHING state, it should check to see if it
 * should refresh. This method will be triggered on every scroll event.
 */
SamanthaClosure.ui.P2RComponentModel.prototype.triggerShouldCheckState = function() {
    if (this.state_ != this.State.REFRESHING)
        this.state_ = this.State.SHOULD_CHECK;
};


/**
 * Informs the caller if this model is in an appropriate state for checking
 * the right (scroll) position.
 *
 * @return {boolean} Whether the component should check for the right
 *                   (scroll) position.
 */
SamanthaClosure.ui.P2RComponentModel.prototype.shouldCheck = function() {
    return this.state_ == this.State.SHOULD_CHECK;
};


/**
 * Dispatches a refresh event to inform the parent component that it's at the appropriate
 * position for refresh.
 */
SamanthaClosure.ui.P2RComponentModel.prototype.refresh = function() {
    if (!this.shouldCheck()) return;

    this.state_ = this.State.REFRESHING;

    this.dispatchEvent(this.EventType.SHOULD_REFRESH);
};


/**
 * Pull to refresh states.
 *
 * @enum {string}
 */
SamanthaClosure.ui.P2RComponentModel.prototype.State = {
    DEFAULT: 'default',
    SHOULD_CHECK: 'shouldCheck',
    REFRESHING: 'refreshing'
};


/**
 * Event types for this model.
 *
 * @enum {string}
 */
SamanthaClosure.ui.P2RComponentModel.prototype.EventType = {
    SHOULD_REFRESH: 'refresh'
};
