/* TABLE OF CONTENTS
 * Meng-export Variable -> ada di 3-module.mjs
 * Meng-export Function -> ada di 3-module.mjs
 * Meng-import Variable
 * Meng-import Function
 * Meng-import seluruh nilai yang ada di module
*/

/*
 * Selain export tipe data string, kita juga dapat export tipe data lain seperti array.
 * Cara export function tak berbeda jauh dengan cara meng-export variable.
 * Agar tidak perlu menulis export di setiap nilai yg ingin di export, kita dpt meng-export di akhir baris saja.
*/


//* MENG-IMPORT VARIABLE
// import { name, favoriteFood } from "./3-module.mjs";
// console.log(name);          // Output: Budi
// console.log(favoriteFood);  // Output: [ 'pizza', 'pasta', 'sushi' ]

//* Selain meng-import dgn named import, kita jg dpt meng-importnya menggunakan import alias.
// import { name, favoriteFood as food} from "./3-module.mjs";
// console.log(name);  // Output: Budi
// console.log(food);  // Output: [ 'pizza', 'pasta', 'sushi' ]


//* MENG-IMPORT FUNCTION
// import { name, favoriteFood as food, sayHi} from "./3-module.mjs";
// console.log(name);  // Output: Budi
// console.log(food);  // Output: [ 'pizza', 'pasta', 'sushi' ]
// sayHi(name);        // Output: Hi, Budi


//* MENG-IMPORT SELURUH NILAI YANG ADA DI MODULE
import * as user from "./3-module.mjs";
console.log(user.name);             // Output: Budi
console.log(user.favoriteFood);     // Output: [ 'pizza', 'pasta', 'sushi' ]
user.sayHi(user.name);              // Output: Hi, Budi