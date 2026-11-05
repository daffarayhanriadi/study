// NOTE: 1. LATIHAN STUDI KASUS: MENAMPILKAN DAFTAR KONTAK
// NOTE: 2. LATIHAN STUDI KASUS: MEMBERIKAN STYLING
// NOTE: 3. MANAGEMENT FILE/FOLDER
// NOTE: 4. LATIHAN STUDI KASUS: MENAMBAHKAN FITUR HAPUS KONTAK
// NOTE: 5. LATIHAN STUDI KASUS: MENAMBAHKAN FITUR TAMBAH KONTAK
// NOTE: 6. LATIHAN STUDI KASUS: MENERAPKAN PropTypes PADA APLIKASI KONTAK
// Latihan ini menggunakan React v18 karena memanfaatkan PropTypes API.
// NOTE: 7. LATIHAN STUDI KASUS: MENERAPKAN RUNTIME PROPERTY VALIDATION DENGAN JOI PADA APLIKASI KONTAK
// Latihan ini menggunakan React v19 untuk menerapkan Joi, berbeda dengan React v18 karena memanfaatkan PropTypes API.
// NOTE: 8. LATIHAN STUDI KASUS: MEMBUAT HALAMAN TAMBAH KONTAK
// Latihan ini kita akan memisahkan fungsionalitas tambah kontak ke halaman berbeda.

/*
  * Step 1: Menginstal Package React Router Dom
    * Jalankan perintah terminal npm install react-router-dom di dalam proyek aplikasi kontak Anda.
    * Pastikan package react-router-dom berhasil terinstal dan terdaftar pada dependencies di package.json.
  * Step 2: Membungkus Aplikasi dengan BrowserRouter
    * Buka berkas src -> index.jsx untuk melakukan konfigurasi awal React Router.
    * Bungkus komponen utama ContactApp menggunakan komponen BrowserRouter agar fitur routing dapat berjalan.
  * Step 3: Memperbarui Struktur Data dan Fungsi di data.js
    * Lakukan pembaruan kode pada berkas data.js dengan menyalin dan menempelkan kode penyesuaian yang baru.
    * Buat fungsi addContact() dan deleteContact() di data.js agar
      * proses tambah/hapus data lebih mudah digunakan lintas komponen.
    * Ubah nama fungsi getData() menjadi getContacts() agar memiliki penamaan yang seragam dengan fungsi lainnya.
  * Step 4: Menangani Eror Perubahan Fungsi di ContactApp
    * Perbaiki eror di terminal yang muncul akibat dari perubahan nama fungsi getData() menjadi getContacts().
    * Buka berkas components -> ContactApp.jsx,
      * lalu ubah pemanggilan getData() menjadi getContacts() pada bagian constructor.
    * Ubah juga nama fungsi yang diimpor dari berkas data.js agar sesuai dengan nama fungsi baru yang digunakan.
  * Step 5: Membuat Folder Pages dan Berkas Halaman Baru
    * Buat sebuah folder baru bernama pages di dalam direktori folder src.
    * Buat dua berkas JavaScript baru di dalam folder pages tersebut dengan nama HomePage.jsx dan AddPage.jsx.
  * Step 6: Membangun Halaman HomePage
    * Tulis kode halaman daftar kontak di dalam berkas pages -> HomePage.jsx untuk menangani URL path /.
    * Buat komponen HomePage menggunakan class component karena membutuhkan state untuk mengelola data contacts.
    * Gunakan state contacts tersebut untuk ditampilkan ke dlm komponen ContactList serta menangani aksi hapus kontak.
  * Step 7: Membangun Halaman AddPage
    * Tulis kode halaman formulir di dalam berkas pages -> AddPage.jsx untuk menangani penambahan data kontak.
    * Buat AddPage tanpa local state karena penanganan state form input sudah diatur oleh komponen ContactInput.
    * Definisikan event handler yang memanggil fungsi addContact() dari data.js dengan
      * membawa data kontak baru saat tombol submit diklik.
  * Step 8: Membuat Komponen Navigasi Antarhalaman
    * Buat berkas JavaScript baru bernama Navigation.jsx di dalam folder components.
    * Tulis kode UI navigasi menggunakan komponen Link dari react-router-dom untuk berpindah halaman tanpa reload.
    * Arahkan masing-masing komponen Link tersebut menuju ke path URL halaman utama / dan halaman tambah /add.
  * Step 9: Menyesuaikan Routing di Komponen ContactApp
    * Buka berkas components -> ContactApp.jsx untuk merombak struktur komponen utama tersebut.
    * Ubah fungsi ContactApp dari tempat penyimpanan state utama menjadi tempat penentuan definisi routing aplikasi.
    * Ubah komponen ContactApp menjadi functional component karena sudah tidak lagi mengelola state data contacts secara langsung.
  * Step 10: Menerapkan Navigasi Programatis Setelah Tambah Kontak
    * Buka kembali berkas pages -> AddPage.jsx untuk mengonfigurasi fitur perpindahan halaman otomatis.
    * Impor dan dapatkan fungsi navigate dari fungsi hooks useNavigate() bawaan react-router-dom di dalam komponen.
    * Panggil fungsi navigate('/') di dalam handler onAddContactHandler tepat setelah pemanggilan fungsi addContact().
    * Simpan semua perubahan untuk memastikan halaman otomatis berpindah kembali ke
      * halaman Home setelah kontak sukses ditambahkan.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContactApp from "./components/ContactApp";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContactApp />
  </BrowserRouter>
);
