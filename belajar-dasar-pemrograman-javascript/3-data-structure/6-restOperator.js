/*
 * Ditandai dengan sintaks tiga titik (...) sebelum nama parameter.
 * Rest operator yang digunakan pd parameter biasa disebut dgn Rest Parameter.
 * Memungkinkan function untuk menerima argument dalam bentuk array dalam jumlah yg tak terbatas.
 * Menangani argument tersebut menjadi sebuah array dan meneruskannya ke function.
 * Karena menangani argument sbg array, maka method array seperti .length() dan yg lainnya jg dpt digunakan.
*/


//* CONTOH 1 -> 1 parameter
function myFunc(...name) {
    console.log("name:", name);
}
myFunc("Budi", "Ucup", "Slowy"); // Output: name: [ 'Budi', 'Ucup', 'Slowy' ]


//* CONTOH 2 -> 2 parameter
function myFunc2(number, ...name) {
    console.log("number:", number);
    console.log("name:", name);
}
myFunc2("one", "Budi", "Ucup");
/*
Output:
number: one
name: [ 'Budi', 'Ucup' ]
*/


//* CONTOH 3 -> menggunakan method .length
function myFunc3(...name) {
    console.log(name.length);
    console.log("name:", name);
}
myFunc3("Budi", "Ucup", "Slowy");
/*
Output:
3
name: [ 'Budi', 'Ucup', 'Slowy' ]
*/


//* CONTOH 4 -> menggunakan spread operator
const favorites = ["Nasi Goreng", "Mie Goreng", "Ayam Bakar", "Tahu", "Tempe"];
const [first, second, ...rest] = favorites;
console.log(first); // Output: Nasi Goreng
console.log(second); // Output: Mie Goreng
console.log(rest); // Output: [ 'Ayam Bakar', 'Tahu', 'Tempe' ]

