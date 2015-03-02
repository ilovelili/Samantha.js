/**
 * @fileoverview This component handles the password entrance and display mode toggling of password string.
 * It takes an optional value defining the minimum length requirement of the password string. If the minimum length
 * requirement is not being meet, it returns an empty string. The display toggler works like a switch for displaying
 * mode. When the value of related variable 'displayPassword' is equal to false, the input area conceals the string
 * entered and displays '*'
 * chars instead. Otherwise, the password string is being displayed as it is.
 */



goog.provide('SamanthaClosure.ui.input.RevealingPassword');
goog.require('SamanthaClosure.ui.DlgComponent');



/**
 * @constructor
 * @extends {SamanthaClosure.ui.DlgComponent}
 * @param {{minLength: number}=} opt_options
 */
SamanthaClosure.ui.input.RevealingPassword = function(opt_options) {
    goog.base(this);

    this.displayPassword = false;
    this.minLength = opt_options && opt_options.minLength || 6;
};
goog.inherits(SamanthaClosure.ui.input.RevealingPassword, SamanthaClosure.ui.DlgComponent);


/**
 * Returns the password as a string if it meets the requirements, otherwise, it returns an empty string.
 * @return {string} returning value.
 */
SamanthaClosure.ui.input.RevealingPassword.prototype.getPassword = function() {
    var passwordArea = this.getChild(this.mappings.INPUT)[0];
    if (passwordArea.value.length >= this.minLength)
        return passwordArea.value;
    else
        return '';
};


/**
 * Toggles the input area's displaying mode in order to conceal or reveal the text entered.
 *
 */
SamanthaClosure.ui.input.RevealingPassword.prototype.toggleDisplay = function() {
    this.displayPassword = !this.displayPassword;
    var passwordArea = this.getChild(this.mappings.INPUT)[0];
    if (this.displayPassword)
        passwordArea.type = 'text';
    else
        passwordArea.type = 'password';
    passwordArea.focus();
};


/**
 * Constructs the base template.
 * @return {string} base template.
 */
SamanthaClosure.ui.input.RevealingPassword.prototype.templates_base = function() {
    return '<span id="' + this.id + '" class="revealingPassword">' +
                '<input name="passwordInput" type="password" class="textForm passwordInput passwordInputArea" ' +
                'minlength="6" value=""/>' +
                '<span class="visibilityToggler"></span>' +
           '</span>';
};


/**
 * Resets the password text area.
 */
SamanthaClosure.ui.input.RevealingPassword.prototype.resetInputArea = function() {
    var passwordArea = this.getChild(this.mappings.INPUT)[0];
    passwordArea.value = '';
};


/**
 * RevealingPassword domMappings.
 * @enum {string}
 */
SamanthaClosure.ui.input.RevealingPassword.prototype.mappings = {
    INPUT: '.passwordInput',
    TOGGLER: '.visibilityToggler'
};


(function() {
    var proto = SamanthaClosure.ui.input.RevealingPassword.prototype;
    proto.events = {};
    var toggleVisibility = proto.events[goog.events.EventType.CLICK] = {};
    toggleVisibility[proto.mappings.TOGGLER] = proto.toggleDisplay;
})();
