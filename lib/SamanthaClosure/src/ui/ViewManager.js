goog.provide('SamanthaClosure.ui.ViewManager');
goog.require('goog.math');



/**
 * This class handles view transitions and view history in a consistent manner. Should be used by views who would like
 * to contain other views. Also, each application should have at least one ViewManager.
 *
 * @constructor
 *
 * @param {Element=} opt_rootEl Root element for this view manager.
 */
SamanthaClosure.ui.ViewManager = function(opt_rootEl) {
    this.history = [];
    this.lastTouches = [];
    this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
    this.rootEl = opt_rootEl || document.body;

    this.initTouchEvents_();
};


/**
 * 3d transform Z position for the uppermost view. Used to set the right view on top.
 * @type {number}
 */
SamanthaClosure.ui.ViewManager.prototype.topIndex = 1;


/**
 *
 * @param {SamanthaClosure.ui.View} view View to pull into view.
 * @param {boolean=} opt_canGoBack Whether this view keeps history so that one can go back to the previous view.
 */
SamanthaClosure.ui.ViewManager.prototype.pull = function(view, opt_canGoBack) {
    if (!view.rendered) view.render(this.rootEl, this.topIndex += 2);

    var currentView = this.currentView;

    if (opt_canGoBack) {
        this.history.push(currentView);
        goog.events.listenOnce(currentView.getElement(), 'webkitTransitionEnd', function() {
            currentView.getElement().style.webkitTransitionDuration = 0;
            currentView.getElement().style.webkitTransform = 'translate3d(-100%,-100%,0)';
        });
    }
    else {
        var history = this.history.slice(0);
        this.history = [];

        setTimeout(function() {
            currentView.dispose();

            // Dispose all views in history.
            history.forEach(function(historicView) {
                historicView.dispose();
            });
        }, 1000);
    }

    setTimeout(function() {
        currentView.getElement().style.webkitTransitionDuration = '0.35s';
        view.getElement().style.webkitTransform = 'translate3d(0, 0, ' + view.index + 'px)';
        currentView.getElement().style.webkitTransform = 'translate3d(-30%, 0, ' + currentView.index + 'px)';
        view.getElement().style['boxShadow'] = '0 0 24px black';
    }, 50);

    this.currentView = view;

    this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
};


/**
 * Returns true if there is one or more views in history,
 * returns false otherwise.
 *
 * @return {boolean} Whether the view manager can push current view.
 */
SamanthaClosure.ui.ViewManager.prototype.canGoBack = function() {
    return this.history && this.history.length > 0;
};


/**
 * Switches to the previous view if there's one.
 */
SamanthaClosure.ui.ViewManager.prototype.push = function() {
    var lastView = this.history.pop(),
        currentView = this.currentView;

    if (!lastView) return;

    window.requestAnimationFrame(function() {
        lastView.getElement().style.webkitTransitionDuration = 0;
        lastView.getElement().style.webkitTransform = 'translate3d(-30%,0,0)';
        window.requestAnimationFrame(function() {
            lastView.getElement().style.webkitTransitionDuration = '0.35s';
            currentView.getElement().style.webkitTransitionDuration = '0.35s';

            lastView.getElement().style.webkitTransform = 'translate3d(0, 0, ' + lastView.index + 'px)';
            currentView.getElement().style.webkitTransform = 'translate3d(100%, 0, ' + currentView.index + 'px)';
            currentView.getElement().style['boxShadow'] = '0 0 0 black';
        });
    });

    this.currentView = lastView;
    lastView.activate && lastView.activate();

    setTimeout(function() {
        currentView.dispose();
    }, 1000);

    this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
};


/**
 * Makes a given view the foremost view without animations and with disposing previous views in history.
 *
 * @param {SamanthaClosure.ui.View} view The view to set as the foremost view.
 * @param {boolean=} opt_noDispose Whether to dispose the current view.
 */
SamanthaClosure.ui.ViewManager.prototype.setCurrentView = function(view, opt_noDispose) {
    if (!view.rendered) view.render(this.rootEl, this.topIndex += 2);

    var currentView = this.currentView;

    if (!opt_noDispose) {
        setTimeout(function() {
            currentView && currentView.dispose();
        }, 1000);
    } else if (currentView) {
        currentView.getElement().style.webkitTransitionDuration = '0s';
        currentView.getElement().style.webkitTransform = 'translate3d(100%, 0, ' + currentView.index + 'px)';
    }

    view.index = this.topIndex += 2;
    this.currentView = view;
    this.currentView.activate && this.currentView.activate();


    // Dispose all views in history.
    this.history.forEach(function(historicView) {
        historicView.dispose();
    });

    this.history = [];

    var translation = 'translate3d(0, 0, ' + view.index + 'px)';
    view.getElement().style.webkitTransitionDuration = '0s';

    if (this.state == SamanthaClosure.ui.ViewManager.State.SIDEBAR_OPEN) {
        translation = 'translate3d(' + (128 - SamanthaClosure.ui.View.WIDTH) + 'px, 0, ' + view.index + 'px)';

        view.getElement().style.webkitTransform = translation;
        this.toggleSidebar_(false);

        return;
    }

    view.getElement().style.webkitTransform = translation;
    //view.getElement().style.zIndex = view.index;

    this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
};


/**
 * Toggles the sidebar on or off according to its current state. This is to be used for a menu button, for example.
 */
SamanthaClosure.ui.ViewManager.prototype.toggleSidebar = function() {
    this.toggleSidebar_(this.state == SamanthaClosure.ui.ViewManager.State.DEFAULT);
};


/**
 * Initializes touch event handlers for all touch end and touch move events ocurring on the root element.
 *
 * @private
 */
SamanthaClosure.ui.ViewManager.prototype.initTouchEvents_ = function() {
    goog.events.listen(this.rootEl, goog.events.EventType.TOUCHMOVE, this.onTouchMove_, false, this);
    goog.events.listen(this.rootEl, goog.events.EventType.TOUCHEND, this.onTouchEnd_, false, this);
};


/**
 * Handles touch move events and decides how the view transitions should occur.
 *
 * @private
 * @param {goog.events.Event} e Touch move event.
 */
SamanthaClosure.ui.ViewManager.prototype.onTouchMove_ = function(e) {
    var clientX = e.getBrowserEvent().changedTouches[0].clientX;
    clearTimeout(this.hideSidebarTimeout);

    if (this.state == SamanthaClosure.ui.ViewManager.State.DEFAULT || this.state == SamanthaClosure.ui.ViewManager.State.SIDEBAR_OPEN)
        this.firstX = clientX;

    if (this.state == SamanthaClosure.ui.ViewManager.State.DEFAULT) {
        this.lastTouches = [];

        this.state = SamanthaClosure.ui.ViewManager.State.STARTED_GESTURE;
    }

    if (this.state == SamanthaClosure.ui.ViewManager.State.STARTED_GESTURE) {
        if (clientX <= 50) {
            if (this.history.length && this.currentView.supportsBackGesture)
                this.state = SamanthaClosure.ui.ViewManager.State.GOING_TO_BACK_VIEW;
        }
        else if (this.currentView.hasSidebar) {
            this.lastTouches.push(this.firstX - clientX);

            if (this.lastTouches.length == 4) this.lastTouches.shift();

            if (this.lastTouches[2] - this.lastTouches[0] > 40)
                this.state = SamanthaClosure.ui.ViewManager.State.OPENING_SIDEBAR;
        }
    }

    if (this.state == SamanthaClosure.ui.ViewManager.State.SIDEBAR_OPEN)
        this.state = SamanthaClosure.ui.ViewManager.State.CLOSING_SIDEBAR;

    switch (this.state) {
        case SamanthaClosure.ui.ViewManager.State.GOING_TO_BACK_VIEW:
            this.backGestureTouchMove_(e);
            break;
        case SamanthaClosure.ui.ViewManager.State.CLOSING_SIDEBAR:
            this.closeSidebarTouchMove_(e);
            break;
        case SamanthaClosure.ui.ViewManager.State.OPENING_SIDEBAR:
            this.openSidebarTouchMove_(e);
            break;
    }
};


/**
 * Handles touch end events and decides how the view transitions should follow.
 *
 * @private
 * @param {goog.events.Event} e Touch end event.
 */
SamanthaClosure.ui.ViewManager.prototype.onTouchEnd_ = function(e) {
    var state;

    switch (this.state) {
        case SamanthaClosure.ui.ViewManager.State.GOING_TO_BACK_VIEW:
            this.backGestureTouchEnd_(e);
            break;
        case SamanthaClosure.ui.ViewManager.State.OPENING_SIDEBAR:
            state = true;
            if (this.lastTouches[2] - this.lastTouches[0] < 3)
                state = false;

            this.toggleSidebar_(state);
            break;
        case SamanthaClosure.ui.ViewManager.State.CLOSING_SIDEBAR:
            state = true;
            if (this.lastTouches[2] - this.lastTouches[0] < -3)
                state = false;

            this.toggleSidebar_(state);
            break;
        case SamanthaClosure.ui.ViewManager.State.SIDEBAR_OPEN:
            if (SamanthaClosure.events.GestureHandler.getInstance().canTap) return;
            this.toggleSidebar_(false);
            break;
        default:
            this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
    }
};


/**
 * Handles touch end event when they occur in a back gesture.
 *
 * @private
 * @param {goog.events.Event} e Touch end event.
 */
SamanthaClosure.ui.ViewManager.prototype.backGestureTouchEnd_ = function(e) {
    if (!this.firstX) return;

    var that = this,
        history = this.history,
        lastView = history[history.length - 1],
        currentView = this.currentView,
        clientX = e.getBrowserEvent().changedTouches[0].clientX,
        duration = goog.math.lerp(0.15, 0.35, (SamanthaClosure.ui.View.WIDTH - clientX) / SamanthaClosure.ui.View.WIDTH);

    window.requestAnimationFrame(function() {
        currentView.getElement().style.webkitTransitionDuration = duration + 's';
        lastView.getElement().style.webkitTransitionDuration = duration + 's';

        var currentViewX = '100%',
            lastViewX = '0';

        if (clientX < (SamanthaClosure.ui.View.WIDTH / 2)) {
            currentViewX = '0';
            lastViewX = '-30%';

            goog.events.listenOnce(lastView.getElement(), 'webkitTransitionEnd', function() {
                lastView.getElement().style.webkitTransitionDuration = 0;
                lastView.getElement().style.webkitTransform = 'translate3d(-100%,-100%,0)';
            });
        } else {
            history.pop();
            that.currentView = lastView;

            lastView.activate && lastView.activate();

            setTimeout(function() {
                currentView.dispose();
            }, 1000);
        }

        currentView.getElement().style.webkitTransform = 'translate3d(' + currentViewX + ', 0, ' +
            currentView.index + 'px)';
        lastView.getElement().style.webkitTransform = 'translate3d(' + lastViewX + ', 0, ' +
            (currentView.index - 1) + 'px)';
        currentView.getElement().style['boxShadow'] = '0px 0 0px black';
    });

    this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
};


/**
 * Handle touch move events when they occur in a back gesture.
 *
 * @private
 * @param {goog.events.Event} e Touch end event.
 */
SamanthaClosure.ui.ViewManager.prototype.backGestureTouchMove_ = function(e) {
    if (!this.history.length) return;

    /* Google Chrome will fire a touchcancel event about 200 milliseconds
     after touchstart if it thinks the user is panning/scrolling and you
     do not call event.preventDefault(). */
    e.preventDefault();
    var clientX = e.getBrowserEvent().changedTouches[0].clientX;

    var lastView = this.history[this.history.length - 1];
    var currentView = this.currentView;
    var currentViewDiff = clientX - this.firstX;
    var viewWidth = SamanthaClosure.ui.View.WIDTH;
    var lastViewDiff = Math.floor(goog.math.lerp(-viewWidth * 0.3, 0, currentViewDiff / (viewWidth - this.firstX)));
    var boxShadow = Math.floor(goog.math.lerp(1, 0, currentViewDiff / (viewWidth - this.firstX)) * 5) / 5;
    if (currentViewDiff < 0) return;

    window.requestAnimationFrame(function() {
        currentView.getElement().style.webkitTransitionDuration = '0s';
        lastView.getElement().style.webkitTransitionDuration = '0s';
        currentView.getElement().style.webkitTransform = 'translate3d(' + currentViewDiff + 'px, 0, ' +
            currentView.index + 'px)';
        lastView.getElement().style.webkitTransform = 'translate3d(' + lastViewDiff + 'px, 0, ' +
            (currentView.index - 1) + 'px)';

        currentView.getElement().style['boxShadow'] = '0px 0 24px rgba(0, 0, 0, ' + boxShadow + ')';
    });
};


/**
 * Close sidebar touch move functionality.
 *
 * @private
 * @param {goog.events.Event} e X coordinate difference.
 */
SamanthaClosure.ui.ViewManager.prototype.closeSidebarTouchMove_ = function(e) {
    var clientX = e.getBrowserEvent().changedTouches[0].clientX;

    this.lastTouches.push(this.firstX - clientX);

    if (this.lastTouches.length == 4) this.lastTouches.shift();

    /* Google Chrome will fire a touchcancel event about 200 milliseconds
     after touchstart if it thinks the user is panning/scrolling and you
     do not call event.preventDefault(). */
    e.preventDefault();

    var currentView = this.currentView;
    var viewWidth = SamanthaClosure.ui.View.WIDTH;
    var currentViewDiff = clientX - this.firstX - viewWidth * 4 / 5;
    window.requestAnimationFrame(function() {
        currentView.getElement().style.webkitTransitionDuration = '0s';
        currentView.getElement().style.webkitTransform = 'translate3d(' +
            currentViewDiff + 'px, 0, ' + currentView.index + 'px)';
    });
};


/**
 * Toggles the sidebar on or off according to a given state.
 *
 * @private
 * @param {boolean} state Whether to open or close the sidebar.
 */
SamanthaClosure.ui.ViewManager.prototype.toggleSidebar_ = function(state) {
    var that = this,
        currentView = this.currentView,
        sidebar = goog.dom.query('sidebar-view')[0];

    setTimeout(function() {
        currentView.getElement().style.webkitTransitionDuration = '0.35s';

        var currentViewX = (128 - SamanthaClosure.ui.View.WIDTH) + 'px',
            sidebarX = '0',
            sidebarZ = currentView.index - 1 + 'px';

        if (!state) {
            currentViewX = '0';
            sidebarX = '100%';
            sidebarZ = 0;
            that.hideSidebarTimeout = setTimeout(function() {
                if (that.state == SamanthaClosure.ui.ViewManager.State.DEFAULT)
                    sidebar.style.webkitTransform = 'translate3d(' + sidebarX + ', 0, ' + sidebarZ + ')';
            }, 1000);
        } else {
            sidebar.style.webkitTransform = 'translate3d(' + sidebarX + ', 0, ' + sidebarZ + ')';
        }
        currentView.getElement().style.webkitTransform = 'translate3d(' + currentViewX + ', 0, ' +
            currentView.index + 'px)';
    }, 10);

    if (state)
        this.state = SamanthaClosure.ui.ViewManager.State.SIDEBAR_OPEN;
    else
        this.state = SamanthaClosure.ui.ViewManager.State.DEFAULT;
};


/**
 * Close sidebar touch move functionality.
 *
 * @private
 * @param {goog.events.Event} e X coordinate difference.
 */
SamanthaClosure.ui.ViewManager.prototype.openSidebarTouchMove_ = function(e) {
    if (SamanthaClosure.events.GestureHandler.getInstance().canTap) return;

    var clientX = e.getBrowserEvent().changedTouches[0].clientX;
    this.lastTouches.push(this.firstX - clientX);

    if (this.lastTouches.length == 4) this.lastTouches.shift();

    /* Google Chrome will fire a touchcancel event about 200 milliseconds
     after touchstart if it thinks the user is panning/scrolling and you
     do not call event.preventDefault(). */
    e.preventDefault();

    var sidebar = goog.dom.query('sidebar-view')[0];
    var currentView = this.currentView;
    var currentViewDiff = clientX - this.firstX;

    if (currentViewDiff >= 0) return;
    this.state = SamanthaClosure.ui.ViewManager.State.OPENING_SIDEBAR;

    window.requestAnimationFrame(function() {
        sidebar.style.webkitTransform = 'translate3d(0, 0, ' + (currentView.index - 1) + 'px)';
        sidebar.style.webkitTransitionDuration = '0s';

        currentView.getElement().style.webkitTransitionDuration = '0s';
        currentView.getElement().style.webkitTransform = 'translate3d(' +
            currentViewDiff + 'px, 0, ' + currentView.index + 'px)';
    });
};


/**
 * View manager states.
 *
 * @enum {string}
 */
SamanthaClosure.ui.ViewManager.State = {
    DEFAULT: 'default',
    STARTED_GESTURE: 'started',
    CLOSING_SIDEBAR: 'closingSidebar',
    OPENING_SIDEBAR: 'openingSidebar',
    SIDEBAR_OPEN: 'sidebarOpen',
    GOING_TO_BACK_VIEW: 'going'
};


window.requestAnimationFrame = (function() {
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();
