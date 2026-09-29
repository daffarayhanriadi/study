function convertCelciusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
    console.log("Hasil konversi:", temperatureInFahrenheit);
}

const temperatureInCelcius = 90;

//* Menampilkan nilai function
console.log(convertCelciusToFahrenheit); // Output: [Function: convertCelciusToFahrenheit]

//* Menjalankan function
convertCelciusToFahrenheit(temperatureInCelcius); // Output: Hasil konversi: 194

//* Fitur Hoisting JS -> memungkinkan kita menulis kode pemanggilan sebelum kode pendeklarasian function
//* NOT RECOMMENDED
greetWorld();

function greetWorld() {
    console.log("Hello World!");
}

// Output: Hello World!