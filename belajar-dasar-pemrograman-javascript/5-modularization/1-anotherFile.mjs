//* Default Export for Default Import
export default function defaultFunction() {
    console.log("Ini adalah function export default.");
}

//* Named Export for Named Import
export function namedFunction() {
    console.log("Ini adalah contoh named import");
}

const name = "Budi";
const email = "budi@gmail.com";
const age = 25;

export { name, email, age };

//* Export for Alias Import
export function aliasFunction() {
    console.log("Ini dari anotherFIle.mjs");
}