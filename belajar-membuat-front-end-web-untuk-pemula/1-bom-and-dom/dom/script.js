// MENCARI DOM (MENDAPATKAN DOM)
// Global Object of DOM
document;


// Mengakses koleksi elemen
const head = document.head;
const body = document.body;


// Mengakses elemen tertentu (tunggal) -> syntax: document.<nama_method>;
// Mengembalikan elemen tunggal yang memiliki nilai id "display"
const image = document.getElementById("display");

// Mengembalikan byk elemen (HTMLCollection) yg memiliki attribute name dgn nilai "button".
// HTMLCollection tidak memiliki dukungan .forEach() berbeda dgn NodeList.
document.getElementsByName("button");

// Mengembalikan byk elemen (HTMLCollection) yg memiliki attribute class dgn nilai "button".
document.getElementsByClassName("button");

// Mengembalikan banyak elemen (HTMLCollection) yang merupakan <div> element.
document.getElementsByTagName("div");

// Mengembalikan elemen tunggal pertama (node) yang menerapkan class/id "button".
document.querySelector(".button");
document.querySelector("#button");

// Mengembalikan banyak Node dalam bentuk NodeList yang menerapkan class/id "button".
// NodeList memiliki karakteristik seperti array, sehingga kita dapat menggunakan property length dan juga dapat mengakses nilai individual elemennya menggunakna indexing, serta kita juga bisa melakukan looping terhadap elemen-elemennya menggunakan for...of maupun .forEach().
document.querySelectorAll(".button");
document.querySelectorAll("#button");


// MEMBUAT ELEMEN HTML MELALUI DOM
// Membuat sebuah elemen HTML yg benar-benar baru tanpa memanipulasi isi konten berkas HTML
// Membuat sebuah elemen HTML dengan tag <p>
const newElement = document.createElement("p");

// Menambahkan konten atau text ke dalam tag <p> yg sebelumnya telah dibuat
newElement.innerText = "Selamat datang ke HTML kosong ini :)";

// Menambahkan tag <b> untuk membungkus kata "Selamat datang"
newElement.innerText = "<b>Selamat datang</b> ke HTML kosong ini :)";

// Membuat elemen gambar dengan tag <img>
const newImg = document.createElement("img");

// Menambahkan atribut src ke dalam tag <img> yg sebelumnya telah dibuat
newImg.setAttribute("src", "https://picsum.photos/200/300");


// MENGUBAH KONTEN HTML - MEMANIPULASI ATRIBUT MELALUI setAttribute()
// setAttribute() memiliki kemampuan automatic type conversion pada parameter ke-2 nya.
// Menyesuaikan ukuran (dimensi) gambar yang terlalu kecil dgn atribut width dan height
const gambar = document.getElementById("gambar");
gambar.setAttribute("width", 300);
gambar.setAttribute("height", 215);

// Menonaktifkan button ke-4 (Play (Coming Soon))
const buttons1 = document.querySelectorAll(".button");
const playButton = buttons1[3];
const playButtonElement = playButton.children[0];
playButtonElement.setAttribute("disabled", true);


// MENGUBAH KONTEN HTML - MEMANIPULASI KONTEN MELALUI innterText, innerHTML, dan style.property
// Perbedaan innerText dan innerHTML
const links = document.getElementById("links");
// links.innerText; // Jalankan di console browser untuk melihat outputnya
// Output: 'Situs lainnya yang tidak kalah menarik:\n\nDicoding\nGoogle'
// links.innerHTML; // Jalankan di console browser untuk melihat outputnya
// Output: '\n      <p>Situs lainnya yang tidak kalah menarik:</p>\n      <ul>\n        <li><a href="http://www.dicoding.com" id="dicodingLink">Dicoding</a></li>\n        <li><a href="http://www.google.com" id="googleLink">Google</a></li>\n      </ul>\n    '

// Manipulasi Konten dengan innerText
const dicoding = document.getElementById("dicodingLink");
dicoding.innerText = "Belajar Programming di Dicoding";

const google = document.getElementById("googleLink");
google.innerText = "Mencari sesuatu di Google";

// Manipulasi Konten dengan innerHTML
dicoding.innerHTML = '<i>Belajar Programming di Dicoding</i>';
google.innerHTML = '<i>Mencari sesuatu di Google</i>';

// Manipulasi Style Konten dengan style.property
const buttons2 = document.getElementsByClassName('button');
for (const button of buttons2) {
  console.log(button.children[0]);
  button.children[0].style.borderRadius = '6px';
}
