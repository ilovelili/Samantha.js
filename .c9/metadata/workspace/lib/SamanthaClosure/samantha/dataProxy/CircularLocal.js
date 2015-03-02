{"filter":false,"title":"CircularLocal.js","tooltip":"/lib/SamanthaClosure/samantha/dataProxy/CircularLocal.js","undoManager":{"mark":3,"position":3,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":65,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview tart.dataProxy.CircularLocal XHR data proxy."," */","","goog.provide('tart.dataProxy.CircularLocal');","goog.require('tart.dataProxy.Local');","","","","/**"," *"," * Base model to handle xhr requests"," *"," * @extends {tart.dataProxy.Local}"," * @constructor"," */","tart.dataProxy.CircularLocal = function() {","    goog.base(this);","};","goog.inherits(tart.dataProxy.CircularLocal, tart.dataProxy.Local);","","","/**"," * Fetch data from xhr and call a function with returned data"," * @param {Function=} callback function to call with returned data."," */","tart.dataProxy.CircularLocal.prototype.fetch = function(callback) {","    var fetchedData = this.getData();","    var pagerParam = this.params.get('paginationParams');","","    if (!fetchedData || !pagerParam)","        callback.call(this);","","    var offset = pagerParam.get('offset'),","        limit = pagerParam.get('limit'),","        length = fetchedData.length,","        tmp = [],","        pos;","","    if (limit > length) limit = length;","","    for (var i = offset, loopCount = offset + limit; i < loopCount; i++) {","        pos = (i % length + length) % length;","","        tmp.push(fetchedData[pos]);","    }","","    fetchedData = tmp;","    ","    callback.call(this, fetchedData);","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":18},"end":{"row":0,"column":22},"action":"remove","lines":["Tart"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":33},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":15,"column":17},"end":{"row":15,"column":32},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":29},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":29},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":27,"column":13},"end":{"row":27,"column":17},"action":"remove","lines":["tart"]},{"start":{"row":27,"column":13},"end":{"row":27,"column":28},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":15},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":33,"column":14},"end":{"row":33,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":33,"column":14},"end":{"row":33,"column":29},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":33,"column":55},"end":{"row":33,"column":59},"action":"remove","lines":["tart"]},{"start":{"row":33,"column":55},"end":{"row":33,"column":70},"action":"insert","lines":["samanthaClosure"]},{"start":{"row":40,"column":0},"end":{"row":40,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":40,"column":0},"end":{"row":40,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 samanthaClosure. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":10,"column":2},"end":{"row":10,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425189645192,"hash":"1feedd2ccca5c1d7622b1335dfdfe0e03365afe9"}