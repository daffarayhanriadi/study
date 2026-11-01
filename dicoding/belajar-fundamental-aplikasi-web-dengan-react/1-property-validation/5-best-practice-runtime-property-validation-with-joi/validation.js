// ==========================================
// NOTE: UTALITAS VALIDASI RUNTIME (HANYA DEVELOPMENT)
// Memuat Joi hanya di lingkungan pengembangan
// ==========================================

/* NOTE:
 * Poin Penting: Pemalsuan (Mocking) Joi untuk Mode Production
 * Menggunakan Proxy untuk meniru semua method Joi (seperti .string(), .number(), dll).
 * Mengapa? Agar di mode production kode komponen tidak error saat memanggil Joi,
 * meskipun library Joi yang asli tidak dimuat/di-bundle.
 */
function createMockJoi() {
  // Meniru struktur hasil akhir Joi yang memiliki method .validate() kosong
  const mockSchema = { validate: () => ({}) };
 
  return new Proxy({}, {
    get() {
      // Menghasilkan mockSchema untuk method apa pun yang dipanggil (e.g., J.string())
      return () => mockSchema; 
    }
  });
}
 
/* NOTE:
 * Poin Penting: Pemuatan Kondisional (Conditional Loading)
 * Memperhatikan environment melalui import.meta.env.DEV.
 * - Jika FALSE (Production): Mengembalikan Joi palsu agar bundle tetap ringan.
 * - Jika TRUE (Development): Melakukan dynamic import untuk memuat Joi asli.
 */
async function createJoi() {
 if (!import.meta.env.DEV) return createMockJoi();
 
 // Dynamic import memastikan Joi hanya diunduh saat pengembangan berlangsung
 return (await import('joi')).default;
}
 
/* NOTE:
 * Poin Penting: Top-Level Await untuk Ekspor
 * Mengekspor hasil sebagai variabel 'J'. Menggunakan 'await' agar skema di komponen
 * bisa ditulis secara langsung/synchronous tanpa perlu fungsi async tambahan di sana.
 */
const J = await createJoi();
 
/* NOTE:
 * Poin Penting: Fungsi Eksekusi Validasi Komponen
 * Dipanggil di setiap komponen untuk menyaring data yang masuk (props).
 * - Di Mode Production: Langsung mengembalikan props (0% beban performa).
 * - Di Mode Development: Memvalidasi props, jika ada error akan muncul sebagai console.warn.
 */
function validateProps(schema, props, componentName) {
 // Bypass/Lewati validasi sepenuhnya jika di lingkungan produksi
 if (!import.meta.env.DEV) return props;
 
 // Eksekusi validasi dengan memeriksa seluruh error sekaligus (abortEarly: false)
 const validationResult = schema.validate(props, { abortEarly: false });
 
 // Cetak peringatan ke console jika ditemukan data yang tidak valid
 if (validationResult.error) {
   const { details } = validationResult.error;
   details.forEach((detail) => {
     console.warn(`[${ componentName }] Prop validation error: ${ detail.message }`);
   });
 }
 
 // Mengembalikan nilai yang sudah divalidasi
 return validationResult.value;
}

export { J, validateProps };
