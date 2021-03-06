(function(doc, Sanitizer) {
    'use strict';
    
    function checkForMaxLengths(passwordFields) {
        if (!passwordFields) {
            return;
        }
        for (let i = 0; i < passwordFields.length; i++) {
            if (!containsValidMaxLengthAttribute(passwordFields[i])) {
                continue;
            }
            addWarning(passwordFields[i]);
        }
    }
    
    function containsValidMaxLengthAttribute(field) {
        if (!field || !field.hasAttribute('maxlength')) {
            return false;
        }
        const maxLength = field.getAttribute('maxlength');
        return maxLength && !isNaN(maxLength);
    }
    
    function addWarning(field) {
        const warningCSSClass = 'warn-max';
        if (!field || field.classList.contains(warningCSSClass)) {
            return;
        }
        const maxLength = field.getAttribute('maxlength');
        field.classList.add(warningCSSClass);
        addWarningHTML(field, warningCSSClass, maxLength);
    }
    
    function addWarningHTML(field, warningCSSClass, maxLength) {
        field.insertAdjacentHTML('afterend', Sanitizer.escapeHTML
`<div class="${warningCSSClass}">
    <span>Warning:</span> This password field has a maximum length of <span>${maxLength}</span> characters!
</div>`);
    }
    
    checkForMaxLengths(doc.querySelectorAll('input[type=password]'));
})(window.document, Sanitizer);
