/**
 * @fileoverview Bootstrapper for Samantha.
 */

goog.provide('Samantha.Bootstrapper');
goog.require('Samantha.Stage');



/**
 * Bootstrapper class includes things to do on startup.
 * @constructor
 */
Samantha.Bootstrapper = function() {};

window['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'];
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
