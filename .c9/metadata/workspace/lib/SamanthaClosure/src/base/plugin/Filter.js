{"filter":false,"title":"Filter.js","tooltip":"/lib/SamanthaClosure/src/base/plugin/Filter.js","undoManager":{"mark":12,"position":12,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":62,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview tart.base.plugin.Filter model filter plugin."," */","","goog.provide('tart.base.plugin.Filter');","","goog.require('tart.base.plugin.BasePlugin');","","","/**"," * @param {tart.base.Model} model"," *"," * @extends {tart.base.plugin.BasePlugin}"," * @constructor"," */","tart.base.plugin.Filter = function (model) {","    goog.base(this, model);","};","goog.inherits(tart.base.plugin.Filter, tart.base.plugin.BasePlugin);","","/**"," * Set plugins param key"," */","tart.base.plugin.Filter.prototype.key = \"filterParams\";","","","","/**"," * @param {string} field field to be filtereded."," * @param {string} condition condition operator."," * @param {string} value field value to filter field for."," */","tart.base.plugin.Filter.prototype.addFilter = function (field, condition, value) {","","    /**","     * There can be multiple condition-value pair for a field","     */","    var fieldFilter = this.map.get(field);","","    //and if this field did not set before create a new object","    if (!fieldFilter) {","        fieldFilter = {};","    }","","    fieldFilter[condition] = value;","","    this.map.set(field, fieldFilter);","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":15,"column":0},"end":{"row":15,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":14},"end":{"row":18,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":50},"end":{"row":18,"column":54},"action":"remove","lines":["tart"]},{"start":{"row":18,"column":50},"end":{"row":18,"column":65},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":23,"column":0},"end":{"row":23,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":32,"column":0},"end":{"row":32,"column":15},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":28},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":11},"end":{"row":10,"column":15},"action":"remove","lines":["tart"]},{"start":{"row":10,"column":11},"end":{"row":10,"column":26},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":14},"end":{"row":4,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":29},"action":"insert","lines":["SamanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":17},"end":{"row":1,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":32},"action":"insert","lines":["SamanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":70,"mode":"ace/mode/javascript"}},"timestamp":1425303514044,"hash":"6d871798e0c3fc4a6b69ce7f82c4a59e63b85b0d"}