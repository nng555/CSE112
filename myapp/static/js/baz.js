const sTest = "baz";

//glocal variable to save
var invalidChars = "";
var maxLength = 10;

/*
function submitBazForm() {
    var input = document.getElementById('bazInput').value;
    var output = document.getElementById('bazResult');

    if (isBaz(input)) {
        output.innerHTML = `You entered ${sTest}!`
    } else {
        output.innerHTML = `You didn\'t enter ${sTest}!`
    }
}


function isBaz(text) {
    return (text === sTest);
}
*/


//Formatting output message: abc => a, b, c
function insertChr(str,chr) {
  chr = chr || ', '; //=> default is space
  return str.replace(/(.(?!$))/g,'$1'+chr);
}

function isValidContactName() {
    var cName = document.forms["nameForm"]["name"].value;

    if(cName.length > maxLength){
    	alert("Contact Nmae cannot be longer than " + maxLength + " characters. Please try again!");
    	return;
    }
    for(var i = 0; i < invalidChars.length; i++){
    	var char = invalidChars.charAt(i);
    	var bool_check = cName.includes(char);
    	if(bool_check) {
    		alert("Contact Name cannot be including: '" +  insertChr(invalidChars) + "' Please try again!");
    		break;
    	}
    }
}



function formatContactName() {
	var formatChars = document.forms["formatForm"]["inputChar"].value;
	var formatNum = document.forms["formatForm"]["inputNum"].value;

	invalidChars = formatChars
	maxLength = formatNum;
}

//module.exports.isBaz = isBaz;
//module.exports.sTest = sTest;
//module.exports.isvalidChars = invalidChars;
//module.exports.maxLength = maxLength;




