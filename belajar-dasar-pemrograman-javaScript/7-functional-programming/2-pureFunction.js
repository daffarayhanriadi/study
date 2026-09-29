/* 
 * FP menawarkan banyak manfaat, selain membuat kode jadi lebih ringkas, 
    * kode yang kita tulis akan lebih mudah untuk diuji.
 * Sebab, dengan menerapkan FP, fungsi yang kita buat hasilnya selalu terprediksi.
 * Untuk mencapai manfaat tersebut, hal dasar yang perlu kita terapkan adalah konsep pure function.
 * Pure function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut.
    * Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama.
        * Untuk mencapai ini, fungsi tidak boleh mengakses nilai di luar argumen dan variabel cakupan global.
    * Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
        * Seperti mengubah variabel global, berinteraksi dengan input dan output.
 * Jika tidak memenuhi sifat tersebut, fungsi akan dikategorikan sebagai impure function.
 * Keuntungan menggunakan pure function termasuk kemampuan utk mengoptimalkan kode melalui memoization,
    * yakni hasil dr fungsi disimpan dan digunakan kembali jika input yang sama ditemukan.
 * Teknik memoization termasuk praktik advance (tidak akan dibahas disini).
 * Dalam beberapa kasus teknik memoization dapat meningkatkan performa secara signifikan.
 * “Tidak memiliki efek samping” menjadi salah satu syarat yang menantang dari pure function.
 * Nyatanya, dalam membuat aplikasi, interaksi dengan I/O selalu tidak bisa dihindari.
 * Jika memang ada operasi yang perlu menghasilkan efek samping, 
    * menggunakan teknik advance bernama monad adalah solusi yang ditawarkan dalam FP (tidak akan dibahas disini).
*/


//* IMPURE FUNCTION
/* 
 * Kode dibawah dikategorikan sebagai impure function karena fungsi addWith tidak memenuhi sifat pure function.
 * Fungsi addWith menunjukkan nilai yg dikembalikan setelah diberikan argumen 1 itu selalu berbeda.
 * Hal tersebut dipengaruhi oleh kadaan variable value yg selalu berubah setiap kali pemanggilan terjadi.
 * Pemanggilan fungsi addWith juga memiliki efek samping.
 * Selain mengubah variable value, fungsi ini juga menulis sesuatu ke I/O melalui pemanggilan console.log().
 * Efek samping ini membuat hasil dari pemanggilan fungsi tidak hanya bergantung pd argumen yg diberikan,
    * tetapi juga keadaan di luar fungsi tersebut.
*/
// Contoh 1 (addWith Function)
let value = 0;

function addWithImpure(addingValue) {
    value += addingValue;
    console.log(`Current value is ${value}`);
    return value;
}

const resultImpure1 = addWithImpure(1); // Current value is 1
const resultImpure2 = addWithImpure(1); // Current value is 2
const resultImpure3 = addWithImpure(1); // Current value is 3

console.log(resultImpure1, resultImpure2, resultImpure3); // Output: 1 2 3

// Contoh 2
// Mengubah nilai variabel global
let countImpure = 0;
function incrementImpure() {
    countImpure++;
}

// Mengakses waktu sistem
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

// Mengubah status objek yang diterima sebagai parameter
function updateUser(user) {
    user.name = "Updated name";
}

// Menulis ke berkas
const fsImpure = require("fs");
function writeToFile(data) {
    fsImpure.writeFileSync("data.txt", data);
}

//* PURE FUNCTION
// Contoh 1 (addWith Function)
function addWithPure(value, addingValue) {
    return value + addingValue;
}

const resultPure1 = addWithPure(0, 1);
console.log(`result is ${resultPure1}`); // Output: result is 1

const resultPure2 = addWithPure(0, 1);
console.log(`result is ${resultPure2}`); // Same Output: result is 1

const resultPure3 = addWithPure(0, 1);
console.log(`result is ${resultPure3}`); // Same Output: result is 1

console.log(resultPure1, resultPure2, resultPure3); // Output: 1 1 1

// Contoh 2
// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// Memfilter dan memetakan data tanpa mengubah array asli
function getActiveUsernames(users) {
    return users
        .filter(user => user.isActive)
        .map(user => user.usernmae);
}

// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: address.street,
            city: address.city,
            country: address.country,
        },
    };
}

// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings,
    };
}
