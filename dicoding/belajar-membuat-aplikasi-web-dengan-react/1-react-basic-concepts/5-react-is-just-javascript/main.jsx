/* 
  * Istilah "React hanyalah JavaScript" mungkin agak sedikit bertentangan setelah kita mencontohkan banyak sintaksis 
    * yang hanya berjalan di React. Namun, istilah tersebut ada benarnya juga.
  * Garis besarnya adalah bila Anda sudah nyaman dengan JavaScript, 
    * pasti kita tidak butuh waktu lama untuk memilih React dalam membangun antarmuka pengguna. 
  * Ada dua alasan mengapa demikian. 
    * Pertama, karena tingkat abstraksi yang dibuat React sebenarnya dangkal. 
      * Kita tidak perlu mengingat banyak API baru ketika menggunakan React.
    * Kedua, React mencoba untuk tidak membuat fungsionalitas baru yg sudah bisa dilakukan oleh JavaScript scr standar.
      * Contoh, di materi Declarative Code Anda melihat kita mencontohkan bagaimana membangun antarmuka 
        * dalam bentuk daftar di React. Di beberapa Framework Front-End yang ada, contohnya Vue, mereka 
        * membuat standar atribut v-for untuk melakukan proses pengulangan pada array dalam menampilkan 
        * antarmuka berbentuk daftar.
*/
<>
  <ul id="contacts">
    <li v-for="contact in contacts">{{ contact }}</li>
  </ul>

  // Namun, di React sendiri, kita menggunakan fungsi map standar dari JavaScript.
  <ul>
    {contacts.map((contact) => (
      <li>{contact}</li>
    ))}
  </ul>
</>
/* 
  * Di samping siapa yang "salah" atau "jelek", mereka memang menawarkan simplifikasi yang berbeda. 
    * Tidak usah berdebat akan hal itu.
  * Intinya, aplikasi React dibangun dari hal yang sebenarnya kita sudah familier. Apa itu? JavaScript! 
  * Kita tdk perlu mempelajari template engine khusus ketika menggunakan React atau cara baru dlm melakukan sesuatu.
  * Sebenarnya, cukup perdalam kemampuan JavaScript dan kemampuan kita terhadap React pun akan bertambah. 
    * Seringkali, ketika mempelajari React, kita malah menjadi JavaScript Developer yang lebih baik lagi. 
    * Jarang kita sadari, konvensi yang mulanya terlihat hanya untuk React, 
      * ternyata bisa juga dilakukan oleh JavaScript standar.
*/
