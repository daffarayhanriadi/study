import { doSomething } from "./utilsPromiseWithAsyncAwait.mjs";

// Promise Without Async-Await
// console.log("Start");

// doSomething()
//   .then(
//     (value) => {
//       console.log(value);
//     });

// console.log("End");
/*
Output:
Start
End
You did it!
*/


// Promise With Async-Await <-- fitur ini hanya bisa digunakan jika menggunakan function
async function promiseWithAsyncAwait() {
  try {
    console.log("Start");

    const result = await doSomething();
    console.log(result);

    console.log("End");
  } catch (error) {
    console.log(error.message);
  }
}

promiseWithAsyncAwait();

/*
Output:
Start
You did it!
End
*/
