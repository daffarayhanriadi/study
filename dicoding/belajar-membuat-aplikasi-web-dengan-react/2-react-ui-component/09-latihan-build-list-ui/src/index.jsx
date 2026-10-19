// NOTE: Tujuan utama kita adalah mengubah penggunaan component Card yang dilakukan secara manual dan repetitif agar penulisannya lebih efektif.
/*
  * Ada sedikit hal yang perlu kita tambahkan ketika me-render React element atau component sebagai list, yaitu
    * properti key pada tiap item element/component yang hendak ditampilkan.
  * Tujuannya adalah sebagai tanda bahwa masing-masing element/component yang ditampilkan adalah unik.
  * Agar nilai key ini unik, kita beri saja judul dari berita (news.title).
      <ul id="news">
        { someNews.map((news) => <li>{news.title}</li>) }
      </ul>
  * Jika ini tidak diterapkan, maka akan terdapat error di console browser.
  * Mengapa React membutuhkan properti key dalam me-render list? Alasannya adalah performa.
  * Dengan memberikan nilai unik melalui properti key, React dapat mengetahui item mana yang
    * berubah ketika terjadi perubahan data dan me-render ulang component yang datanya berubah saja.
  * Hal ini sangat memengaruhi performa bila menampilkan banyak daftar item.
*/

import React from "react";
import { createRoot } from "react-dom/client";

// Button Component
function Button({ link }) {
  return <a href={link}>Find out more</a>;
}

// CardHeader Component
function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

// CardBody Component
function CardBody({ date, title, content, link }) {
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}

// Card Component
function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

// Header Component
function Header({ title, subtitle }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

// News Component
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

  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />

      {/* TODO: Membuat List UI di React secara otomatis dan efektif (tidak manual dan repetitif) */}
      {someNews.map((news) => (
        <Card {...news} key={news.title} />
      ))}
      {/* <Card  */}
      {/*   title={someNews[0].title} */}
      {/*   date={someNews[0].date} */}
      {/*   content={someNews[0].content} */}
      {/*   image={someNews[0].image} */}
      {/*   category={someNews[0].category} */}
      {/*   link={someNews[0].link} */}
      {/* /> */}
      {/* <Card  */}
      {/*   title={someNews[1].title} */}
      {/*   date={someNews[1].date} */}
      {/*   content={someNews[1].content} */}
      {/*   image={someNews[1].image} */}
      {/*   category={someNews[1].category} */}
      {/*   link={someNews[1].link} */}
      {/* /> */}
      {/* <Card  */}
      {/*   title={someNews[2].title} */}
      {/*   date={someNews[2].date} */}
      {/*   content={someNews[2].content} */}
      {/*   image={someNews[2].image} */}
      {/*   category={someNews[2].category} */}
      {/*   link={someNews[2].link} */}
      {/* /> */}
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<News />);

