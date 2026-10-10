// REACT ELEMENT
/*
  * Seluruh UI yang dibangun menggunakan React merupakan element
  * Sama halnya seperti element pada standar DOM, element di React bisa berupa paragraph, button, image, dan lainnya.
  * Jadi dapat dikatakan bahwa React element mirip seperti HTML element.
  * Bedanya, React element hanya sebatas object JavaScript biasa yg mengandung informasi tentang bagaimana UI harus ditampilkan.
  * */

// Berikut contoh dari object React element paragraph
const paragraphElement = {
  type: "p",
  props: {
    className: "p-blue",
    children: "Content of paragraph",
  },
};

// Bila object di-render pada DOM (ReactDOM), maka akan menghasilkan HTML element seperti ini
<p class="p-blue">Content of paragraph.</p>

/*
  * React merupakan platform agnostic.
  * Ia tidak tahu dan tidak peduli akan ditampilkan di web atau native (seperti Android atau iOS). 
  * Jika ia di-render menggunakan React Native, alih-alih menghasilkan HTML element, ia akan menghasilkan output UI Native.
  * React mampu menjadi platform agnostic karena memanfaatkan Virtual DOM agar element mampu diadaptasikan pada banyak platform dan selalu terjaga sinkronisasinya the actual DOM.
  * */
