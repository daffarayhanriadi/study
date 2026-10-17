// Tetap lakukan import module React walaupun menggunakan JSX untuk menghindari error ketika Babel 
// mengubah kode JSX menjadi kode JavaScript (biasanya error terjadi pada React 16 kebawah).
import React from "react";
import { createRoot } from "react-dom/client";
import DicodingLogo from "./dicoding-logo.png";


// Membuat React element menggunakan JSX
// JSX bersifat deklaratif--sama seperti HTML--sehingga sintaksisnya jauh lebih mudah dibaca.
const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential</li>
      {/* Cara Pertama menampilkan gambar: menggunakan URL pada property src, letak file nya ada di folder public */}
      <img src="dicoding-logo.png" alt="Dicoding logo"/>
      
      {/* Cara Kedua menampilkan gambar: menggunakan modularisasi pd property src, letak file nya ada di folder src */}
      {/* Ingat! JavaScript expression pada JSX selalu dibungkus di dalam tanda kurung kurawal { } */}
      <img src={DicodingLogo} alt="Dicoding logo"/>
    </ul>
  </div>
);

// Membuat root
const root = createRoot(document.getElementById("root"));

// Render element
root.render(element);
