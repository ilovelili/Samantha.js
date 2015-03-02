/**
 * @fileoverview This file provides commonly used DOM functions.
 */

goog.provide('SamanthaClosure.dom');



(function() {
    var tempDiv = document.createElement('div');

    /**
     * Stripped down version of goog.dom.htmlToDocumentFragment. Its performance is fantastic across all browsers.
     *
     * This version won't work with <code><script></code> and <code><style></code> tags in IE.
     * Also, it requires only one element in the top hieararchy, which basically means you have to combine
     * your elements under one parent div, or you will only get the first element.
     *
     * @param {string} htmlString The HTML string to convert.
     * @return {!Node} The resulting element.
     */
    SamanthaClosure.dom.createElement = function(htmlString) {
        tempDiv.innerHTML = htmlString;
        return /** @type {!Node} */ (tempDiv.removeChild(tempDiv.firstChild));
    };
})();
