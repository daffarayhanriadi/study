//* Variable
/*
 * Cara 1 menggunakan const
 * TIDAK DAPAT diinisialisasi ulang (diubah) nilainya.
 * Jika diubah, maka akan terjadi error (TypeError: Assignment to constant variable.)
*/
const id = 123;

/*
 * Cara 2 menggunakan let
 * DAPAT diinisialisasi ulang (diubah) nilainya.
*/
let username = "Daffa";

console.log(id); // output: 123
console.log(username); // output: Daffa

//* Aturan penamaan variabel
/*
 * Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
 * Nama Variabel Hanya Terdiri dari Karakter Tertentu (huruf, angka, underscore, dan tanda dolar)
 * Nama Variabel Tidak Boleh Diawali dengan Angka
*/