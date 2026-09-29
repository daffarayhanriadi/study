/* TABLE OF CONTENTS
 * Membuat Object (Plain Object/Objec Literal)
    * Object Literals
 * Mengakses Property di Object
    * Dot Notation (.)
    * Square bracket ([])
    * Object Destructuring
 * Mengubah Nilai di Property Object
 * Menghapus Property di Object
*/

/*
 * Object adalah kumpulan pasangan key-value dan merupakan tipe data yang bukan primitif.
 * Tipe data primitif hanya dapat menyimpan satu jenis data, object dapat menyimpan data yang beragam dan kompleks. 
 * Object dapat menyimpan data secara tidak terurut.
 * Selain tipe data seperti string, number, symbol, boolean, null, dan undefined dalam JS, 
    semuanya dianggap sebagai object.
 * Object di bahasa pemrograman lain disebut dengan hash-table, map, dan dictionary.
*/


//* MEMBUAT OBJECT
/* 
 * Menggunakan Object Constructor atau Object Literals
*/
//* Membuat Object Menggunakan Object Literals
const user1 = {}; // Object kosong => user -> nama object, {} -> property

//* Key dari properti dapat berupa string dan value dapat bernilai tipe data apa pun dan dipisahkan oleh koma.
//* name -> disebut sbg nama salah satu property dari object products
//* name -> key, "Sepatu" -> value
const products = {
    name: "Sepatu", 
    price: 230000
};

const user2 = {
    name: "Daffa",
    "last name": "Riadi",
    age: 23,
};

console.log(user2); // Output: { name: 'Daffa', 'last name': 'Riadi', age: 23 }


//* MENGAKSES PROPERTI DI OBJECT
//* MENGGUNAKAN DOT NOTATION (.)
/*
* Kekurangan dari dot notation adalah nama key yang ingin diakses harus valid; 
* tidak boleh mengandung spasi; 
* tidak boleh diawali angka; dan 
* tidak boleh mengandung spesial karakter.
*/
console.log(user2.name); // Output: Daffa


//* MENGGUNAKAN SQUARE BRACKET ([]) -> key yang memiliki spasi pun dapat diakses
console.log(user2["last name"]); // Output: Riadi


//* MENGGUNAKAN OBJECT DESTRUCTURING
/*
* Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai 
    dari properti object ke dalam satuan yang lebih kecil (variabel).
* Destructuring object yang key-nya tidak ada akan mengembalikan nilai undefined.
* Oleh karena itu, kita bisa memanfaatkan default value pada destructuring object agar nilainya tidak undefined.
* Object destructuring sangat berguna sekali ketika kita memiliki object dengan properti yang banyak 
    dan ingin mendapatkan nilai masing-masing properti
* Object destructuring juga dapat mengakses property yang memiliki space dengan menggunakan alias
*/

const { name1, lastName1 } = user2;
console.log(name1, lastName1); // Output: Daffa undefined

const { name2, lastName2 = false } = user2;
console.log(lastName2); // Output: false

const { name3, "last name": lastName3 } = user2; // object destructuring with alias
console.log(lastName3); // Output: Riadi


//* MENGUBAH NILAI DI PROPERTY OBJECT
/*
Property dari sebuah object dapat diubah walaupun diinisialisasi menggunakan const, karena yang diubah hanya
nilainya bukan menginisialisasi ulang property dari object tersebut. Mengubah dan menginisialisasi ulang itu berbeda.
*/
const account = {
    balance: 1000,
    debt: 10,
};

//* Mengubah nilai property
account.balance = 2000;
console.log(account.balance); // Output: 2000

//* Menginisialisasi ulang = ERROR
// account = {
//     balance: 1000,
//     debt: 10,
// }


//* MENGHAPUS PROPERTY DI OBJECT
console.log(user2.age); // Output: 23
delete user2.age;
console.log(user2.age); // Output: undefined

console.log(user2["last name"]); // Output: Riadi
delete user2["last name"];
console.log(user2["last name"]); // Output: undefined

