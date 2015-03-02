{"filter":false,"title":"Storage.js","tooltip":"/lib/SamanthaClosure/samantha/storage/Storage.js","undoManager":{"mark":13,"position":13,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":107,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview This file provides localStorage extensions that are essential to Tart. Basically, the localStorage"," * only allows you to store strings. tart.storage.Storage can store any type of object via serialization."," *"," * Example usage:"," * var storage = new tart.storage.Storage();"," * storage.set('foo', {bar: 'baz'});"," * storage.get('foo');"," * // you can still iterate through localStorage as before with for .. in;"," * for (var key in localStorage) {"," *     var object = storage.get(key);"," *     //do something with the object"," * }"," */","","","goog.provide('tart.storage.Storage');","goog.require('goog.json');","","","","/**","* Basic local storage class that adds object storage abilities to the standard html5 localStorage by","* serializing objects.","* @constructor","*/","tart.storage.Storage = function() {","};","","","/**","* Sets a key value pair to the local storage.","* @param {string} key Key of the pair to be stored.","* @param {*} value Value of the pair to be stored. The value will be stored serialized.","*/","tart.storage.Storage.prototype.set = function(key, value) {","    var val;","    try {","        val = JSON.stringify(value);","    }","    catch (e) {","        val = goog.json.serialize(value);","    }","","    localStorage.setItem(key, val);","};","","","/**","* Fetches an item from the storage.","* @param {string} key Key of the value to be fetched from the storage.","* @return {*} Value of the item.","*/","tart.storage.Storage.prototype.get = function(key) {","    var rv = null,","        val = localStorage.getItem(key);","","    try {","        rv = JSON.parse(val);","    }","    catch (e) {","        rv = goog.json.parse(val);","    }","","    return rv;","};","","","/**"," * Remove value from storage."," *"," * @param {string} key Key of the associated pair."," */","tart.storage.Storage.prototype.remove = function(key) {","    localStorage.removeItem(key);","};","","","/**"," * Clear all values from storage."," */","tart.storage.Storage.prototype.clear = function() {","    localStorage.clear();","};","","","/**"," * Get the number of stored key-value pairs."," * @return {number} Number of stored elements"," */","tart.storage.Storage.prototype.getCount = function() {","    return localStorage.length;","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":13,"column":0},"action":"remove","lines":["/ Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":82},"end":{"row":1,"column":86},"action":"remove","lines":["Tart"]},{"start":{"row":1,"column":82},"end":{"row":1,"column":97},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":37},"end":{"row":2,"column":41},"action":"remove","lines":["tart"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":52},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":21},"end":{"row":5,"column":25},"action":"remove","lines":["tart"]},{"start":{"row":5,"column":21},"end":{"row":5,"column":36},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":14},"end":{"row":16,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":16,"column":14},"end":{"row":16,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":26,"column":0},"end":{"row":26,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":35,"column":0},"end":{"row":35,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":0},"end":{"row":53,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":53,"column":0},"end":{"row":53,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":73,"column":0},"end":{"row":73,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":73,"column":0},"end":{"row":73,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":81,"column":0},"end":{"row":81,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":81,"column":0},"end":{"row":81,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":0},"end":{"row":90,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":90,"column":0},"end":{"row":90,"column":15},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":1236,"scrollleft":0,"selection":{"start":{"row":93,"column":0},"end":{"row":93,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425195924736,"hash":"e90bc649e45e86fd0ce872654c807c180a555bc8"}