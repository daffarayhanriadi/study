/* NOTE:
  ==========================================================================
  TIPS DEBUGGING REACT DENGAN REACT DEVELOPER TOOLS
  ==========================================================================
  
  Debugging aplikasi React bisa menantang karena adanya nested komponen, 
  props drilling, atau state yang sering berubah. Browser Developer Tools 
  biasa tidak bisa membaca data internal React. 
  
  Solusi: Gunakan ekstensi "React Developer Tools" di Chrome atau Firefox.
  
  Setelah dipasang, akan muncul dua menu baru di DevTools Anda:
  1. Components : Untuk menginspeksi struktur dan data komponen.
  2. Profiler   : Untuk mengukur performa aplikasi.
  
  Fitur Utama di Menu Components:
  - Melihat hierarki komponen React dengan jelas.
  - Memeriksa nilai props dan state secara live.
  - Mengubah nilai props dan state langsung di tempat untuk uji coba.
  
  Alat ini membuat proses debugging menjadi jauh lebih mudah dan cepat.
  Info lengkap: Kunjungi dokumentasi resmi React.
*/

import React from 'react';

// Contoh komponen React
const App = () => {
  return (
    <div>
      <h1>Selamat Belajar React!</h1>
    </div>
  );
};

export default App;

