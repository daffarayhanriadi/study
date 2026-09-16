import { doSomething } from "./utilsPromise.mjs";

function onFulfilled(doSomethingData) {
  // Do your job when "fulfilled" happens...
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your job when "rejected" happens...
  console.error(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
