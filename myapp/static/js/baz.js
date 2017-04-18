function submitBazForm() {
    var input = document.getElementById('bazInput').value;
    var output = document.getElementById('bazResult');

    if (isBaz(input)) {
        output.innerHTML = 'You entered baz!'
    } else {
        output.innerHTML = 'You didn\'t enter baz!'
    }
}

function isBaz(text) {
    return (text === 'baz');
}

module.exports.isBaz = isBaz;