/* TABLE OF CONTENTS
 * Property dan Method
 * Getter dan Setter
 * Penerapan Hashtag
*/

/* 
 * Encapsulation adalah proses untuk membungkus data di suatu wadah yang disebut dengan class. 
 * Menyembunyikan data adalah bagian kunci dari encapsulation.
 * Desain OOP yang baik adalah object hanya akan menampilkan data yang dibutuhkan oleh object lain.
 * Data akan diisolasi dan tidak dapat diakses langsung dari luar.
 * Secara sederhana, encapsulation adalah membuat data yang ada di class sebagai private.
 * Maksud dari private ini adalah membatasi bagian kode yang dapat diakses. 
 * Secara default buatlah bagian kode menjadi tidak dapat diakses, jika tidak diperlukan.
 * Contoh:
    * Mesin kopi memiliki data dan method yg bersifat private seperti pengatur suhu, pemanas, dan memanaskan air.
    * Data dan method tersebut tidak bisa diakses oleh pihak luar (kita sebagai pengguna).
*/


//* PROPERTY DAN METHOD
/* 
 * Di dalam sebuah class kita dapat mendefinisikan property dan method.
 * Dalam menerapkan encapsulation, kita harus mengatur akses dari keduanya.
 * Secara umum, property yang ada di dalam instance class bersifat mutable (dapat diubah).
 * 
*/
// Contoh property secara umum bersifat mutable
/* 
Pada contoh ini, kita menetapkan temperature mesin kopi 90 derajat celcius, tetapi ada pengguna yg iseng
mengubahnya menjadi 60. Mengubah nilai tersebut bisa saja mengakibatkan mesin kopi rusak.

Meskipun kita sudah menetapkan nilai temperature, nilainya tetap dapat diubah. Hal ini tidaklah baik.
Untuk mencegah hal itu terjadi lagi, kita dapat menerapkan getter dan setter.
*/
class CoffeMachine {
   constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.temperature = 90;
   }

   makeCoffee() {
      console.log(`Membuat kopi dengan suhu`, this.temperature);
   }
}

const coffe = new CoffeMachine(100);
coffe.temperature = 60;
coffe.makeCoffee(); // Output: Membuat kopi dengan suhu 60


//* GETTER DAN SETTER
// Contoh penerapan getter dan setter pada contoh mesin kopi
/* 
 * Untuk mengatur akses ke property yang dimiliki oleh object, kita dapat menerapkan getter dan setter.
   * Getter terdiri dr method get, get adalah cara untuk mendapatkan nilai dari property.
   * Setter terdiri dr method set, set adalah method untuk menetapkan nilai property.
 * Penambahan underscore (_) sebelum nama variable menandakan bahwa nilai variable tersebut tidak dapat diubah.
   * Namun, sebenarnya penggunaan tanda tersebut tidak benar-benar membuat nilai property tidak dapat diubah, 
      ia masih dapat diubah.
   * Penggunaan underscore (_) hanyalah code convention yang disepakati oleh komunitas JS.
*/
class CoffeMachinee {
   constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this._temperature = 90;
   }
   
   get temperature() {
      return this._temperature;
   }

   set temperature(temperature) {
      console.log("You are not allowed to change the temperature");
   }
}

const coffeee = new CoffeMachinee(10);
console.log(`Sebelum diubah: `, coffeee.temperature);
coffeee.temperature = 100;
console.log("Setelah diubah: ", coffeee.temperature);
/* 
Output:
Sebelum diubah:  90
You are not allowed to change the temperature
Setelah diubah:  90
*/


//* PENERAPAN HASHTAG
/* 
* Untuk membuat nilainya benar-benar tidak dapat diubah, kita dapat menggunakan tanda hashtag (#).
   * Tanda ini diperkenalkan sejak JS versi ES2022.
   * Tanda ini digunakan untuk membuat hak akses private pada property dan method.
   * Oleh karena itu, kita perlu untuk menambahkan tanda hastag di variable dan method yang bersifat private.
   * Selain itu, kita mendeklarasikan property yang bersifat private di enclosing class.
   * Jika mencoba mengakses property yang bersifat private, kita akan mendapatkan pesan error.
*/
class CoffeeMachine {
   #temperature = 90; // enclosing class

   constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperature = this.#defaultTemperature();
   }

   get temperature() {
      return this.#temperature;
   }

   set temperature(temperature) {
      console.log("You are not allowed to change the temperature!");
   }

   #defaultTemperature() {
      return 90;
   }
}

const coffee = new CoffeeMachine(10);
console.log(`Sebelum diubah: `, coffee.temperature);
// JS memiliki 2 tahapan yaitu "parsing" & "execute code", sehingga error nya seperti dibawah ini.
// coffee.#temperature = 100; // SyntaxError: Private field '#temperature' must be declared in an enclosing class
coffee.temperature = 100;
console.log("Setelah diubah: ", coffee.temperature);
/* 
Output:
Sebelum diubah:  90
You are not allowed to change the temperature!
Setelah diubah:  90
*/
