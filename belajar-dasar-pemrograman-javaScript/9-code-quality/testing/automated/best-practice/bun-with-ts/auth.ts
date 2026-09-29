// auth.ts
export interface UserData {
  username: string;
  umur: number;
}

export function registrasiUser(data: UserData) {
  // Edge Case 1: Username kosong
  if (!data.username || data.username.trim() === "") {
    throw new Error("Username tidak boleh kosong");
  }

  // Edge Case 2: Umur di bawah batasan minimal
  if (data.umur < 18) {
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

