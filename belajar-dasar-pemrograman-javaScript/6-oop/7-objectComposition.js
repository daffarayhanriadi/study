/* 
Misalnya, kita sedang mengembangkan sebuah video game. 
Video game tersebut memiliki banyak karakter seperti monster, wizard dan guardian. 
Setiap karakter memiliki kemampuan yang sama yaitu bergerak. 
Selain itu, setiap karakter memiliki kemampuan yg unik pd dirinya seperti menyerang, bertahan, dan mengeluarkan sihir.
Jika skenario video game ini kita gambarkan dengan konsep OOP, karakter akan menjadi SuperClass,
sedangkan monster, wizard, dan guardian akan menjadi SubClass seperti contoh berikut ini.
*/

class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove() {
        console.log(`${this.name} moves to ${this.position}`);
    }
}

class Monster extends Character {
    canAttack() {
        console.log(`${this.name} attacks with a weapon!`);
    }
}

class Guardian extends Character {
    canDefend() {
        console.log(`${this.name} defends with a shield!`);
    }
}

class Wizard extends Character {
    canCastSpell() {
        console.log(`${this.name} casts a magic spell!`);
    }
}

/* 
Oke, tidak ada yang salah dengan implementasi kode tersebut kan?
Nah, timbul masalah ketika kita ingin menambahkan satu karakter lagi, misalnya karakter warrior.
Warrior adalah karakter yang memiliki kekuatan super, ia bisa menyerang, bertahan, dan bergerak.

Bagaimana cara kita untuk membuat class Warrior?
Kita mungkin menjawab dengan melakukan pewarisan dari SuperClass Character. 
Yup, hal itu benar karena memang itulah satu-satunya cara.
*/

class Warrior extends Character {
    canAttack() {
        console.log(`${this.name} attacks with a weapon!`);
    }

    canDefend() {
        console.log(`${this.name} defends with a shield!`);
    }
}

/* 
Namun, cara tersebut tidak efektif karena ketika kita mengubah implementasi salah satu method, 
kita perlu untuk mengubahnya di dua tempat. 
Katakanlah, kita mengubah method canAttack(), kita perlu untuk mengubahnya di SubClass Monster dan Warrior.
Lantas, apa solusinya? Solusinya adalah mengubah pewarisan menjadi object composition.
*/

//* OBJECT COMPOSITION
/* 
 * Object composition dapat menjadi solusi untuk masalah pewarisan yang kompleks seperti di kasus polymorphism.
 * Jika sebelumnya, pewarisan menggunakan pendekatan peran/identitas dlm menstrukturkan kode, yakni Monster, dll.
 * Dalam object composition, pendekatan yang digunakan adalah berbasis kemampuan, bukanlah peran/identitas.
 * Kode distrukturkan berdasarkan kemampuan, apakah ia bisa menyerang, bertahan atau mengeluarkan sihir.
*/

function canAttack(character) {
    return {
        attack: () => {
            console.log(`${character.name} attacks with a weapon!`);
        }
    }
}

function canDefend(character) {
    return {
        defend: () => {
            console.log(`${character.name} defends with a shield!`);
        }
    }
}

function canCastSpell(character) {
    return {
        castSpell: () => {
            console.log(`${character.name} cast a spell!`);
        }
    }
}

/* 
 * Karena struktur kode sudah dipecah berdasarkan kemampuan, bukan peran/identitas.
 * Ke depannya ketika ada karakter baru yang memiliki kombinasi kemampuan, akan lebih mudah untuk membuatnya.
 * Utk membuat object, kita dpt membuat function sbg object creator dan mengomposisikan kemampuan-kemampuan tersebut.
 * Di JS, kita dapat meng-komposisikan (menggabung) objek secara mudah dengan menggunakan method Object.assign().
 * Object.assign() adalah method statis untuk menyalin semua properti dari satu atau lebih object ke objek target.
 * Object.assign() akan mengembalikan objek target yang dimodifikasi.
*/

function createMonster(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(character));
}

function createWizard(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(character));
}

function createWarrior(name) {
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}

// Membuat Object Monster, Guardian, Wizard, dan Warrior.
const monster = createMonster("Monster");
monster.canMove();  // Output: Monster moves to 0
monster.attack();   // Output: Monster attacks with a weapon!

const guardian = createGuardian("Guardian");
guardian.canMove(); // Output: Guardian moves to 0
guardian.defend();  // Output: Guardian defends with a shield!

const wizard = createWizard("Wizard");
wizard.canMove();   // Output: Wizard moves to 0
wizard.castSpell(); // Output: Wizard cast a spell!

const warrior = createWarrior("Warrior");
warrior.canMove();  // Output: Warrior moves to 0
warrior.attack();   // Output: Warrior attacks with a weapon!
warrior.defend();   // Output: Warrior defends with a shield!