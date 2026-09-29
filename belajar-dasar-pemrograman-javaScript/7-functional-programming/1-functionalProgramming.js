/* 
 * Functional Programming (FP) adalah paradigma pemrograman yg didasarkan pd fungsi matematika murni.
 * Yakni fungsi hrs menghindari perubahan data sehingga selalu menghasilkan nilai sama ketika diberikan argumen sama.
 * Dalam FP fungsi adalah elemen utama yang digunakan untuk memecah kode dan membangun keseluruhan program.
 * Dengan FP, kita dpt membangun aplikasi menggunakan kode yg deklaratif (lebih simpel, tegas, dan terprediksi).
 * Konsep utama dalam FP meliputi pure function, high-order function, recursion, dan immutability.
 * Tantangan terberat dlm mempelajari FP adalah menghilangkan kebiasaan berpikir 
    * dari paradigma imperatif yg sudah sering kita anut.
 * Belajar FP dalam JavaScript sebetulnya bisa dilakukan secara perlahan.
 * Kita masih bisa menggunakan konsep-konsep FP bersama paradigma yang lain, 
    * sebelum memutuskan seluruh solusi diselesaikan dengan FP.
*/

//* IMPERATIF STYLE CODE
/* 
 * Tujuan kode dibawah ini adalah menghasilkan nilai string baru dari nilai string yang sudah ada sebelumnya.
 * Kode ini bersifat imperatif, yakni utk mencapai suatu tujuan, 
    * kita perlu menulis instruksi yg sifatnya langkah demi langkah.
 * Kita perlu mendefinisikan:
    * cara melakukan perulangan, 
    * waktu perulangannya harus berhenti, 
    * hingga mengisikan nilai ke array baru.
 * Dampaknya, kode yang ditulis menjadi banyak.
 * Gaya imperatif memang fokusnya pada “how to solve”, bukan “what to solve”.
*/
const namesImperatif = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMarkImperatif = [];

for (let i = 0; i < namesImperatif.length; i++) {
   newNamesWithExcMarkImperatif.push(`${namesImperatif[i]}!`);
}

console.log(newNamesWithExcMarkImperatif); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]


//* DEKLARATIF STYLE CODE
/* 
 * Tujuan nya sama seperti kode sebelumnya (IMPERATIF STYLE CODE), hanya saja kali ini menggunakan gaya deklaratif.
 * Jika dibandingkan dengan kode imperatif, kode deklaratif jauh lebih ringkas dan terlihat simple.
 * Inilah salah satu benefit ketika kita memecahkan masalah dgn gaya deklaratif yg notabene dianut dlm paradigma FP.
 * Fungsi .map() yang kita lihat di bawah merupakan salah satu implementasi dari konsep-konsep dalam FP.
*/

const namesDeklaratif = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMarkDeklaratif = namesDeklaratif.map((name) => `${name}!`);
console.log(newNamesWithExcMarkDeklaratif); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]