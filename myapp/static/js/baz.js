const defaultMaxLength = 15;
const defaultInvalidChars = "1234567890";

function setup() {

}

//Formatting output message: abc => a, b, c
function insertChr(str,chr) {
  chr = chr || ', '; //=> default is space
  return str.replace(/(.(?!$))/g,'$1'+chr);
}

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
