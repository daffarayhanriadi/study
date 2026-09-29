import { makeCoffee, sendCoffee } from "./coffeeWithCallback2.mjs";

console.log("Saya memesan kopi di kafe.");

makeCoffee(() => {
  sendCoffee(() => {
    console.log("Pramusaji memberikan kopi pesanan.");
    console.log("Saya mendapatkan kopi dan menghabiskannya");
  });
});
