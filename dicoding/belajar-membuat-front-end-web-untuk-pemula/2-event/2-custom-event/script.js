// CONTOH CARA MEMBUAT CUSTOM EVENT DAN MENERAPKANNYA PADA EVENT LISTENER

/* 
  * Membuat custom event
    * const eventBuatan = new Event("eventBuatanKita");
  * Meletakkannya pada sebuah method addEventListener()
    * elemen.addEventListener("eventBuatanKita");
  * Alasan perlu mempelajari custom event adalah karena tidak seperti event yang biasanya “dikenali” oleh method 
  * addEventListener, custom event memungkinkan kita untuk menjalankan sebuah event handler 
  * setelah sebuah event handler lain selesai dipanggil.
*/ 


// MEMBUAT CUSTOM EVENT
const changeCaption = new Event("changeCaption");


// MENAMBAHKAN SEBUAH EVENT LISTENER UNTUK CUSTOM EVENT DAN BUTTON MELALUI METHOD addEventListener()
function customEventHandler(event) { // secara otomatis parameter event berisi object event
  console.log(`Event ${event.type} telah dijalankan`);
  const caption = document.getElementById("caption");
  caption.innerText = "Anda telah membangkitkan custom event";
}

//* Kode dibawah dikomenar untuk melanjutkan pembelajaran pada bagian "MEMBANGKITKAN CUSTOM EVENT"
// window.addEventListener("load", function () {
//   const tombol = document.getElementById("tombol");
//   tombol.addEventListener("changeCaption", customEventHandler);
//   tombol.addEventListener("click", function () {});
// });


// MEMBANGKITKAN CUSTOM EVENT (DISPATCH EVENT)
// Hanya fungsi yang berisi proses dispatch atau pemanggilan custom event handler. 
// Kita akan memanggil function dispatchEvent() utk trigger custom event yg telah dideklarasikan dan dipasangkan, yaitu changeCaption

// Memastikan seluruh aset halaman (HTML, CSS, gambar) selesai dimuat sebelum menjalankan kode di dalamnya, hal ini dilakukan agar manipulasi DOM (seperti mengambil elemen "tombol") aman dari error.
window.addEventListener("load", function () {
  const tombol = document.getElementById("tombol");

  // Memasang Listener untuk custom event
  tombol.addEventListener("changeCaption", customEventHandler);

  // Membangkitkan custom event saat tombol HTML di klik
  tombol.addEventListener("click", function () {

    // Memicu (trigger) custom event agar didengar oleh listener diatas
    tombol.dispatchEvent(changeCaption);
  });
});
