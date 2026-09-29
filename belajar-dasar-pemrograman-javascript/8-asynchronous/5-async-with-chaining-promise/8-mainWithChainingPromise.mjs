import { makeCoffee, sendCoffee } from "./coffeeWithChainingPromise.mjs";

const order = "Kopi Expresso";

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value); // <-- tidak akan ke then berikutnya apabila tidak ada return.
    },
//    (error) => {
//      console.error(error.message);
//      throw error;
//    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    },
//    (error) => {
//      console.error(error.message);
//      throw error; 
//    },
  )
  .catch(
    (error) => {
      console.log(error.message);
    }
  );
