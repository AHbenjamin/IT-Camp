// korisnik unosi 2 broja:
// na osnovu toga koji je broj manji, interacija se vrsi od njega do vecerg broja.
// ispisuju se brojevi od manjeg ka vecem

// const prviBroj = +prompt("Unesite prvi broj");
// const drugiBroj = +prompt("Unesite drugi broj");

// if (isNaN(prviBroj) || isNaN(drugiBroj)) {
//   console.log("niste uneli brojeve");
// } else if (prviBroj === drugiBroj) {
//   console.log("Uneli ste jednake brojeve");
// } else if (prviBroj > drugiBroj) {
//   for (let i = drugiBroj; i <= prviBroj; i++) {
//     console.log(i);
//   }
// } else {
//   for (let i = prviBroj; i <= drugiBroj; i++) {
//     console.log(i);
//   }
// }

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Danas je radni dan");
    break;
  //   case 0:
  //   case 6:
  default:
    console.log("Ugodno provedite vikend");
}

// Sabrati brojeve od 1 do 10 i ispisati taj zbir
let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir += i;
}
console.log(zbir);

// prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

const n = +prompt("Unesite neku vrednost");
let saberi = 0;
let brBr = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    saberi += i;
    brBr += 1;
  }
}
console.log(brBr);
console.log(saberi);
