// NOTE: MEMANFAATKAN QUERY PARAMETER PADA FITUR PENCARIAN
// SPA Movie Catalogue
/* NOTE:
 * Tugas kita di latihan ini adalah:
 * Menambahkan query/search parameter pada fitur pencarian film
 */
/*
 * 1. KONDISI AWAL (STARTER PROJECT):
 * Fitur pencarian sudah berfungsi di halaman "/search".
 * User memasukkan kata kunci (cth: "Doctor") -> Klik "Search" -> Film muncul.
 * Menggunakan komponen "MovieItem" (Reusable Component). Perubahan link detail
 * di satu komponen ini akan otomatis mengubah visualisasi di semua halaman.
 * 2. MASALAH / TANTANGAN:
 * Halaman pencarian saat ini belum terhubung dengan Query Parameter di URL.
 * Dampak negatif: Hasil pencarian tidak bisa dibagikan (shareable link),
 * tidak bisa dibuat shortcut, dan menurunkan rating SEO aplikasi.
 * 3. TARGET IMPLEMENTASI (GOAL):
 * Struktur URL target: /search?title=(kata_kunci_film)
 * Sinkronisasi Dua Arah (Two-way Synchronization):
 * a. UI ke URL: Input Search Bar -> Mengubah Query Parameter di URL saat dicari.
 * b. URL ke UI: Perubahan Query Parameter di URL -> Mengubah nilai di Search Bar.
 */
/* 
  * [Step 1] Tujuan Utama: Membuat query parameter di URL sinkron dengan input pengguna di Search Bar.
    * [Step 2] Membuat komponen wrapper bernama 'SearchPageWrapper' untuk memanggil Hook 'useSearchParams()',
    * karena Hooks tidak bisa digunakan langsung di dalam komponen kelas (Class Component).
  * [Step 3 & 4] Membuat fungsi 'changeSearchParams(keyword)' di dalam wrapper untuk mengubah search parameter
    * di URL setiap kali fungsi 'onSearch' di eksekusi.
  * [Step 5] Mengirimkan fungsi 'changeSearchParams' tersebut ke komponen <SearchPage /> melalui props 'onSearch'.
  * [Step 6] Di komponen SearchPage, panggil 'props.onSearch(keyword)' di dalam method 'onSearch' agar URL berubah
    * saat user mencari film. Lalu, ubah export default ke 'SearchPageWrapper'.
  * [Step 7] Mendapatkan nilai parameter aktif dari URL dengan memanggil fungsi 'searchParams.get("title")'
    * di dalam komponen wrapper.
  * [Step 8] Mengirimkan nilai title tersebut ke komponen <SearchPage /> melalui props bernama 'activeKeyword'.
  * [Step 9] Di komponen SearchPage, teruskan nilai 'props.activeKeyword' ke dalam komponen <SearchBar />
    * sebagai props 'defaultKeyword' agar input Search Bar otomatis terisi sesuai URL.
  * [Step 10 & 11] Menampilkan data film awal saat halaman dimuat. Beri nilai awal pada state 'foundMovies'
    * menggunakan Ternary Operator (?): jika 'props.activeKeyword' ada isinya maka panggil
    * 'searchMovies(props.activeKeyword)', jika kosong cukup beri array kosong [] untuk mencegah error.
 */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
