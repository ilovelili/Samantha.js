goog.provide('SamanthaClosure.ui.SidebarComponent');
goog.require('SamanthaClosure.ui.DlgComponent');



/**
 * @constructor
 * @extends {SamanthaClosure.ui.DlgComponent}
 */
SamanthaClosure.ui.SidebarComponent = function() {
    goog.base(this);
};
goog.inherits(SamanthaClosure.ui.SidebarComponent, SamanthaClosure.ui.DlgComponent);


/**
 * Dispatches a switch view event to listeners and toggles the sidebar of the view manager that
 * is responsible for this sidebar.
 *
 * @param {goog.events.BrowserEvent} e Tap event.
 */
SamanthaClosure.ui.SidebarComponent.prototype.onSidebarItemTap = function(e) {
    var view = e.target.getAttribute('data-view');
    if (!view) return;

    this.dispatchEvent({
        type: SamanthaClosure.ui.SidebarComponent.EventType.SWITCH_VIEW,
        view: view
    });

    this.vm.toggleSidebar();
};


/**
 * @return {string} Returns the template base.
 */
SamanthaClosure.ui.SidebarComponent.prototype.templates_base = function() {
    return '<sidebar-view class="view" id="' + this.id + '">' +
            '<sidebar-items>' + this.template_items() + '</sidebar-items>' +
        '</sidebar-view>';
};


/**
 * @return {string} Returns the items for the sidebar.
 */
SamanthaClosure.ui.SidebarComponent.prototype.template_items = function() {
    return '';
};


/**
 * @enum {string} Sidebar events.
 */
SamanthaClosure.ui.SidebarComponent.EventType = {
    SWITCH_VIEW: 'switchView'
};


/**
 * @enum {string} Dom mapping.
 */
SamanthaClosure.ui.SidebarComponent.prototype.mappings = {
    ITEM: 'sidebar-item'
};


(function(proto) {
    proto.events = {};
    var tap = proto.events[SamanthaClosure.events.EventType.TAP] = {};

    tap[proto.mappings.ITEM] = proto.onSidebarItemTap;
})(SamanthaClosure.ui.SidebarComponent.prototype);
