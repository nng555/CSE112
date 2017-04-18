const sTest = "baz";
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

module.exports.isBaz = isBaz;
module.exports.sTest = sTest;
