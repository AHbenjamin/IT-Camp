const d = +prompt("Unesite duzinu");
const s = +prompt("Unesite sirinu");
const r = +prompt("Unesite rastojanje od terena");

if (d < 90 || d > 120) {
  console.log("Uneli ste odgovarajucu duzinu");
} else if (s < 45 || s > 90) {
  console.log("Uneli ste odgovarajucu sirinu");
} else if (r < 2 || r > 10) {
  console.log("Uneli ste odgovarajuce rastojanje");
} else {
  const duzinaOgrade = d + r * 2;
  const sirinaOgrade = s + r * 2;
  console.log(2 * (duzinaOgrade + sirinaOgrade));
}
