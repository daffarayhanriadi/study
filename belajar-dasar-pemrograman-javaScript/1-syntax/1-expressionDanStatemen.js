//* Statement = instruksi yang akan dieksekusi oleh komputer.
// Cara 1 (Recommended)
const age = 23;                                     // Statement 1 -> baris 1; 23 -> Expression
const name = "Daffa";                               // Statement 2 -> baris 2; "Daffa" -> Expression
console.log(`Aku ${name}, umurku ${age} tahun.`);   // Statement 3 -> baris 3; `Aku ${name}, umurku ${age} tahun.` -> Expression

// Cara 2 (Not Recommended)
const age = 23; const name = "Daffa"; console.log(`Aku ${name}, umurku ${age} tahun.`); // 3 Statement dalam 1 baris

//* Expression = bagian dari statement yang menghasilkan nilai. 1 statement minimal ada 1 expression.
//* tidak hanya nilai statis, tetapi juga dinamis
const result = 4 + 4; // 4 + 4 => Expression.
