# 🍳 Smart Kitchen Dashboard: Master Asynchronous JavaScript

Aplikasi web interaktif berbasis web simulator untuk memvisualisasikan dan memperkuat pemahaman mendalam tentang **Asynchronous JavaScript**. Proyek ini mensimulasikan sistem alur kerja (*pipeline*) dapur restoran modern yang memproses pesanan, memvalidasi pembayaran, memasak, hingga mengirimkan makanan secara aman dan efisien.

---

## 🚀 Apa itu Asynchronous JavaScript?

Secara *default*, JavaScript bersifat **Synchronous** (satu arah/satu per satu). Bayangkan sebuah restoran di mana pelayan mencatat pesanan Anda, lalu pergi ke dapur dan ikut menunggu makanan selesai dimasak selama 15 menit tanpa melayani pelanggan lain. Antrean restoran pasti akan macet total.

**Asynchronous JavaScript (Async JS)** adalah metode pemrograman yang memungkinkan kode menjalankan tugas-tugas berat di latar belakang (seperti mengambil data dari internet atau menunggu pewaktu) tanpa menghentikan atau memblokir jalannya program utama. Pelayan mencatat pesanan Anda, meneruskannya ke dapur, lalu langsung melayani pelanggan berikutnya. Saat makanan Anda matang, barulah pelayan kembali mengantarkannya kepada Anda.

---

## 🏛️ Pilar Utama Async JS & Fitur Dashboard

Proyek ini mendemonstrasikan evolusi dan teknik utama penanganan kode asinkron dalam JavaScript:

### 1. Callbacks
Mengoper sebuah fungsi ke dalam fungsi lain untuk dijalankan setelah tugas tertentu selesai. 
* **Di proyek ini:** Digunakan pada sistem paling luar untuk menerima input menu pesanan pelanggan lewat `terimaPesanan(menu, callback)`. 
* **Kelemahan:** Jika terlalu banyak rantai proses, bisa memicu *"Callback Hell"* (kode menjorok ke dalam berbentuk piramida dan sulit dibaca).

### 2. Raw Promises
Sebuah objek unik yang mewakili status akhir dari suatu operasi asinkron. Objek ini memiliki 3 status utama: `Pending` (sedang berjalan), `Fulfilled` (sukses/selesai), dan `Rejected` (gagal/error).
* **Di proyek ini:** Digunakan secara manual pada fungsi `prosesPembayaran()` dengan menggunakan konstruktor `new Promise((resolve, reject))`.

### 3. Promise Chaining (`.then()` & `.catch()`)
Mengalirkan data secara berantai dari satu proses asinkron ke proses berikutnya menggunakan method `.then()`. Jika terjadi error di salah satu rantai, program akan melompat langsung ke blok `.catch()`.
* **Di proyek ini:** Disimulasikan secara visual ketika Anda menekan **Tombol Biru**. Alurnya: `Potong Bahan` ➔ `Masak` ➔ `Plating` ➔ `Kirim`.

### 4. Concurrency (`Promise.all`)
**Concurrency (Konkurensi)** adalah teknik menjalankan beberapa tugas asinkron **secara bersamaan (paralel)** untuk menghemat waktu, alih-alih menunggunya satu per satu secara berurutan.
* **Di proyek ini:** Digunakan pada fungsi `jalankanPengirimanSerentak()`. Program akan mengirimkan 3 paket logistik berbeda (Paket Utama, Bonus Driver, dan Nota Cloud) secara serentak. Dapur akan menahan langkah penyelesaian akhir sampai **semua** proses pengantarannya selesai, tak peduli durasi masing-masing kurir berbeda-beda.

### 5. Modern Async / Await
Cara modern yang diperkenalkan pada ES8 untuk menulis kode asynchronous agar terlihat dan terbaca rapi layaknya kode synchronous yang linear (segaris demi segaris).
* **Di proyek ini:** Disimulasikan ketika Anda menekan **Tombol Hijau**. Kata kunci `async` dipasang di depan fungsi dan `await` digunakan untuk menghentikan sementara baris kode sampai Promise di hadapannya selesai diproses.

---

## 🧪 Cara Mengamati & Mempelajari Cara Kerja Kode

Jalankan file `index.html` di browser Anda, lalu lakukan eksperimen berikut untuk memahaminya secara praktik:

* **Bandingkan Tombol Biru vs Tombol Hijau:** 
  Keduanya menghasilkan urutan output yang sama persis di layar monitor log. Namun, buka file `script.js` dan amati bagian **Bagian E** dan **Bagian F**. Anda akan melihat betapa berserakannya tanda kurung serta *return statement* pada `.then()` (*Chaining*) jika dibandingkan dengan penulisan linear mulus tanpa bersarang milik kata kunci `await` (*Async/Await*).
* **Uji Skenario Gagal (Error Handling / Reject):**
  Ubah nilai input **Saldo Dompet** menjadi angka yang kecil (misal: `20000`). Jalankan kembali simulator. Anda akan melihat sistem log dapur berhenti mendadak tepat setelah proses validasi pembayaran gagal. Program secara otomatis melompati fase memotong bahan dan memasak, lalu langsung meloncat ke penanganan error `.catch()` di log.
* **Lihat Keajaiban Concurrency (`Promise.all`):**
  Perhatikan bagian log pengiriman logistik berwarna merah. Meskipun durasi waktu (*milidetik*) antar-kurir sengaja dibuat berbeda-beda di latar belakang, sistem dengan sabar menahan status penyelesaian akhir hingga kurir terakhir yang paling lama sukses menyelesaikan tugasnya.

---

## 📂 Struktur Berkas Proyek

Untuk menjalankan proyek ini, pastikan Anda menaruh 3 file berikut di dalam satu folder yang sama:
* `index.html` - Struktur antarmuka form dashboard dan layar terminal log.
* `style.css` - Desain tema gelap (*dark mode*) modern ala terminal konsol dapur.
* `script.js` - Logika utama gabungan Callback, Promise, Chaining, Concurrency, dan Async/Await.

