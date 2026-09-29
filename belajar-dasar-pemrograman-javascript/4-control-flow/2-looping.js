/* TABLE OF CONTENTS
 * Without Looping
 * For
    * For Statement
    * For...in Statement
    * For...of Statement
 * While
 * Do-While
 * Control Statement
    * Break
    * Continue
*/

/*
 * Memungkinkan untuk mengakses list dengan sangat praktis.
 * Looping adalah statements yang memungkinkan kita untuk mengeksekusi kode yang sama secara berulang.
 * For adalah cara looping yang paling umum dilakukan di JavaScript. 
 * Semenjak kehadiran ES6, for terbagi lagi menjadi beberapa jenis.
*/


//* WHITOUT LOOPING
const foods = ["Nasi Goreng", "Pasta", "Sate"];
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
/* 
Output: 
Nasi Goreng
Pasta
Sate
*/


//* WITH LOOPING
//* FOR STATEMENT
/* 
    for (<variabel awal>; <test kondisi>; <increment>) {
        <body looping>
    }
*/
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke ${i} adalah ${i}`);
}
/*
Output:
Angka ke 0 adalah 0
Angka ke 1 adalah 1
Angka ke 2 adalah 2
Angka ke 3 adalah 3
Angka ke 4 adalah 4
*/


//* FOR...IN STATEMENT
/* 
 * Biasa digunakan untuk looping pd object karena dpt melakukan iterasi ke seluruh data dlm object.
 * Dapat melakukan iterasi ke properti inheritance dari object seperti length
 * Berbeda dengan for...of, for...in tidak akan langsung mengambil value scr langsung, melainkan index/properti nya.
*/
const namesArray = ["Ayam", "Bebek", "Telor", "Tempe"];
const personObj = {
    name: "Ucup",
    origin: "Bandung",
    birthYear: 2024,
};

// for...in with array
for (const index in namesArray) {
    console.log(index);
}
/* 
Output:
0
1
2
3
*/

// for...in with object
for (const key in personObj) {
    console.log(`${key} bernilai ${personObj[key]}`);
}
/* 
Output:
name bernilai Ucup
origin bernilai Bandung 
birthYear bernilai 2024
*/


//* FOR...OF STATEMENT
/* 
 * Kehadiran For...of dimulai pada ECMAScript 2015 (ES6). 
 * For...of berbeda dengan For...in. 
 * For...of lebih sederhana karena kita tidak perlu memikirkan property dan key.
 * Dengan For...of datanya bisa kita dapatkan langsung tanpa menambahkan indeks atau nama propertinya.
 * For...of dapat digunakan pada object yang bisa diiterasi seperti arrays, strings, sets, dan maps.
 * For...of juga bisa digunakan dengan destructuring, kita bisa secara bersamaan loop key-value dari object.
*/
// for...of with array
for (const item of namesArray) {
    console.log(item);
}
/* 
Output:
Ayam
Bebek
Telor
Tempe
*/

// for...of with object
for (const [index, item] of namesArray.entries()) {
    console.log(index, item);
}
/* 
Output:
0 Ayam
1 Bebek
2 Telor
3 Tempe
*/

// for...of with object and only get the keys
for (const key of Object.keys(personObj)) {
    console.log(key);
}
/* 
Output:
name
origin
birthYear
*/

// for...of with object and only get the values
for (const value of Object.values(personObj)) {
    console.log(value);
}
/* 
Output:
Ucup
Bandung
2024
*/

// for...of with object also get both keys & values
for (const [key, val] of Object.entries(personObj)) {
    console.log(key, val);
}
/* 
Output:
name Ucup
origin Bandung
birthYear 2024
*/


//* WHILE
/* 
    while (<condition>){
        <statement>
    }
 * While statement akan mengeksekusi statement ketika kondisinya bernilai true
 * Hati-hati ketika mengecek kondisi tersebut karena dapat terjadi infinite loop saat kondisinya selalu bernilai true.
 * Keunggulan dari while adalah ia tidak perlu tahu jumlah data yang akan di-looping. 
 * While hanya peduli dengan kondisi yang kita berikan.
 * Untuk menghentikan While Loop, kondisinya harus bernilai false.
*/
let i = 0;
while (i < 5) {
    console.log(`Angka ke ${i} adalah ${i}.`);
    i++;
}
/* 
Output:
Angka ke 0 adalah 0.
Angka ke 1 adalah 1.
Angka ke 2 adalah 2.
Angka ke 3 adalah 3.
Angka ke 4 adalah 4.
*/

//* Contoh infinite loop (DANGER!)
// while (i < 5) {
//   console.log(`Angka ke-${i} adalah ${i}.`);
// }


//* DO-WHILE
/* 
    do {
        <statement>
    } while (<condition>)
 * Perbedaanya dengan WHILE terletak pada pengecekannya.
 * While melakukan evaluasi kondisi di awal, sedangkan do-while melakukannya di akhir.
 * Karena do-while melakukan evaluasi kondisi di akhir, block yang ada di dalam do setidaknya akan dijalankan 1x. 
*/

let j = 0;
do {
    console.log(`Angka ke-${j} adalah ${j}.`);
    j++;
} while (j < 5);
/* 
Output:
Angka ke-0 adalah 0.
Angka ke-1 adalah 1.
Angka ke-2 adalah 2.
Angka ke-3 adalah 3.
Angka ke-4 adalah 4.
*/


//* CONTROL STATEMENT
/* 
 * Berfungsi untuk menghentikan/melanjutkan eksekusi kode.
*/
//* BREAK
/* 
 * Break statement adalah cara kita untuk memberitahukan interpreter yang sedang mengeksekusi kode untuk berhenti 
    dan langsung berpindah ke akhir dari percabangan atau perulangan.
 * Di saat kondisi case terpenuhi maka program akan berhenti dan tidak akan melakukan pengecekan pada case berikutnya.
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
/* 
Output:
0
1
2
3
4
*/

const number = 1;

switch (number) {
    case 1:
        console.log('Ini 1');
        break;
    case 2:
        console.log('Ini 2');
        break;
    case 3:
        console.log('Ini 3');
        break;
    default:
        console.log('Ini default');
}
// Output: Ini 1


//* CONTINUE
/* 
 * Berfungsi untuk melanjutkan iterasi ke iterasi berikutnya.
 * Hanya dapat digunakan di dalam body looping
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
/* 
Output:
0
1
2
3
4
6
7
8
9
*/