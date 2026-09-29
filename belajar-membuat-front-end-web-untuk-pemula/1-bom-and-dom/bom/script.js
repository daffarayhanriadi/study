// BOM Member: Method alert()
const message = "Hello, user!";
alert(message);


// BOM Member: Method prompt() -> return "" (default) || "{stringInputUser}" || null (cancel)
const pesanInput = prompt("Masukkan pesan sesukamu...");
console.log(pesanInput);
console.log(typeof pesanInput); // Output: string

// prompt() with parse
// const pesanInput2 = Number(prompt("Masukkan angka sesukamu...")); // another way
const pesanInput2 = prompt("Masukkan angka sesukamu...");
const pesanInputConvertedToNumber = Number(pesanInput2);
console.log(typeof pesanInputConvertedToNumber); // Output: number

// prompt() with default value
const name = prompt("Silahkan masukkan nama Anda!", "Budi");
console.log(name);


// BOM Member: console
console.log('Ini adalah console log');
console.info('Ini adalah console info');
console.warn('Ini adalah console warn');
console.error('Ini adalah console error');


// How to Summon BOM Members
// Cara memanggil di bawah ini tidak memiliki perbedaan dan valid
window.alert("Hello World"); // -> secara eksplisit
alert("Hello World"); // -> secara implisit

// Hati-hati jika kita mendefinisikan sebuah method dengan nama yang sama dengan method milik window, karena method milik window bisa tertimpa dengan method tersebut.
// Contoh:
function alert(nama) {
  console.log("Hati-hati " + nama);
}

alert("Chewbacca 1"); // Output: Hati-hati, Chewbacca
// Output di atas akan tercetak ke console browser, namun tidak tampil secara pop-up

window.alert("Chewbcca 2"); // Output: Hati-hati, Chewbacca
// Output di atas akan tetap tercetak pada console browser, namun tidak tampil secara pop-up
