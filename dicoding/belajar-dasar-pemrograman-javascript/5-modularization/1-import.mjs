/* TABLE OF CONTENTS
 * Default Import
 * Named Import
 * Namespace Import / Asterisk Import
 * Alias Import
*/

/*
 * JavaScript memungkinkan kita untuk menggunakan function/method dari modul lainnya dengan dua syarat: 
    * Harus meng-import function/method tersebut.
    * Function/method tersebut sudah di-export.
*/

//* DEFAULT IMPORT
/* 
 * Default import dapat bekerja jika di modul lainnya terdapat function/method/variable yang di-export default.
 * Memungkinkan kita untuk import function/method/variable yg namanya tdk harus sama dgn function/method/variable aslinya.
 * Apa pun nama yang kita tulis ketika mengimpor function dari berkas anotherFile.mjs di main.mjs, function 
    * defaultFunction akan tetap terimport.
*/
import defaultFunction from "./1-anotherFile.mjs";
import result from "./1-anotherFile.mjs";
defaultFunction();   // Output: Ini adalah function export default.
result();            // Output: Ini adalah function export default.


//* NAMED IMPORT
/* 
 * Import ini akan menutupi kekurangan dari default import yang hanya dapat meng-import 1 function saja.
 * Memungkinkan kita utk mengimpor function/method/variabel tertentu berdasarkan namanya dr suatu modul yg memiliki 
    * byk pilihan export.
 * Pastikan nama function/method/variabel yang ingin di import sesuai dgn aslinya.
 * Kita juga dapat mengimport banyak function/method/variabel sekaligus.
*/
import { namedFunction } from "./1-anotherFile.mjs";    // import function
import { name, email, age } from "./1-anotherFile.mjs"; // import variable
namedFunction();     // Output: Ini adalah contoh named import
console.log(name);   // Output: Budi
console.log(email);  // Output: budi@gmail.com
console.log(age);    // Output 25


//* NAMESPACE IMPORT / ASTERISK IMPORT
/* 
 * Dapat mengimport function/method/variabel yg sangat byk dengan (*).
 * Kita jg wajib menambahkan "as" variable (sebagai alias) utk mengimpor seluruh variable yg berasal dr modul lainnya.
 * Kekurangannya adalah sulit untuk dibaca karena tidak eksplisit. Berbeda dgn named import yg dibuat scr explisit.
*/
import * as variable from "./1-anotherFile.mjs";
console.log(variable.name);   // Output: Budi
console.log(variable.email);  // Output: budi@gmail.com
console.log(variable.age);    // Output 25


//* ALIAS IMPORT
/* 
 * Digunakan utk mengubah nama dr function/method/variable yg berasal dr modul lain menjadi nama yg kita inginkan.
 * Tujuannya mempermudah ketika kita memiliki nama function/method/variable yg sama di beberapa modul.
 * Meningkatkan readability (keterbacaan) kode yang ditulis.
 * Kita dapat langsung tahu konteks dan maksud dari function/method/variable yang di import.
*/
import { aliasFunction as anotherFile } from "./1-anotherFile.mjs";
import { aliasFunction as anotherFile2 } from "./1-anotherFile2.mjs";
anotherFile();    // Output: Ini dari anotherFIle.mjs
anotherFile2();   // Output: Ini dari anotherFIle2.mjs