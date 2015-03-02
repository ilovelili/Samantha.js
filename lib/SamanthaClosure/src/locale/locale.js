goog.provide('SamanthaClosure.locale');
goog.require('SamanthaClosure.locale.en');
goog.require('SamanthaClosure.locale.zh-cn');


/**
 * The default language
 *
 * @type {string}
 * @private
 */
SamanthaClosure.locale.defaultLang_ = 'en';


/**
 * Change the active dictionary
 *
 * @param {string} lang Language code.
 */
SamanthaClosure.locale.setLanguage = function(lang) {
    SamanthaClosure.locale.dictionary_ = SamanthaClosure.locale[lang];
};


/**
 * Return translation of the given text
 *
 * Look for a translation from goog.require()'d scripts. Replace the variables inside the translation.
 * Return the same text if no translation found.
 *
 * Pass in variables as integers inside curly brackets. {0} will be replaced by first argument and so on.
 *
 * @param  {string}    text        Text to be translated.
 * @param  {...*}      variables   Translation arguments.
 * @return {string}    Localized string.
 * @see    {goog.LOCALE}
 */
SamanthaClosure.locale.getLocalizedString = function(text, variables) {
    if (!SamanthaClosure.locale.dictionary_)
        SamanthaClosure.locale.dictionary_ = SamanthaClosure.locale[SamanthaClosure.locale.defaultLang_];

    var translation = SamanthaClosure.locale.dictionary_[text] || text;
    var args = goog.array.slice(arguments, 1);

    return translation.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};


// Set a global function for convenience.
window['__'] = SamanthaClosure.locale.getLocalizedString;
