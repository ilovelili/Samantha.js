/**
 * @fileoverview State class is used in conjunction with SamanthaClosure.StateMachine. It is a value object that holds two
 * properties; a function that is executed when the state machine is in this state, and a transitions object for
 * events that may happen in this state.
 */

goog.provide('SamanthaClosure.State');



/**
 * SamanthaClosure State class for state machines.
 * @constructor
 * @param {function()} fn The state function to be executed.
 */
SamanthaClosure.State = function(fn) {
    this.fn = fn;
    this.transitions = {};
};
