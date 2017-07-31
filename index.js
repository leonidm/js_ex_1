'use strict';


// Part 1
(function () {
    'use strict';
    var currentDate = moment();
    var format = 'DD/MMMM/YYYY HH:mm';
    var displayString = currentDate.format(format);
    var displayString2 = currentDate.add(36.5, 'hours').format(format);
    $('#currentDate').html('<p>' + displayString + '</p><p>' + displayString2 + '</p>');
})();


// Part 2
function titelize(input) {

    if (typeof input !== 'string' && !(input instanceof String))
        return;

    var words = input.split(/\s+/);

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var firstLetter = word.charAt(0);
        word = firstLetter.toUpperCase() + word.slice(1);
        words[i] = word;
    }

    return words.join(' ');
}

var str1 = "hello  world";
var str1Titelized = titelize(str1);


// Part 3
function OnCheckPrimeness(event) {

    var value = $('#numberToCheck').val().trim();

    var message;

    if (!value || isNaN(value))
        message = 'Input was not a number!';
    else {
        if (!Number.isInteger(parseFloat(value)))
            message = 'Number ' + value + ' is NOT a prime number';
        else {
            var number = parseInt(value);
            var result = isPrimeNumber(number);
            if (result === 0)
                message = 'Number ' + number + ' is NOT a prime number';
            else
                message = 'Number ' + number + ' is a prime number';

        }
    }

    alert(message);
}

function isPrimeNumber(number) {

    if (number < 1)
        return 0;
    if (!Number.isInteger(number))
        return 0;
    if (number === 1 || number === 2)
        return 1;

    var lastDivider = Math.floor(Math.sqrt(number));
    for (var i = 2; i <= lastDivider; i++) {
        if (number % i === 0)
            return 0;
    }

    return 1;
}

// Part4

(function part4() {

    var lastTd = null;

    var tds = $('#table tbody td');
    tds.each(function (index, element) {

        $(this).click(function (event) {

            var current = $(this);

            if (lastTd && lastTd[0] === current[0]) {
                lastTd.css('background-color', 'initial');
                lastTd = null;
            }
            else {
                current.css('background-color', 'yellow');
                if (lastTd) {
                    lastTd.css('background-color', 'initial');
                }
                lastTd = current;
            }
        })
    });

})();