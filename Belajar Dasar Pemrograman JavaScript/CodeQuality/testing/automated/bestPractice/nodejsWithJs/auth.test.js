// auth.test.js
import { describe, it } from "node:test";
import assert from "node:assert/strict"; // Modul assert bawaan Node.js
import { registrasiUser } from "./auth.js";

// ==========================================
// STRATEGI 1: Menentukan Konteks & Skenario (Describe & It)
// ==========================================
describe("Fungsi registrasiUser()", () => {
  
  // ==========================================
  // STRATEGI 3: Skenario Positif (Happy Path)
  // ==========================================
  describe("ketika data yang dikirimkan valid", () => {
    it("harus berhasil membuat user baru dengan status AKTIF", () => {
      
      // ----------------------------------------
      // STRATEGI 2: Pola AAA (Arrange, Act, Assert)
      // ----------------------------------------
      
      // 1. Arrange (Siapkan data awal)
      const dataInput = {
        username: "budi_developer",
        umur: 25
      };

      // 2. Act (Eksekusi fungsi)
      const hasil = registrasiUser(dataInput);

      // 3. Assert (Validasi di Node.js menggunakan assert.deepEqual / assert.equal)
      assert.ok(hasil.id); // Memastikan field 'id' ada dan bernilai truthy
      assert.equal(hasil.username, "budi_developer");
      assert.equal(hasil.umur, 25);
      assert.equal(hasil.status, "AKTIF");
    });
  });

  // ==========================================
  // STRATEGI 3: Skenario Negatif & Edge Cases (Unhappy Path)
  // ==========================================
  describe("ketika data yang dikirimkan tidak valid (Edge Cases)", () => {
    
    it("harus melempar error jika username hanya berisi spasi kosong", () => {
      // 1. Arrange
      const dataInputSalah = { username: "   ", umur: 20 };

      // 2. Act
      const eksekusiSkenario = () => registrasiUser(dataInputSalah);

      // 3. Assert (Gunakan assert.throws untuk menangkap error)
      assert.throws(eksekusiSkenario, {
        name: "Error",
        message: "Username tidak boleh kosong"
      });
    });

    it("harus melempar error jika umur pengguna di bawah 18 tahun", () => {
      // 1. Arrange
      const dataInputSalah = { username: "andi", umur: 17 };

      // 2. Act
      const eksekusiSkenario = () => registrasiUser(dataInputSalah);

      // 3. Assert
      assert.throws(eksekusiSkenario, {
        name: "Error",
        message: "Pengguna harus berusia minimal 18 tahun"
      });
    });
    
  });
});

