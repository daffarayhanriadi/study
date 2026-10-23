// React Hooks adalah fungsi khusus dalam React yang memungkinkan komponen berbasis fungsi (function components) menggunakan fitur seperti state, context, refs, dan lifecycle methods tanpa perlu menulis komponen berbasis kelas (class components).
// Materi ini akan dipelajari di kelas yang berbeda
/*
  ==========================================================================
  MENGENAL REACT HOOKS DAN STRATEGI BELAJAR UNTUK PEMULA
  ==========================================================================
  
  "Mengapa materi awal belum menggunakan Hooks?" 
  Berikut adalah penjelasan penting mengenai posisi Hooks dalam perkembangan React:

  1. APA ITU REACT HOOKS?
     - Fitur yang diperkenalkan sejak React versi 16.8.
     - Mengubah cara mengelola *state*. Dahulu *state* hanya bisa digunakan 
       di dalam **Class Component**, tetapi sekarang bisa digunakan di dalam 
       **Functional Component**.

  2. HOOKS TIDAK MENGGANTIKAN KONSEP DASAR REACT
     - Analologinya seperti *Arrow Function* di JavaScript. Kehadirannya tidak 
       membuat *Regular Function* menjadi usang, melainkan hanya menjadi alternatif.
     - Dokumentasi resmi menyatakan: "Hooks tidak mengubah pengetahuan dari 
       konsep dasar React." Hooks hanyalah cara baru yang lebih cepat untuk 
       menggunakan fitur-fitur React (seperti *state*).

  3. KODE LAMA TIDAK PERLU DITULIS ULANG
     - Tim React tidak menyarankan Anda membongkar kode lama (*Class Component*) 
       hanya untuk diubah menjadi Hooks. 
     - Namun, Anda sangat disarankan menggunakan Hooks untuk pembuatan kode baru.

  4. KENAPA HARUS MEMPELAJARI KEDUANYA?
     - Memahami konsep dasar *state* jauh lebih penting sebelum memakai Hooks.
     - Di dunia industri, masih banyak proyek berskala besar yang menggunakan 
       kode lama (*Class Component*). Menguasai keduanya akan mencegah Anda 
       kebingungan saat bekerja di masa depan.

  KESIMPULAN:
  Fokuslah menguasai konsep dasar React terlebih dahulu di awal pembelajaran. 
  Setelah fondasi Anda kuat, mempelajari React Hooks di tahap berikutnya akan 
  terasa jauh lebih mudah.
*/

import React from 'react';

// Contoh perbandingan visual di React:
// 1. Gaya Lama (Class Component) - Mengelola state sebelum ada Hooks
class ContohClass extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>Ditekan {this.state.count} kali</button>
    )
  }
}

// 2. Gaya Baru (Functional Component) - Mengelola state menggunakan Hooks (useState)
// *Catatan: Ini akan dipelajari lebih mendalam pada materi terpisah.
const ContohHooks = () => {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Ditekan {count} kali</button>;
};

export default ContohHooks;

