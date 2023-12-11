// // Za interakciju sa korisnikom koristimo prompt metodu.

// const fullName = prompt("Unesite vase ime i prezime ");
// console.log(fullName);

// const age = prompt("Unesite broj godina ");
// console.log(age);
// console.log(typeof age);

// // Vrednost dobijena preko prompt metode je uvek tipa string.
// // Taj string se moze prevesti u tip number na nekoliko nacina:

// // 1. Number(age)
// const brojGodina = Number(age);
// console.log(brojGodina);
// console.log(typeof brojGodina);

// // 2. +age
// const brojGodina2 = +age;
// console.log(brojGodina2);
// console.log(typeof brojGodina2);

// // const visina = Number(prompt("Unesite vasu visinu"));
// const visina = +prompt("Unesite vasu visinu");
// console.log(visina);

// // isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN).

// console.log(isNaN("55")); //false
// console.log(isNaN("55wqe3")); //true

const brojGodinaa = Number(prompt("Unesite broj vasih godina"));

if (brojGodinaa < 0) {
  console.log("Broj godina ne moze biti negativan broj");
} else if (brojGodinaa <= 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodinaa < 12 || brojGodinaa <= 17) {
  console.log("Vi ste maloletni");
} else if (brojGodinaa >= 18 && brojGodinaa <= 39) {
  console.log("Vi ste punoletni");
} else if (brojGodinaa >= 40) {
  console.log("Vi ste zrela osoba");
} else if (isNaN(brojGodinaa)) {
  console.log("Niste uneli broj godina");
}

//resavaj prvo errore pa ostalo//

// 1.
const broj = Number(prompt("Unesite neki broj"));

if (isNaN(broj)) {
  console.log("niste uneli broj");
} else if (broj < 0) {
  console.log("broj je negativan");
} else if (broj === 0) {
  console.log("broj je jednak nuli");
} else {
  console.log("broj je pozitivan");
}
