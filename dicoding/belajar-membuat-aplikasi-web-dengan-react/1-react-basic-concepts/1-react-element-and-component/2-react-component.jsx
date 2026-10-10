// REACT COMPONENT
/*
  * React component hanyalah sebuah fungsi yang mengembalikan React element.
  * Dengan React component, kita dapat mudah membuat UI yang reusable.
  *
  * */

// React component dapat dianggap sebagai fungsi yang mengembalikan objek seperti ini.
// Fungsi ini bersifat reusable
// Kita bisa membuat objek Car dengan nilai yang berbeda hanya menggunakan fungsi yang sama.
function Car({ manufacture, type, color }) {
  return {
    manufacture,
    type,
    color,
    unitCode: `${+new Date()}-${manufacture}-${type}-${color}`,
  };
}

// Berikut contoh dari React component
// Namun, alih-alih mengembalikan data, React component mengembalikan sebuah UI dalam bentuk React element.
// React memiliki fitur JSX sehingga kita bisa menuliskan sintaks HTML pada kode JavaScript.
function Car({ manufacture, type, color }) {
 return (
   <div className='car-info'>
     <dt>Manufacture:</dt>
     <dd>{manufacture}</dd>
     <dt>Type:</dt>
     <dd>{type}</dd>
     <dt>Color:</dt>
     <dd>{color}</dd>
   </div>
 );
}

