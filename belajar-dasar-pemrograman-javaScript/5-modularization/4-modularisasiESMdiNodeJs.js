//* Menggunakan Modularisasi ES Module di Node JS.
/* 
 * Karena ESModule adalah barang baru di dunia Node.js, kita perlu menambahkan konfigurasi dalam project Node.js
    * Cara 1:
        * Mengubah ekstensi berkas menjadi .mjs
    * Cara 2:
        * Menambahkan konfigurasi pada level package (package.json -> npm init -y).
        * Sehingga kita tdk perlu lagi utk mengganti ektensi berkas menjadi .mjs menggunakan -> "type": "module".
        * Inilah cara yang paling sering dilakukan.
    * Dua cara ini dapat membuat ESM bisa digunakan di Node.js.
    * Kita bebas memilih cara mana pun sesuai kebutuhan di dalam project.
*/