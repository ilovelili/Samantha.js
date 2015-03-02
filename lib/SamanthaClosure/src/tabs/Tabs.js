/**
 * @fileoverview Tabs is a fully working and customizable tab panel creator class.
 *
 * Example Usage:
 *
 *
 * var tabPanel = new SamanthaClosure.Tabs({
 *      activeTab: 1
 *  });
 *
 * var panel1 = new SamanthaClosure.TabPanel({
 *    title: 'Tab 1',
 *    html: 'This is a basic text'
 * });
 * var panel2 = new SamanthaClosure.TabPanel({
 *     title: 'Tab 2',
 *    html: 'Lorem ipsum dolor sit amet'
 * });
 * var panel3 = new SamanthaClosure.TabPanel({
 *     title: 'Tab 3',
 *     html: 'Lorem ipsum dolor sit amet is a dummy text'
 * });
 *
 * tabPanel.addTabPanel(panel1);
 * tabPanel.addTabPanel(panel2);
 * tabPanel.addTabPanel(panel3);
 *
 * var dom = tabPanel.buildDOM();
 * $('body').append(dom);
 *
*/

goog.provide('SamanthaClosure.Tabs');
goog.require('goog.pubsub.PubSub');
goog.require('SamanthaClosure.TabPanel');



/**
 * Tabs is a fully working and customizable tab panel creator class
 * @constructor
 * @param {Object=} options Customized initial options for tabpanel.
 * @extends {goog.pubsub.PubSub}
 */
SamanthaClosure.Tabs = function(options) {
    goog.base(this);
    options = options || {};
    this.initOptions(options);

    this.$tabContainer = $(this.templates_tabContainer());
    this.$panelContainer = $(this.templates_panelContainer());

    /**
     * Holds TabPanel objects associated with the tabpanel
     * @type {Array.<SamanthaClosure.TabPanel>}
     * @protected
     */
    this.tabPanels = [];

    /**
     * State of tab panel
     * @protected
     */
    this.rendered = false;

    this.initialize(this.props.renderConfig);
};
goog.inherits(SamanthaClosure.Tabs, goog.pubsub.PubSub);


/**
 * Initialize the tabpanel with calling buildDOM method
 * @param {!string} renderCfg Where to container will be appended.
 */
SamanthaClosure.Tabs.prototype.initialize = function(renderCfg) {
    var panelDOM = this.buildDOM();
    if (renderCfg.insertAfter) {
        panelDOM.insertAfter(renderCfg.insertAfter);
    }
    else if (renderCfg.insertBefore) {
        panelDOM.insertBefore(renderCfg.insertBefore);
    }
    else if (renderCfg.append) {
        renderCfg.append.append(panelDOM);
    }
};


/**
 * Adds new tab to existing tab panel
 * @param {!(Array|SamanthaClosure.TabPanel)} tabPanels An array that holds instance of TabPanel Class to add new tab.
 * Also tabPanels argument should be a tab panel instance instead of array.
 */
SamanthaClosure.Tabs.prototype.addTabPanel = function(tabPanels) {
    var that = this;
    if (goog.isArray(tabPanels)) {
        for (var i = 0, len = tabPanels.length; i < len; i++) {
            that.addTab(tabPanels[i]);
        }
    } else {
        that.addTab(tabPanels);
    }
    this.setActiveTab(this.activeTab);
};


/**
 * Adds a new tab to a Tabs instance.
 * @param {SamanthaClosure.TabPanel} tabPanel instance that's going to be added to a Tabs instance.
 */
SamanthaClosure.Tabs.prototype.addTab = function(tabPanel) {
    this.tabPanels.push(tabPanel);
    this.$tabContainer.append(tabPanel.$tab);
    this.$panelContainer.append(tabPanel.$panel);
    this.bindTabPanelEvents(tabPanel);
};


/**
 * Removes the tab with the given index.
 * @param {!number} index Index number of the tab that you want to remove.
 */
SamanthaClosure.Tabs.prototype.removeTab = function(index) {
    var tabsLength = this.getTabsLength();

    if (index >= tabsLength || tabsLength === 0) {
        return;
    }

    this.tabPanels[index].$tab.remove();
    this.tabPanels[index].$panel.remove();
    this.tabPanels.splice(index, 1);

    try {
        if (index <= this.activeTab) {
            if (index === this.activeTab) {
                this.setActiveTab(index - 1);
            } else {
                this.setActiveTab(this.activeTab - 1);
            }
        }
    } catch (e) {}
};


/**
 * Sets the tab as active with the given index.
 * @param {!number} index Index number of the tab that you want to set as active.
 */
SamanthaClosure.Tabs.prototype.setActiveTab = function(index) {
    if (index >= this.getTabsLength()) {
        return false;
    }

    var deActivatedTab = this.getActiveTab();

    for (var i = 0, len = this.tabPanels.length; i < len; i++) {
        if (index != i) {
            this.tabPanels[i].$tab.removeClass(this.props.activeTabCssClass);
            this.tabPanels[i].$panel.removeClass(this.props.activePanelCssClass);
        }
    }
    this.tabPanels[index].$tab.addClass(this.props.activeTabCssClass);
    this.tabPanels[index].$panel.addClass(this.props.activePanelCssClass);
    this.activeTab = index;

    var newlyActivatedTab = this.getActiveTab();

    if (deActivatedTab.onClose && deActivatedTab != newlyActivatedTab) /* prevent double fn call on initialize */
	        deActivatedTab.onClose(this);

	newlyActivatedTab.onShow && newlyActivatedTab.onShow(this); // call newly activated tab's onShow function
	this.publish('tabChange', this.getActiveTab(), this);
};


/**
 * Returns the active tab object contains tab and panel elements and templates that used in tab and panel.
 * @return {SamanthaClosure.TabPanel} The active tab.
 */
SamanthaClosure.Tabs.prototype.getActiveTab = function() {
    return this.tabPanels[this.activeTab];
};


/**
 * Binds required events of tabpanel.
 * @param {!SamanthaClosure.TabPanel} tabPanel Tabpanel instance for binding events to it.
 */
SamanthaClosure.Tabs.prototype.bindTabPanelEvents = function(tabPanel) {
    var that = this;

    var setMeActive = function() {
        var myIndex = goog.array.indexOf(that.tabPanels, tabPanel);
        that.setActiveTab(myIndex);
    };

    tabPanel.$tab.click(setMeActive);
};


/**
 * Builds DOM elements for tabpanel and returns DOM as ready to append to a container
 * @return {jQueryObject} DOM element of the Tabs instance.
 */
SamanthaClosure.Tabs.prototype.buildDOM = function() {
    this.$dom = $(this.templates_dom());
    this.$dom.append(this.$tabContainer);
    this.$dom.append(this.$panelContainer);
    this.rendered = true;
    return this.$dom;
};


/**
 * @return {boolean} The status of tabpanel, rendered or not.
 */
SamanthaClosure.Tabs.prototype.isRendered = function() {
    return this.rendered;
};


/**
 * @return {number} number of tabs associated with the Tabs instance.
 */
SamanthaClosure.Tabs.prototype.getTabsLength = function() {
    return this.tabPanels.length;
};


/**
 * Merges custom options object with defaults
 * @protected
 * @param {Object=} options Customized options for Tabs instance.
 */
SamanthaClosure.Tabs.prototype.initOptions = function(options) {
    var props = this.props = {};
    props.axis = options.axis || 'x';
    this.activeTab = options.activeTab || 0;

    props.renderConfig = options.renderConfig || {};

    props.tabPanelCssClass = options.tabPanelCssClass || '';
    props.tabContainerCssClass = options.tabContainerCssClass || '';
    props.panelContainerCssClass = options.panelContainerCssClass || '';
    props.activeTabCssClass = options.activeTabCssClass || 'SamanthaActiveTab';
    props.activePanelCssClass = options.activePanelCssClass || 'SamanthaActivePanel';
    props.panelWrapperCssClass = options.panelWrapperCssClass || '';
};


/**
 * @return {string} Main container markup.
 */
SamanthaClosure.Tabs.prototype.templates_dom = function() {
    return '<div class="SamanthaTabPanelContainer ' + this.props.tabPanelCssClass + '"></div>';
};


/**
 * @return {string} Tab container markup.
 */
SamanthaClosure.Tabs.prototype.templates_tabContainer = function() {
    return '<div class="SamanthaTabContainer ' + this.props.tabContainerCssClass + '"></div>';
};


/**
 * @return {string} Panel container markup.
 */
SamanthaClosure.Tabs.prototype.templates_panelContainer = function() {
    return '<div class="SamanthaPanelContainer ' + this.props.panelContainerCssClass + '"></div>';
};
