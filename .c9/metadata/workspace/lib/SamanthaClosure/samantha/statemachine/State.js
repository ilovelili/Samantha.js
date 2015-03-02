{"filter":false,"title":"State.js","tooltip":"/lib/SamanthaClosure/samantha/statemachine/State.js","undoManager":{"mark":6,"position":6,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.","","/**"," * @fileoverview State class is used in conjunction with tart.StateMachine. It is a value object that holds two"," * properties; a function that is executed when the state machine is in this state, and a transitions object for"," * events that may happen in this state."," */","","goog.provide('tart.State');","","","","/**"," * Tart State class for state machines."," * @constructor"," * @param {function()} fn The state function to be executed."," */","tart.State = function(fn) {","    this.fn = fn;","    this.transitions = {};","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["// Copyright 2011 Tart. All Rights Reserved.","//","// Licensed under the Apache License, Version 2.0 (the \"License\");","// you may not use this file except in compliance with the License.","// You may obtain a copy of the License at","//","//      http://www.apache.org/licenses/LICENSE-2.0","//","// Unless required by applicable law or agreed to in writing, software","// distributed under the License is distributed on an \"AS-IS\" BASIS,","// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.","// See the License for the specific language governing permissions and","// limitations under the License.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":57},"end":{"row":1,"column":61},"action":"remove","lines":["tart"]},{"start":{"row":1,"column":57},"end":{"row":1,"column":72},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":18},"action":"remove","lines":["tart"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":29},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":3},"end":{"row":11,"column":7},"action":"remove","lines":["Tart"]},{"start":{"row":11,"column":3},"end":{"row":11,"column":18},"action":"insert","lines":["samanthaClosure"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["tart"]},{"start":{"row":15,"column":0},"end":{"row":15,"column":15},"action":"insert","lines":["samanthaClosure"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":0},"end":{"row":19,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1425195804992,"hash":"b0dd9d5bb4556301b99f2312449712eb8757f553"}