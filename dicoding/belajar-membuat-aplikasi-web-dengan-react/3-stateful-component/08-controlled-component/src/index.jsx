// NOTE: CONTROLLED COMPONENT (FORM)
/*
  * Ketika kita membuat form pada aplikasi web, biasanya state atau data input berada di dalam DOM.
  * Namun di React, manajemen state (data) sangat efektif bila dilakukan di dalam komponen.
  * Sehingga, data dalam mengelola nilai form sebaiknya tidak dilakukan di DOM, melainkan di dalam komponen dengan
    * memanfaatkan state. Hal ini membuat state di dalam form dapat lebih terkontrol.
  * Controlled Component merupakan component yang me-render form, tetapi “single source of truth” atau
    * sumber datanya diambil dari component state, bukan DOM.
  * Alasan mengapa disebut dengan controlled component karena React mengontrol data form.
*/

// Contoh, di sini kita memiliki komponen yang me-render form dengan satu input.
import React from "react";
import { createRoot } from "react-dom/client";

class NameForm1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.email} />
      </form>
    );
  }
}

/* NOTE:
  * Pada element input, kita memberikan properti value dengan nilai yang berasal dari state (email).
  * Itu berarti, nilai input akan selalu sama dengan nilai state email. Karena itu,
    * satu-satunya cara memperbarui nilai input adalah memperbarui nilai component state.
  * Ini adalah contoh dari controlled element, di mana React yang mengontrol nilai dari input form.
  * Coba Anda ketik sesuatu di elemen input text tersebut, nilainya tidak akan berubah.
  * Ini karena nilai value akan selalu mengikuti state.
  * Ini sejalan dengan peringatan yang ditampilkan di dokumentasi resmi React yang menyatakan:
    * Jika kita memasukkan nilai value tanpa onChange,
      * kita tidak akan bisa mengetik apa pun ke dalam kotak input tersebut.
    * Ketika kita mengontrol sebuah elemen input dengan memberikan nilai value tertentu ke dalamnya,
      * kita memaksa input tersebut untuk selalu memiliki/menampilkan nilai yang kita berikan.
    * Jadi, jika kita memasukkan variabel state sebagai value-nya tetapi lupa memperbarui isi state tersebut
      * secara sinkron di dalam event handler onChange, React akan selalu menghapus ketikan baru kita dan
      * mengembalikan isi input tersebut ke nilai yang kita tentukan sebelumnya setiap kali ada tombol yang ditekan.
*/

// Untuk mengubah nilai state email, kita perlu membuat handler seperti ini.
class NameForm2 extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: ''
    };
 
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
  }
 
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  render() {
    return (
      <form>
        <input 
        type="text"
        value={this.state.email}
        onChange={this.onEmailChangeHandler} />
      </form>
    );
  }
}

const root = createRoot(document.getElementById("root"));
// root.render(<NameForm1 />);
root.render(<NameForm2 />);

/* NOTE:
  * Kapan pun input berubah, fungsi handler akan dipanggil karena kita menetapkan fungsi tersebut pd property onChange.
  * Walau dalam membuat controlled component banyak kode yang perlu ditulis, tapi ada kelebihannya juga:
    * Salah satunya, kita dapat menerapkan validasi secara instan.Karena state dikelola oleh component,
      * kita bisa menuliskan logika validasi di component dan validasi akan dijalankan setiap kali nilai state berubah.
  * Benefit tersebut terjadi karena adanya input dari pengguna.
  * Jika ada input, state akan berubah, dan UI akan diperbarui berdasarkan state terbaru.
  * Ini adalah konsep inti, bukan hanya pada controlled component, tetapi React secara umum.
  * Konsep ini sering dikenal dengan istilah one-way data flow atau unidirectional data flow.
*/
