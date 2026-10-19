// NOTE: LATIHAN STUDI KASUS: MENAMPILKAN DAFTAR KONTAK
/*
  * Berikut adalah pemecahan dari component-nya (dapat dilihat pada folder goal/index.html).
    * 1. ContactApp (merah) : Sebagai parent yang menampung seluruh UI yang ditampilkan, termasuk lokasi di mana data contacts berada.
    * 2. ContactList (kuning) : Sebagai container dalam membuat list contact.
    * 3. ContactItem (hijau) : Sebagai container dalam menampilkan item contact.
    * 4. ContactItemImage (biru) : Menampilkan gambar contact.
    * 5. ContactItemBody (ungu) : Menampilkan data nama dan tag sosial media dari kontak.
  * Sebelum membuat component satu per satu, siapkan dulu data yang hendak ditampilkan pada berkas JavaScript terpisah.
  * Proyek kali ini kita akan menerapkan teknik modularisasi. Tujuannya tidak lain untuk memudahkan kita dalam mengelola kode JavaScript
  * Tak hanya data, teknik modularisasi juga akan diterapkan dalam pembuatan component. Jadi, setiap satu component kita tulis dalam satu berkas JavaScript terpisah. 
*/

// NOTE: LATIHAN STUDI KASUS: MEMBERIKAN STYLING
/*
  * Ada dua pendekatan berbeda dalam melampirkan berkas styling di proyek React (sama seperti melampirkan gambar).
    * 1. Kita bisa memperlakukannya seperti berkas statis dgn menyimpannya di dalam folder public.
      * Kemudian tambahkan link di dalam elemen head untuk menghubungkan berkas CSS dengan HTML (index.html)
      * Kita juga bisa menambahkan external CSS lain seperti Google Font, dan lainnya di HTML (index.html).
    * 2. Kita bisa memperlakukannya sebagai module yang diimpor di dalam kode JavaScript (teknik modularisasi).
      * Agar dapat diimpor oleh berkas JS, maka kita harus meletakkan file .css di dalam folder src.
      * Kemudian pada berkas ini (index.jsx) kita import berkas .css seperti kode dibawah.
  * Di latihan kali ini, kita akan mencoba kedua pendekatan tersebut sehingga kita bisa mengetahui perbedaannya.
  * Latihan ini fokus terhadap tujuan “Bagaimana melampirkan/menggunakan berkas CSS pada proyek React”,
    * bukan pada sintaksis CSS-nya (karena itu sudah dipelajari di kelas lain).
*/

/* NOTE: MANAGEMENT FILE/FOLDER
  * Karena sekarang di dalam folder src sudah mulai banyak berkas,
    * kita bisa mulai mengelompokkan berkas-berkas berdasarkan jenisnya.
  * Misal, jika seluruh berkas JavaScript yang merupakan component, simpanlah di folder baru bernama components.
  * Kita juga bisa mengelompokkan berkas CSS (walaupun saat ini hanya satu) pada folder terpisah, misalnya styles.
  * Bila sudah dikelompokkan pada folder terpisah, jangan lupa juga untuk memperbaiki beberapa path (alamat berkas) yg
    * berubah pada saat melakukan impor di berkas index.jsx dan ContactApp.js.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

// styling
import "./styles/style.css";

// placeholder
// const element = <h1>Hello, World!</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
