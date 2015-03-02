{"filter":false,"title":"SideBarComponent.js","tooltip":"/lib/SamanthaClosure/samantha/ui/sidebar/SideBarComponent.js","undoManager":{"mark":16,"position":16,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":88,"column":0},"action":"insert","lines":["// Copyright 2014 Startup Kitchen. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","goog.provide('tart.ui.SidebarComponent');","goog.require('tart.ui.DlgComponent');","","","","/**"," * @constructor"," * @extends {tart.ui.DlgComponent}"," */","tart.ui.SidebarComponent = function() {","    goog.base(this);","};","goog.inherits(tart.ui.SidebarComponent, tart.ui.DlgComponent);","","","/**"," * Dispatches a switch view event to listeners and toggles the sidebar of the view manager that"," * is responsible for this sidebar."," *"," * @param {goog.events.BrowserEvent} e Tap event."," */","tart.ui.SidebarComponent.prototype.onSidebarItemTap = function(e) {","    var view = e.target.getAttribute('data-view');","    if (!view) return;","","    this.dispatchEvent({","        type: tart.ui.SidebarComponent.EventType.SWITCH_VIEW,","        view: view","    });","","    this.vm.toggleSidebar();","};","","","/**"," * @return {string} Returns the template base."," */","tart.ui.SidebarComponent.prototype.templates_base = function() {","    return '<sidebar-view class=\"view\" id=\"' + this.id + '\">' +","            '<sidebar-items>' + this.template_items() + '</sidebar-items>' +","        '</sidebar-view>';","};","","","/**"," * @return {string} Returns the items for the sidebar."," */","tart.ui.SidebarComponent.prototype.template_items = function() {","    return '';","};","","","/**"," * @enum {string} Sidebar events."," */","tart.ui.SidebarComponent.EventType = {","    SWITCH_VIEW: 'switchView'","};","","","/**"," * @enum {string} Dom mapping."," */","tart.ui.SidebarComponent.prototype.mappings = {","    ITEM: 'sidebar-item'","};","","","(function(proto) {","    proto.events = {};","    var tap = proto.events[tart.events.EventType.TAP] = {};","","    tap[proto.mappings.ITEM] = proto.onSidebarItemTap;","})(tart.ui.SidebarComponent.prototype);",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2014 Startup Kitchen. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":14},"end":{"row":1,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":14},"end":{"row":1,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":13},"end":{"row":7,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":7,"column":13},"end":{"row":7,"column":28},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":9,"column":0},"end":{"row":9,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":12,"column":14},"end":{"row":12,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":51},"end":{"row":12,"column":55},"action":"remove","lines":["tart"]},{"start":{"row":12,"column":51},"end":{"row":12,"column":66},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":21,"column":0},"end":{"row":21,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":14},"end":{"row":26,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":37,"column":0},"end":{"row":37,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":47,"column":0},"end":{"row":47,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":55,"column":0},"end":{"row":55,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":63,"column":0},"end":{"row":63,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":63,"column":0},"end":{"row":63,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":70,"column":27},"end":{"row":70,"column":31},"action":"remove","lines":["tart"]},{"start":{"row":70,"column":27},"end":{"row":70,"column":42},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":3},"end":{"row":73,"column":7},"action":"remove","lines":["tart"]},{"start":{"row":73,"column":3},"end":{"row":73,"column":18},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":916,"scrollleft":0,"selection":{"start":{"row":74,"column":0},"end":{"row":74,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425207560588,"hash":"b98bc4b4fda92cb8e5f727121b0bf333cae6b8e5"}