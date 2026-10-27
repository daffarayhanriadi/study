import React from 'react';

// ==========================================
// NOTE: TIPS PENGGUNAAN JSX UNTUK PEMULA
// ==========================================
// Secara umum, JSX mirip dengan HTML biasa. 
// Namun, ada beberapa aturan penting yang perlu Anda perhatikan:

class JsxTutorial extends React.Component {
  render() {
    
    // ------------------------------------------
    // NOTE: 1. VARIABEL DI JSX (JavaScript Expression)
    // ------------------------------------------
    // Untuk menampilkan sesuatu yang menghasilkan nilai (variabel, fungsi, operasi matematika), 
    // Kita wajib membungkusnya di dalam kurung kurawal `{ }`.
    const name = 'Dicoding';
    
    return (
      <div>
        <h1>Hello, {name}</h1>
        <p>Today is {new Date().toLocaleDateString()}</p>
        <p>What is 2 + 2? {2 + 2}</p>
      </div>
    );
  }
}

class LoadingComponent extends React.Component {
  render() {
    // ------------------------------------------
    // NOTE: 2. TIDAK MENAMPILKAN APA PUN
    // ------------------------------------------
    // Jika ingin komponen tidak merender apa pun di layar (misal: saat loading), 
    // cukup kembalikan nilai `null`.
    if (isLoading()) {
      return null;
    }
    
    return <div>Data Loaded!</div>;
  }
}

class ConditionalComponent extends React.Component {
  render() {
    // ------------------------------------------
    // NOTE: 3. CONDITIONAL RENDERING (Pengondisian)
    // ------------------------------------------
    // Berbeda dengan Angular (*ngIf) atau Vue (v-if) yang punya sintaksis bawaan, 
    // React murni menggunakan JavaScript standar untuk mengatur tampilan berdasarkan kondisi (state).
    
    const authed = isAuthed();

    // Pendekatan A: Menggunakan If-Else Standar JavaScript
    if (authed) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Login to see your dashboard</h1>;
    }

    // Pendekatan B: Menggunakan Ternary Operator (Lebih singkat untuk satu kondisi)
    return isAuthed()
      ? <h1>Welcome back!</h1>
      : <h1>Login to see your dashboard</h1>;
  }
}

class InlineConditionalComponent extends React.Component {
  render() {
    // Pendekatan C: Pengondisian Langsung di Dalam JSX
    // Kita bisa menyisipkan ternary operator langsung di dalam kurung kurawal `{ }`.
    return (
      <div>
        <Logo />
        {isAuthed() === true
          ? <h1>Welcome back!</h1>
          : <h1>Login to see your dashboard</h1>}
      </div>
    );
  }
}

class FragmentComponent extends React.Component {
  render() {
    // ------------------------------------------
    // NOTE: 4. REACT FRAGMENTS (Satu Root Element)
    // ------------------------------------------
    // JSX wajib mengembalikan HANYA SATU elemen terluar (root element).
    // Menuliskan dua elemen sejajar seperti `<h1></h1> <p></p>` secara langsung akan ERROR.
    /*
    render() {
      return (
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      )
    }
    */
    
    // Solusi Buruk: Membungkus dengan `<div>`. 
    // Masalahnya, ini membuat elemen ekstra yang tidak diperlukan dan merusak semantik HTML.
    /*
    return (
      <div>
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      </div>
    )
    */

    // Solusi Terbaik A: Menggunakan `<React.Fragment>`
    // Memenuhi syarat satu root element tanpa menambah markup/elemen div ekstra di HTML asli.
    return (
      <React.Fragment>
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      </React.Fragment>
    );

    // Solusi Terbaik B: Cara Pintas (Short Syntax) Fragment
    // Cukup gunakan tanda tag kosong `<>` dan `</>`. Fungsinya persis sama seperti React.Fragment.
    return (
      <>
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      </>
    );
  }
}

