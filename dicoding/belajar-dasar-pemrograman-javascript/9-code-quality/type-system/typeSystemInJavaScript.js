// JS is Dynamic Type:
let myNum = 0;
myNum = 1;

console.log(myNum); // Output: 1

myNum = true;

console.log(myNum); // Output: true

// The Problem
function add(numA, numB) {
  return numA + numB;
}

console.log(add(1, 1)); // Output: 2
console.log(add(1, 2)); // Output: 3
console.log(add("5", 4)); // Output: 54 <- absolutely wrong
