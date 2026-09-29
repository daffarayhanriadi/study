/* TABLE OF CONTENTS
 * Yang Sudah Tercipta, Tak Bisa Diubah Lagi (Immutability)
 * Fungsi yang Mengubah Data (Mutator Function)
    * Duplikasi alih-alih Mengubah Aslinya
 * Immutable Array Methods
    * Array Map
    * Array Filter
    * Array Reduce
 * Immutable Object
*/

//* IMMUTABILITY
/* 
 * Untuk selalu menjaga bahwa fungsi selalu pure.
 * Dalam FP juga terdapat sebuah konsep bahwa segala yang sudah dibuat, tidak bisa diubah nilainya.
 * Konsep ini disebut sebagai immutability.
 * Tujuannya adalah memastikan sebuah nilai tidak dapat diubah dengan mudah (atau bahkan tidak bisa).
 * Tujuannya tentu utk menghindari segala perubahan yg tdk terduga dan biasanya menjadi akar permasalahan, seperti bug.
 * Dalam JS, kita dapat menerapkan prinsip immutability dengan menggunakan fungsi yang mengembalikan salinan baru, 
    * alih-alih mengubah data asli. 
 * Biasanya ini dilakukan ketika kita perlu mengubah data dari objek ataupun array.
 * Namun, sebelum mengetahui berbagai fungsi yang dapat mendukung prinsip immutability, 
    * kita perlu tahu dulu fungsi-fungsi “bahaya” yang perlu diperhatikan kembali.
*/


//* FUNGSI YANG MENGUBAH DATA (MUTATOR FUNCTION)
/* 
 * Secara umum, perubahan data secara tidak sadar terjadi karena penggunaan beberapa fungsi bawaan JS yang bersifat 
    * mengubah atau biasa disebut mutator function.
 * beberapa fungsi yang sering kita gunakan dan harus diperhatikan kembali ketika menerapkan prinsip immutability:
    * Array -> .unshift(), .push(), .shift(), .pop(), .splice(), .reverse(), .sort(), dan 
    * Object -> .assign().
    * Daftar fungsi di atas bersifat mutate, alias mengubah langsung data array asli.
    * Tentu penggunaan method tersebut di dalam fungsi akan membuat fungsi menghasilkan efek samping.
 *  
*/


//* CONTOH 1 MUTATOR FUNCTION PADA ARRAY
/* 
 * Fungsi max adalah fungsi yang mengembalikan elemen bernilai terbesar dari array yang dikirimkan melalui argumen.
 * Sepintas, fungsi max terlihat pure karena tidak mengakses nilai selain dalam argumennya.
 * Namun, karena dalam implementasinya kita menggunakan fungsi sort dan pop, fungsi max jadi memiliki efek samping,
    * yaitu mengubah nilai array numbers yang diberikan melalui argumen.
 * Efek samping ini mungkin sj tdk terduga karena tujuan fungsi tersebut hanya mengembalikan elemen yg paling besar.
*/
function maxMutator(arrayOfNumbers) {
    return arrayOfNumbers.sort((a, b) => a - b).pop();
}
const numbersMutator = [10, 23, 24, 7, 42, 18];
const largestMutator = maxMutator(numbersMutator);
console.log(largestMutator);   // Output: 42
console.log(numbersMutator);   // Output: [ 7, 10, 18, 23, 24 ]


//* CONTOH 2 MUTATOR FUNCTION PADA OBJECT
/* 
 * Selain pada array, perubahan data juga banyak terjadi dalam object.
 * Salah satunya adalah penggunaan fungsi Object.assign yang dapat mengubah nilai pada sebuah objek 
    * yang sudah terbentuk sebelumnya.
 * Kita bisa lihat bahwa fungsi registerEmail menambahkan properti email, baik pada personWithEmail maupun person.
*/
function registerEmailMutator(person, email) {
    return Object.assign(person, { email });
}
const personMutator = {
    name: "Budi",
    username: "budiman",
};
const personWithEmailMutator = registerEmailMutator(personMutator, "budi@gmail.com");
console.log(personMutator);            // Output: { name: 'Budi', username: 'budiman', email: 'budi@gmail.com' }
console.log(personWithEmailMutator);   // Output: { name: 'Budi', username: 'budiman', email: 'budi@gmail.com' }
    

//* DUPLIKASI ALIH-ALIH MENGUBAH ASLINYA (SOLUSI DARI CONTOH 1 & 2 MUTATOR FUNCTION)
//* SOLUSI CONTOH 1 & 2 MUTATOR FUNCTION
/* 
 * Untuk membuat kedua fungsi di atas kembali pure, kita tdk boleh memodifikasi nilai yang diberikan melalui argumen.
 * Umumnya, hal ini dilakukan dengan menduplikasi nilai array atau objek dan menambahkan data baru, 
    * lalu kembalikan fungsi menggunakan nilai baru tersebut.
 * Secara umum, proses duplikasi data dapat dilakukan dengan mudah menggunakan sintaksis spread operator.
 * Berikut adalah versi perbaikan dari fungsi max dan registerEmail agar bersifat immutate.
*/
function maxPure(arrayOfNumbers) {
    // Menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
    return [...arrayOfNumbers].sort((a, b) => a - b).pop();
}

const numbersPure = [10, 23, 24, 7, 42, 18];
const largestPure = maxPure(numbersPure);
console.log(largestPure);   // Output: 42
console.log(numbersPure);   // Output: [ 10, 23, 24, 7, 42, 18 ]

function registerEmailPure(person, email) {
    // Menggunakan spread operator untuk menduplikasi nilai person
    return { ...person, email };
}
const personPure = {
    name: "Budi",
    username: "budiman",
};
const personWithEmailPure = registerEmailPure(personPure, "budi@gmail.com");
console.log(personPure);            // Output: { name: 'Budi', username: 'budiman' }
console.log(personWithEmailPure);   // Output: { name: 'Budi', username: 'budiman', email: 'budi@gmail.com' }

//* IMMUTABLE ARRAY METHODS
/* 
 * JS telah menyediakan banyak fungsi bawaan yang dapat digunakan dan bersifat immutable.
 * Untuk kasus umum, seperti pengelolaan data array, kita dapat memanfaatkan beberapa fungsi berikut dan 
    * menjamin bahwa tidak timbul efek samping.
*/


//* ARRAY MAP
/* 
 * Fungsi Array.map() adalah bawaan dari array yang sangat berguna dan banyak sekali digunakan.
 * Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
 * Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array 
    * sesuai dengan iterasinya.
 * Fungsi map akan mengembalikan array baru.
 * Nilai tiap item pada array yang dikembalikan dihasilkan dari kembalian callback function-nya.
*/
const oldArray = ["Harry", "Ron", "Jeff", "Thomas"];
const newArray = oldArray.map((name) => `${name}!`);
console.log(oldArray); // Output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]
console.log(newArray); // Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]


//* ARRAY FILTER
/* 
 * Fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada.
 * Bila Anda memiliki kasus ingin menghilangkan beberapa item dalam array berdasarkan spesifikasi tertentu, 
    * fungsi ini sangatlah cocok digunakan.
 * Cara kerja fungsi ini mirip seperti Array.map().
 * Namun, callback function dari fungsi ini harus mengembalikan boolean.
 * Nilai boolean ini digunakan untuk menentukan item array lolos saring atau tidak.
 * Sama sprti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.
 * 
*/
// Contoh: Menghilangkan seluruh nilai false pada array
const truthyArray = [1, "", "Halo", 0, null, "Harry", 14]
.filter((item) => Boolean(item));
console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

// Contoh: Menyaring array dari object siswa yang layak mendapatkan beasiswa berdasarkan nilai skor
const students = [
    {
        name: "Harry",
        score: 60,
    },
    {
        name: "James",
        score: 88,
    },
    {
        name: "Ron",
        score: 90,
    },
    {
        name: "Bethy",
        score: 75,
    },
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents); // Output: [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]


//* ARRAY REDUCE
/* 
 * Array.reduce digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan 
    * output satu nilai saja.
 * Berikut struktur Array.reduce:
    * array.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 * Callback function dr fungsi ini dpt diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator.
 * Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.
*/
// Contoh: Menjumlahkan total nilai siswa
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore); // Output: 313


//* IMMUTABLE OBJECT
/* 
 * JavaScript menyediakan fungsi Object.freeze untuk membekukan objek sehingga tidak dapat diubah setelah dibuat.
 * Melalui fungsi ini, kita bisa memastikan bahwa tidak ada perubahan yang dapat dilakukan pada objek tersebut.
 * Contoh:
    * Pada contoh di bawah, kita menggunakan Object.freeze untuk membekukan objek user.
    * Setelah objek dibekukan, setiap upaya untuk mengubah properti akan diabaikan
        * (atau menghasilkan error jika mengaktifkan mode strict).
    * Dengan demikian, kita dapat memastikan bahwa objek tidak akan bisa diubah secara tidak sengaja.
    * Namun, perlu diingat bahwa Object.freeze hanya membekukan tingkat pertama dari objek.
    * Jika objek tersebut memiliki properti yang merupakan objek lain, properti tersebut masih dapat diubah.
    * Untuk membuat objek benar-benar immutable, kita perlu membekukan setiap objek yg menjadi properti scr rekursi.
*/
const user = {
    name: "Budi",
    email: "budi@gmail.com",
};

// Membekukan object user
Object.freeze(user);

// Mencoba mengubah properti dari object yang dibekukan
user.email = "man@gmail.com";
console.log(user); // Output: { name: 'Budi', email: 'budi@gmail.com' }


// Membuat object benar-benar immutable secara recursive
function deepFreeze(object) {
    Object.keys(object).forEach((name) => {
        const prop = object[name];
        if (typeof prop == "object" && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(object);
}

const complexUser = {
    name: "Budi",
    email: "budi@gmail.com",
    preferences: {
        newsletter: true,
        notiofications: "weekly",
        address: {
            city: "New York",
            zip: "10001",
        },
    },
};

deepFreeze(complexUser);

// Diabaikan
complexUser.preferences.address.city = "Los Angeles";

console.log(complexUser.preferences.address.city); // Output: New York
