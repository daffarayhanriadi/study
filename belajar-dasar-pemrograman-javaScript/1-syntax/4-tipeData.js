//* Tipe data dasar (primitif)
// Tipe data primitif hanya dapat menyimpan satu jenis data
/*
 * string
 * number
 * boolean
 * null
 * undefined
*/

//* String
/*
 * single quote
 * double quote
 * backticks -> template literals with ${} notation
*/
console.log("Ini merupakan contoh string di JavaScript");
console.log('Ini merupakan contoh string di JavaScript');
console.log(`Ini merupakan contoh string di JavaScript`);

console.log("Baris pertama.\nBaris Kedua");
console.log('Baris pertama.\nBaris Kedua');
console.log(`Baris pertama.
Baris kedua.`
);

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}`;
console.log(text);

//* Number
/*
 * bilangan bulat
 * bilangan pecahan
 * tidak memerlukan tanda khusus seperti string
 * Ex:  40
 *      3.14
 *      5
 *      3.333
 * memiliki nilai spesial, yaitu Infinity dan NaN.
*/

const resultNum1 = 50 / 0;
console.log(resultNum1); // output : Infinity -> operasi aritmatika tidak terdefinisi

const resultNum2 = Number("Daffa");
console.log(resultNum2); // output: NaN

//* Boolean
/*
 * hanya memiliki dua nilai, yaitu true dan false
 * nilai boolean juga biasa diperoleh dari hasil pengugnaan operator perbandingan 
*/

const completedBoolean = true;
const passedBoolean = false;
console.log(completedBoolean, passedBoolean); // output: true false

const isGreaterBoolean = 5 > 2;
console.log(isGreaterBoolean); // output: true


//* Nilai kosong
/*
 *  null dan undefined
 *  Keduanya digunakan untuk menunjukkan ketiadaan nilai (the absence of something)
      * undefined hadir dalam js sbg nilai implisit ketika kita mendeklarasikan variabel tanpa menginisiasi nilainya.
 *  Secara teknis, kita jg bisa secara eksplisit memberikan nilai undefined ke dalam sebuah variabel.
      * Namun hal tersebut tidak disarankan, sebaiknya gunakan null jika ingin memberikan nilai kosong scr eksplisit.
 *  Perbedaan null dan undefined dapat terlihat jelas ketika kita membandingkan objek yg propertinya bernilai null
      * dan undefined dalam format JSON.
 *  Property yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON, karena JSON tdk mendukung tipe data
      * undefined. Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.
*/

let messageNull = null;
console.log(messageNull); // output: null

let messageUndefined;
console.log(messageUndefined); // output: undefined

let messageUndefined2 = undefined;
console.log(messageUndefined2); // output: undefined

const nameJSON1 = {first: "Daffa", last: null};
const nameJSON2 = {first: "Daffa", last: undefined};
console.log(JSON.stringify(nameJSON1)); // output: {"first":"Daffa","last":null}
console.log(JSON.stringify(nameJSON2)); // output: {"first":"Daffa"}
