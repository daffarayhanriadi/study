/* TABLE OF CONTENT
 * Constructor Function
 * ES6 Class
 * Fact
*/

/* 
 * Object-Oriented Programming (OOP) adalah paradigma pemrograman yang memiliki pendekatan berbasis object.
 * Object akan berinteraksi satu sama lain untuk menyelesaikan tugas sehingga membentuk keseluruhan program.
 * Object terdiri dari atribut informasi (property) dan perilaku (method).
    * Property adalah informasi tentang objek tersebut seperti nama, warna, dan jenis.
    * Method adalah aksi atau perilaku yang dapat dilakukan oleh objek seperti berjalan, berlari, dan terbang.
    * Contoh:
        * Entitas kucing direpresentasikan menjadi object kucing dengan memiliki properti dan atribut.
        * Property pada kucing adalah warna, jenis ras, nama, dan umur.
        * Method pada kucing adalah berjalan, berlari, tidur, makan, dan mencakar.
    * Jika memiliki lima kucing, bayangkan betapa repotnya kita untuk mendefinisikan setiap ciri-cirinya.
    * Begitu pula dengan pemrograman, bila kita memiliki 5 objek yang berbeda, 
    * tentunya akan memakan waktu yang lama untuk mendefinisikan properti dan methodnya satu per satu.
    * Solusinya adalah menggunakan object dan class, kedua hal ini memiliki peran sangat penting dalam paradigma OOP.
 * Object adalah bentuk nyata dari suatu entitas.
 * Class adalah blueprint, cetakan atau template yang dapat kita gunakan berulang kali untuk membuat object.
 * Object dan class mempermudah ketika ingin membuat entitas yang kompleks dengan cepat dan efektif.
*/


//* CONSTRUCTOR FUNCTION
/* 
 * JavaScript bukanlah bahasa pemrograman berbasis class sehingga JavaScript tidak mengenal class.
 * Meskipun tidak mengenal class, prinsip OOP tetap dapat diterapkan.
 * Constructor function adalah cara yang digunakan untuk membuat object dan class sebelum adanya ES6.
 * Perlu diingat bahwa function tersebut berbeda dengan function biasa.
 * Biasanya penamaan constructor function ditulis dgn awalan huruf besar utk membedakan dgn penamaan function biasa.
 * Selain itu, kita tdk dpt membuat object dr arrow function karena ia tdk dpt dipanggil dengan keyword "new".

 * JS bukan bhs pemrograman berbasis class, melainkan bhs pemrograman berbasis prototype (prototype-based language).
 * Prototype adalah salah satu konsep fundamental dlm JS yg memungkinkan pewarisan sifat dan method antar object.
 * Semua object di JS memiliki properti tersembunyi bernama [[Prototype]] yg mengarah ke object prototype lain/null.
    * Properti dari sebuah object yang merujuk ke prototype-nya tidak disebut prototype.
    * Namanya tidak standar antar JavaScript runtime, tetapi dalam praktiknya semua browser menggunakan nama __proto__.
    * Cara standar untuk mengakses prototype sebuah object adalah dengan metode Object.getPrototypeOf().
 * 
*/
// Membuat blueprint dari entitas person dengan constructor function
function PersonObject(name, age) {
    this.name = name;
    this.age = age;
}

PersonObject.prototype.eat = function() {
    console.log(`${this.name} is eating`);
};

// Membuat object/instance person dengan constructor function
const objPerson1 = new PersonObject("Budi", 30);
const objPerson2 = new PersonObject("Ucup", 25);

console.log(objPerson1.name);  // Output: Budi
console.log(objPerson2.name);  // Output: Ucup

objPerson1.eat();  // Budi is eating
objPerson2.eat();  // Ucup is eating



//* ES6 CLASS
/* 
* Cara yang lebih modern untuk membuat object dan class adalah menggunakan ES6.
* ES6 sdh mendukung class sehingga membuat JS mirip dgn bahasa lain yg berbasis class seperti Java, C++, dan C#.
* ES6 Class juga memungkinkan kita untuk menggunakan method super untuk memanggil constructor SuperClass.
*/
// Membuat blueprint dari entitas person dengan class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    eat() {
        console.log(`${this.name} is eating`);
    }
}

// Membuat object/instance person dengan class
const objPerson3 = new PersonClass('Slowy', 30);
const objPerson4 = new PersonClass('Torvalds', 25);

console.log(objPerson3.name); // Output: Slowy
console.log(objPerson4.name); // Output: Torvalds

objPerson3.eat(); // Output: Slowy is eating
objPerson4.eat(); // Output: Torvalds is eating


//* FACT
/* 
 * Walaupun di JS sudah mendukung class, hal itu tdk mengubah JS menjadi bahasa pemrograman berbasis class.
 * Faktanya, sintaks class di JS hanyalah syntactic sugar atau cara alternatif dlm mendefinisikan constructor function.
 * Untuk membuktikan hal tersebut, kita bisa mengecek tipe class melalui operator typeof.
 * Dapat terlihat bahwa outputnya adalah function.
*/
console.log(typeof PersonObject);   // Output: function
console.log(typeof PersonClass);    // Output: function