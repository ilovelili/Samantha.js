/**
 * @fileoverview SamanthaClosure.FormValidator is a form validation library which uses SamanthaClosure.Validation instance as validator.
 *
 * Example usage:
 *
 * var form = $("form");
 * var validationForSubmit = function (errors) {
 *     //do some stuff with 'errors' object
 * };
 * var validationForBlur = function (errors) {
 *     //do some stuff with 'errors' object
 * };
 * SamanthaClosure.FormValidator(form).validateOnSubmit(validationForSubmit);
 * SamanthaClosure.FormValidator(form).validateOnBlur(validateOnBlur);
 *
 * More examples can be seen from spec/FormValidationSpec.js file
 */

goog.require('SamanthaClosure.Validation');

goog.provide('SamanthaClosure.FormValidator');



/**
 * Attach validator to formEl
 *
 * @param {Object} formEl jQuery element for selected form.
 * @constructor
 * @return {SamanthaClosure.FormValidator} .
 */
SamanthaClosure.FormValidator = function(formEl) {
    //TODO: this is tightly coupled to SamanthaClosure.Validation
    /* @protected */
    this.validator = SamanthaClosure.Validation;
    /* @protected */
    this.form = formEl;
    /* @protected */
    this.errors = [];
    return this;
};


/**
 * Set validation rules to attached form
 *
 * @param {Object} rules given rules in object literal notation.
 * @return {SamanthaClosure.FormValidator} .
 * @this {SamanthaClosure.FormValidator} .
 */
SamanthaClosure.FormValidator.prototype.setRules = function(rules) {
    this.rules = rules;
    return this;
};


/**
 * Find element with elementName in given form object
 *
 * @param {string} elementName name of element which to be find in form.
 * @return {Object} jQuery object for given element.
 */
SamanthaClosure.FormValidator.prototype.getFormElementByName = function(elementName) {
    var el = this.form.find('input[name=' + elementName + ']');
    return el;
};


/**
 * Find related element attribute for given input type
 *
 * @param {Object} el jQuery object of element.
 * @return {string} elements value for related input type.
 */
SamanthaClosure.FormValidator.prototype.getElementAttributeToCheck = function(el) {
    //TODO: this can vary on elements type such has "attr"
    return el.val();
};


/**
 * Rule key for SamanthaClosure.Validation
 *
 * @param {string} ruleKey key of rule.
 * @return {Function} elements value for related input type.
 */
SamanthaClosure.FormValidator.prototype.getValidationRuleByKey = function(ruleKey) {
    var rule;
    //TODO: this swich case should be looked up from an object literal
    switch (ruleKey) {
        case 'isEmail' : rule = this.validator.is.email; break;
        case 'isNotOnlySpace' : rule = this.validator.is.notOnlySpace; break;
        case 'isNumeric' : rule = this.validator.is.numeric; break;
        case 'isDigitAndNonDigit' : rule = this.validator.is.digitAndNonDigit; break;
        case 'hasMaxLength' : rule = this.validator.has.maxLength; break;
        case 'hasMinLength' : rule = this.validator.has.minLength; break;
        case 'hasMaxValue' : rule = this.validator.has.maxValue; break;
        case 'hasMinValue' : rule = this.validator.has.minValue; break;
    }

    return rule;
};


/**
 * Get rule key and rule options from rule object
 *
 * @param {Object} rule rule object whom key is ruleName and value is rule options.
 * @return {Object} object which has .key and .options nodes.
 */
SamanthaClosure.FormValidator.prototype.getRuleKeyAndOptions = function(rule) {
    var results = [];

    //TODO: there should be a smarter way to do this
    for (var i in rule) {
        results.push({key: i, options: rule[i]});
    }

    return results;
};


/**
 * Apply rule and generate result in object literal
 *
 * @param {Object} el jQuery object to rule rule object whom key is ruleName and value is rule options.
 * @param {Object} rule rule to be applied to el.
 * @return {Object} result object which has .success and .item nodes.
 */
SamanthaClosure.FormValidator.prototype.applyRule = function(el, rule) {
    var value = this.getElementAttributeToCheck(el);
    var keyAndOptionsArray = this.getRuleKeyAndOptions(rule);

    var keyAndOptions,
        key,
        validationRule,
        options,
        result,
        failed = false;

    for (var i = 0; i < keyAndOptionsArray.length; i++) {
        keyAndOptions = keyAndOptionsArray[i];
        key = keyAndOptions.key;
        options = keyAndOptions.options;
        validationRule = this.getValidationRuleByKey(key);
        result = validationRule(value, options.value);

        //return on first error
        if (!result) {
            break;
        }
    }

    return {success: result, item: {el: el, text: options.text}};
};


/**
 * Validate given form object with given rules, if any errors occured this.errors array will be populated
 *
 * @return {SamanthaClosure.FormValidator} .
 */
SamanthaClosure.FormValidator.prototype.validate = function() {
    this.errors = [];
    var el,
        rule,
        result;

    for (var i in this.rules) {
        el = this.getFormElementByName(i);
        rule = this.rules[i];

        result = this.applyRule(el, rule);

        if (!result.success) {
            this.errors.push(result.item);
            break;
        }
    }

    return this;
};


/**
 * Check if validation operation is successful or not by looking at this.errors array
 *
 * @return {boolean} validation is successful or not.
 */
SamanthaClosure.FormValidator.prototype.isValid = function() {
    if (this.errors.length == 0) {
        return true;
    }
    else {
        return false;
    }
};


/**
 * Get generated errors array which contains element (el) and error text(text)
 *
 * @return {Array} errors array.
 */
SamanthaClosure.FormValidator.prototype.getErrors = function() {
    return this.errors;
};


/**
 * Validate form on submit
 *
 * @param {Function} callback callback function after submit.
 */
SamanthaClosure.FormValidator.prototype.validateOnSubmit = function(callback) {
    callback = callback || function() {};

    var that = this;

    this.form.submit(function(e) {
        that.validate();
        if (!that.isValid()) { //if an error occured
            e.preventDefault();
            e.stopImmediatePropagation(); //stop other events propagation
            callback(that.getErrors());
        }
    });
};
