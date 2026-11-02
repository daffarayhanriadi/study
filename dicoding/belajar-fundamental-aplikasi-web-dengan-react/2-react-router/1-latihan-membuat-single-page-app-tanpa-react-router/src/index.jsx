//  NOTE: LATIHAN KALI INI KITA AKAN MENCOBA MEMBUAT SPA SECARA SEDERHANA TANPA MENGGUNAKAN TOOLS SEPERTI REACT ROUTER
/*
  * Kita bisa saja membuat mekanisme routing SPA (Single-Page App) hanya dengan konsep yang sudah kita pelajari.
  * Idenya, buatlah banyak component yang berperan sebagai halaman (page) dan memanfaatkan state sebagai
    * pedoman halaman apa yang harus ditampilkan.
  * Selain itu, kita bisa melakukan conditional rendering untuk menampilkan halaman berdasarkan nilai state.
*/
/* NOTE:
  * Step 1: Di latihan kali ini, kita akan membuat 3 halaman, yakni Home, About, dan FAQ.
    * Maka dari itu, buatlah 3 komponen baru yg berfungsi sbg halaman dengan nama HomePage, AboutPage, dan FAQPage.
  * Step 2: Setelah menyiapkan halamannya, kita kembali fokus ke komponen App.
    * Inisialisasi state bernama page dengan nilai awal '/'.
    * Hal ini menunjukkan bahwa kita ingin HomePage tampak ketika aplikasi pertama kali diakses.
  * Step 3: Berdasarkan ide awal, state page digunakan sebagai pedoman halaman yang akan ditampilkan.
    * Untuk menampilkan halaman berdasarkan nilai page, kita bisa lakukan conditional rendering menggunakan
      * sintaksis if seperti ini (ubah kode pada fungsi render).
    * Short-circuit evaluation merupakan cara pintas untuk menghasilkan expression berdasarkan sebuah kondisi boolean.
    * Penggunaan Short-circuit evaluation memiliki struktur seperti ini.
      * (jika bagian ini true) && (bagian ini tereksekusi)
    * Simpan kode, dan seharusnya halaman Homepage sudah terlihat di browser
  * Step 4: Jika kita ubah nilai state page dengan ‘/about’ atau ‘/faq’,
      * browser akan menampilkan halaman sesuai state page. Contoh, kita ubah nilai state page menjadi ‘/about’.
    * Oke. Sekarang sudah terbayang cara kerja routing sederhana ini, bukan?
    * Intinya, halaman yang tampak tergantung dengan nilai yang berada di state page.
    * Tugas kita selanjutnya adalah menyediakan navigasi agar pengguna dapat mengubah nilai state page sehingga
      * tampilan halamannya berubah.
    * Namun, sebelum itu, jangan lupa kembalikan nilai state page menjadi ‘/’.
  * Step 5: Untuk berpindah halaman, kita akan memanfaatkan element anchor (<a />).
    * Namun, kita akan memodifikasi fungsi event klik element anchor ini menjadi eksekutor fungsi dalam
      * mengubah state page.
    * Lalu, kita jadikan custom anchor ini sebagai React component agar bersifat reusable.
    * Buat komponen baru bernama Link yang menerima props target (string), navigate (function), dan children (any).
    * Karena kita sudah mempelajari PropTypes, ide bagus bila kita menambahkan property validation untuk komponen Link
  * Step 6: Kembali ke komponen App, sekarang kita buat event handler navigate yang berfungsi untuk
      * mengubah nilai state page berdasarkan target.
    * Selain itu, jangan lupa bind event handler-nya agar konteks nilai this tetap terjaga.
    * Ingat konsep unidirectional data flow, ‘kan?
    * Konsep tersebut menjelaskan perubahan data hanya boleh dilakukan oleh komponen yang memiliki data tersebut.
    * Itulah alasan kita membuat fungsi navigate di dalam komponen App.
  * Step 7: Sebelum kita membuat navigasi dengan komponen Link,
      * ada baiknya kita sesuaikan struktur React element yang di-render oleh App.
    * Kita simpan conditional rendering di dalam element <main>, sambil kita sediakan elemen <header> untuk
      * tempat kita menuliskan navigasi.
  * Step 8: Di dalam elemen <header>, buatlah navigasi dengan memanfaatkan komponen Link.
    * Simpan perubahan kode dan kini kita bisa melihat navigasi di browser.
    * Seluruh navigasi pun bekerja sesuai harapan.
  *
*/

import React from "react";
import { createRoot } from "react-dom/client";
import Joi from "joi";

function validateProps(schema, props, componentName) {
  const validationResult = schema.validate(props, { abortEarly: false});

  if (validationResult.error) {
    const { details } = validationResult.error;
    details.forEach((error) => console.warn(`[${componentName}] Validation Error: ${error.message}`));
  }

  return validationResult.value;
}

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is Aboutpage</p>;
}

function FAQPage() {
  return <p>This is FAQPage</p>;
}

const LinkPropsSchema = Joi.object({
  target: Joi.string().required(),
  navigate: Joi.func().required(),
  children: Joi.any(),
});

// custom anchor
function Link(props) {
  const validatedProps = validateProps(LinkPropsSchema, props, "Link");
  const { target, navigate, children } = validatedProps;

  return (
    <a
      href={target}
      onClick={(event) => {
        event.preventDefault() // menghapus behaviour default
        navigate(target) // mengubah state berdasarkan target
      }}
    >
      {children}
    </a>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      page: "/",
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState({ page: target });
  }

  render() {
    // if (this.state.page === "/") {
    //   return <HomePage />;
    // }
    //
    // if (this.state.page === "/about") {
    //   return <AboutPage />;
    // }
    //
    // if (this.state.page === "/faq") {
    //   return <FAQPage />;
    // } 
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link target="/" navigate={this.navigate}>
                  Home
                </Link>
              </li>
              <li>
                <Link target="/about" navigate={this.navigate}>
                  About
                </Link>
              </li>
              <li>
                <Link target="/faq" navigate={this.navigate}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>  
        </header>
        <main>
          {/*NOTE: Jika dirasa kurang menyukai cara penulisan if seperti di atas*/}
          {/* kita juga bisa memanfaatkan Short-circuit evaluation (&&) seperti ini*/}
          {this.state.page === "/" && <HomePage />}
          {this.state.page === "/about" && <AboutPage />}
          {this.state.page === "/faq" && <FAQPage />}
        </main>
      </>
    )
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
