//* Konversi eksplisit (Recommended)

//* Mengubah ke string
/*
 * String()
 * .toString()
*/
const numberString = 123;
const booleanString = true;

const strNumberString = String(numberString);
const strBooleanString = booleanString.toString();

console.log(strNumberString); // output: 123
console.log(strBooleanString); // output: true

//* Mengubah ke Number
/*
 * Number()
 * parseInt()
 * parseFloat()
 * fungsi parseInt() dan parseFloat() memiliki kemampuan membaca karakter satu per satu.
*/
const strNumber = '123';
const strFloatNumber = '3.14';
const booleanNumber = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloatNumber);
const numFromBoolean = Number(booleanNumber);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

const cmInt = '20cm';
const pxInt = '64px';

const intFromCM = parseInt(cmInt);
const intFromPX = parseInt(pxInt);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

const cmFloat = '20.55cm';
const pxFloat = '64.23px';

const floatFromCM = parseFloat(cmFloat);
const floatFromPX = parseFloat(pxFloat);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

//* Mengubah ke boolean
/*
 * Boolean()
 * daftar nilai falsy
   * false
   * 0
   * -0
   * 0n
   * ''
   * null
   * undefined
   * NaN 
 */
const numberBoolean = 123;
const stringBoolean = "Daffa";
const emptyBoolean = null;

const boolFromNumber = Boolean(numFromBoolean);
const boolFromString = Boolean(stringBoolean);
const boolFromNull = Boolean(emptyBoolean);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

//* Konversi implisit (Not Recommended)
/*
Dalam contoh ini, tipe data number (age) secara otomatis dikonversi menjadi string karena operator "+" digunakan
untuk penggabungan string, hal ini dapat terjadi apabila salah satu expression nya bernilai string.
*/
const ageImplisit = 20;
const messageImplisit = "Umurku: " + ageImplisit;
console.log(messageImplisit); // output: Umurku: 20

/*
Dalam contoh ini, strNumberImplisit (yang merupakan string) dikonversi menjadi number karena operator "*" digunakan
untuk operasi aritmatika, berbeda dgn "+" operator "*" akan tetap mengonversinya menjadi number.
*/
const strNumberImplisit = "123";
const resultImplisit = strNumberImplisit * 2;
console.log(resultImplisit); // output: 246

const boolImplisit = true;
const boolResultImplisit = 1 + boolImplisit;
console.log(boolResultImplisit); // output: 2