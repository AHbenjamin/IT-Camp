// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.
const broj1 = +prompt("Unesite prvi broj");
const broj2 = +prompt("Unesite drugi broj");

if (broj1 === broj2) {
  console.log("Povrsina kvadrata je " + broj1 * broj2);
} else {
  console.log("Povrsina pravouganika je " + broj1 * broj2);
}

const number1 = +prompt("Unesite broj1");
const number2 = +prompt("Unesite broj2");

switch (true) {
  case number1 === number2:
    console.log("Povrsina kvadrata je: " + number1 * number2);
    break;
  default:
    console.log("Povrsina pravouganika je: " + number1 * number2);
}

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.
const x = +prompt("Unesite vrednost za x:");
const y = +prompt("Unesite vrednost za y:");

switch (true) {
  case y !== 0:
    console.log("Kolicnik x/y = " + x / y);
    break;
  default:
    console.log("Deljenje je nemoguce. Broj y ne sme biti nula.");
    break;
}

// 3. Sezona godine:
// Napiši program koji će korisnika pitati za unos meseca (broj između 1 i 12) i ispisati odgovarajuću sezonu godine.
const brojMeseca = +prompt("Unesite broj meseca od 1 do 12");

switch (brojMeseca) {
  case 1:
  case 2:
  case 12:
    console.log("Zima");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Prolece");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Leto");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Jesen");
    break;
  default:
    console.log("Nepoznat mesec");
}

const mesec = +prompt("Unesite broj izmedju 1 i 12");
if ((mesec >= 1 && mesec <= 2) || mesec === 12) {
  console.log("Zima");
} else if (mesec >= 3 && mesec <= 5) {
  console.log("prolece");
} else if (mesec >= 6 && mesec <= 8) {
  console.log("leto");
} else if (mesec >= 9 && mesec <= 11) {
  console.log("jesen");
} else {
  console.log("Nepoznat mesec");
}

// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.

// Korisnik unosi dva broja i operaciju
let br1 = +prompt("Unesite prvi broj:");
let br2 = +prompt("Unesite drugi broj:");
let operacija = prompt("Unesite operaciju (+, -, *, /):");

switch (operacija) {
  case "+":
    console.log(`Rezultat ${br1} + ${br2} je: ${br1 + br2}`);
    break;
  case "-":
    console.log(`Rezultat ${br1} - ${br2} je: ${br1 - br2}`);
    break;
  case "*":
    console.log(`Rezultat ${br1} * ${br2} je: ${br1 * br2}`);
    break;
  case "/":
    if (br2 !== 0) {
      console.log(`Rezultat ${br1} / ${br2} je: ${br1 / br2}`);
    } else {
      console.log("Deljenje sa nulom nije dozvoljeno.");
    }
    break;
  default:
    console.log("Nepoznata operacija. Molimo unesite +, -, * ili /.");
}
