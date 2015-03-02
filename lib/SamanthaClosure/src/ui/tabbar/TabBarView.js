goog.provide('SamanthaClosure.ui.TabBarView');
goog.require('SamanthaClosure.ui.View');



/**
 * @constructor
 * @extends {SamanthaClosure.ui.View}
 */
SamanthaClosure.ui.TabBarView = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.ui.TabBarView, SamanthaClosure.ui.View);


/**
 * @override
 */
SamanthaClosure.ui.TabBarView.prototype.onAfterRender = function() {
    this.vm = new SamanthaClosure.ui.ViewManager(this.getElement());
};


/**
 * @param {goog.events.BrowserEvent} e Item touch event handler.
 */
SamanthaClosure.ui.TabBarView.prototype.onItemTap = function(e) {
    var activeItem = this.getChild(this.mappings.ACTIVE)[0];
    if (activeItem && activeItem == e.target) return;

    var itemIndex = [].indexOf.call(this.getChild(this.mappings.ITEMS)[0].childNodes, e.target);

    this.activateItem(itemIndex);
};


/**
 * Adds active class to item.
 * @param {number} index Index of the item to be active.
 */
SamanthaClosure.ui.TabBarView.prototype.activateItem = function(index) {
    if (index == -1) return;

    this.deactivateActiveItem();
    var item = this.getChild(this.mappings.ITEM)[index];
    goog.dom.classes.add(item, 'active');

    if (this.views && this.views[index])
        this.vm.setCurrentView(this.views[index], true);
};


/**
 * Activates a tab bar item with a given name. If an item for the given the name isn't found, does nothing.
 *
 * @param {string} name Name for the tab bar item.
 */
SamanthaClosure.ui.TabBarView.prototype.activateItemByName = function(name) {
    var child = this.getChild(this.mappings.ITEM + '[data-view=' + name + ']')[0];
    if (!child) return;

    var itemIndex = [].indexOf.call(this.getChild(this.mappings.ITEMS)[0].childNodes, child);

    this.activateItem(itemIndex);
};


/**
 * Removes active class of active item.
 */
SamanthaClosure.ui.TabBarView.prototype.deactivateActiveItem = function() {
    var activeItem = this.getChild(this.mappings.ACTIVE);
    if (activeItem && activeItem.length)
        goog.dom.classes.remove(activeItem[0], 'active');
};


/**
 * @return {string} Base template of NavigationBar component.
 */
SamanthaClosure.ui.TabBarView.prototype.templates_content = function() {
    return '<tab-bar id="' + this.id + '">' +
            '<tab-items>' +
            this.templates_items() +
            '</tab-items>' +
        '</tab-bar>';
};


/**
 * @return {string} Template for tab bar items.
 */
SamanthaClosure.ui.TabBarView.prototype.templates_items = function() {
    return '';
};


/**
 * @enum {string} Dom mappings.
 */
SamanthaClosure.ui.TabBarView.prototype.mappings = {
    ITEM: 'tab-item',
    ITEMS: 'tab-items',
    ACTIVE: '.active'
};


(function() {
    this.events = {};
    var tap = this.events[goog.events.EventType.TOUCHEND] = {};
    tap[this.mappings.ITEM] = this.onItemTap;
}).call(SamanthaClosure.ui.TabBarView.prototype);
