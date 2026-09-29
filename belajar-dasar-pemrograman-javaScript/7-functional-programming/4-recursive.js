/* 
 * Di dunia FP tidak ada yg namanya perulangan dengan menggunakan sintax for atau while.
 * Alasanya, ketika melakukan perulangan, dibutuhkan perubahan data yg biasanya dilakukan pd variabel semacam counter.
 * Hal itu bertolak belakang dgn prinsip immutability (atau tidak boleh berubahnya data) yg harus diutamakan dalam FP.
 * Oleh karena itu, FP menawarkan "rekursi (recursive)" ketika memang butuh melakukan perulangan.
 * Rekursi merupakan cara alami yang banyak digunakan dlm FP dan satu2nya untuk melakukan perulangan/mengiterasi data.
 * Rekursi adalah teknik sebuah fungsi memanggil dirinya sendiri sehingga operasi dalam fungsi tersebut 
    * terus berulang sampai mencapai kondisi tertentu untuk ia keluar dari perulangannya.
*/

//* LOOPING WITH FOR
// Membuat fungsi yang dapat menghasilkan array berisi elemen deret angka dari 0 hingga n.
function generateArray(n) {
    const result = [];
    for (let counter = 0; counter <= n; counter += 1) {
        result.push(counter);
    }
    return result;
}
console.log(generateArray(5));   // Output: [ 0, 1, 2, 3, 4, 5 ]


//* LOOPING WITH RECURSIVE
/* 
 * Perhatikan bahwa dalam fungsi ini tidak ada sama sekali proses mengubah data,
    * tetapi hanya ada expression yang menghasilkan nilai baru pada setiap iterasi pemanggilan fungsinya.
 * Ketika menerapkan rekursi, penting menetapkan kondisi untuk ia berhenti memanggil dirinya sendiri.
 * Jika tidak, iterasi tidak akan pernah berhenti dan dampaknya program akan error 
    * karena call stack dalam JavaScript runtime akan mencapai batasnya.
 * Ini bisa diibaratkan kita berada di tengah sebuah cermin yang merefleksikan bayangan Anda tanpa batas.
 * Rekursi adalah teknik yang manjur untuk menyelesaikan berbagai masalah.
 * Tantangannya adalah dibutuhkan cara berpikir yang berbeda.
 * Terutama jika terbiasa dengan menulis kode secara imperatif, 
    * kemungkinan kita belum terbiasa dan menyampingkan rekursi sebagai solusi.
 * Namun, untungnya JavaScript telah menyediakan banyak fungsi bawaan yang dapat digunakan untuk masalah iterasi data,
    * seperti Array.map, Array.filter, atau Array.forEach,
    * sehingga kita tidak perlu membuat fungsi rekursi secara mandiri.
 * Fungsi-fungsi tersebut juga di balik layar menerapkan prinsip-prinsip FP, salah satunya perihal immutability.
*/
function generateArrayRecursive(n) {
    console.log(`Memasuki n = ${n}`);  // Lihat urutan pemanggilan
    if (n < 0) {
        console.log("Mencapai batas akhir (n < 0), mulai kembali ke atas...");
        return [];
    }
    const result = [...generateArrayRecursive(n - 1), n];
    console.log(`Hasil untuk n = ${n}:`, result); // Lihat urutan penggabungan
    return result;
}
generateArrayRecursive(5); // Output: [ 0, 1, 2, 3, 4, 5 ]
/* 
Output:
Memasuki n = 5
Memasuki n = 4
Memasuki n = 3
Memasuki n = 2
Memasuki n = 1
Memasuki n = 0
Memasuki n = -1
Mencapai batas akhir (n < 0), mulai kembali ke atas...
Hasil untuk n = 0: [ 0 ]
Hasil untuk n = 1: [ 0, 1 ]
Hasil untuk n = 2: [ 0, 1, 2 ]
Hasil untuk n = 3: [ 0, 1, 2, 3 ]
Hasil untuk n = 4: [ 0, 1, 2, 3, 4 ]
Hasil untuk n = 5: [ 0, 1, 2, 3, 4, 5 ]
*/