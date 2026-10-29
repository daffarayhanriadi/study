// NOTE: 1. LATIHAN STUDI KASUS: MENAMPILKAN DAFTAR KONTAK
// NOTE: 2. LATIHAN STUDI KASUS: MEMBERIKAN STYLING
// NOTE: 3. MANAGEMENT FILE/FOLDER
// NOTE: 4. LATIHAN STUDI KASUS: MENAMBAHKAN FITUR HAPUS KONTAK
// NOTE: 5. LATIHAN STUDI KASUS: MENAMBAHKAN FITUR TAMBAH KONTAK
// NOTE: 6. LATIHAN STUDI KASUS: MENERAPKAN PropTypes PADA APLIKASI KONTAK
// Latihan ini menggunakan React v18 karena memanfaatkan PropTypes API.

import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

// styling
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<ContactApp />);
