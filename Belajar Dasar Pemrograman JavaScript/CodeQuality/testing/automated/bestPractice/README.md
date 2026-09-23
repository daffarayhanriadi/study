# Penjelasan Mendalam Tiap Strategi
## 1. Struktur Struktur Konteks (describe, it)
Dengan teknik bersarang (nested describe), laporan testing saat dijalankan di terminal akan membentuk sebuah kalimat terstruktur yang sangat mudah dibaca oleh manusia maupun tim bisnis:

* Fungsi registrasiUser() -> ketika data yang dikirimkan valid -> harus berhasil membuat user baru dengan status AKTIF.
* Fungsi registrasiUser() -> ketika data yang dikirimkan tidak valid (Edge Cases) -> harus melempar error jika umur pengguna di bawah 18 tahun.

## 2. Anatomi Pola AAA (Arrange, Act, Assert)
Pola ini memisahkan kode tes menjadi 3 bagian yang bersih agar tidak membingungkan:

* Arrange: Tempat untuk menyiapkan mock data, variabel input, atau kondisi basis data sebelum fungsi dijalankan.
* Act: Proses mengeksekusi satu baris fungsi atau fitur utama target pengujian.
* Assert: Langkah krusial untuk membandingkan output asli (hasil) dengan ekspektasi yang ditentukan menggunakan fungsi bawaan seperti expect().toBe() atau assert.equal().

## 3. Pemetaan Edge Cases (Positif vs Negatif)
Pengujian tidak boleh hanya berfokus pada skenario sukses (Happy Path). Aplikasi yang tangguh adalah aplikasi yang siap menangani kegagalan (Unhappy Path).

* Pengujian dilakukan pada nilai ekstrim seperti string kosong berwujud spasi (" ") dan batas angka kritis (17 tahun di mana syarat minimalnya adalah 18).
