//* DEFAULT EXPORT
export default function sayDefault() {
    console.log("I am default function");
}


//* NAMED EXPORT
//* Export sebelum deklarasi dilakukan
export const name = "Budi";
export const email = "budi@gmail.com";
export const age = 25;

export function sayNamed() {
    console.log("I am named function");
}

//* Export setelah deklarasi dilakukan
// const name = "Budi";
// const email = "budi@gmail.com";
// const age = 25;
// export { name, email, age };

//* Export sebelum dan setelah deklarasi dilakukan -> HASILNYA TETAP SAMA.

