/* TABLE OF CONTENTS
 * Throwing Error
 * Catching Error
    * Try-Catch
    * Finally
*/

/*
 * Error yang terjadi bisa berasal dari 
    * expected error (error yang terduga), dan
    * unexpected error (error yang tidak terduga).
 * Error yang dibiarkan dan tidak ditangani akan menyebabkan crash pada program yang dibangun.
 * JavaScript memiliki cara untuk menangani error tersebut yang disebut dengan error handling.
 * Error handling dpt mencegah crash pd program ketika terjadi error yg disebabkan oleh kesalahan syntax/error lainnya.
*/


//* THROWING ERROR
/* 
 * Saat terjadi error, sinyal yang disebut dengan exception akan bangkit.
 * Cara lain untuk membuat exception adalah menggunakan keyword throw untuk generate sebuah error
    throw <object error>
 * JavaScript memiliki built-in constructor untuk standar error meliputi Error, SyntaxError, dan sebagainya.
 * Alasan membangkitkan exception scr sengaja adalah agar program yg dibangun tdk mengalami crash ketika terjadi
    sesuatu di luar dugaan.
 * 
*/
const error = new Error("Terjadi Error!");
console.log(error); // Output: Error: Terjadi Error!

// Contoh case
const price = 100;
const paid = 80;
if (paid < price) {
    throw new Error("Pembayaran kurang"); // Output: Error: Pembayaran kurang
}

//* CATCHING ERROR
/* 
 * Berfungsi kebalikan dari THROWING ERROR, yaitu menangkap error yg dihasilkan oleh program.
*/
//* TRY-CATCH
/* 
 * Try-catch merupakan cara yang dimiliki JavaScript untuk menangani error.
 * Try-catch memiliki dua blok utama yaitu try dan catch.
 * Try merupakan blok kode yang akan menangani error.
 * Catch merupakan blok kode yang dibangkitkan ketika terjadi error di dalam blok try.
    try {
    
        <code...>
    
    } catch (err) {
    
        <error handling>
    
    }
 * Ketika terjadi error, kode yg ada di bawahnya tdk akan tereksekusi. program akan langsung lompat ke blok catch.
*/
// Case tanpa error
try {
    console.log("Memulai program");
    console.log("Mengakhiri program");
} catch (error) {
    console.log("Karena tidak ada error, blok ini akan diabaikan");
}
/* 
Output:
Memulai program
Mengakhiri program
*/

// Case error
try {
    console.log("Memulai program");
    throw new Error("Error: Program berhenti");
    console.log("Mengakhiri program");
} catch (error) {
    console.log("Karena ada error, blok ini akan dieksekusi");
}
/* 
Output:
Memulai program
Karena ada error, blok ini akan dieksekusi
*/

//* FINALLY
/* 
 * Finally adalah blok kode yang berada di akhir try-catch.
 * Bilamana catch dieksekusi hanya ketika ada error di dlm blok try, blok yg ada di finally akan selalu dieksekusi.
*/
try {
    console.log("Ini try block");
} catch (error) {
    console.log("Ini catch block");
} finally {
    console.log("Ini finally block");
}
/* 
Output:
Ini try block
Ini finally block
*/

try {
    console.log("Ini try block");
    throw new Error("Error: Program berhenti");
} catch (error) {
    console.log("Ini catch block");
} finally {
    console.log("Ini finally block");
}
/* 
Output:
Ini try block
Ini catch block
Ini finally block
*/