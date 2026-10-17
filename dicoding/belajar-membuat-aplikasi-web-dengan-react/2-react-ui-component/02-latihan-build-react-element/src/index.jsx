import React from "react";
import { createRoot } from "react-dom/client"; // Semenjak React 18 sudah mulai menggunakan react-dom/client

// Membuat sebuah React element dengan type h1 dan child (kontennya) bernilai teks “Biodata Perusahaan”.
const heading = React.createElement("h1", null , "Biodata Perusahaan");
// console.log(heading) // React element hanyalah sebatas objek JavaScript biasa bisa dilihat melalui console

const listItem1 = React.createElement("li", null, "Nama: Dicoding Indonesia");
const listItem2 = React.createElement("li", null, "Bidang: Education");
const listITem3 = React.createElement("li", null, "Tagline: Decode Ideas, Discover Potential.");

const unOrderedList = React.createElement("ul", null, [listItem1, listItem2, listITem3]);

const container = React.createElement("div", null, [heading, unOrderedList]);

// Untuk menampilkan React element pada Browser, 
  // kita perlu membuat root yang nantinya digunakan sebagai penampung di mana React element akan di-render.
const root = createRoot(document.getElementById("root")); // Membuat root (id nya berasal dari index.html)
// root.render(heading);
root.render(container); // Render React element
