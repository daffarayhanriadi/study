/* TABLE OF CONTENTS
 * Penerapan Inheritance Menggunakan ES6 Class
 * Penerapan Inheritance Menggunakan Constructor Function
 * Mencari Tahu Asal Muasal dari Sebuah Class
*/

/* 
 * Inheritance jika diterjemahkan ke dalam bahasa Indonesia artinya adalah pewarisan.
 * Sesuai dengan namanya, kita bisa mewariskan property dan method dari sebuah class ke class lain.
 * Umumnya, properti dan method yang diwariskan berasal dari class (induk) dan digunakan oleh class baru (anak).
 * Sama halnya di kehidupan sehari-hari, sedikit byknya sbg anak, kita memperoleh sifat dan perilaku dr orang tua.
 * Hal ini dapat membantu mengurangi penulisan kode secara berulang (mengurangi redundancy kode).
 * Contoh:
        class SuperClass { }
        class SubClass extends SuperClass { }
    * Class yang mewariskan property dan method-nya disebut dengan SuperClass, Induk, Base, atau Parent Class.
    * Class yang mewarisi property dan method dari class lain disebut dengan SubClass dan Children Class (Anak).
*/


//* PENERAPAN INHERITANCE MENGGUNAKAN ES6 CLASS
/* 
Misalnya, kita memiliki smartphones dengan jenis Android dan iOS, 
setiap smartphones tersebut pasti memiliki property color, brand, model, dan method-nya adalah charging. 
Dengan paradigma OOP, property dan method yang memiliki kesamaan bisa kita abstraksikan menjadi 
sebuah class baru bernama Smartphones. Kemudian kita bisa membuat dua class baru, yaitu Android dan iOS.

Android dan iOS akan mewariskan property dan method dari class Smartphones seperti yang ada pada kode dibawah. 
Dengan begitu, class Android dan iOS akan memiliki property color, brand, model dan method charging. 
Selain itu, di masing-masing class kita dapat menambahkan property yang hanya ada pada dirinya. 
Misalkan, class Android memungkinkan untuk memiliki method split screen, 
sedangkan class iOS memungkinkan untuk memiliki method AirDrop.
*/
class SmartPhonesClass {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

// Penerapan Inheritance pada object Android Menggunakan ES6 Class
class AndroidClass extends SmartPhonesClass {
    splitScreen() {
        console.log("Android have a Split Screen");
    }
}

// Penerapan Inheritance pada object iOS Menggunakan ES6 Class
class iOSClass extends SmartPhonesClass {
    airDrop() {
        console.log("iOS have a behavior AirDrop");
    }
}

const androidC = new AndroidClass("black", "A", "Galaxy S26");
const iosC = new iOSClass("white", "B", "17 Pro Max");

androidC.charging();         // Output: Charging Galaxy S26
androidC.splitScreen();      // Output: Android have a Split Screen

iosC.charging();             // Output: Charging 17 Pro Max
iosC.airDrop();              // Output: iOS have a behavior AirDrop


//* PENERAPAN INHERITANCE MENGGUNAKAN CONSTRUCTOR FUNCTION
//* Kita akan mencoba merasakan penderitaan org terdahulu dlm mengimplementasikan pewarisan sblm adanya ES6 Class.
function SmartPhonesFunction(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
}

SmartPhonesFunction.prototype.charging = function() {
    console.log(`Charging ${this.model}`);
};

//* Penerapan Inheritance pada Class Android Menggunakan Constructor Function
function AndroidFunction(color, brand, model) {
    // Baris ini berfungsi untuk mewarisi properti dari konstruktor induknya
    // Metode .call() menjalankan fungsi induk dan memaksa kata kunci this di dalam fungsi induk tersebut merujuk kepada objek AndroidFunction yang sedang dibuat saat ini.
    // Artinya, jika SmartPhonesFunction memiliki properti seperti this.color atau this.brand, maka objek Android baru Anda otomatis akan langsung memiliki properti-properti tersebut tanpa perlu menulis ulang kodenya.
    SmartPhonesFunction.call(this, color, brand, model);
}

// Baris ini berfungsi untuk mewarisi metode (fungsi/perilaku) dari konstruktor induk.
// Object.create(...) membuat sebuah objek baru yang prototipenya disalin langsung dari prototipe SmartPhonesFunction.
// Objek baru yang kosong namun terhubung ini kemudian ditugaskan (assigned) ke AndroidFunction.prototype.
// Efeknya: Semua fungsi atau metode yang dimiliki oleh SmartPhonesFunction sekarang bisa diakses dan digunakan oleh objek cetakan AndroidFunction.
AndroidFunction.prototype = Object.create(SmartPhonesFunction.prototype);

// Saat kita menimpa prototipe pada Baris sebelumnya, properti penunjuk pembuat objek (.constructor) milik AndroidFunction secara tidak sengaja ikut berubah merujuk ke SmartPhonesFunction.
// Baris ini memperbaiki kesalahan penunjukan tersebut
// Kita menegaskan kembali kepada JavaScript bahwa pembuat (constructor) asli dari objek bersangkutan adalah AndroidFunction, bukan SmartPhonesFunction.
// Ini sangat penting agar sistem tidak bingung saat kita mengecek tipe objek di kemudian hari menggunakan perintah seperti instanceof.
AndroidFunction.prototype.constructor = AndroidFunction;

// Menambahkan metode khusus untuk Class Android
AndroidFunction.prototype.splitScreen = function() {
    console.log("Android have a Split Screen");
};

//* Penerapan Inheritance pada Class iOS Menggunakan Constructor Function
function iOSFunction(color, brand, model) {
    SmartPhonesFunction.call(this, color, brand, model);
}

iOSFunction.prototype = Object.create(SmartPhonesFunction.prototype);
iOSFunction.prototype.constructor = iOSFunction;

iOSFunction.prototype.airDrop = function() {
    console.log("iOS have a behavior AirDrop");
};

const androidF = new AndroidFunction("white", "B", "Galaxy S26");
const iosF = new iOSFunction("black", "A", "17 Pro Max");

androidF.charging();        // Output: Charging Galaxy S26
androidF.splitScreen();     // Output: Android have a Split Screen

iosF.charging();            // Output: Charging 17 Pro Max
iosF.airDrop();             // Output: iOS have a behavior AirDrop



//* MENCARI TAHU ASAL MUASAL DARI SEBUAH CLASS
/* 
 * Untuk mengetahui asal muasal dari sebuah class, Anda dapat menggunakan "instanceof".
 * Instanceof dpt digunakan utk menguji apakah suatu object merupakan instance dr sebuah class/constructor function tertentu.
 * Nilai keluaran dari instanceof adalah boolean.
 * Jika object tersebut merupakan instance dari kelas yang diuji, nilainya akan true. 
 * Jika tidak, nilainya akan false.
*/
console.log(androidC instanceof SmartPhonesClass);      // Output: true
console.log(androidC instanceof SmartPhonesFunction);   // Output: false
console.log(androidF instanceof SmartPhonesClass);      // Output: false
console.log(androidF instanceof SmartPhonesFunction);   // Output: true

/* 
Terbukti bahwa 
 * androidC adalah class yang terbuat dari construtor SmartPhonesClass
 * androidF adalah class yang terbuat dari construtor SmartPhonesFunction
 * Secara sederhana, androidC/androidF memiliki rantai prototype dengan SmartPhonesClass/SmartPhonesFunction.
*/