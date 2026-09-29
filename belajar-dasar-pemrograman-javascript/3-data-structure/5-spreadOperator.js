/* TABLE OF CONTENTS
 * Spread Operator Dengan Object
    * Menggabungkan Object
    * Menyalin Object
 * Spread Operator Dengan Array
    * Menggabungkan Array
    * Menyalin Array
*/

/*
 * Digunakan untuk menyebarkan nilai yang ada pada object & array.
 * Ditandai dengan sintaks tiga titik (...).
 * Membantu dalam pengelolaan object & array.
 * Nilai object & array dapat di-iterable menjadi beberapa element.
 * Mempermudah penggabungan dan penyalinan object & array.
 * Spread operator pd dasarnya sama seperti menggunakan looping utk mendapatkan nilai yg ada di dlm object & array.
*/

//* SPREAD OPERATOR DENGAN OBJECT
//* MENGGABUNGKAN OBJECT
const obj1 = {name: "Ucup"};
const obj2 = {lastName: "Slowy", address: "Jl. Payanibung"};
const newObj = {...obj1, ...obj2};
console.log(newObj); // Output: { name: 'Ucup', lastName: 'Slowy', address: 'Jl. Payanibung' }


//* MENYALIN OBJECT
const originalObj = {name: "Ucup", age: 9};
const copiedObj = {...originalObj};
console.log(copiedObj); // Output: { name: 'Ucup', age: 9 }


//* SPREAD OPERATOR DENGAN ARRAY
//* MENGGABUNGKAN ARRAY
const array1 = ["Ucup"];
const array2 = ["Slowy", "Jl. Payanibung"];
const newArray = [...array1, ...array2];
console.log(newArray); // Output: [ 'Ucup', 'Slowy', 'Jl. Payanibung' ]


//* MENYALIN ARRAY
const originalArray = ["apple", "banana", "cherry"];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [ 'apple', 'banana', 'cherry' ]

