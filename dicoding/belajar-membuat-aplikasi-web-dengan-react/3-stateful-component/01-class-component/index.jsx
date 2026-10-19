/*
   NOTE: TERDAPAT DUA CARA DALAM MEMBUAT REACT COMPONENT
  * Selain React component dibuat melalui sebuah fungsi, React component juga dapat dibuat menggunakan sintaksis class.
  * Component yang dibuat dgn fungsi sering disebut functional component, sedangkan class disebut class component.

   NOTE: PERBEDAAN CLASS COMPONENT DAN FUNCTIONAL COMPONENT
  * Perbedaan paling mendasar antara functional component dan class component adalah benefit yang didapatkan.
    * Manfaat ketika kita membuat component dgn class adalah:
      * 1. React secara default menawarkan fitur state dan lifecycle.
        * Itulah sebabnya component yg dibuat dgn class bersifat stateful (stateful component).
      * 2. Kita bisa mengakses nilai properti melalui this.props.
        * Karena this pada class component bernilai instance dari component itu sendiri, kita bisa mengakses props.
      * 3. Kita dapat memanfaatkan constructur (karena class component sejatinya adalah class) untuk
        * menginisialisasi data (contohnya state) atau menuliskan kode yang
          * akan dipanggil setiap kali pembuatan component.
        * Ketika kita memanfaatkan constructor, pastikan selalu memanggil base constructor (super) dan
          * berikan nilai props. Jika tidak, nilai this.props pada component akan bernilai undefined.
    * Sedangkan component yang dibangun menggunakan function bersifat stateless karena tdk dpt memanfaatkan state.
      * Functional component hanya memanfaatkan props sebagai data dalam menampilkan UI.
      * Berbeda dengan class component, functional component tidak memiliki this-nya sendiri.
      * Apabila kita melihat isi this functional component, nilainya akan mengacu ke global object, 
        * yaitu window (jika component di-render pada DOM).
      * Jadi kita tidak bisa mengakses props melalui this.props pada functional component.

   NOTE: KELEMAHAN/KEKURANGAN CLASS COMPONENT
  * Walaupun memiliki benefit lebih, tidak disarankan membuat class component secara berlebihan,
    * karena pembuatan class component lebih "mahal" dariapda functional component.
  * Dari cara pembuatannya saja class component membutuhkan lebih byk sintaksis dibandingkan dgn functional component.
  * Jika kita tidak berniat untuk memanfaatkan salah satu benefit yang ditawarkan, sebaiknya tetap gunakan functional
    * component daripada class component.
*/
import React from "react";

// NOTE: React Component with class (class component)
class myComponent extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

// NOTE: React Component with function (functional component)
function MyComponent({ name }) {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
}


// NOTE: SEJARAH PERKEMBANGAN REACT COMPONENT
/*
  * Pada versi awal (initial public release), hanya ada satu cara dalam membuat React component, yakni
    * menggunakan fungsi React.createClass yang tampak seperti kode dibawah ini.
  * Component yang dibuat menggunakan React.createClass memiliki method render.
  * Method tersebut mendeskripsikan React element yang akan dikembalikan dan di-render.
  * Tujuan dari membuat component masih sama yaitu membuat UI yang reusable untuk ditampilkan.
  * Namun, penggunaan React.createClass ini sudah deprecated dan tidak bisa digunakan lagi sejak React 16.
  * Jika kita masih ingin menggunakannya, kita harus install packge "create-react-class" secara terpisah.
*/
const MyComponent = createClass({
  displayName: "MyComponent",
  render() {
    const paragraph = React.createElement("p", null, "Hello, " + this.props.name);
    return React.createElement("div", null, paragraph);
  },
});

/*
  * Selanjutnya, ketika sintaksis class telah hadir di JS (ES6), React mengenalkan alternatif dalam membuat component
    * penggunaan fungsi createClass, yakni dengan mewarisi class React.Component bergaya ES6 seperti kode dibawah ini.
*/
class MyComponent extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

/*
  * Pada versi 0.14.0, React memperkenalkan functional component alias component yang dibuat menggunakan function.
  * Dengan adanya functional component, pembuatan component (yang bersifat stateless) jauh lebih simpel karena
    * pembuatannya sama seperti fungsi JavaScript biasa.
*/
function MyComponent({ name }) {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
}
