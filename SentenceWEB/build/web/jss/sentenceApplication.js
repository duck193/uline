/**
 * 
 */
var App = {
	/**
	 * Initialize parameter values on page
	 */
	initialize: function() {
            document.getElementById("sentence").focus();
	},
	
	/**
	 * Send request to new URL
	 */
	newUrl: function() {
            window.location.href = "/SentenceWEB/showSentence.html";
	},
        
        /**
         * Set the display fields from the submitted form
         */
        setFieldData: function() { 
            // Protect fields
            $('input').prop('disabled', true);
        }
};