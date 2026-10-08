/* TABLE OF CONTENTS
 * Membuat Set
    * Menggunakan Set Constructor
 * Menyimpan/menambah Nilai di Set Menggunakan Method .add(value)
 * Mengakses Nilai di Set Menggunakan:
    * For Of
    * .forEach()
 * Menghapus Nilai di Set Menggunakan Method .delete(value)
*/

/*
 * Set adalah struktur data yang spesial dibandingkan object, array, dan map.
 * Spesial karena Set tidak memiliki key dan indeks/urutan ketika menyimpan data.
 * Data yang disimpan di dalam set akan bernilai unik, artinya tidak akan ada data yang duplikat.
*/


//* MEMBUAT SET -> menggunakan object set constructor
const set = new Set();
console.log(set); // Output: Set(0) {}

const mySet = new Set([1, 2, 3]);
console.log(mySet); // Output: Set(3) { 1, 2, 3 }


//* MENYIMPAN/MENAMBAH NILAI DI SET -> menggunakan method .add(value)
//* Jika kita memberikan nilai yang sama, set hanya akan menyimpan sekali saja (non-duplikat)
set.add(1);
set.add(2);
set.add(1);
set.add(2);
console.log(set); // Output: Set(2) { 1, 2 }


//* MENGAKSES NILAI DI SET -> menggunakan perulangan (looping)
//* MENGGUNAKAN FOR OF
for (const number of set) {
   console.log(number);
}
/*
Output:
1
2
*/


//* MENGGUNAKAN .forEach()
set.forEach((value) => console.log(value));
/*
Output:
1
2
*/


//* MENGHAPUS NILAI DI SET -> menggunakan method .delete(value)
console.log(set); // Output: Set(2) { 1, 2 }
set.delete(1);
console.log(set); // Output: Set(1) { 2 }
