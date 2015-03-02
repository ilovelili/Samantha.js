{"filter":false,"title":"View.js","tooltip":"/lib/SamanthaClosure/samantha/View.js","undoManager":{"mark":23,"position":23,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":160,"column":0},"action":"insert","lines":["// Copyright 2014 Startup Kitchen. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","goog.provide('tart.ui.View');","goog.require('tart.ui.DlgComponent');","goog.require('tart.ui.ViewManager');","","","","/**"," * The default view class for all views. Handles default overrides for tart.ui.DlgComponent such as rendering"," * to body by default."," *"," * @constructor"," * @extends {tart.ui.DlgComponent}"," */","tart.ui.View = function() {","    goog.base(this);","};","goog.inherits(tart.ui.View, tart.ui.DlgComponent);","","","/**"," * View index in z-axis. This should be used as the z value for initial translate3d style declaration."," *"," * @type {number}"," */","tart.ui.View.prototype.index = 0;","","","/**"," * Determines whether the view should support back gestures to go back in history or not."," *"," * @type {boolean}"," */","tart.ui.View.prototype.supportsBackGesture = true;","","","/**"," * True if the view allows sidebar access. This lets the view manager orchestrate touch gestures for the sidebar menu."," * Default is false."," *"," * @type {boolean}"," */","tart.ui.View.prototype.hasSidebar = false;","","","/**"," * Defines CSS class names for the view."," *"," * @type {string}"," */","tart.ui.View.prototype.className = '';","","","/**"," * @type {number} Gives the device width."," */","tart.ui.View.WIDTH = parseInt(window.getComputedStyle(document.body, null).width, 10);","","","/**"," * Overridden to make document.body the default parent element. This method also saves if a view is already rendered."," * Original opt_index parameter is also overridden with the view index. In this case, this view will always be appended"," * to the body."," *"," * @override"," *"," * @param {(Element|number)=} opt_rootEl Root element to render this view in."," * @param {number=} opt_index The index of this view in z-axis."," */","tart.ui.View.prototype.render = function(opt_rootEl, opt_index) {","    this.onBeforeRender();","    this.rendered = true;","    if (goog.isNumber(opt_rootEl)) {","        opt_index = opt_rootEl;","        opt_rootEl = document.body;","    }","","    if (goog.isDef(opt_index)) this.index = opt_index;","    goog.base(this, 'render', opt_rootEl || document.body);","    this.onAfterRender();","};","","","/**"," * Method called before a render process. Called automatically before each render. Subclasses should override"," * this method for tasks that should be done right before the View enters the document."," */","tart.ui.View.prototype.onBeforeRender = function() {};","","","/**"," * Method called after a render process. Called automatically after each render. Subclasses should override"," * this method for tasks that should be done when the View is in document."," */","tart.ui.View.prototype.onAfterRender = function() {};","","","/**"," * Returns the HTML markup for the initial state."," *"," * @return {string} The template for the view."," */","tart.ui.View.prototype.getTemplate = function() {","    return this.templates_base();","};","","","/**"," * Method called when the View is being activated by a ViewManager. Subclasses should override this method for tasks"," * that should be done when the View is in viewport, such as updating information, etc."," */","tart.ui.View.prototype.activate = function() {};","","","/**"," * Overriden to include 'view' as a class name."," *"," * @override"," */","tart.ui.View.prototype.templates_base = function() {","    return '<view id=\"' + this.id + '\"' +","        'class=\"' + this.className + '\"' +","        'style=\"-webkit-transform: translate3d(100%, 0, ' + this.index + 'px)\">' +","        this.templates_content() +","        '</view>';","};","","","/**"," * Empty content template. Subclasses should override this method and implement necessary markup here."," *"," * @return {string} Content markup for the view."," */","tart.ui.View.prototype.templates_content = function() {","    return '';","};","","","/**"," * @override"," */","tart.ui.View.prototype.disposeInternal = function() {","    var element = this.element;","    goog.base(this, 'disposeInternal');","","    goog.dom.removeNode(element);","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2014 Startup Kitchen. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":14},"end":{"row":1,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":14},"end":{"row":1,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":71},"end":{"row":7,"column":75},"action":"remove","lines":["tart"]},{"start":{"row":7,"column":71},"end":{"row":7,"column":86},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":13},"end":{"row":11,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":28},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":14},"end":{"row":16,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":16,"column":14},"end":{"row":16,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":39},"end":{"row":16,"column":43},"action":"remove","lines":["tart"]},{"start":{"row":16,"column":39},"end":{"row":16,"column":54},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":24,"column":0},"end":{"row":24,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":32,"column":0},"end":{"row":32,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":41,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":41,"column":0},"end":{"row":41,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":49,"column":0},"end":{"row":49,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":55,"column":0},"end":{"row":55,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":68,"column":0},"end":{"row":68,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":86,"column":0},"end":{"row":86,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":86,"column":0},"end":{"row":86,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":93,"column":0},"end":{"row":93,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":93,"column":0},"end":{"row":93,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":101,"column":0},"end":{"row":101,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":101,"column":0},"end":{"row":101,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":110,"column":0},"end":{"row":110,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":110,"column":0},"end":{"row":110,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":118,"column":0},"end":{"row":118,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":118,"column":0},"end":{"row":118,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":132,"column":0},"end":{"row":132,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":132,"column":0},"end":{"row":132,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":140,"column":0},"end":{"row":140,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":140,"column":0},"end":{"row":140,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":1908,"scrollleft":0,"selection":{"start":{"row":139,"column":3},"end":{"row":139,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425208010446,"hash":"b57ad4b0a3f6efe35e8fe9e0b0d9ce17994f4da2"}