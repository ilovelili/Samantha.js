/**
 * @fileoverview error library and utility functions.
 */

goog.provide('SamanthaClosure.Err');
goog.require('SamanthaClosure');


/**
 * Returns a new Error object which contains a custom error name and message.
 *
 * @param {string=} message Message to set as the error message.
 * @param {string=} name Optional error name.
 * @extends {Error}
 * @constructor
 */

SamanthaClosure.Err = function(message, name) {
    this.name = name || 'Error';
    this.message = message || '';
};
goog.inherits(SamanthaClosure.Err, Error);


/**
 * Returns a new Error object which contains a implementation error message.
 *
 * @param {string} methodName Name of the unimplemented method. This will be set as the error message.
 * @throws {Error} Error object containing the details.
 */
SamanthaClosure.Err.unimplementedMethod = function(methodName) {
    throw new SamanthaClosure.Err('Wrong implementation',
        'You should implement your own ' + methodName + ' method in child class which you want to use.');
};
