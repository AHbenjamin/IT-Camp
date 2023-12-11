// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

const a = Number(prompt("Unesite prvi broj"));
const b = Number(prompt("Unesite drugi broj"));

if (a === b) {
  console.log("Povrsina kvadrata je " + a * b);
} else {
  console.log("Povrsina pravougaonika je " + a * b);
}

// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.
// Korisnik unosi dva broja i operaciju

const operacija = prompt("Unesite aritmeticku operaciju");

switch (operacija) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Nepoznata aritmeticka operacija");
}
