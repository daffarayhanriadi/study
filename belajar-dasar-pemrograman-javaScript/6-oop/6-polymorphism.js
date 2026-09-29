/* TABLE OF CONTENTS
 * Overriding
 * Overriding Constructor
 * Overriding Method
*/

/* 
 * Seperti yang Anda ketahui sebelumnya bahwa kita dapat mewariskan property dan method ke class lainnya.
 * Namun, apa yang terjadi jika SubClass ingin mengubah implementasi dari method yang diwariskan dari SuperClass?
 * Layaknya kita sbg anak, ingin mengubah suatu sifat/perilaku dr orang tua yg kita mungkin tdk setuju/butuhkan.
 * Di OOP kita dapat mengubah implementasi method yang diturunkan dari SuperClass.
 * Utk mengubah implementasi yg diturunkan dr SuperClass adalah dgn menggunakan Polymorphism.
 * Polymorphism berasal dr bahasa Yunani yg memiliki arti scr harfiah yaitu memiliki banyak bentuk.
 * Polymorphism merupakan konsep di mana suatu entitas menjadi SuperClass utk mewariskan property/method ke SubClass.
 * Polymorphism berhubungan erat dengan pewarisan.
*/

/* 
Sebelumnya kita memiliki SuperClass Smartphones yang memiliki property color, brand, model dan method charging.
Kemudian kita memiliki SubClass yang implementasinya berbeda tergantung dengan jenisnya seperti Android dan iOS.
Kini, bentuk implementasi dari Smartphones berbeda untuk setiap jenis.
Inilah yang disebut dengan polymorphism.
Lalu, bedanya apa dong dengan pewarisan?
Bedanya terdapat pada implementasi method yang diubah.
Untuk mengubah implementasi method tersebut, terdapat konsep yang disebut dengan overriding.
*/


//* OVERRIDING
/* 
 * OOP memiliki konsep overriding yang sangat erat kaitannya dengan pewarisan.
 * Overriding adalah cara kita utk membuat implementasi yg berbeda di SubClass utk method yg diturunkan dr SuperClass.
 * Overriding dapat diterapkan untuk membuat method yang lebih spesifik di SubClass.
 * Selain itu, overriding juga dapat diterapkan untuk menambah properti baru di SubClass.
 * Overriding dapat diterapkan pada constructor maupun pada method.
*/


//* OVERRIDING CONSTRUCTOR
/* 
 * Constructor adalah method khusus yang dipanggil ketika instance class dibuat
    * Misalnya, ketika membuat instance class dengan keyword new, constructor akan terpanggil.
 * Jika kita ingin menambahkan property baru pada SubClass, kita dapat melakukan overriding constructor.
    * Caranya sesederhana mendefinisikan ulang constructor subClass tersebut.
    * Contoh:
        * Karena Android tidak hanya berjalan di smartphone, kita akan menambahkan property baru, yaitu device.
        * Property tersebut ditambahkan utk memenuhi kebutuhan penamaan perangkat yg menajalankan OS Android.
        * Ketika melakukan overriding constructor, kita wajib memanggil function super() di dlm constructor.
        * Hal tersebut digunakan utk menandakan apa saja property yg diturunkan dari SuperClass.
        * Jika tidak memanggil function tersebut, maka akan terjadi error "Referrence Error".
*/
class SmartPhones {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging() {
        console.log(`Charging ${this.model}`);
    }
}

class Android1 extends SmartPhones {
    constructor(color, brand, model, device) { // Overriding Constructor with add 1 more parameter
        super(color, brand, model); // property yg diturunkan dari SuperClass
        this.device = device;
    }

    splitScreen() {
        console.log("Android have a Split Screen");
    }
}

const android1 = new Android1("white", "B", "Galaxy S26", "Smart TV");
console.log(android1);
android1.charging();
/* 
Output:
Android1 {
    color: 'white',
    brand: 'B',
    model: 'Galaxy S26',
    device: 'Smart TV'
}
Charging Galaxy S26
*/

//* OVERRIDING METHOD
/* 
 * Selain kita bisa mengubah dan menambahkan property di constructor.
 * kita juga dapat mengubah implementasi pada method yang diturunkan dari SuperClass.
 * Konsep ini disebut dengan overriding method.
 * Overriding method memungkinkan SubClass utk membuat implementasi spesifik dr metode yg sudah ada di SuperClass.
 * Contoh:
    * Mengubah method charging() yang diturunkan dari SuperClass di SubClass Android.
    * Karena Android sudah mendukung untuk fast charging.
    * Caranya adalah dengan menulis ulang method yang ingin kita override.
    * Berbeda dengan overriding constructor, overriding method tidak wajib untuk menulis method super().
    * Namun, jika kita butuh utk memanggil method charging() dr SuperClass,
    * bersamaan dgn method charging yg sudah di-override, hal itu dpt dilakukan dengan memanggil keyword super. 
 */
class Android2 extends SmartPhones {

    constructor(color, brand, model, device) { // Overriding Constructor
        super(color, brand, model);
        this.device = device;
    }

    // Overriding method
    charging() {
        super.charging(); // Memanggil method charging yang ada di SuperClass (OPSIONAL)
        console.log(`Charging ${this.model} with fast charger`);
    }

    splitScreen() {
        console.log("Android have a Split Screen");
    }
}

const android2 = new Android2("Silver", "C", "Google Pixel 10a", "Smartphone");
console.log(android2);
android2.charging();
/* 
Output:
Android2 {
    color: 'Silver',
    brand: 'C',
    model: 'Google Pixel 10a',
    device: 'Smartphone'
}
Charging Google Pixel 10a
Charging Google Pixel 10a with fast charger
*/