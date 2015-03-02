/**
 * @fileoverview SamanthaClosure.Validation is a validation library which checks for variable's format (such as email, number) or
 * attribute (such as char length).
 *
 * Example usage:
 * var validator = SamanthaClosure.Validation;
 * var isValidEmail = validator.is.email("foo@bar.com"); //returns boolean true
 * var isNumeric = validator.is.numeric("123foo"); // returns boolean false
 * var hasMaxLength10 = validator.has.maxLength("foobar", 10); //returns boolean true
 *
 *
 * More examples can be seen from spec/ValidationSpec.js file
 */

goog.provide('SamanthaClosure.Validation');

goog.provide('SamanthaClosure.Validation.has');
goog.provide('SamanthaClosure.Validation.is');


/**
 * Checks if given text is valid email
 *
 * @param {string} text email text to be validated.
 * @return {boolean} true if its valid email.
 */
SamanthaClosure.Validation.is.email = function(text) {
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return pattern.test(text);
};


/**
 * Checks if a value is true.
 *
 * @param {boolean} value value to check.
 * @return {boolean} true if value evaluates to true.
 */
SamanthaClosure.Validation.is.truthy = function(value) {
    return value == true;
};


/**
 * Checks if given text doesnt contains only white spaces but some chars or numbers
 *
 * @param {string} text text to be validated.
 * @return {boolean} true if text contains any char or number.
 */
SamanthaClosure.Validation.is.notOnlySpace = function(text) {
    var result = text.replace(/^\s+|\s+$/g, '').length > 0;
    return result;
};


/**
 * Checks if given text contains only numeric chars
 *
 * @param {string} text text to be validated.
 * @return {boolean} true if text contains only numbers.
 */
SamanthaClosure.Validation.is.numeric = function(text) {
    var pattern = /^[0-9]+$/;
    return pattern.test(text);
};


/**
 * Checks if given text contains both digit and non-digit chars
 *
 * @param {string} text text to be validated.
 * @return {boolean} true if text contains both digit and non-digit chars.
 */
SamanthaClosure.Validation.is.digitAndNonDigit = function(text) {
    var pattern = /(\d\D)|(\D\d)/;
    return pattern.test(text);
};


/**
 * Checks if both given arguments  are equal
 *
 * @param {*} arg1 item to be validated.
 * @param {*} arg2 item to be validated.
 * @return {boolean} true if both arguments are equal.
 */
SamanthaClosure.Validation.is.equal = function(arg1, arg2) {
    return arg1 == arg2;
};


/**
 * Checks for strings' min length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {boolean} true if string's length > value.
 */
SamanthaClosure.Validation.has.minLength = function(text, value) {
    return (text.length >= value);
};


/**
 * Checks for string's max length
 *
 * @param {string} text string to check for char length.
 * @param {number} value char length value.
 * @return {boolean} true if string's length < value.
 */
SamanthaClosure.Validation.has.maxLength = function(text, value) {
    return (text.length <= value);
};


/**
 * Checks for string or number's min numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {boolean} true if string's num < value.
 */
SamanthaClosure.Validation.has.minValue = function(num, value) {
    return num >= value;
};


/**
 * Checks for string or number's max numeric value
 *
 * @param {string|number} num number to check value for.
 * @param {number} value value to check.
 * @return {boolean} true if string's num > value.
 */
SamanthaClosure.Validation.has.maxValue = function(num, value) {
    return num <= value;
};
