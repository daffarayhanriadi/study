/* TABLE OF CONTENTS
 * If Statement
    * If Statement 1 Cabang
    * If Statement 2 Cabang
    * If Statement Lebih dari 2 Cabang
 * Ternary Operator
 * Switch Case
 * If vs Switch
 * Switch Without Keyword break case
*/

/*
 * Conditional flow adalah cara untuk menentukan apakah kode dieksekusi atau dilewatkan. 
 * Jika suatu kondisi terpenuhi, kode akan dieksekusi dan kode yang lainnya akan diabaikan. 
 * Kondisi ini ditentukan dari inputan yang diberikan oleh pengguna. 
*/

//* IF STATEMENT
/*
    if (<expression>) {
        <statement>
    }
 * If statement akan mengeksekusi blok jika kondisi terpenuhi (true). 
 * Jika kondisi belum terpenuhi (false), kode tidak akan dieksekusi.
*/


//* IF STATEMENT 1 CABANG
const gajian = true;
console.log("Berjalan-jalan di mal");
if (gajian) {
    console.log("Makan di restoran mal");
}
console.log("Pulang ke rumah");
/*
Output:
Berjalan-jalan di mal
Makan di restoran mal
Pulang ke rumah
*/


//* IF STATEMENT 2 CABANG
const score = 85;
if (score >= 80) { // menggunakan operator perbandingan
    console.log("Selamat, Anda lulus ujian!");
} else {
    console.log("Maaf, Anda belum lulus ujian.");
}
// Output: Selamat, Anda lulus ujian!


//* IF STATEMENT LEBIH DARI 2 CABANG
if (score > 90) {
    console.log("Selamat, Anda mendapatkan nilai A!");
} else if (score > 80) {
    console.log("Selamat, Anda lulus ujian!");
} else {
    console.log("Maaf, Anda belum lulus ujian.");
}
// Output: Selamat, Anda lulus ujian!


//* TERNARY OPERATOR
// <condition> ? <return if true> : <return if false>
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);
/*
Output:
Anda mendapatkan discount sebesar 10000
*/


//* SWITCH CASE
/*
    switch (<expression>) {
        <statement>
    }
 * Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus. 
 * Switch dapat menggantikan beberapa pengecekan kondisi yang dilakukan oleh if statement. 
 * Selain itu, menggunakan switch membuat kode menjadi lebih readable dan ringkas.
 * Keyword break akan membuat pengecekan berhenti
 * 
*/
const fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("I am a banana.");
        break;
    case "apple":
        console.log("I am an apple.");
        break;
    case "orange":
        console.log("I am an orange.");
        break;
    case "strawberry":
        console.log("I am a strawberry");
        break;
    default:
        console.log("I am not a fruit. I am a programmer.");
}
// Output: I am an apple.


//* IF VS SWITCH
/*
 * Perbedaanya terdapat pd penulisan sintaksis yg lebih readable dan bbrp kasus penggunakan switch lebih efisien.
 * Switch sangat bagus digunakan ketika banyak kondisi yang perlu dicek (misalnya pada contoh di bawah)
 * Jika kondisi yang akan dicek masih sedikit misalnya hanya dua kondisi, gunakanlah if/else.
 * Gunakan Switch Case apabila yang di cek hanya berdasarkan kesamaannya (== / ===)
*/
const day = new Date().getDay();

if (day === 0) {
    console.log('Minggu');
} else if (day === 1) {
    console.log('Senin');
} else if (day === 2) {
    console.log('Selasa');
} else if (day === 3) {
    console.log('Rabu');
} else if (day === 4) {
    console.log('Kamis');
} else if (day === 5) {
    console.log('Jumat');
} else if (day === 6) {
    console.log('Sabtu');
} else {
    console.log('Hari tidak valid');
}
// Output: Selasa

switch (day) {
    case 0:
        console.log('Minggu');
        break;
    case 1:
        console.log('Senin');
        break;
    case 2:
        console.log('Selasa');
        break;
    case 3:
        console.log('Rabu');
        break;
    case 4:
        console.log('Kamis');
        break;
    case 5:
        console.log('Jumat');
        break;
    case 6:
        console.log('Sabtu');
        break;
    default:
        console.log('Hari tidak valid');
}
// Output: Selasa


//* SWITCH WITHOUT KEYWORD BREAK CASE
/* 
 * Jangan sampai lupa untuk menulis break di dalam blok case.
 * Jika lupa, maka kode dibawahnya akan ikut di eksekusi, yg mana ini tidak sesuai dengan kondisi yg diinginkan.
*/
const number = 2;

switch (number) {
case 1:
    console.log('Ini 1');
    break;
case 2:
    console.log('Ini 2');
case 3:
    console.log('Ini 3');
    break;
default:
    console.log('Ini default');
}

/*
Output:
Ini 2
Ini 3
*/