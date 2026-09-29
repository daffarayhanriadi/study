/*
const <identifier> = function (<params>) {
    <function body>
}
*/

//* Function Statement (Fungsi biasa)
function convertCelciusToFahrenheitStatement (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result
}

const temperatureInFahrenheitStatement = convertCelciusToFahrenheitStatement(90);
console.log("Hasil konversi:", temperatureInFahrenheitStatement); // Output: Hasil konversi: 194


//* Function Expression
/** 
 * Tidak memiliki hoisting sehingga kita tidak dapat memanggil atau menjalankan function ini sebelum dideklarasikan.
*/
const convertCelsiusToFahrenheitExpression = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

const temperatureInFahrenheitExpression = convertCelsiusToFahrenheitExpression(90);
console.log('Hasil konversi:', temperatureInFahrenheitExpression); // Output: Hasil konversi: 194

//* First-class Citizen -> Function di JS dapat diperlakukan layaknya variabel.
/*
 * Dapat disimpan sebagai nilai dalam variabel.
 * Dapat dikembalikan dari suatu function.
 * Dapat dikirimkan sebagai parameter bagi function lain.
 * Dapat disimpan dalam elemen array dan object literal.
 * Dapat memiliki method dan properties sendiri.
 */


//  * Dapat disimpan sebagai nilai dalam variabel.
// Function bisa disimpan ke dalam variabel.
const sapa1 = function () {
    console.log("Halo!");
};

sapa1(); // Output Halo!


//  * Dapat dikembalikan dari suatu function.
// Sebuah function dapat mengembalikan function lain.
// Example 1
// buatSalam() mengembalikan sebuah function.
// Function yang dikembalikan disimpan ke variabel salamPagi.
function buatSalam(waktu) {
    return function (nama) {
        console.log(`Selamat ${waktu}, ${nama}!`);
    };
}
const salamPagi = buatSalam("Pagi");
salamPagi("Andi"); // Output Selamat Pagi, Andi!

// Example 2
function multiplier(x) {
    return function (num) {
        return x * num;
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10)); // Output: 20
console.log(triple(11)); // Output: 33


//  * Dapat dikirimkan sebagai parameter bagi function lain (Ini disebut callback function).
// Operasi Perkalian
function multiply(a, b) {
    return a * b;
}

// Function utama dalam melakukan proses aritmatika 2 angka
function calculate(operation, numA, numB) {
    return operation(numA, numB); // Invoke parameter 'operation' layaknya function
}

const result = calculate(multiply, 2, 4);
console.log(result); // Output: 8


//  * Dapat disimpan dalam elemen array dan object literal.
// Dalam Array
const operasi = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
];
console.log(operasi[0](10, 5)); // Output: 15
console.log(operasi[1](10, 5)); // Output: 5
console.log(operasi[2](10, 5)); // Output: 50

// Dalam Object
const kalkulator = {
    tambah(a, b) {
        return a + b;
    },
    kurang(a, b) {
        return a - b;
    },
};
console.log(kalkulator.tambah(8, 2)); // Output 10
console.log(kalkulator.kurang(8, 2)); // Output 6


//  * Dapat memiliki method dan properties sendiri.
// Karena function adalah object, kita bisa menambahkan properti dan method sendiri.
function halo() {
    console.log("Halo!");
}
halo.versi = "1.0";
halo.info = function () {
    console.log("Ini adalah function halo.");
};
console.log(halo.versi); // Output: 1.0
halo.info(); // Output: Ini adalah function halo.
halo(); // Output: Halo!

// Bahkan function juga memiliki method bawaan seperti dibawah ini
function sapa2(nama) {
    console.log("Halo", nama);
}
sapa2.call(null, "Budi");
sapa2.call(null, ["Andi"]);

/*
* Konsep	                        Contoh
* -----------------------           --------------------------
* Disimpan dalam variabel	        const fn = function() {};
* Dikembalikan dari function	    return function() {};
* Dikirim sebagai parameter	        calculate(1, 2, multiply);
* Disimpan dalam array	            const arr = [fn1, fn2];
* Disimpan dalam object	            const obj = { halo: fn };
* Memiliki properti/method	        fn.nama = "Halo"; fn.info = function() {};
*/