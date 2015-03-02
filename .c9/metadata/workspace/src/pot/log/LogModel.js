{"filter":false,"title":"LogModel.js","tooltip":"/src/pot/log/LogModel.js","undoManager":{"mark":10,"position":10,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["// Copyright 2012 Armagan Amcalar. All Rights Reserved.","//","// This file is part of Pedalboard.js.","//","// Pedalboard.js is free software: you can redistribute it and/or modify","// it under the terms of the GNU General Public License as published by","// the Free Software Foundation, either version 3 of the License, or","// (at your option) any later version.","//","// Pedalboard.js is distributed in the hope that it will be useful,","// but WITHOUT ANY WARRANTY; without even the implied warranty of","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","// GNU General Public License for more details.","//","// You should have received a copy of the GNU General Public License","// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.","","/**"," * @fileoverview Linear pot component model."," */","","","goog.provide('pb.pot.LogModel');","goog.require('pb.pot.PotModel');","","","","/**"," * Log model provides a potentiometer behavior similar to real world logarithmic potentiometers."," *"," * @constructor"," * @extends {pb.pot.PotModel}"," *"," * @param {AudioParam|Function} param Audio parameter this pot will adjust. Can be gain, etc."," * @param {string} name Name of the pot. Will be written under it."," * @param {number} multiplier The multiplier of the effect. Some effects (such as gain) need this to be on the order of"," *                       thousands."," * @param {number=} opt_max Optional minimum value for the pot. Default value is 0."," * @param {number=} opt_min Optional maximum value for the pot. Default value is 1."," * @param {number=} opt_default Optional default value for the pot. Default value is 0.5."," */","pb.pot.LogModel = function(param, name, multiplier, opt_min, opt_max, opt_default) {","    goog.base(this, param, name, multiplier, opt_min, opt_max, opt_default);","};","goog.inherits(pb.pot.LogModel, pb.pot.PotModel);","","","/**"," * @override"," */","pb.pot.LogModel.prototype.processValue = function(newValue, oldValue) {","    newValue = Math.pow(newValue, 3.3);","","    goog.base(this, 'processValue', newValue, oldValue);","};","","","/**"," * @override"," */","pb.pot.LogModel.prototype.getNormalizedValue = function() {","    var rv = goog.base(this, 'getNormalizedValue');","    rv = Math.pow(rv, 1/3.3);","","    return rv;","};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["// Copyright 2012 Armagan Amcalar. All Rights Reserved.","//","// This file is part of Pedalboard.js.","//","// Pedalboard.js is free software: you can redistribute it and/or modify","// it under the terms of the GNU General Public License as published by","// the Free Software Foundation, either version 3 of the License, or","// (at your option) any later version.","//","// Pedalboard.js is distributed in the hope that it will be useful,","// but WITHOUT ANY WARRANTY; without even the implied warranty of","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","// GNU General Public License for more details.","//","// You should have received a copy of the GNU General Public License","// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":6,"column":14},"end":{"row":6,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":13},"end":{"row":14,"column":15},"action":"remove","lines":["pb"]},{"start":{"row":14,"column":13},"end":{"row":14,"column":21},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":24,"column":0},"end":{"row":24,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":14},"end":{"row":27,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":37},"end":{"row":27,"column":39},"action":"remove","lines":["pb"]},{"start":{"row":27,"column":37},"end":{"row":27,"column":45},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":33,"column":0},"end":{"row":33,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["Samantha"]}]}]]},"ace":{"folds":[],"scrolltop":482,"scrollleft":0,"selection":{"start":{"row":43,"column":43},"end":{"row":43,"column":43},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":44,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1425220161322,"hash":"f758b5c7f84c203e25b25cd699e1a98ca0f82906"}