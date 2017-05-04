/** Methods for handling the contact information
 * @module js/contact
 */

const defaultMaxLength = 15;
const defaultInvalidChars = "1234567890";

/**
 * Formatting output message: abc => a, b, c
 */
function insertChr(str,chr) {
  chr = chr || ', '; //=> default is space
  return str.replace(/(.(?!$))/g,'$1'+chr);
}

/**
 * Submits and saves the contact if it is a valid name, calls isValidContactName as a helper method.
 */
function submitContact() {
  if(isValidContactName()) {
    const settings = getCurrentSettings();
    const cName = document.forms["nameForm"]["name"].value;
    const params = { "name" : cName, "config" : settings };
    post("contacts/",  params, function() {
      alert("Contact successfully added");
    });
  } else {
    return;
  }
}

/**
 * Opens up the url, allows the functions to imapct the website
 * @param {string} url
 * @param {json} json
 * @param {} next
 */
function post(url, json, next) {
  var http = new XMLHttpRequest();
  http.open("POST", url, true);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  params = JSON.stringify(json);

  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        alert("Contact successfully added");
      }
  };
  http.send(params);
}

/**
 * Checks if the name is valid: not longer than max length and not containing any invalid chars.
 * @return {boolean}
 */
function isValidContactName() {
  const cName = document.forms["nameForm"]["name"].value;
  const settings = getCurrentSettings();

  if(cName.length > settings.maxLength){
  	alert("Contact Name cannot be longer than " + settings.maxLength + " characters. Please try again!");
  	return false;
  }
  for(var i = 0; i < settings.invalidChars.length; i++){
  	var char = settings.invalidChars.charAt(i);
  	var bool_check = cName.includes(char);
  	if(bool_check) {
  		alert("Contact Name cannot be including: '" +  insertChr(settings.invalidChars) + "' Please try again!");
      return false;
  	}
  }
  return true;
}

/**
 * If settings are not set yet, returns the default settings, otherwise returns the current settings.
 * @return {formatOptions}
 */
function getCurrentSettings() {
  var maxLength = defaultMaxLength;
  var invalidChars = defaultInvalidChars;
  if (typeof(Storage) !== "undefined") {
    if(localStorage.maxLength) {
      maxLength = parseInt(localStorage.maxLength);
    }
    if(localStorage.invalidChars) {
      invalidChars = localStorage.invalidChars;
    }
  }
  return getFormatOptions(invalidChars, maxLength)
}

/**
 * Sets the options for unallowed chars and maxLength of the name given.
 */
function formatContactName() {
  if (typeof(Storage) == "undefined") {
    alert("Configuration save failed");
    return;
  }

	const formatChars = document.forms["formatForm"]["inputChar"].value;
	const formatNum = document.forms["formatForm"]["inputNum"].value;

  const formatOptions = getFormatOptions(formatChars, formatNum);

  for(var opt in formatOptions) {
    localStorage.setItem(opt, formatOptions[opt]);
  }
  alert("Configuration saved succesfully");
}

/**
 * Takes the parameters and changes them into a formatOptions object
 * @param {string} formatChars - String of chars that are meant to be invalid
 * @param {int} formatNum - Maximum length of the string accepted
 * @return {formatOptions}
 */
function getFormatOptions(formatChars, formatNum) {
  return formatOptions = {
    'invalidChars': formatChars,
    'maxLength'   : formatNum
  };
}

//module.exports.isBaz = isBaz;
//module.exports.sTest = sTest;
//module.exports.isvalidChars = invalidChars;
//module.exports.maxLength = maxLength;
