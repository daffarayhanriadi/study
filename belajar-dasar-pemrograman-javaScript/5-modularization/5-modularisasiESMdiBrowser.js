//* Menggunakan Modularisasi ES Module di Browser.
/* 
 * Caranya dgn menambahkan type pada saat memanggil tag script di berkas HTML.
    * <script src="./esmodule.js" type="module">
 * Sehingga, kita dpt membuat berkas JS sbg ESModule pd berkas HTML dan dijalankan di browser.
 * Tidak semua browser mendukung ESModule, sehingga perlu menambahkan kode berikut:
    * <script nomodule src="fallback.js"></script>
 * Atribut nomodule akan memberitahu browser untuk memuat berkas fallback.js jika tidak mendukung ESModule. 
 * Selain menulis JS pd berkas terpisah dr HTML, kita jg dpt menambahkan JS dgn ESModule secara inline.
*/

