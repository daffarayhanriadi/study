// NOTE: LATIHAN STUDI KASUS: MENAMBAHKAN FITUR TAMBAH KONTAK
/*
  * Membuat ContactInput Component beserta UI nya menggunakan JSX
    * Karena kita membangun controlled component,
      * jadi siapkan juga state dan event handler untuk masing-masing input (termasuk tombol Tambah).
      * Pada onSubmitEventHandler, di sana kita memanggil fungsi addContact dengan membawa nilai state karena
        * fungsi untuk menambahkan (mengubah) data harus berada pada component yang memiliki data tersebut sehingga
        * fungsi addContact di component ini dikirimkan melalui props.
    * Terakhir, berikan nilai state pada props value dan event handler pada props onChange dan onSubmit untuk
      * masing-masing element <input> dan <form> pada Component ContactInput, komponen ini pun sudah selesai dibuat.
  * Selanjutnya kita pindah fokus ke component ContactApp menggunakan component ContactInput.
    * Kita siapkan fungsi handler untuk menambah data kontaknya bernama onAddContactHandler.
    * Fungsi onAddContactHandler membawa objek state dari ContactInput di parameter, di mana
      * di dalam objek tersebut hanya ada dua data, yaitu name dan tag.
    * Oleh karena itu, nilai dari properti id dan imageUrl kita berikan secara manual.
    * Properti id diberi dengan nilai timestamp [+new Date()] agar selalu unik, 
    * sedangkan nilai dari properti imageUrl kita berikan dengan gambar default.jpg yang tersedia pada
      * folder public/images.
    * Kita juga menggunakan spread operator untuk mempertahankan item yang sebelumnya berada di dalam array contacts.
  * Terakhir, gunakan component ContactInput pada fungsi render() untuk menampilkan form input yang sudah kita buat.
  * Jangan lupa untuk mengisi props addContact dengan nilai this.onAddContactHandler.
*/

import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
