// NOTE: LATIHAN MEMBUAT DAN KOMPOSISI REACT COMPONENT
/*
Setelah memahami materi yang diberikan tentang React component, kini saatnya kita latihan untuk membuat UI yang reusable memanfaatkan React Component. Berikut tujuan dari latihan kali ini.
  * Membuat React component menggunakan fungsi JavaScript.
  * Membuat React component menjadi reusable dengan memanfaatkan props.
  * Komposisi React component guna membangun component yang kompleks.
Agar latihannya terasa segar, kita akan membuat UI yang berbeda dari latihan sebelumnya. Saat ini kita mengambil tema “berita”, alias website yang menampilkan daftar berita sederhana (dapat dilihat pada folder goal/index.html).
*/

/*
Sebelum mulai menuliskan kode, ada baiknya kita telaah dulu UI yang akan dibuat. Buatlah sketsa agar mudah dalam memecah component yang akan dibuat (dapat dilihat pada folder goal/index.html).
Ada 6 component yang akan kita buat dalam menyusun UI tersebut. Berikut penjelasan masing-masing component-nya:
  * News (kuning) : Component yang bertanggung jawab sebagai parent untuk menampung seluruh UI yang ditampilkan.
  * Header (biru tua) : Component yang bertanggung jawab sebagai UI header dari News.
  * Card (hijau) : Component yang bertanggung jawab sebagai parent untuk menampung card (item) dari berita. Component ini nantinya akan digunakan kembali untuk menampilkan item berita dengan data yang berbeda.
  * CardHeader (biru muda) : Component yang bertanggung jawab menampilkan bagian header dari item berita.
  * CardBody (merah) : Component yang bertanggung jawab menampilkan bagian body dari item berita.
  * Button (ungu) : Component yang bertanggung jawab untuk menampilkan tautan ke berita (dumi).
*/

/*
  * Pada materi Unidirectional Data Flow di modul Konsep Dasar React,
    * di sana kita menyebutkan bahwa data hanya disimpan pada induk component. 
  * Jika child component butuh mengakses datanya, data akan dikirim dari parent component melalui properti.
  * Oleh karena itu, kita menyimpan data someNews di dalam component News.
  * Alasannya karena component tersebut bertugas sebagai parent untuk menampung seluruh UI yang
    * akan ditampilkan pada Browser.
  * Setelah menyiapkan placeholder, selanjutnya kita akan selesaikan component-nya satu per satu.
*/

// Agar proses pembuatan masing-masing component-nya terasa mudah, buatlah placeholder dari setiap component-nya terlebih dahulu dengan kode berikut:
import React from "react";
import { createRoot } from "react-dom/client";

// Agar mudah, kita akan mulai dari komponen yang paling sederhana dulu 
// (indikasinya adalah componen tersebut tidak nested alias tidak membutuhkan component lain di dalamnya).
// Component Button menerima satu properti yaitu link yang merupakan alamat dari berita yang ditampilkan.
// Nilai dari properti link nantinya akan diberikan oleh induk component-nya yaitu CardBody
// (ingat konsep unidirectional data flow!).
function Button({ link }) {
  // TODO: selesaikan component-nya
  // Component paling sederhana
  return <a href={link}>Find out more</a>;
}

// Jika dilihat pada sketsa, CardHeader bertugas untuk menampilkan bagian header dari item berita (Card).
// Di sana terdapat informasi kategori dan gambar dari berita.
// Itulah mengapa CardHeader yang kita buat menerima dua properti yaitu image dan category.
function CardHeader({ image, category }) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

// Berkaca pada sketsa yang ada, CardBody bertugas untuk menampilkan informasi tanggal, judul, dan konten berita.
// Itulah mengapa component ini memiliki properti date, title, dan content.
// Hal menarik dari component ini adalah kita komposisikan dengan penggunaan component Button
// (yang sebelumnya sudah dibuat).
// Karena penggunaan component Button membutuhkan nilai link, tentu CardBody perlu menyediakannya
// (yang akan diberikan oleh induk CardBody melalui properti).

function CardBody({ date, title, content, link }) {
  // TODO: selesaikan component-nya
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

// Di component ini, kita komposisikan penggunaan component CardHeader dan CardBody yang sebelumnya sudah dibuat.
// Karena component Card menggunakan kedua komponen tersebut, ia harus menyediakan seluruh data yang
// dibutuhkan melalui properti.
function Card({ image, category, date, title, content, link }) {
  // TODO: selesaikan component-nya
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

// Di sketsa, component header ini menampilkan 2 informasi, yakni judul dan subjudul. Jadi, kita sediakan 2 properti bernama title dan subtitle.
// eksistensi component header ini bersifat preferensi, jika tidak ingin terpisah maka bisa langsung menuliskan element pada component News.
// Tapi, jika ingin header ini bersifat reusable, tidak ada salahnya menjadikannya component terpisah.
function Header({ title, subtitle }) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

// Terakhir, kita selesaikan pembuatan component News. Di component ini, sebenarnya kita hanya tinggal menggunakan komponen yang sudah dibuat sebelumnya dan memberikan data melalui properti agar dapat tampil pada Browser.
function News() {
  // Data News
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "Marc 20 2022",
      content: "CNN purchased Casey Neistat's Beme app for $25 million.",
      image: "https://picsum.photos/600/400",
      category: "News",
      link: "#"
    },
    {
      title: "React and the WP-API",
      date: "Marc 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://picsum.photos/600/400",
      category: "News",
      link: "#"
    },
    {
      title: "Nomad Lifestyle",
      date: "Marc 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle",
      image: "https://picsum.photos/600/400",
      category: "Travel",
      link: "#"
    }
  ];

  // TODO: selesaikan component-nya
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      <Card 
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      />
      <Card 
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card 
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      />
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<News />);

/*
  * Kode dalam menetapkan properti pada component Card sebetulnya bisa kita tuliskan dengan cara yang lebih baik lagi.
  * Karena nama dari properti objek news (item dari someNews) identik dengan nama properti yang dibutuhkan oleh
    * component Card, pemberian nilai propertinya dapat dipersingkat menggunakan spread operator seperti ini.
      <Card {...someNews[0]} />
      <Card {...someNews[1]} />
      <Card {...someNews[2]} />
  * Sehingga, kita tidak perlu repot menuliskan dan memetakkan nilai properti secara manual.
  * Namun, teknik ini hanya dapat dilakukan bila
    * nama properti dari objek yang di-spread sama dengan nama properti pada component.
*/
