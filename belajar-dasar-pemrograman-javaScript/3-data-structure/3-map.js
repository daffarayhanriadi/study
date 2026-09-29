/* TABLE OF CONTENTS
 * Membuat Map
    * Menggunakan Map Constructor
 * Menyimpan/menambah Nilai di Map Menggunakan Method .set(key, value)
 * Mengakses " " " " " .get(key)
 * Menghapus " " " " " .delete(key)
 */

/*
 * Map mirip dengan object dalam penyimpanan data yaitu dengan key-value.
 * Map berfungsi untuk menutupi kekurangan object, yaitu terletak pada key yang digunakan.
 * Map dapat menggunakan key dengan tipe data apapun, berbeda dgn object yg hanya menerima string saja.
*/


//* MEMBUAT MAP -> menggunakan object map constructor
const map = new Map();
console.log(map); // Output: Map(0) {}

const productMap = new Map([
    ["shoes", 500],
    ["cap", 350],
    ["jeans", 250],
]);
console.log(productMap); // Output: Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }


//* MENYIMPAN/MENAMBAH NILAI DI MAP -> menggunakan method .set(key, value)
map.set("name", "ucup");
console.log(map); // Output: Map(1) { 'name' => 'ucup' }

map.set(1, "number one");
console.log(map); // Output: Map(2) { 'name' => 'ucup', 1 => 'number one' }


//* MENGAKSES NILAI DI MAP -> menggunakan method .get(key)
console.log(map.get("name"));   // Output: ucup
console.log(map.get(1));        // Output: number one
console.log(map.has(1));        // Output: True
console.log(map.values());      // Output: [Map Iterator] { 'ucup', 'number one' }


//* MENGHAPUS NILAI DI MAP -> menggunakan method .delete(key)
//* return dr method delete akan bernilai TRUE jika element nya ada & terhapus, dan FALSE jika element-nya tidak ada.
map.set("last name", "slowy");
console.log(map); // Output: Map(3) { 'name' => 'ucup', 1 => 'number one', 'last name' => 'slowy' }

map.delete("last name");
console.log(map); // Output: Map(2) { 'name' => 'ucup', 1 => 'number one' }

