{"filter":false,"title":"Input.js","tooltip":"/src/io/Input.js","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":28},"end":{"row":16,"column":28},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":6,"state":"doc-start","mode":"ace/mode/javascript"}},"hash":"3028055aaf8b2775534fcf902f516d75a5b87da9","undoManager":{"mark":24,"position":24,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":145,"column":0},"action":"insert","lines":["// Copyright 2012 Armagan Amcalar. All Rights Reserved.","//","// This file is part of Pedalboard.js.","//","// Pedalboard.js is free software: you can redistribute it and/or modify","// it under the terms of the GNU General Public License as published by","// the Free Software Foundation, either version 3 of the License, or","// (at your option) any later version.","//","// Pedalboard.js is distributed in the hope that it will be useful,","// but WITHOUT ANY WARRANTY; without even the implied warranty of","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","// GNU General Public License for more details.","//","// You should have received a copy of the GNU General Public License","// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.","","/**"," * @fileoverview Input abstraction for an audio context. There can be many input sources in an audio context and this"," * class is an abstraction of an input that also implements the pb.Connectable interface so that it can be chained"," * before a pb.stomp.BoxModel."," */","","goog.provide('pb.io.Input');","goog.require('goog.events.EventTarget');","goog.require('pb.IConnectable');","","","","/**"," * The input wrapper for an audio context."," *"," * @constructor"," * @implements {pb.IConnectable}"," * @extends {goog.events.EventTarget}"," * @param {AudioContext} context Audio context for this input."," */","pb.io.Input = function(context) {","    this.source = context.createBufferSource(); // creates a sound source","    this.source.loop = true;","","    this.state = pb.io.Input.State.NOT_STARTED;","    this.source.addEventListener('ended', this.onEnded.bind(this));","};","goog.inherits(pb.io.Input, goog.events.EventTarget);","","","/**"," * Playback states that partially fulfills the deprecated playbackState in Web Audio API. Basically it helps to avoid"," * exceptions when start or stop is called inappropriately."," *"," * @enum {string}"," */","pb.io.Input.State = {","    NOT_STARTED: 'notStarted',","    PLAYING: 'playing',","    FINISHED: 'finished'","};","","","/**"," * Starts playing the input."," *"," * @param {number=} opt_time Milliseconds after whom this input will start playing."," */","pb.io.Input.prototype.play = function(opt_time) {","    if (this.state == pb.io.Input.State.NOT_STARTED) {","        this.source.start(opt_time || 0);","        this.state = pb.io.Input.State.PLAYING;","    }","};","","","/**"," * Stops playing the input."," *"," * @param {number=} opt_time Milliseconds after whom this input will stop playing."," */","pb.io.Input.prototype.stop = function(opt_time) {","    if (this.state == pb.io.Input.State.PLAYING) {","        this.source.stop(opt_time || 0);","        this.state = pb.io.Input.State.FINISHED;","    }","};","","","/**"," * Sets the source buffer of this input."," *"," * @protected"," * @param {AudioBuffer} sourceBuffer The new buffer."," */","pb.io.Input.prototype.setSourceBuffer = function(sourceBuffer) {","    this.source.buffer = sourceBuffer;","};","","","/**"," * Connects this input to a destination pedal."," *"," * @param {pb.IConnectable} destination Next pedal where this input will connect to."," */","pb.io.Input.prototype.connect = function(destination) {","    destination.setPrev(this);","    this.source.connect(destination.getInput());","};","","","/**"," * Disconnects this input from wherever it's connected to."," */","pb.io.Input.prototype.disconnect = function() {","    this.source.disconnect();","};","","","/**"," * Gets the source of this input."," *"," * @return {AudioBufferSourceNode} The source of this input."," */","pb.io.Input.prototype.getOutput = function() {","    return this.source;","};","","","/**"," * Handler for the end event. When the playback of the input ends, this method correctly sets the State to FINISHED."," */","pb.io.Input.prototype.onEnded = function() {","    this.state = pb.io.Input.State.FINISHED;","};","","","/**"," * Dummy method for the Connectable interface. It's meaningless for an input to be connected to the output of another"," * thing."," */","pb.io.Input.prototype.setPrev = function() {};","","","/**"," * Dummy method for the Connectable interface. It's meaningless for an input to have an input."," */","pb.io.Input.prototype.getInput = function() {};",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":22,"column":0},"action":"remove","lines":["// Copyright 2012 Armagan Amcalar. All Rights Reserved.","//","// This file is part of Pedalboard.js.","//","// Pedalboard.js is free software: you can redistribute it and/or modify","// it under the terms of the GNU General Public License as published by","// the Free Software Foundation, either version 3 of the License, or","// (at your option) any later version.","//","// Pedalboard.js is distributed in the hope that it will be useful,","// but WITHOUT ANY WARRANTY; without even the implied warranty of","// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","// GNU General Public License for more details.","//","// You should have received a copy of the GNU General Public License","// along with Pedalboard.js.  If not, see <http://www.gnu.org/licenses/>.","","/**"," * @fileoverview Input abstraction for an audio context. There can be many input sources in an audio context and this"," * class is an abstraction of an input that also implements the pb.Connectable interface so that it can be chained"," * before a pb.stomp.BoxModel."," */",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":2,"column":14},"end":{"row":2,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":16},"end":{"row":10,"column":18},"action":"remove","lines":["pb"]},{"start":{"row":10,"column":16},"end":{"row":10,"column":24},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":17},"end":{"row":18,"column":19},"action":"remove","lines":["pb"]},{"start":{"row":18,"column":17},"end":{"row":18,"column":25},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":21,"column":14},"end":{"row":21,"column":16},"action":"remove","lines":["pb"]},{"start":{"row":21,"column":14},"end":{"row":21,"column":22},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":30,"column":0},"end":{"row":30,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":42,"column":0},"end":{"row":42,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":22},"end":{"row":43,"column":24},"action":"remove","lines":["pb"]},{"start":{"row":43,"column":22},"end":{"row":43,"column":30},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":45,"column":21},"end":{"row":45,"column":23},"action":"remove","lines":["pb"]},{"start":{"row":45,"column":21},"end":{"row":45,"column":29},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":55,"column":0},"end":{"row":55,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":55,"column":0},"end":{"row":55,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":56,"column":22},"end":{"row":56,"column":24},"action":"remove","lines":["pb"]},{"start":{"row":56,"column":22},"end":{"row":56,"column":30},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":58,"column":21},"end":{"row":58,"column":23},"action":"remove","lines":["pb"]},{"start":{"row":58,"column":21},"end":{"row":58,"column":29},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":69,"column":0},"end":{"row":69,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":69,"column":0},"end":{"row":69,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":77,"column":11},"end":{"row":77,"column":13},"action":"remove","lines":["pb"]},{"start":{"row":77,"column":11},"end":{"row":77,"column":19},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":79,"column":0},"end":{"row":79,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":79,"column":0},"end":{"row":79,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":88,"column":0},"end":{"row":88,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":88,"column":0},"end":{"row":88,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":98,"column":0},"end":{"row":98,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":98,"column":0},"end":{"row":98,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":106,"column":0},"end":{"row":106,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":106,"column":0},"end":{"row":106,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":107,"column":17},"end":{"row":107,"column":19},"action":"remove","lines":["pb"]},{"start":{"row":107,"column":17},"end":{"row":107,"column":25},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":115,"column":0},"end":{"row":115,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":115,"column":0},"end":{"row":115,"column":8},"action":"insert","lines":["Samantha"]}]}],[{"group":"doc","deltas":[{"start":{"row":121,"column":0},"end":{"row":121,"column":2},"action":"remove","lines":["pb"]},{"start":{"row":121,"column":0},"end":{"row":121,"column":8},"action":"insert","lines":["Samantha"]}]}]]},"timestamp":1425219833000}