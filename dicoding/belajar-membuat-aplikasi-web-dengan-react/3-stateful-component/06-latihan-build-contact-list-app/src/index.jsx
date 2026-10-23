// NOTE: LATIHAN STUDI KASUS: MENAMBAHKAN FITUR HAPUS KONTAK
/*
  * Membuat DeleteButton Component
  * Update ContactItem Component untuk menambahkan DeleteButton Component
  * Update ContactList Component
  * Update ContactApp Component menjadi class component, menyimpan data di state dan membuat serta bind handler delete
*/

import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
