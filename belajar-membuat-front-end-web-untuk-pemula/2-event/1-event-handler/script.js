/*
  TABLE OF CONTENTS:
  * Membuat Event Handler onload dan Menerapkannya Menggunakan DOM Property dengan Imbuhan "on"
  * Membuat Event Handler onclick dan Menerapkannya Menggunakan DOM Property dengan Imbuhan "on"
  * Menerapkan Event Handler Inline (Langsung Pada Element HTML)
  * Menerapkan Event Handler dengan addEventListener() Tanpa Imbuhan "on"
*/

// MENAMBAHKAN EVENT HANDLER - MEMBUAT EVENT HANDLER ONLOAD
// Event Handler
function welcome() {
  alert("Sim salabim muncullah elemen-elemen HTML!");
  const contents = document.querySelector(".contents");
  contents.removeAttribute("hidden");
}
// Memasang event handler "onload" menggunakan DOM Property dgn imbuhan "on"
// document.body.onload = welcome;


// MENAMBAHKAN EVENT HANDLER - MEMBUAT EVENT HANDLE ONCLICK
// Event Handler
function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("h4");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";

    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg",
    );

    const contents = document.querySelector(".contents");
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}
// Memasang event handler "onclick" menggunakan DOM Property dgn imbuhan "on"
// document.getElementById("incrementButton").onclick = increment;


// MENAMBAHKAN EVENT HANDLER - MENERAPKAN EVENT HANDLER INLINE (LANGSUNG PADA ELEMENT HTML)
/*
Caranya:
<body onload="welcome()"></body>
<button id="incrementButton" onclick="increment()"></button>
*/


// MENAMBAHKAN EVENT HANDLER - MENERAPKAN EVENT HANDLER DENGAN addEventListener() TANPA IMBUHAN "on"
// Kelebihan metode ini adalah kemampuannya untuk mendaftarkan lebih dari satu fungsi sebagai event handler pada elemen yang sama.
// Berbeda dengan metode alternatif yang akan menimpa (overwrite) fungsi handler sebelumnya jika dideklarasikan ulang.
/*
  * element.addEventListener("click", fungsiA)
  * element.addEventListener("click", fungsiB)
*/

// Memasng event handler "onload" dan "onclick" menggunakan addEventListener()
// event load dipasangkan ke object window karena method addEventListener() tidak bisa bekerja pada tag <body>
window.addEventListener("load", welcome);
document.getElementById("incrementButton").addEventListener("click", increment);
