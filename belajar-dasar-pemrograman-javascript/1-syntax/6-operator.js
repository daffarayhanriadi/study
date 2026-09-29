/*
Operator merupakan sebuah simbol atau teks yang digunakan untuk melakukan sebuah operasi, misalnya aritmetika,
penugasan, logika, tipe data, atau operasi lain yang berhubungan dengan pemrograman.
ex:
 *--->  (), **, *, /, +, -, ++, --, >, <, =>, =<, ==, !=, ===, !==, &&, ||, !, typeof, ?:, 

Operator dibagi menjadi 3, yaitu UNARY, BINARY, dan TERNARY.

Operan adalah nilai yang menjadi target dari sebuah operasi (diletakkan diantara dan/atau setelah operator).
*/

let age = 25;

//* UNARY Operator -> Hanya membutuhkan 1 operan
typeof age;

//* BINARY Operator -> Membutuhkan 2 operan
5 + 4;
10 / 2;
age = 30;

//* TERNARY Operator -> Membutuhkan 3 operan
//* <condition> ? <return if true> : <return if false>
const result = (age < 18) ? "You are too young!" : "Welcome onboard!";
console.log(result); // Output: Welcome onboard!

//* Assignment Operator
/*
digunakan untuk memberikan nilai kepada sebuah variabel, baik inisiasi nilai baru maupun mengubah nilai 
yang sudah ada
*/
// inisi nilai
const name = "Daffa";
let location = "Medan";

// mengubah nilai
location = "Jakarta";

//* Arithmetic Operator ((), **, *, /, +, -, ++, --)
6 + 5; // mengembalikan 11
7 - 2; // mengembalikan 5
8 * 5; // mengembalikan 40
10 / 3; // mengembalikan 3.33
10 % 2; // mengembalikan 0
2 *(10 + 2); // mengembalikan 24

//* Comparison Operator (>, <, =>, =<, ==, !=, ===, !==)
const a = 10;
const b = 12;
 
console.log(a < b); // output: true
console.log(a > b); // output: false

//* Logical Operator (&&, ||, !)
// AND
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log((5 === 5) && (3 < 5)); // true

// OR
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log((5 === 5) || (3 > 5)); // true

// NOT
console.log(!true); // false
console.log(!false); // true

//* String Operator (+)
/*
Perlu diperhatikan bahwa simbol + memiliki fungsi ganda tergantung pada jenis operannya. 
Jika salah satu operan adalah string, simbol + akan berfungsi sebagai operator string 
untuk menggabungkan nilai string tersebut. Sebaliknya, jika kedua operand adalah angka, 
simbol + akan berfungsi sebagai operator aritmetika untuk melakukan penjumlahan.
*/
const first = 'bekerja';
const second = 'sama';
const merged = first + second;

console.log(merged); // Output: bekerjasama