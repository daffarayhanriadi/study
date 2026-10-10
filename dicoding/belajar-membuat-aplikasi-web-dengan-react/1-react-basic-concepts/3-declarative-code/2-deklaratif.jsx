/*
  * Deklaratif merupakan pernyataan yang sifatnya “ringkas dan jelas”. 
  * Dengan begitu kode deklaratif sangat kontras dengan kode imperatif. 
  * Ketika menuliskan kode secara deklaratif, kita tdk perlu menulis seluruh langkah untuk mendapatkan hasil yang sama.
  * Alih-alih menuliskan perintah yang detail, kita cukup memberitahu apa yang ingin dicapai, 
    * sisanya percayakan pada JavaScript.
  * */

// Contoh, kode deklaratif dari penggunaan for yang sebelumnya sudah dibuat secara imperatif.
// Untuk mencapai tujuan tersebut dengan JavaScript, kita bisa menggunakan fungsi map pada array.
// Di sana kita tidak lagi membuat variabel iterator; memberitahu kapan perulangan harus berhenti; dan 
  // tidak perlu menetapkan nilai pada setiap butir array secara manual. 
// Lihat, betapa singkat kode yang ditulis dengan gaya deklaratif.
const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
const uppercaseNames = names.map((name) => name.toUpperCase());
 
console.log(uppercaseNames);


// REACT MERUPAKAN DEKLARATIF
// Membangun UI List
/* 
  * React sendiri menerapkan gaya deklaratif baik dari standar yang mereka tetapkan atau konvensi ketika menggunakannya
  * Sebagai gambaran awal saja, untuk membuat antarmuka berbentuk daftar (list),
    * React mendorong kita untuk menggunakan gaya deklaratif. 
  * Kita bisa memanfaatkan map, filter, atau fungsi array sejenisnya.
*/
function Contacts() {
 const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
 
 return (
   <ol className='contacts'>
     {names.map((name) => <li>{name}</li>)}
   </ol>
 );
}

export default Contacts;


// Menetapkan Event
/* 
  * Contoh lain, ketika menetapkan event pada elemen pun dilakukan secara deklaratif.
  * Mungkin contoh kode tersebut terlihat janggal, tapi nyatanya valid di React. 
  * Untuk menetapkan event listener, kita tidak lagi menuliskan addEventListener 
    * karena itu semua sudah diatasi oleh React.
*/
<button onClick={callContact}>Call Contact</button>
