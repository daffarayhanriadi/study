/* TABLE OF CONTENTS
 * Membuat Array
   * Menggunakan Object Constructor
   * Menggunakan Sintaks Array.from()
   * Menggunakan Array Literal
 * Mengakses Element Array
   * Menggunakan Indexing
 * Manipulasi Nilai Array
   * Menggunakan Indexing
   * Menggunakan Push
 * Menghapus Element dan Data Array
   * Menggunakan keyword delete
   * Menggunakan method .splice()
   * Menggunakan shift dan pop
 * Array Destructuring
 * Array Method
   * Reverse
   * Sort
 */

/*
 * Array juga merupakan Object.
 * Array dapat menyimpan data secara  terurut "secara indeks" bukan nilai (kebalikan dari Plain Object/Objec Literal).
 * Bersifat dinamis, sehingga dapat menambahkan, mengubah, dan menghapus nilai di antara data yang sudah ada.
 * Diakses menggunakan pola indeks.
 * Nilai yang disimpan di dalam Array disebut dengan ELEMENT.
 * Dapat menyimpan nilai dengan tipe data apapun.
*/
const array = [1, 2];
console.log(typeof array); // Output: object


//* MEMBUAT ARRAY 
//* MENGGUNAKAN OBJECT CONSTRUCTOR
/* 
 * Pada array numbers kita menambahkan angka 5 pada constructornya sehingga itu menjadi initial length dari array.
 * Meskipun sudah menetapkan initial length nya, kita masih bisa menambahkan dan menghapus element di array tersebut.
*/
const users1 = new Array();
const numbers = new Array(5); // initial length dari array dengan isi yang masih kosong

console.log(users1); // Output: []
console.log(numbers); // Output: [ <5 empty items> ]

numbers[2] = "Budi";
console.log(numbers); // Output: [ <2 empty items>, 'Budi', <2 empty items> ]


//* MENGGUNAKAN SYNTAX ARRAY.FROM()
/*
 * Method ini diperkenalkan di ES6.
 * Method ini juga dapat dimanfaatkan untuk menyalin array lainnya.
*/
const foo = Array.from("foo");
console.log(foo); // Output: [ 'f', 'o', 'o' ]

const users2 = new Array("John", "Jane", "Jack", "Jill");
const customer = Array.from(users2);
console.log(customer); // Output: [ 'John', 'Jane', 'Jack', 'Jill' ]


//* MENGGUNAKAN ARRAY LITERAL
/*
 * Cara ini merupakan cara yang paling mudah, singkat, dan sangat disarankan dalam pembuatan array.
 * Elementnya dipisahkan oleh tanda koma.
 * Dapat menambahkan element kosong di dalam nya.
*/
const fruits = ["apple", "banan", "cherry", "", "grape"];
console.log(fruits); // Output: [ 'apple', 'banan', 'cherry', '', 'grape' ]


//* MENGAKSES ELEMENT ARRAY
/*
 * Diakses dengan mudah menggunakan nilai indeks-nya.
 * Indeks merupakan angka yg merujuk ke nilai di dalam array.
 * Indeks array dimulai dari angka 0.
 * Untuk mengakses nilai di dalam array, gunakan tanda kurung siku [] yang didalamnya berisi angka indeks.
 * Ketika mengakses indeks di luar dari ukuran array akan menghasilkan UNDEFINED.
*/
const myArray1 = [42, 55, 30];
console.log(myArray1);        // Output: [ 42, 55, 30 ]
console.log(myArray1[1]);     // Output: 55
console.log(myArray1[3]);     // Output: undifined


//* MANIPULASI NILAI ARRAY
//* MENGGUNAKAN INDEXING
// Mengubah nilai element ke-2
let myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2); // Output: [ 1, 2, 3, 4, 5 ]
myArray2[1] = 10;
console.log(myArray2); // Output: [ 1, 10, 3, 4, 5 ]


//* MENGGUNAKAN PUSH (Menambahkan nilai ke dalam array pada element paling akhir)
myArray2.push(6);
console.log(myArray2); // Output: [ 1, 10, 3, 4, 5, 6 ]

//* MENGGUNAKAN UNSHIFT (Menambahkan nilai ke dalam array pada element paling awal)
myArray2.unshift(0);
console.log(myArray2); // Output: [ 0, 1, 10, 3, 4, 5,  6 ]

//* MENGHAPUS ELEMENT DAN DATA ARRAY
//* MENGGUNAKAN KEYWORD DELETE -> menghapus data array, namun element-nya masih ada
let myArray3 = ["Mobile", "Web", "Cyber Security"];
console.log(myArray3); // Output: [ 'Mobile', 'Web', 'Cyber Security' ]
delete myArray3[1];
console.log(myArray3); // Output: [ 'Mobile', <1 empty item>, 'Cyber Security' ]


//* MENGGUNAKAN METHOD .SPLICE() -> menghapus element dan data array
/*
* Method splice membutuhkan 2 parameter yaitu indeks dr element yg ingin dihapus dan jumlah element yg ingin dihapus.
*/
let myArray4 = ["Mobile", "Web", "Cyber Security"];
console.log(myArray4); // Output: [ 'Mobile', 'Web', 'Cyber Security' ]
myArray4.splice(1, 1);
console.log(myArray4); // Output: [ 'Mobile', 'Cyber Security' ]

let myArray5 = ["Mobile", "Web", "Cyber Security"];
myArray5.splice(1, 2);
console.log(myArray5); // Output: [ 'Mobile' ]


//* MENGGUNAKAN SHIFT DAN POP
/*
 Kekurangannya:
 * Tidak se-fleksibel delete dan splice karena shift hanya menghapus element pertama dan pop menghapus elemen terakhir.
*/
let myArray6 = ["Mobile", "Web", "Cyber Security"];
myArray6.shift();
console.log(myArray6); // Output: [ 'Web', 'Cyber Security' ]

let myArray7 = ["Mobile", "Web", "Cyber Security"];
myArray7.pop();
console.log(myArray7); // Output: [ 'Mobile', 'Web' ]


//* ARRAY DESTRUCTURING -> untuk melihat isi dari array tanpa harus mengaksesnya menggunakan index.
//* Hanya dapat dilakukan jika array tersebut tidak bernilai null atau undefined.
const introduction = ["Hello", "Arsy"];
const [ greeting, name, address ] = introduction;    // Sama seperti object destructuring, address -> undefined
console.log(greeting);  // Output: Hello
console.log(address);   // Output: undefined


//* ARRAY METHOD
//* Reverse -> method yang membalikkan nilai array
//* Method ini tidak akan membuat array baru, tetapi mengatur ulang element-nya
const myArray8 =  ["Mobile", "Web", "Cyber Security"];
console.log(myArray8); // Output: [ 'Mobile', 'Web', 'Cyber Security' ]
myArray8.reverse();
console.log(myArray8); // Output: [ 'Cyber Security', 'Web', 'Mobile' ]

//* Sort -> method yang mengurutkan nilai array (secara default akan mengurutkan berdasarkan abjad/ascending)
const myArray9 =  ["Mobile", "Web", "Cyber Security"];
console.log(myArray9); // Output: [ 'Mobile', 'Web', 'Cyber Security' ]
myArray9.sort();
console.log(myArray9); // Output: [ 'Cyber Security', 'Mobile', 'Web' ]

