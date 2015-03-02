goog.provide('SamanthaClosure.ui.NavBarComponent');
goog.require('SamanthaClosure.ui.DlgComponent');


/**
 * Includes back button for back navigation.
 *
 * @constructor
 * @extends {SamanthaClosure.ui.DlgComponent}
 *
 * @param {SamanthaClosure.ui.NavBarComponent.NavBarOptions=} opt_config Config parameters to
 *        include things like title.
 */
SamanthaClosure.ui.NavBarComponent = function(opt_config) {
    goog.base(this);

    this.config = opt_config || {};

    this.hasBackButton = this.config.hasBackButton || this.hasBackButton;
    this.hasMenuButton = this.config.hasMenuButton || this.hasMenuButton;
};
goog.inherits(SamanthaClosure.ui.NavBarComponent, SamanthaClosure.ui.DlgComponent);


/**
* @typedef {{hasBackButton: (boolean|undefined), hasMenuButton: (boolean|undefined), title: string}}
*/
SamanthaClosure.ui.NavBarComponent.NavBarOptions;


/**
 * Defines whether the back button is visible.
 * @type {boolean}
 */
SamanthaClosure.ui.NavBarComponent.prototype.hasBackButton = false;


/**
 * @override
 */
SamanthaClosure.ui.NavBarComponent.prototype.templates_base = function() {
    var backButton = '',
        menuButton = '';

    if (this.hasBackButton) backButton = '<back-button style="display: block"><i class="icon-back"></i></back-button>';
    if (this.hasMenuButton) menuButton = '<menu-button><i class="icon-navigation"></i></menu-button>';

    return '<nav-bar id="' + this.getId() + '">' +
            backButton +
            menuButton +
            (this.config.title || '') +
        '</nav-bar>';
};


/**
 * Back button tap event handler.
 */
SamanthaClosure.ui.NavBarComponent.prototype.onBackButtonTap = function() {
    this.vm.push();
};


/**
 * Menu button tap event handler. Delegates event handling to subclasses via menuButtonHandler method.
 * @return {undefined} Returns executing menuButtonHandler if available.
 */
SamanthaClosure.ui.NavBarComponent.prototype.onMenuButtonTap = function() {
    if (this.menuButtonHandler) return this.menuButtonHandler();

    this.vm.toggleSidebar();
};


/**
 * @enum {string} Dom mapping.
 */
SamanthaClosure.ui.NavBarComponent.prototype.mappings = {
    BACK_BUTTON: 'back-button',
    MENU_BUTTON: 'menu-button'
};


(function() {
    this.events = {};
    var tap = this.events[SamanthaClosure.events.EventType.TAP] = {};

    tap[this.mappings.BACK_BUTTON] = this.onBackButtonTap;
    tap[this.mappings.MENU_BUTTON] = this.onMenuButtonTap;
}).call(SamanthaClosure.ui.NavBarComponent.prototype);
