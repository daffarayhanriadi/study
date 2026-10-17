/* NOTE:
  * Setelah melihat kode yang ada di materi sebelumnya, 
    * membuat React element lebih sulit dibandingkan membuat HTML biasa
  * Hal tersebut memang tidak salah, membuat React element terasa sulit bila menggunakan fungsi createElement,
    * terlebih bila elemen yang kita buat nested seperti contoh sebelumnya
  * React sendiri menganut konsep deklaratif, tetapi penggunaan createElement terasa sangat imperatif, 
    * hampir tak ada bedanya dengan fungsi standar document.createElement.
  * Solusi React adalah selain menggunakan fungsi createElement, kita juga bisa membuat element dengan sintaksis JSX.
  * Dengan JSX, pembuatan elemen jauh lebih mudah dan bersifat deklaratif.
*/

// NOTE: SINTAKSIS JSX
const element = <p>Hello, React!</p>;

/*
  * Sintaksis “unik” di atas bukanlah string ataupun HTML.
  * Sintaksis tersebut dinamakan JSX karena extensions (penambahan) dari
    * kemampuan standar JavaScript yang diberikan oleh React.
  * Intinya, ketika menggunakan React, kita bisa menuliskan sintaksis unik tersebut di JavaScript.
*/


// NOTE: PERBEDAAN KODE JSX DAN .createElement()
/*
  * Sintaksis JSX mengembalikan React element sesuai dengan yang kita deklarasikan.
  * Sintaksis JSX mirip seperti HTML karena memanfaatkan tag (khas gaya markup) dalam mendeklarasikan elemen.
  * Dengan menggunakan JSX, kita bisa terbebas dari menggunakan fungsi .createElement() dalam membuat element.
  * Properti elemen pada JSX dituliskan mirip atribut pada HTML. 
    * Namun, referensinya tetap mengacu pada standar Element Properties, bukan HTML Attributes.
*/
// JSX
const element1 = <p className="red-paragraph">Hello, React!</p>;

// createElement
const element2 = React.createElement(
  "p", 
  {
    className: "red-paragraph"
  }, 
  "Hello, React!"
);


// NOTE: EXPRESSION DI JSX
/*
  * JSX mirip HTML bukan berarti keduanya adalah sama.
  * Perbedaannya adalah di JSX, kita bisa menuliskan JavaScript expression ketika membuat elemen.
  * Karena JSX memang dituliskan pada lingkup JavaScript.
  * Caranya, tuliskan expression di antara tanda kurung kurawal { }.
*/
// Penulisan expression di JSX
const name = "Dicoding";
const element3 = <p>Hello, {name}</p>;
/*
Output:
{
  type: 'p',
  props: {
    children: ['Hello, ', 'Dicoding']
  }
}
*/


// NOTE: NESTED ELEMENT DI JSX DAN .createElement()
/*
  * Terakhir, JSX menyapu kerumitan pembuatan nested element yang dilakukan dengan fungsi createElement. 
  * Pasalnya, dengan gaya deklaratif yang ia miliki, 
    * kita bisa lebih mudah melakukan nested element layaknya menuliskan sintaksis HTML biasa.
  * Penggunaan tanda kurung () yang menghimpit sintaksis JSX tidak berarti apa-apa. 
    * Hal itu hanyalah convention ketika Anda menuliskan sintaksis JSX pada baris baru. 
    * Tujuannya, agar sintaksis JSX lebih rapi dan mudah dibaca.
*/

// JSX
const divContainer = (
  <div className="container">
    <h1>React</h1>
    <p>The <strong>best tool</strong> for building UI</p>
  </div>
);

// createElement
const heading = React.createElement("h1", null, "React");
const strong = React.createElement("strong", null, "best tool");
const paragraph = React.createElement("p", null, ["The", strong, "for building UI"]);
const container = React.createElement("div", { className: container }, [heading, paragraph]);


// NOTE: JSX HANYA MENGEMBALIKAN SATU ELEMENT
/*
  * Ketika menuliskan JSX, pastikan ia hanya mengembalikan satu elemen. 
  * Meskipun React element bisa nested, tapi pastikan hanya ada satu root (seperti contoh dibawah <div>) element yang 
    * membungkus seluruh element di dalamnya (seperti contoh dibawah <h1> dan <p>),
    * walaupun didalamnya kita menuliskan lebih dari satu element.
  * Jika terdapat dua root element (seperti contoh dibawah <h1> dan <p>), sintaksis seperti itu tidak benar, dan
    * dianggap sebagai syntax error.
  * Karena kita sudah mengetahui penggunaan fungsi createElement() maka aturan ini tentu masuk akal.
    * Karena fungsi createElement() pun hanya menerima satu tag (dalam bentuk string) pada parameter pertama.
*/
// Contoh cara/kode yang benar
const divContainer1 = (
  <div className="container">
    <h1>React</h1>
    <p>The <strong>best tool</strong> for building UI</p>
  </div>
);

// Contoh cara/kode yang salah (akan dianggap sebagai syntax error)
const divContainer2 = (
  <h1>React</h1>
  <p>The <strong>best tool</strong> for building UI</p>
);


// NOTE: EKSTENSI .jsx PADA BERKAS JAVASCRIPT
/*
  * Karena kita menuliskan kode JSX pada berkas JavaScript, 
    * kita sangat disarankan menggunakan ekstensi .jsx alih-alih .js
  * Tujuannya agar kita dapat lebih mudah dalam membedakan 
    * berkas yang ditulis dengan kode JS standar dan 
    * berkas yang memanfaatkan sintaks JSX
  * Meskipun sintaks JSX dapat ditulis dalam berkas berekstensi .js, 
    * tetapi penggunaan ekstensi .jsx memiliki beberapa keuntungan, antara lain:
      * Beberapa IDE atau teks editor akan membantu memvalidasi sintaks JSX
      * Alat transpilasi kode seperti Babel akan bekerja lebih optimal dalam 
        * menerjemahkan sintaks JSX ketika kita menggunakan ekstensi .jsx dalam penamaan berkas JavaScript.
*/
