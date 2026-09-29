// auth.js

/**
 * Melakukan registrasi user baru
 * @param {Object} data 
 * @param {string} data.username
 * @param {number} data.umur
 */
export function registrasiUser(data) {
  // Edge Case 1: Username tidak ada atau kosong
  if (!data.username || data.username.trim() === "") {
    throw new Error("Username tidak boleh kosong");
  }

  // Edge Case 2: Umur di bawah batasan minimal
  if (typeof data.umur !== "number" || data.umur < 18) {
    throw new Error("Pengguna harus berusia minimal 18 tahun");
  }

  // Skenario Positif: Berhasil registrasi
  return {
    id: "user-123",
    username: data.username.trim(),
    umur: data.umur,
    status: "AKTIF"
  };
}

