{"filter":false,"title":"IConnectable.js","tooltip":"/src/ui/IConnectable.js","undoManager":{"mark":10,"position":10,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":62,"column":0},"action":"insert","lines":["// Copyright 2012 Armagan Amcalar. All Rights Reserved.","//","// This file is part of Pedalboard.js.","//","// Pedalboard.js is free software: you can redistribute it and/or modify","// it under the terms of the GNU General Public License as published by","// the Free Software Foundation, either version 3 of the License, or","// (at your option) any later version.","//","// Pedalboard.js is distributed in the hope that it will be useful,","// but WITHOUT ANY WARRANTY; without even the implied warranty of","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","// GNU General Public License for more details.","//","// You should have received a copy of the GNU General Public License","// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.","","/**"," * @fileoverview IConnectable interface for consistent routing between higher level stomp box components."," * All the connectable pedal components and IO should implement this interface."," */","","goog.provide('pb.IConnectable');","","","","/**"," * IConnectable interface. Sports connect method for output and setInput method for input."," * @interface"," */","pb.IConnectable = function() {};","","","/**"," * Connects the output of this IConnectable to a node."," *"," * @param {pb.IConnectable} destination Destination node to connect the output of this IConnectable."," */","pb.IConnectable.prototype.connect = function(destination) {};","","","/**"," * Disconnects the output of this IConnectable."," */","pb.IConnectable.prototype.disconnect = function() {};","","","/**"," * Sets the input of this IConnectable to a node."," *"," * @param {pb.IConnectable} prev The node that will be connected to the input of this IConnectable."," */","pb.IConnectable.prototype.setPrev = function(prev) {};","","","/**"," * Gets the main effects unit of a IConnectable, which is also the input node."," *"," * @return {AudioNode} The effect node of the IConnectable."," */","pb.IConnectable.prototype.getInput = function() {};","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["// Copyright 2012 Armagan Amcalar. All Rights Reserved.","//","// This file is part of Pedalboard.js.","//","// Pedalboard.js is free software: you can redistribute it and/or modify","// it under the terms of the GNU General Public License as published by","// the Free Software Foundation, either version 3 of the License, or","// (at your option) any later version.","//","// Pedalboard.js is distributed in the hope that it will be useful,","// but WITHOUT ANY WARRANTY; without even the implied warranty of","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","// GNU General Public License for more details.","//","// You should have received a copy of the GNU General Public License","// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":5,"column":14},"end":{"row":5,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":5,"column":14},"end":{"row":5,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":19,"column":11},"end":{"row":19,"column":13},"action":"remove","lines":["pb"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":19},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":27,"column":0},"end":{"row":27,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":33,"column":11},"end":{"row":33,"column":13},"action":"remove","lines":["pb"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":19},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":35,"column":0},"end":{"row":35,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":43,"column":0},"end":{"row":43,"column":8},"action":"insert","lines":["Samantha"]}]}]]},"ace":{"folds":[],"scrolltop":482,"scrollleft":0,"selection":{"start":{"row":45,"column":0},"end":{"row":45,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":18,"state":"doc-start","mode":"ace/mode/javascript"}},"timestamp":1425221229360,"hash":"220ea243c018892918e78313466814c6274fd6b7"}