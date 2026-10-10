// Kode di bawah ini bertindak sebagai pintu masuk utama aplikasi (Root Component) yang mengonsumsi atau menampilkan komponen yang sudah dikomposisikan tadi (file 2-GithubInfo.js)
/* 
  * Teknologi: React JS
  * Peran Komposisi: Menggunakan komponen hasil gabungan
  * Output Akhir: Halaman Aplikasi Utuh
  * Karakteristik: Berperan sebagai pengatur jalannya halaman utama tempat komponen akhir disajikan ke layar.
  Cara Kerja:
  * App.js memanggil komponen <GithubInfo /> dan mendistribusikan data spesifik (dalam React disebut props) 
    * seperti username="dimasmds" dan userId={25724809} agar data tersebut bisa diolah oleh 
    * komponen-komponen di dalamnya.
*/
import GithubInfo from "./GithubInfo";

export default function App() {
  return <GithubInfo username={"dimasmds"} userId={25724809} />;
}
