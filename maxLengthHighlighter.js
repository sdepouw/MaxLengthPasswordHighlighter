(function(doc) {
	function checkForMaxLengths(passwordFields) {
		if (!passwordFields) {
			return;
		}
		for (let i = 0; i < passwordFields.length; i++) {
			if (!passwordFields[i].hasAttribute('maxlength')) {
				continue;
			}
			addWarning(passwordFields[i]);
		}
	}
	
	function addWarning(field) {
		const warningCSSClass = 'warn-max';
		if (!field || field.classList.contains(warningCSSClass)) {
			return;
		}
		const maxLength = field.getAttribute('maxlength');
		field.classList.add(warningCSSClass);
		field.insertAdjacentHTML('afterend', getWarningHTML(warningCSSClass, maxLength));
	}
	
	function getWarningHTML(warningCSSClass, maxLength) {
		return '<div class="' + warningCSSClass + '">' +
			'<span>Warning:</span> ' + 
			'This password field has a maximum length of ' + 
			'<span>' + maxLength + '</span> ' +
			'characters!' +
			'</div>';
	}
	
	checkForMaxLengths(doc.querySelectorAll("input[type=password]"));
})(window.document);
