/*
const <identifier> = (params) <fat_arrow_notation || "=>"> {
    <function body>
}
* Arrow function hanya tersedia dalam bentuk expression
*/


//* Deklarasi function dengan Function Expression/Regular
let temperatureInFahrenheit = null;
const convertCelsiusToFahrenheitUsingRegularFunction = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit); // Output: Hasil konversi: 194


//* Deklarasi Function dengan Arrow Function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90);
console.log('Hasil konversi:', temperatureInFahrenheit); // Output: Hasil konversi: 194


//* Refactor Arrow Function
let temperatureInFahrenheit;

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

// Arrow function versi ringkas (hanya berlaku jika memiliki 1 statement/return value)
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => (9 / 5) * temperature + 32;

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90);
console.log('Hasil konversi:', temperatureInFahrenheit);