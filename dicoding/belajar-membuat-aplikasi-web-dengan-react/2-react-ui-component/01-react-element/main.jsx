// REACT ELEMENT
/* 
  * Seluruh UI aplikasi React dibangun menggunakan React element.
  * Walaupun serupa dengan DOM element, React element dan DOM element browser tidaklah identik.
  * React element hanyalah objek JavaScript polos, ringan, dan sangat mudah untuk dibuat.
  * Cara paling sederhana dalam membuat React element adalah menggunakan method .createElement()
  * React.createElement({type}, {property}, {content});
  * Fungsi createElement menerima 3 parameter, seperti: 
    * type yang merupakan tipe elemen (React menggunakan referensi HTML tags untuk menentukan tipe element)
    * property merupakan properti dari elemen (kita bisa memberikan nilai berupa object {property: value}), dan
    * content merupakan konten dari elemen (kita bisa memberikan nilai array jika children lebih dari 1)
  * Fungsi createElement mengembalikan React element sesuai dengan tipe yang ditetapkan pada parameter
*/
// Contoh membuat element paragraph "Hello, React!" (tanpa property)
React.createElement("p", null, "Hello, React!");
// Jika kita telaah nilai kembaliannya (element), React element hanyalah objek JavaScript biasa.
/*
Output:
{
  type: 'p',
  props: {
    children: 'Hello, React!',
  },
}
*/

// Contoh membuat element paragraph "Hello, React!" (dengan property className dan id)
const element = React.createElement(
  "p",
  {
    id: "myParagraph",
    className: "red-paragraph",
  },
  "Hello, React!"
);
/*
Output:
{
  type: 'p',
  props: {
    id: 'myParagraph',
    className: 'red-paragraph',
    children: 'Hello, React!'
  },
}
*/

/*
  * React menggunakan Element Properties dalam menetapkan properti pada React element.
  * Itulah mengapa dalam menetapkan class, kita menggunakan className dibandingkan dengan class.
  * Penting untuk kita ingat bahwa Element Properties dengan HTML Attribute itu berbeda meskipun 
    * beberapa nilai properti merepresentasikan nilai dari HTML atribut. 
  * React selalu menggunakan Element Properties sebagai referensi.
*/


// NESTED REACT ELEMENT
/*
  * Nilai children pada React element dapat diisi dengan tipe data apa pun, termasuk React element lain.
  * Hal ini sangat wajar dan sering digunakan untuk membangun elemen secara nested.
*/
// Jika kita sudah terbiasa membuat web, tentu kita sering membuat struktur HTML nested seperti 
// mengelompokkan beberapa element di dalam div (seperti kode dibawah).
<>
<div class="container">
  <h1>React</h1>
  <p>The <strong>best tool</strong> for building UI</p>
</div>
</>

/*
  * Ketika menggunakan React, praktik tersebut lazim dan dapat dibuat dengan cara menetapkan nilai parameter child 
    * secara nested.
  * Jika child memiliki lebih dari satu nilai, kita bisa mengelompokkan nilainya di dalam array (seperti kode dibawah).
*/
import React from 'react';

const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'best tool');
const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']);
const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

// abaikan kode di bawah ini
export default divContainer;
/*
Output (dilayar/persis seperti kode HTML div diatas):
React
The best tool for building UI
*/

/*
  * Lihat cara kita menetapkan children untuk elemen paragraph dan divContainer pada kode di atas! 
  * kita bisa lihat bahwa nilai children merupakan array yang berisi beberapa nilai termasuk React element.
*/
