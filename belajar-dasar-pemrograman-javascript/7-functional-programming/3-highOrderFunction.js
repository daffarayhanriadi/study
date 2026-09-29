/* TABLE OF CONTENTS
 * High-Order Function
 * Implementasi Memoization Pure Function Dengan HOF
 * Implementasi Teknik Currying Dengan HOF
 * Composition Function Dengan HOF
*/

/* 
 * Fungsi dalam JS bersifat first-class citizen.
 * Hal ini membuka banyak potensi menarik karena kita bisa menggunakan fungsi secara leluasa.
 * Ada konsep dalam FP yang sangat mengandalkan kemampuan function expression.
 * Konsep tersebut adalah high-order function (selanjutnya akan disingkat menjadi HOF).
 * HOF adalah fungsi yang menerima fungsi lainnya sebagai argumen dan/atau mengembalikan sebuah fungsi lain.
 * Umumnya, teknik HOF digunakan untuk:
    * Mengabstraksi fungsi aksi dari sebuah proses asynchronous dalam bentuk callback.
    * Membuat utility function, yaitu fungsi Array.map, Array.filter, Array.reduce, dan sebagainya.
    * Menerapkan teknik matematika, seperti currying dan function composition.
 * HOF memungkinkan kita untuk membuat fungsi yang fleksibel.
*/

//* HIGH-ORDER FUNCTION
/* 
 * Misalnya, kita bisa membuat fungsi apply yg menerima fungsi operation sebagai argumen 
    * untuk melakukan sebuah operasi pd dua nilai argumen lain.
 * Dengan HOF, kita bisa dengan mudah mengubah logika operasi tanpa harus mengubah struktur fungsi apply.
 * Selain itu, kita jg bisa menambahkan kode lain di dlm fungsi apply sebelum sebuah operasi dipanggil jika dibutuhkan.
 * Secara tidak sadar mungkin kita sudah pernah memanfaatkan teknik HOF, tetapi belum mengenal nama nya saja.
 * Beberapa contoh HOF yang umum digunakan dalam JavaScript adalah penggunaan fungsi Array.map.
    * Fungsi Array.map menerima sebuah fungsi sebagai argumen yang digunakan untuk memproses setiap elemen array.
    * Fungsi tersebut mengembalikan array baru yg hasilnya adalah nilai dr pemanggilan fungsi pd setiap elemen array asli.
*/
// Contoh 1
function apply(operation, ...args) {
    // Kita bisa menambahkan kode lain sebelum operation di jalankan.


    return operation(...args);
}

function sum(productPrice1, productPrice2, productPrice3) {
    return productPrice1 + productPrice2 + productPrice3;
}

function discount(disc, value) {
    return value - ((disc / 100) * value);
}

const totalProductPrice = apply(sum, 100, 100, 200);
const withDiscount = apply(discount, 25, totalProductPrice);

console.log("Product price:", totalProductPrice);   // Output: Product price: 400
console.log("With discount 25%::", withDiscount);   // Output: With discount 25%:: 300

// Contoh 2
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [ 2, 4, 6, 8 ]


//* IMPLEMENTASI MEMOIZATION PURE FUNCTION DENGAN HOF
/* 
 * Caranya adalah fungsi memoize menerima pure function sebagai argumen dan
 * menyimpan hasil dr pemanggilan pure function utk digunakan ketika terjadi pemanggilan ulang dgn argumen yg sama.
 * Jadi, jika terjadi pemanggilan dengan argumen yang sama, cukup mengembalikan nilai dari yang sudah tersimpan.
 * Sehingga perbedaannya sangat signifikan dr waktu yg dibutuhkan utk memanggil fungsi pertama kali dan kedua kalinya.
*/

// Menerima argumen sebuah fungsi
function memoize(fn) {
    const cache = new Map(); // Map(0) {}

    // Mengembalikan nilai berupa function
    return function (...args) {
        const key = JSON.stringify(args);   // [[1 - 5000]] di convert ke json stringify karena akan di bandingkan
                                            // primitif akan membandingkan nilai kalau object membandingkan memori

        if (cache.has(key)) {
            return cache.get(key);  // return [[1 - 5000]]'s value -> 12502500
        }

        const result = fn(...args); // return 12502500
        cache.set(key, result);     // add 12502500 to chace's map -> Map(1) {'[[1 - 5000]]' => 12502500}
        // console.log(typeof cache.keys().next().value); // Output: string

        return result;
    };
}

function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr[0] + sumArray(arr.slice(1)); // Recursive
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1); // Array [1 - 5000]

console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");

console.time("Memoized Sum Second Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum Second Call");

/* 
Output:
Total: 12502500
Memoized Sum First Call: 49.005ms
Total: 12502500
Memoized Sum Second Call: 0.168ms
*/


//* IMPLEMENTASI TEKNIK CURRYING DENGAN HOF
/* 
 * Hal lain yang umum dilakukan dengan HOF adalah membuat fungsi yang menerapkan teknik currying.
    * Dengan teknik currying, sebuah fungsi biasanya tidak mengambil semua argumen secara langsung.
    * Ia mengambil satu argumen dulu, lalu mengembalikan sebuah fungsi baru yang menerima argumen kedua.
    * Begitu seterusnya hingga seluruh argumen dimanfaatkan dan melakukan operasi secara utuh.
*/
function adjectivy(adjective) {
    return function (noun) {
        return `${noun} ${adjective}`;
    }
}

function multipleBy(x) {
    return function(y) {
        return x * y;
    }
}

const coolofier = adjectivy("keren");
const funnifier = adjectivy("seru");
const multipleByFive = multipleBy(5);

console.log(coolofier("Dicoding"));     // Output: Dicoding keren
console.log(funnifier("JavaScript"));   // Output: JavaScript seru
console.log(multipleByFive(7));         // Output: 35
console.log(multipleByFive(10));        // Output: 50


//* COMPOSITION FUNCTION DENGAN HOF
/* 
 * HOF juga bisa digunakan untuk komposisi fungsi, 
    * Yaitu kita menggabungkan beberapa fungsi kecil menjadi satu fungsi yg lebih kompleks.
 * Contoh di bawah menunjukkan bahwa compose adalah HOF yang menggabungkan dua fungsi menjadi satu fungsi baru 
    * yang menjalankan g terlebih dahulu dan kemudian f.
*/
function addOne(x) {
    return x + 1;
}

function square(x) {
    return x * x;
}

function compose(f, g) {
    return (x) => {
        return f(g(x));
    }
}

const addOneAndSquare = compose(square, addOne);
console.log(addOneAndSquare(2)); // Output: 9