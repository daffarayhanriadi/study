// NOTE: Menulis Schema dan Memanggil Validasi di Komponen
import { J, validateProps } from '../utils/validation';
 
/* NOTE:
 * Poin Penting: Deklarasi Skema yang Bersih
 * Skema ditulis menggunakan objek 'J' seperti biasa di luar komponen.
 * Keuntungan: Kita TIDAK perlu menulis kondisi 'if (development)' berulang kali 
 * di setiap skema karena kondisinya sudah ditangani secara terpusat oleh file utils.
 */
const userSchema = J.object({
 name: J.string().required(),
 age: J.number().min(0).required(),
 email: J.string().email()
});
 
function UserCard(props) {
 /* NOTE:
  * Poin Penting: Kontrak Data & Efisiensi Runtime
  * Fungsi validateProps bekerja secara adaptif:
  * - Saat DEVELOPMENT: Membantu proses debugging & menemukan salah ketik/data lebih dini.
  * - Saat PRODUCTION: Langsung meloloskan objek props tanpa proses validasi sama sekali.
  */
 const { name, age, email } = validateProps(userSchema, props, 'UserCard');
 
 return (
   <div>
     <h3>{name}</h3>
     <p>Age: {age}</p>
     {email && <p>Email: {email}</p>}
   </div>
 );
}
 
export default UserCard;


