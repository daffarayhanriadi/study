// auth.test.ts
import { it, describe, expect } from "bun:test";
import { registrasiUser } from "./auth";

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
      
      // 1. Arrange (Siapkan data & kondisi awal)
      const dataInput = {
        username: "budi_developer",
        umur: 25
      };

      // 2. Act (Eksekusi fungsi yang diuji)
      const hasil = registrasiUser(dataInput);

      // 3. Assert (Validasi nilai ekspektasi)
      expect(hasil).toHaveProperty("id");
      expect(hasil.username).toBe("budi_developer");
      expect(hasil.umur).toBe(25);
      expect(hasil.status).toBe("AKTIF");
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

      // 3. Assert
      expect(eksekusiSkenario).toThrow("Username tidak boleh kosong");
    });

    it("harus melempar error jika umur pengguna di bawah 18 tahun", () => {
      // 1. Arrange
      const dataInputSalah = { username: "andi", umur: 17 };

      // 2. Act
      const eksekusiSkenario = () => registrasiUser(dataInputSalah);

      // 3. Assert
      expect(eksekusiSkenario).toThrow("Pengguna harus berusia minimal 18 tahun");
    });
    
  });
});

