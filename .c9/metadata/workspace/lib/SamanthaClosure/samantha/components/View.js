{"filter":false,"title":"View.js","tooltip":"/lib/SamanthaClosure/samantha/components/View.js","undoManager":{"mark":13,"position":13,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":122,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview tart.components.View is a base class for all components View's."," *"," * Example usage:"," *"," * SubViewClass = function() {"," *     goog.base(this);"," *"," *     this.domMappings = {"," *         HEADER: 'h1'"," *     };"," * };"," * goog.inherits(SubViewClass, tart.components.View);"," *"," * SubViewClass.prototype.templates_header = function(text) {"," *     text = text || '';"," *     return '<h1>' + text + '</h1>';"," * };"," *"," * SubViewClass.prototype.render = function() {"," *    return this.templates_header();"," * };"," *"," * var subView = new SubViewClass();"," *"," * var dummyDiv = tart.dom.createElement(subView.render());"," *"," * subView.setDOM(dummyDiv);"," * subView.get(subView.domMappings.HEADER);"," *"," *  Known issues:"," *  - Templates will be injected withing Templates object"," */","","goog.provide('tart.components.View');","","","","/**"," * View class base"," * @constructor"," */","tart.components.View = function() {","    /** @protected */","    this.domCache = {};","};","","","/** @type {Element} */","tart.components.View.prototype.dom;","","","/**"," * Render abstract method, which all subclasses should implement"," * @throws {Error}"," * @return {string}"," */","tart.components.View.prototype.render = function() {","    throw new Error('Not implemented yet');","};","","","/**"," * Sets base DOM tree for component"," * @param {Element} dom base DOM reference for component."," */","tart.components.View.prototype.setDOM = function(dom) {","    this.dom = dom;","};","","","/**"," * get current DOM reference"," *"," * @return {Element}"," */","tart.components.View.prototype.getDOM = function() {","    return this.dom;","};","","","/**"," * Get item, which is indicated on domMappings node"," * Cache them to domCache and return item"," * Example of usage with an id as selector:"," * this.get(\"[id='elementId']\") or this.get(\"[id=elementId]\")"," *"," * @param {string} key Object key from domMappings node."," * @return {{length: number}} found object after traverse."," */","tart.components.View.prototype.get = function(key) {","    if (!this.dom) {","        throw new Error('DOM not set yet');","    }","","    this.domCache[key] = this.domCache[key] || goog.dom.query(key, this.dom);","    return this.domCache[key];","};","","","/**"," * Clears the view's dom cache. This might come in handy where you find yourself with dangling HTMLElement's who are"," * not in DOM anymore but bugs you because they are in cache. This also helps with memory leaks; you should often clear"," * your cache. TODO: Make this default with a deconstructor for view"," */","tart.components.View.prototype.clearCache = function() {","    this.domCache = {};","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":17},"end":{"row":1,"column":21},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":32},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":31},"end":{"row":12,"column":35},"action":"remove","lines":["tart"]},{"start":{"row":12,"column":31},"end":{"row":12,"column":46},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":25,"column":18},"end":{"row":25,"column":22},"action":"remove","lines":["tart"]},{"start":{"row":25,"column":18},"end":{"row":25,"column":33},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":14},"end":{"row":34,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":34,"column":14},"end":{"row":34,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":42,"column":0},"end":{"row":42,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":0},"end":{"row":49,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":49,"column":0},"end":{"row":49,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":57,"column":0},"end":{"row":57,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":66,"column":0},"end":{"row":66,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":66,"column":0},"end":{"row":66,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":0},"end":{"row":76,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":76,"column":0},"end":{"row":76,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":90,"column":0},"end":{"row":90,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":90,"column":0},"end":{"row":90,"column":15},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":105,"column":0},"end":{"row":105,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":105,"column":0},"end":{"row":105,"column":15},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":1476,"scrollleft":0,"selection":{"start":{"row":108,"column":0},"end":{"row":108,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425188854452,"hash":"aca97d1d70b01c0fee7cbc3ea9e2cb96ef6999d7"}