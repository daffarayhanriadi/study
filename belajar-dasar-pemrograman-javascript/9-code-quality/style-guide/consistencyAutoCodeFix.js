// 1. Declare x before using it, and use 'let' instead of 'var'
let x = 10;
console.log(x);

// 2. Define external variables before logic if they aren't globally injected
const sicilian = false; 
const random = !sicilian; // Simplified the redundant double negation

const isItTrue = true;
console.log(isItTrue, random); // Using the variables so they aren't marked 'unused'

function doSomeStuff() {
  console.log("I will now show up because I am before the return statement");
  return true;
}
doSomeStuff();

class A {
  constructor() {
    console.log('A');
  }
}

class B extends A {
  constructor() {
    super(); // Required: Invokes parent class A constructor
    console.log('B');
  }
}

// Instantiating B so ESLint tracks it as used
const instanceB = new B();
instanceB;

