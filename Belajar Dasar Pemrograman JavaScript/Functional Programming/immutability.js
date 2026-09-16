// Contoh di Array
function max(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b).pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers)

console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

// Contoh di Object
function registerEmail(person, email) {
  return Object.assign(person, { email });
}

const person = {
  name: "John",
  username: "johndoe",
};

const personWithEmail = registerEmail(person, "john@gmail.com");

console.log(person);          // Output: { name: 'John', username: 'johndoe', email: 'john@gmail.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@gmail.com' }


// Solusinya
function maxSolution(arrayOfNumbers) {
  // Menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfNumbers].sort((a, b) => a - b).pop();
}

function registerEmailSolution(person, email) {
  // Menggunakan spread operator untuk menduplikasi nilai person
  return {...person, email};
}

const numbersSolution = [10, 23, 24, 7, 42, 18];
const largestSolution = maxSolution(numbersSolution)

console.log(largestSolution); // Output: 42
console.log(numbersSolution); // Output: [10, 23, 24, 7, 42, 18]

const personSolution = {
  name: "John",
  username: "johndoe",
};

const personWithEmailSolution = registerEmailSolution(personSolution, "john@gmail.com");

console.log(personSolution);          // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmailSolution); // Output: { name: 'John', username: 'johndoe', email: 'john@gmail.com' }


// Immutable Array Method
// Array Map
const oldArray = ["Harry", "Ron", "Jeff", "Thomas"];
const newArray = oldArray.map((name) => `${name}!`);

console.log(oldArray);
console.log(newArray);

// Array Filter
const truthyArray = [1, "", "Halo", 0, null, "Harry", 14].filter((item) => Boolean(item));
console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]

const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
console.log(eligibleForScholarshipStudents); // Output: [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]

// Array Reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore); // Output: 313

// Immutable Object
const user = {
  name: "John",
  email: "john@gmail.com",
};

Object.freeze(user); // Membekukan object user
user.email = "doe@gmail.com"; // Mencoba mengubah properti dari objek yang dibekukan
console.log(user); // { name: 'John', email: 'john@gmail.com' }

function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(object);
}

const complexUser = {
  name: 'Bob',
  email: 'bob@dicoding.com',
  preferences: {
    newsletter: true,
    notifications: 'weekly',
    address: {
      city: 'New York',
      zip: '10001'
    }
  }
};

deepFreeze(complexUser);
complexUser.preferences.address.city = 'Los Angeles'; // Diabaikan
console.log(complexUser.preferences.address.city); // Output: 'New York'
