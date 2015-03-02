{"filter":false,"title":"Widget.js","tooltip":"/lib/SamanthaClosure/samantha/components/Widget.js","undoManager":{"mark":10,"position":10,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":65,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview tart.components.Widget is a base class for all components Widget's."," */","","goog.require('tart');","goog.provide('tart.components.Widget');","","/**"," * Base widget"," * @constructor"," */","tart.components.Widget = function() {","    /** @private */","    this.componentId_ = tart.getUid();","};","","/**"," * Renders the component in a given element or in its placeholder that should already be in the DOM."," *"," * @param {Element=} rootEl If provided, the widget will render into this rootEl."," *                              Otherwise, it will look for its placeholder in DOM."," */","tart.components.Widget.prototype.render = function (rootEl) {","    rootEl = rootEl || goog.dom.getElement(this.componentId_);","    rootEl.appendChild(this.controller.getDOM());","};","","/**"," * Get placeholder template"," * @return {string} placeholder markup."," */","tart.components.Widget.prototype.getPlaceholder = function () {","    return this.templates_placeholder();","};","","/**"," * Component's placeholder template"," * @return {string} placeholder markup."," */","tart.components.Widget.prototype.templates_placeholder = function () {","    return '<div class=\"widgetPlaceholder\" id=\"' + this.componentId_ + '\"></div>';","};","","/**"," * Get component id"," * @return {Number} component id."," */","tart.components.Widget.prototype.getId = function () {","    return this.componentId_;","};","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":2,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":32},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":12,"column":0},"end":{"row":12,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":24},"end":{"row":14,"column":28},"action":"remove","lines":["tart"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":39},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":23,"column":0},"end":{"row":23,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":32,"column":0},"end":{"row":32,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":40,"column":0},"end":{"row":40,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":48,"column":0},"end":{"row":48,"column":15},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":564,"scrollleft":0,"selection":{"start":{"row":48,"column":62},"end":{"row":48,"column":62},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425189083208,"hash":"d7de3fe90ed2c9010966a1bcfc9ed731c0e6c4fe"}