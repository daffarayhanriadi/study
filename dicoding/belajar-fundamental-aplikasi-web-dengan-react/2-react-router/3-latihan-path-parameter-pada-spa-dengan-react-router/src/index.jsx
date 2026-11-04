// NOTE: MEMANFAATKAN PATH PARAMETER PADA SPA DENGAN REACT ROUTER
// SPA Movie Catalogue
/* NOTE:
  * Tugas kita di latihan ini adalah:
    * Menampilkan halaman Detail Movie yang dapat diakses melalui daftar film atau URL /movies/:id.
*/
/*
  * Step 1: Kita buat judul film yang tampak menjadi pranala (hyperlink) untuk mengarah ke halaman detail film.
    * Caranya, buka berkas components -> MovieItem.js, kemudian panggil komponen <Link /> dari react-router-dom di
      * dalam elemen <h3> yang menampilkan judul.
    * Kita menetapkan props to pada komponen Link dengan nilai string `/movies/${id}`.
    * Ini menunjukkan bahwa pranala akan mengarah ke alamat /movies/:id dengan nilai id yang
      * diambil dari props id di MovieItem.
    * Simpan perubahan kode pada MovieItem.js, kemudian kunjungi kembali halaman Now Playing atau Upcoming.
    * Kini daftar film memiliki pranala yang mengarah ke URL /movie/:id.
    * Walaupun sudah mengarah ke alamat yang tepat, website masih belum menampilkan informasi apa pun.
    * Wajar, kita belum menetapkan route untuk URL /movie/:id.
  * Step 2: Selanjutnya kita akan menerapkan path parameter.
    * Buka berkas App.js, kemudian tambahkan route untuk detail film (DetailPage).
    * Simpan perubahan kode App.js dan coba akses kembali salah satu halaman detail film (DetailPage).
    * Kini hanya tampak tulisan “Movie is not found!”.
    * 1. MASALAH:
      * Kita butuh parameter `id` dari URL (menggunakan `useParams()`) untuk mengambil data movie lewat `getMovie(id)
      * Tapi, `useParams()` adalah React Hooks. Hooks SECARA ATURAN HANYA BISA digunakan di Functional Component.
      * Jika langsung dipanggil di dalam Class Component (misal di constructor), React akan memunculkan error.
    * 2. SOLUSI YANG DIPILIH (Higher-Order Component / Wrapper):
      * Kita tidak mengubah DetailPage menjadi Functional Component (karena belum belajar Hooks state).
      * Kita juga tidak menurunkan versi React Router.
      * Solusi terbaik: Membuat sebuah Functional Component bertindak sebagai "pembungkus" (wrapper).
      * Di dalam wrapper tersebut, kita panggil `useParams()`, lalu mengoper nilai `id` tersebut ke
        * <DetailPage /> melalui PROPS.
  * Step 3: Pada berkas DetailPage.jsx buat functional component bernama DetailPageWrapper,
    * kemudian kembalikan langsung dengan komponen <DetailPage />
  * Step 4: Masih di dalam komponen DetailPageWrapper,
    * dapatkan nilai id dari path parameter menggunakan fungsi useParams() yang disediakan react-router-dom.
  * Step 5: Kemudian kirim nilai tersebut sebagai props id untuk komponen <DetailPage />
    * Ketahuilah bahwa seluruh nilai yang didapatkan dari useParams() bertipe string,
      * sedangkan untuk mendapatkan data film pada fungsi getMovie() membutuhkan parameter id bertipe number.
    * Itulah alasan mengapa dalam memberikan nilai props id kita ubah terlebih dahulu menjadi number.
  * Step 6: Komponen <DetailPage /> sudah menerima nilai id melalui props,
    * sekarang kita gunakan nilai tersebut ketika memanggil fungsi getMovie().
  * Step 7: Terakhir, ubahlah nilai export default dari DetailPage menjadi DetailPageWrapper agar
    * komponen App menggunakan komponen wrapper, bukan komponen asli secara langsung.
    * Simpan seluruh perubahan kode di berkas DetailPage.js dan coba kembali akses salah satu halaman detail film.
    * Seharusnya halaman detail sudah tampak normal.
*/

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

