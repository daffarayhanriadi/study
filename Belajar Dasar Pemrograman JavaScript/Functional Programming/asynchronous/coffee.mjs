export function makeCoffee () {
  // 1000 milidetik = 1 detik
  const estimationTime = 5000;

  const inSecond = Math.ceil(estimationTime / 1000);
  console.log(`Mohon menunggu. Pramusaji sedang membuat kopi dalam ${inSecond} detik`);

  setTimeout(() => {
    // Do some tasks to make cofee...
    console.log("Pramusaji selesai membuat kopi."); 
  }, estimationTime);
}
