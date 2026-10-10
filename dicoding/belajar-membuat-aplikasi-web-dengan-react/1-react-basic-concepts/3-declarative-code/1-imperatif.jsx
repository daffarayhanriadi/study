/*
  * KBBI menjelaskan bahwa kata imperatif berarti “memerintah atau memberi komando”. 
  * Di JavaScript sendiri, kita sering menuliskan kode yang sifatnya imperatif. 
  * Ciri-cirinya adalah kita menjelaskan secara detail kepada JavaScript (lebih tepatnya compiler) apa dan 
    * bagaimana ia harus melakukan sesuatu langkah demi langkah untuk mencapai tujuan.
  * */

// Contoh, kode imperatif yang umum dituliskan di JavaScript adalah penggunaan for berikut.
const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
const uppercaseNames = [];

for (let i = 0; i < names.length; i++) {
  uppercaseNames[i] = names[i].toUpperCase();
}

console.log(uppercaseNames);

/**
* output:
*
* [ 'ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI' ]
*/
