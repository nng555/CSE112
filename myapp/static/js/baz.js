const defaultMaxLength = 15;
const defaultInvalidChars = "1234567890";


//Formatting output message: abc => a, b, c
function insertChr(str,chr) {
  chr = chr || ', '; //=> default is space
  return str.replace(/(.(?!$))/g,'$1'+chr);
}


function submitContact() {
  if(isValidContactName()) {
    const cName = document.forms["nameForm"]["name"].value;
    const params = "name="+ cName;
    post("contacts/",  params, function() {
      alert("Contact successfully added");
    });
  } else {
    return;
  }
}

function post(url, params, next) {
  var http = new XMLHttpRequest();
  http.open("POST", url, true);

  //Send the proper header information along with the request
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
        next();
      }
  }
  http.send(params);
}

function isValidContactName() {
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

  const cName = document.forms["nameForm"]["name"].value;

  if(cName.length > maxLength){
  	alert("Contact Name cannot be longer than " + maxLength + " characters. Please try again!");
  	return false;
  }
  for(var i = 0; i < invalidChars.length; i++){
  	var char = invalidChars.charAt(i);
  	var bool_check = cName.includes(char);
  	if(bool_check) {
  		alert("Contact Name cannot be including: '" +  insertChr(invalidChars) + "' Please try again!");
      return false;
  	}
  }
  return true;
}

function formatContactName() {
  if (typeof(Storage) !== "undefined") {
      return;
  }

	const formatChars = document.forms["formatForm"]["inputChar"].value;
	const formatNum = document.forms["formatForm"]["inputNum"].value;

  const formatOptions = getFormatOptions(formatChars, formatNum);

  for(var opt in formatOptions) {
    localStorage.setItem(opt, formatOptions[opt]);
  }
}

function getFormatOptions(formatChars, formatNum) {
  return formatOptions = {
    'invalidChars': formatChars,
    'formatNum'   : formatNum
  };
}

//module.exports.isBaz = isBaz;
//module.exports.sTest = sTest;
//module.exports.isvalidChars = invalidChars;
//module.exports.maxLength = maxLength;
