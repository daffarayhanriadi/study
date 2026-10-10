/*
  * Kita mungkin sudah terbiasa memecah kode yang kompleks menjadi fungsi terpisah agar kode lebih mudah dibaca. 
  * Jika fungsi mengembalikan sebuah data, kita juga mungkin terbiasa menggabungkan beberapa fungsi 
    * untuk menciptakan data yang lebih kompleks.
  * Proses menggabungkan banyak fungsi untuk menciptakan data yang lebih kompleks dinamakan composition (komposisi). 
  * Di React, praktik komposisi seperti ini menjadi fondasi dan membuatnya menjadi sangat luar biasa.
  * Praktik komposisi di React biasa ditemukan ketika pembuatan dan penggunaan sebuah component.
  * Component di React bersifat reusable dan dapat dikomposisikan untuk menciptakan component yang lebih kompleks.
  * Komposisi merupakan language agnostic dan menjadi konsep umum pada dunia pemrograman.
  * Intuisi dalam mempraktikkan komposisi secara alami akan sama dengan bahasa pemrograman apa pun. 
  * Jika kita berpengalaman mempraktikkan komposisi pada bahasa pemrograman Python, 
    * intuisi kita bisa digunakan juga ketika membuat React component.


*/

// Di bawah ini adalah contoh dasar mengenai Function Composition menggunakan JavaScript murni tanpa framework apa pun.
/* 
  * Teknologi: Vanilla JavaScript murni
  * Peran Komposisi:Menggabungkan fungsi data
  * Output Akhir: Objek Data { profilePicture, profileLink }
  * Karakteristik: Fokus pada manipulasi data berbentuk teks dan objek string.
  Cara Kerja:
  * Ada fungsi kecil bernama getProfilePicture dan getProfileLink. 
  * Masing-masing hanya punya satu tugas spesifik (menghasilkan URL gambar dan URL profil).
  * Kedua fungsi tersebut kemudian digabungkan ke dalam fungsi getGithubInfo untuk mengembalikan 
    * satu objek data profil GitHub yang utuh dan lebih kompleks.
*/
function getProfilePicture(userId) {
  return `https://avatars.githubusercontent.com/u/${userId}`;
}

function getProfileLink(username) {
  return `https://github.com/${username}`;
}


function getGithubInfo(username, userId) {
  return {
    profilePicture: getProfilePicture(userId),
    profileLink: getProfileLink(username),
  };
}

console.log(getGithubInfo('dimasmds', 25724809));

/**
* output:
 {
    profilePicture: 'https://avatars.githubusercontent.com/u/25724809',
    profileLink: 'https://github.com/dimasmds'
 }
*/
