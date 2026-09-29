//* Without Return Value
/*
variabel result berisi undefined. Hal ini karena memang method console.log 
tidak mengembalikan nilai apa pun dan JavaScript tidak menganggap ini sebagai error.
*/
const result = console.log('JavaScript keren!'); // Output: JavaScript keren!
console.log(result); // Output: undefined


//* Return Value
/* 
* Untuk memberikan kemampuan function mengembalikan nilai (return statement)
kita gunakan kata kunci return dan diikuti nilai kembaliannya
* Program dalam function akan terhenti jika eksekusi kode sudah mencapai return statement.
program function sudah selesai jika statement ini sudah dibaca.
*/
function sumNumbers(a, b) {
    const result = a + b;
    return result;
}

const result = sumNumbers(2, 4);
console.log("2 + 4:", result); // Output: 2 + 4: 6

function generateGreetingWorldMessage() {
    return 'Halo, dunia!';
    console.log('Aku tidak akan tampil!'); // Kode ini tidak akan pernah dieksekusi
}

const message = generateGreetingWorldMessage();
console.log(message); // Output: Halo, dunia!