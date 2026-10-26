// NOTE: Di latihan kali ini, kita akan belajar bagaimana membuat dan mengelola nilai pada Form menggunakan React.
// Tujuannya agar Anda paham cara kerja controlled component di mana state pada Form dikontrol atau diatur oleh React bukan DOM.

import React from "react";
import { createRoot } from "react-dom/client";

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    /* NOTE: Step 1
      * Agar nilai state dari Form dapat dikontrol oleh React (bukan DOM)
      * Inisialisasi state pada masing-masing input
    */
    this.state = {
      name: "",
      email: "",
      gender: "Man",
    };

    // binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  /* NOTE: Step 3
    * Kita akan mengubah nilai state setiap kali terjadi input pengguna pada <input>.
    * Oleh karena itu, siapkan event handler terlebih dahulu guna menangani perubahan state untuk masing-masing input.
    * Setelah itu binding pada setiap event handler-nya
  */
  onNameChangeEventHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState({
      email: event.target.value
    });
  }

  onGenderChangeEventHandler(event) {
    this.setState({
      gender: event.target.value
    });
  }

  /* NOTE: Step 5
    * Terakhir, kita akan mengaktifkan tombol submit untuk menampilkan alert sesuai data yang
      * telah kita masukkan pada elemen <input>.
    * Silakan buat event handler baru dengan nama onSubmitEventHandler.
    * Setelah itu binding method tersebut seperti sebelumnya di constructor.
  */
  onSubmitEventHandler(event) {
    // menghentikan aksi default dari tombol submit
    event.preventDefault();

    const message = `
      Name: ${this.state.name}
      Email: ${this.state.email}
      Gender: ${this.state.gender}
    `;

    alert(message);
  }


  /* NOTE: Step 2
    * Setelah menyiapkan state, beri nilai state ke property value pada masing-masing <input> dan <select> melalui
      * props value pd fungsi render.
    * Sekarang, nilai (value) dari tiap <input> selalu menggunakan nilai dari component state.
    * Oleh karena itu, tdk ada cara lagi untuk mengubah nilai value pd input selain mengubah nilai component state-nya.
  */
  /* NOTE: Step 4
    * Selanjutnya, gunakan event handler pada masing-masing elemen <input> melalui props onChange.
    * Sehingga, fungsi event handler akan dijalankan dan mengubah nilai state setiap kali ada perubahan data yang
      * dilakukan pengguna pada elemen <input> (termasuk <select>).
    * Kini state dari Form sepenuhnya sudah dikontrol oleh React.
    * Seluruh nilai yang tampak pada elemen input dapat Anda akses melalui this.state.
  */
  /* NOTE: Step 6
    * Kemudian terapkan event handler onSubmitEventHandler pada element <form> melalui props onSubmit.
  */
  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
          <br />
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
          <br />
          <label htmlFor="gender">Gender: </label>
          <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form> 
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);
