// Funksija je kod koji mozemo iznova koristiti, koji pokrece set instrukcija
// Koristimo ga kako bi jedan te isti kod mogli da izvrsavamo vise puta
// Funkcije se koriste kako bi mogli da nas kod bolje organizujemo

// Jos jedan razlog zbog kojeg se koriste funkcije jeste to kako bi mogli da kreiramo varijable unutar fuknkcije koje su function-scoped a da te iste varijable nisu dostupne unutar global-scopa

// Postoje 3 glavna nacina na koje mozemo  deklarisati funckije:

// 1.Deklaracija funkcije
function printHelloWorld1() {
  console.log("Ovo je function declaration");
}
printHelloWorld1();

// 2.Function expression
const printHelloWorld2 = function () {
  console.log("Ovo je function expression");
};
printHelloWorld2();

//3. Arrow function
const printHelloWorld3 = () => console.log("Ovo he arrow funkcija");
printHelloWorld3();

// Arrow funkcija se uglavnom koristi za ispisivanje manje ili jednog seta instrukcija, Ako imamo kod koji se moze ispisati u jednoj liniji koda za takav kod najvise koristimo arrow funkcije
// Takodje, funkcije mogu prihvatati argumente
// Broj argumenata moze biti razlicit u odnosu na to koliko nam istih treba da bi smo upotpunili nasu funkciju

// Postoje 3 fraze koje su sastavni deo funkcije:
// 1.Parametar
// 2.Argument
// 3.Return

// Parametre unutar funkcije uvek postavljamo u obicnim zagradama

const pozdrav = (ime) => console.log("Cao " + ime);
pozdrav("Haris");

function sabiranje(prvi, drugi) {
  console.log(prvi + drugi);
}
sabiranje(2, 3);

// Return--> moze vratiti vrednost koju mi deklarisemo unutar funkcije

const nekiReturn = function (broj1, broj2) {
  let rezultat = broj1 + broj2;
  return rezultat;
};

// console.log(nekiReturn(2, 5));

const finalniRezultat = nekiReturn(2, 5);
console.log(finalniRezultat * 2);

const nekaFunkc = function (e, c, d) {
  return d * (e + c);
};

console.log(nekaFunkc(2, 3, finalniRezultat));
