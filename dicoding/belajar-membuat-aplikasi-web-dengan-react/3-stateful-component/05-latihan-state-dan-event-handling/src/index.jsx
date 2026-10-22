/* NOTE:
  * Di latihan kali ini, kita akan merealisasikan aplikasi counter dengan menuliskan kode secara langsung menggunakan React. Sebelum mulai, ketahuilah tujuan dari latihan yang akan kita lakukan di bawah ini.
    * 1. Mengetahui cara menyimpan data di dalam state.
    * 2. Mengetahui cara mengubah data di dalam state.
    * 3. Memanfaatkan data di dalam state untuk menampilkan UI.
    * 4. Mengetahui cara event handling pada component.
  * Kita akan membangun aplikasi counter dengan improvisasi agar lebih menantang.
  * Kita sebut aplikasi ini dengan nama “FizzBuzz Counter”.
*/

import React from "react";
import { createRoot } from "react-dom/client";

// CounterDisplay Component
// Data count yang ditampilkan pada component ini akan diberikan melalui props oleh CounterApp.
function CounterDisplay({ count }) {
  if (count === 0) {
    return <p>{count}</p>;
  }

  if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  }

  if (count % 5 === 0) {
    return <p>Fizz</p>;
  }

  if (count % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
}

// IncreaseButton Component
// Props increase merupakan event handler yang nantinya akan dipanggil setiap terjadi event onClick.
function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

// ResetButton Component
function ResetButton({ reset }) {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
}

// CounterApp Component
class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi nilai count di dalam state 
    this.state = {
      count: 0
    };

    // Binding event handler
    // Agar nilai this di dalam fungsi event handler akan selalu bernilai CounterApp
    // terlepas di mana pun fungsi tersebut dipanggil.
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  // Membuat dua method (event handler)
  // Karena CounterApp menampung data, komponen ini yang berhak mengubah datanya sehingga event handler nya disini.
  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler}/>
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<CounterApp />);
