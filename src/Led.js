/**
 * @fileoverview LED component.
 */


goog.provide('Samantha.Led');
goog.require('Samantha.ui.Component');



/**
 * LED is a simple component used to show the status of switches.
 *
 * @constructor
 * @extends {Samantha.ui.Component}
 *
 * @param {Samantha.footswitch.Switch=} opt_footswitch Footswitch this LED will follow.
 * @param {string=} opt_name Name of the LED. Will be written under it.
 */
Samantha.Led = function(opt_footswitch, opt_name) {
    goog.base(this);

    this.footswitch = opt_footswitch;
    this.name = opt_name || '';
    this.state = false;

    this.bindModelEvents();
};
goog.inherits(Samantha.Led, Samantha.ui.Component);


/**
 * Toggles the state of the LED explicitly. Normally, this is unnecessary given a footswitch.
 */
Samantha.Led.prototype.toggle = function() {
    this.state = !this.state;

    this.updateUi();
};


/**
 * Updates the user interface - glow - accordingly.
 */
Samantha.Led.prototype.updateUi = function() {
    if (this.isInDocument()) {
        goog.dom.classes.enable(this.getElement(), 'on', this.state);
    }
};


/**
 * @override
 */
Samantha.Led.prototype.templates_base = function() {
    return '<div class="led" id="' + this.getId() + '">' +
               '<div class="nameHolder">' +
                   '<div class="name">' + this.name + '</div>' +
               '</div>' +
           '</div>';
};


/**
 * @override
 */
Samantha.Led.prototype.enterDocument = function() {
    goog.base(this, 'enterDocument');

    this.updateUi();
};


/**
 * @override
 */
Samantha.Led.prototype.bindModelEvents = function() {
    if (this.footswitch) {
        goog.events.listen(this.footswitch.model,
            [Samantha.footswitch.SwitchModel.EventType.ON, Samantha.footswitch.SwitchModel.EventType.OFF],
            this.onSwitchValueChange,
            false, this);
    }
};


/**
 * Acts on an off or on event dispatched from this LED's footswitch. Updates the UI accordingly.
 *
 * @param {{newValue: boolean}} e ON / OFF event of the switch.
 */
Samantha.Led.prototype.onSwitchValueChange = function(e) {
    this.state = e.newValue;
    this.updateUi();
};
