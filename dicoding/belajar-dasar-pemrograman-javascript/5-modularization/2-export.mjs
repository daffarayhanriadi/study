/* TABLE OF CONTENTS -> ada di file 2-anotherFile.mjs
 * Default Export
 * Named Export
*/

/*
 * Export digunakan untuk melabeli suatu function/method/variable agar dapat diakses dari luar modul.
 * Default export adalah cara kita untuk mengekspor minimal satu function/method/variable di sebuah modul.
 * Dengan menggunakan default export, modul lain yang ingin menggunakan nilainya tidak perlu tahu spesifik namanya
     * karena secara default sudah ada function/method/variable yang diekspor.
 * Default export cocok digunakan untuk menghindari conflict ketika mengimpornya 
     * karena kita tidak perlu menulis function/method/variable sesuai dengan namanya
 * Mengimpor nilai dari default export tidak membutuhkan kurung kurawal.
 * Scr teknis Kita dpt meng-eksport > 1 function/method/variable menggunakan default export, tapi sgt tdk disarankan.
 * Sebaiknya menggunakan default export, 1 modul = 1 nilai.
 * Tujuan dari 1 modul = 1 default export adalah agar struktur kode lebih jelas dan memudahkan navigasi 
     * ketika ingin mencari suatu modul.
 * Kita bisa meng-kombinasikan antara default dan named import, namun bukan best practice karena tidak konsisten.
 * Named Export dapat dilakukan dengan cara Export Sebelum/Setelah Deklarasi Dilakukan.
 * Named export cocok digunakan ketika ingin mengekspor banyak nilai dari satu modul.
 * Named export mengharuskan kita untuk menulis nama function/method/variable secara spesifik ketika meng-import-nya.
 * Menulis nama secara spesifik membuat codebase menjadi konsisten.
*/


//* Import the Default Export
// import sayDefault from "./2-anotherFile.mjs";
import anotherName from "./2-anotherFile.mjs";
// sayDefault();
anotherName();


//* Import the Named Export
import { name, email, age } from "./2-anotherFile.mjs";
console.log(name, email, age);  // Output: Budi budi@gmail.com 25


//* Kombinasi default dan named import (NOT RECOMMENDED)
import sayDefault, { sayNamed } from "./2-anotherFile.mjs";
sayDefault();  // Output: I am default function
sayNamed();    // Output: I am named function