// Fungsi untuk menghitung total harga belanjaan
function calculateTotal(shoppingCart) {
  let total = 0;

  // Penghitungan tagihan terjadi di sini…
  // Problem Solving 1
  // for (let i = 0; i < shoppingCart.length; i += 1) { // Fix it with change <= to <
  //   total += shoppingCart[i].price;
  // }
  //
  // return total;

  // Problem Solving 2
  return shoppingCart.reduce(
    (accumulator, cartItem) => accumulator + cartItem.price,
    total,
  );
}

// Contoh data belanjaan
const shoppingCart = [
  { name: 'Apple', price: 300 },
  { name: 'Banana', price: 120 },
  { name: 'Orange', price: 130 },
];

// Memanggil fungsi dan mencetak hasilnya
console.log(`Total belanjaan: Rp ${calculateTotal(shoppingCart)}`);
