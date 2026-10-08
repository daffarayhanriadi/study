/*
function sampleFunction(PARAMETER) {
    <functionBody>
}

sampleFunction(ARGUMENT)

* Parameter function didefinisikan dalam parentheses
* Parameter dapat lebih dari satu asalkan dipisah dengan tanda koma (,)
* Parameter sama dengan input data bagi function body, kita dapat memanfaatkan nilai parameter selayaknya nilai yang tersimpan dalam variabel
* Argument ini bisa berasal dari nilai yang langsung dimasukkan atau nilai yang tersimpan dari variabel
*/

//* Argument dapat bernilai UNDEFINED jika kita tidak beri nilai apa pun dalam parentheses saat function dipanggil
function convertCelsiusToFahrenheitUndefined(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log('Hasil konversi:', temperatureInFahrenheit);
}

convertCelsiusToFahrenheitUndefined(); // Output: Hasil konversi: NaN
// NaN hadir karena salah satu operan dalam proses kalkulasi bukan bertipe number, tetapi undefined

//* Default Parameter
function convertCelsiusToFahrenheitDefault(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
}

convertCelsiusToFahrenheitDefault(); // Output: Hasil konversi: 122