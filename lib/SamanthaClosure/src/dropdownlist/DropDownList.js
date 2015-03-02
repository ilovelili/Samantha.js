/**
 * @fileoverview Dropdown list class is an example of an HTML select box.
 *
 * Example usage:
 * var items        = {key1:'val1',key2:'val2',key3:'val3'};
 * var builder      = new SamanthaClosure.DropdownBuilder('elementId');
 * var selectedItem = 1;
 * var list = new SamanthaClosure.DropdownList(items, builder, selectedItem);
 * list.getAll(); // Outputs [{key1:'val1'},{key2:'val2'},{key3:'val3'}]
 * list.getDOM(); // Returns a select (dropdown) menu in jquery format jQuery(select#elementId)
 * list.setActiveItemIndex(2); // Sets key3:val3 option element selected property to TRUE;
 * list.getActiveItemIndex(); // Returns an Object { key3="val3" }
 */

goog.provide('SamanthaClosure.DropdownList');
goog.require('SamanthaClosure.Collection');
goog.require('SamanthaClosure.DropdownBuilder');



/**
 * Constructor method for DropdownList.
 *
 * @constructor
 * @extends {SamanthaClosure.Collection}
 * @param {Object|Array}  initialList    initial list of items.
 * @param {SamanthaClosure.Builder=} opt_builder    builder class.
 * @param {number=}       opt_activeItem index of the active item.
 */
SamanthaClosure.DropdownList = function(initialList, opt_builder, opt_activeItem) {
    goog.base(this, initialList, opt_activeItem);
    this.builder = opt_builder || new SamanthaClosure.DropdownBuilder('');
    this.builder.buildDOM(this);
};
goog.inherits(SamanthaClosure.DropdownList, SamanthaClosure.Collection);


/**
 * @inheritDoc
 */
SamanthaClosure.DropdownList.prototype.removeByIndex = function(index) {
    var result = this.constructor.superClass_.removeByIndex.call(this, index);

    if (result === false) {
        return -1;
    } else if (result === -1) {
        this.setActiveItemIndex(0);
        return 0;
    } else {
        if (this.builder) {
            this.builder.removeOption(result);
        }
        return result;
    }
};


/**
 * Removes current DOM element of dropdownlist instance from window.document.
 */
SamanthaClosure.DropdownList.prototype.removeDOM = function() {
    this.builder.removeDOM();
};


/**
 * Returns current DOM element of dropdownlist instance.
 *
 * @return {jQueryObject} The jQuery object that wraps the DOM.
 */
SamanthaClosure.DropdownList.prototype.getDOM = function() {
    return this.builder.getDOM();
};


/**
 * @inheritDoc
 */
SamanthaClosure.DropdownList.prototype.setActiveItemIndex = function(newIndex) {
    this.switchIndex(newIndex);
    if (this.builder) {
        this.builder.changeActiveItem(this.getActiveItemIndex());
        return true;
    }
    return false;
};


/**
 * Set active item belongs to value parameter.
 * @param {(string|number)} value of an array.
 */
SamanthaClosure.DropdownList.prototype.setActiveItemByValue = function(value) {
    var that = this;

    var items = this.getValues();
    var index = goog.array.findIndex(items, function(item) {
        return value == item;
    });

    that.setActiveItemIndex(index);
};



/**
 * Triggered by this.builder.dom_ element when user change the index by non-programatically way.
 * Important: This method shouldn't be called in any implementation code. Developers should use
 *            this.setActiveItemIndex() method instead of this.
 *
 * @param {number} newIndex index of the item to set as active.
 */

SamanthaClosure.DropdownList.prototype.switchIndex = function(newIndex) {
    this.constructor.superClass_.setActiveItemIndex.call(this, ((newIndex < 0) ? 0 : newIndex));
};


/**
 * @inheritDoc
 */
SamanthaClosure.DropdownList.prototype.addItem = function(key, value) {
    var added = this.constructor.superClass_.addItem.call(this, key, value);
    if (this.builder && added === true) {
        this.builder.addOption(key, value);
        return true;
    }
    return false;
};
