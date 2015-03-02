{"filter":false,"title":"Local.js","tooltip":"/lib/SamanthaClosure/samantha/dataProxy/Local.js","undoManager":{"mark":16,"position":16,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":65,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview tart.dataProxy.CircularLocal XHR data proxy."," */","","goog.provide('tart.dataProxy.CircularLocal');","goog.require('tart.dataProxy.Local');","","","","/**"," *"," * Base model to handle xhr requests"," *"," * @extends {tart.dataProxy.Local}"," * @constructor"," */","tart.dataProxy.CircularLocal = function() {","    goog.base(this);","};","goog.inherits(tart.dataProxy.CircularLocal, tart.dataProxy.Local);","","","/**"," * Fetch data from xhr and call a function with returned data"," * @param {Function=} callback function to call with returned data."," */","tart.dataProxy.CircularLocal.prototype.fetch = function(callback) {","    var fetchedData = this.getData();","    var pagerParam = this.params.get('paginationParams');","","    if (!fetchedData || !pagerParam)","        callback.call(this);","","    var offset = pagerParam.get('offset'),","        limit = pagerParam.get('limit'),","        length = fetchedData.length,","        tmp = [],","        pos;","","    if (limit > length) limit = length;","","    for (var i = offset, loopCount = offset + limit; i < loopCount; i++) {","        pos = (i % length + length) % length;","","        tmp.push(fetchedData[pos]);","    }","","    fetchedData = tmp;","    ","    callback.call(this, fetchedData);","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":17},"end":{"row":1,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":32},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":29},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":29},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":28},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":16,"column":0},"end":{"row":16,"column":15},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":29},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":19,"column":55},"end":{"row":19,"column":59},"action":"remove","lines":["tart"]},{"start":{"row":19,"column":55},"end":{"row":19,"column":70},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":26,"column":0},"end":{"row":26,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":51,"column":0},"action":"remove","lines":["/**"," * @fileoverview samanthaClosure.dataProxy.CircularLocal XHR data proxy."," */","","goog.provide('samanthaClosure.dataProxy.CircularLocal');","goog.require('samanthaClosure.dataProxy.Local');","","","","/**"," *"," * Base model to handle xhr requests"," *"," * @extends {samanthaClosure.dataProxy.Local}"," * @constructor"," */","samanthaClosure.dataProxy.CircularLocal = function() {","    goog.base(this);","};","goog.inherits(samanthaClosure.dataProxy.CircularLocal, samanthaClosure.dataProxy.Local);","","","/**"," * Fetch data from xhr and call a function with returned data"," * @param {Function=} callback function to call with returned data."," */","samanthaClosure.dataProxy.CircularLocal.prototype.fetch = function(callback) {","    var fetchedData = this.getData();","    var pagerParam = this.params.get('paginationParams');","","    if (!fetchedData || !pagerParam)","        callback.call(this);","","    var offset = pagerParam.get('offset'),","        limit = pagerParam.get('limit'),","        length = fetchedData.length,","        tmp = [],","        pos;","","    if (limit > length) limit = length;","","    for (var i = offset, loopCount = offset + limit; i < loopCount; i++) {","        pos = (i % length + length) % length;","","        tmp.push(fetchedData[pos]);","    }","","    fetchedData = tmp;","    ","    callback.call(this, fetchedData);","};",""]},{"start":{"row":0,"column":0},"end":{"row":71,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview tart.dataProxy.Local XHR data proxy."," */","","goog.provide('tart.dataProxy.Local');","","goog.require('tart.dataProxy.Abstract');","goog.require('goog.array');","","/**"," * Base model to handle xhr requests"," *"," * @extends {tart.dataProxy.Abstract}"," * @constructor"," */","tart.dataProxy.Local = function() {","    goog.base(this);","    /** @private **/","    this.data_ = undefined;","};","goog.inherits(tart.dataProxy.Local, tart.dataProxy.Abstract);","","/**"," * Fetch data from xhr and call a function with returned data"," * @param {Function=} callback function to call with returned data."," */","tart.dataProxy.Local.prototype.fetch = function(callback) {","","    var fetchedData = this.data_;","","    var pagerParam = this.params.get(\"paginationParams\");","","    if (pagerParam) {","        var offset = pagerParam.get(\"offset\");","        var limit = pagerParam.get(\"limit\");","        var tmp = [];","","        for(var i = offset; i < offset + limit; i++) {","            if (fetchedData && fetchedData[i]) {","                tmp.push(fetchedData[i]);","            }","        }","","        fetchedData = tmp;","    }","","    callback.call(this, fetchedData);","};","","tart.dataProxy.Local.prototype.setData = function(data) {","    this.data_ = data;","};","","tart.dataProxy.Local.prototype.getData = function() {","    return this.data_;","};","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":17},"end":{"row":1,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":32},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":14},"end":{"row":4,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":28},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":15,"column":0},"end":{"row":15,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":14},"end":{"row":20,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":20,"column":14},"end":{"row":20,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":47},"end":{"row":20,"column":51},"action":"remove","lines":["tart"]},{"start":{"row":20,"column":47},"end":{"row":20,"column":62},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":26,"column":0},"end":{"row":26,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":49,"column":0},"end":{"row":49,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":53,"column":0},"end":{"row":53,"column":15},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":580,"scrollleft":0,"selection":{"start":{"row":49,"column":68},"end":{"row":49,"column":68},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425189723954,"hash":"44250d071daf0214886f15191cb6c94a59558178"}