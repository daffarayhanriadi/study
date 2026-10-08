// MENAMBAHKAN ELEMENT HTML KE DOM (index2.html)
// Menambahkan Elemen dengan appendChild()
// appendChild() dapat menambahkan atau menyisipkan sebuah child elemen ke bagian akhir dari sebuah elemen
const newElement = document.createElement("li");
newElement.innerText = "Selamat Menikmati!";
const daftar = document.getElementById("daftar");
daftar.appendChild(newElement);

// Menambahkan Elemen dengan insertbefore()
// insertbefore() dapat menyisipkan elemen sebelum child elemen tertentu dalam parent element
const elementAwal = document.createElement("li");
elementAwal.innerText = "Hidupkan kompor.";
const itemAwal = document.getElementById("awal");
daftar.insertBefore(elementAwal, itemAwal);

