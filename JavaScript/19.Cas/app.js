// STRING SU IMMUTABLE (nepromenljive) VREDNOSTI!

// const recenica = "Danas je bio 'suncan' dan.";

const recenica3 = 'Danas je bio \"suncan\" dan.';
console.log(recenica3);

const recenica4="sta ako zelimo \\ da se nadje u tekstu?"
console.log(recenica4)


const recenica5="sta ako zelimo da se nadje u tekstu \
sta ako zelimo da se nadje u tekstu \
sta ako zelimo da se nadje u tekstu \
sta ako zelimo da se nadje u tekstu \
sta ako zelimo da se nadje u tekstu"

console.log(recenica5)

// Postoje 3 metode za ekstraktovanje dela stringa:

//  slice(start,end) start se ukljucuje, end se ne ukljucuje
//  substring(start,end) start se ukljucuje, end se ne ukljucuje
// substring metoda ne prihvata negativne indexe


const isecak =recenica4.slice(0,3)
console.log(isecak)

console.log(recenica4.slice(8,recenica4.length)) // do kraja
console.log(recenica4.slice(8)) // do kraja (izostavljanjem drugog argumenta uzimamo ostatak stringa)


// slice metoda prihvata negativan index


console.log(recenica4.slice(-7))

console.log(recenica4.substring(0,3))

// substr(start, length)
//  drugi argument predstavlja duzinu isecka.

console.log(recenica4.substr(4,10))

const rec= "rec"

console.log(rec.toUpperCase()) // pravi NOVI string(ne menja postojeci)


// concat()  metoda za spajanje stringova
// ova metoda spaja dva ili vise stringova 

const ime="Demir"
const prezime="Miraljemovic"

const imeIPrezime= ime.concat(" ",prezime)
console.log(imeIPrezime)

// trim() kosacica - brise razmake na krajevima 


const email ="         b.ahmetoviic@gmail.com    "

console.log(email)
console.log(email.length)
console.log(email.trim())

