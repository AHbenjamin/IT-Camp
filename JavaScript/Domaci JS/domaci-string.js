// Domaci zadatak.
// 1. Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

// 2.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo).
// Npr. za string 'Mama ima momu', dobija se rezultat 5.

// const recenica = "ovo je neka recenica";
// let recenica2 = " ";

// for (let i = 0; i < recenica.length; i++) {
//   if (i === 0) {
//     recenica2 += recenica[i].toUpperCase();
//   } else if (recenica[i + 1] === " ") {
//     recenica2 += recenica[i].toUpperCase();
//   } else {
//     recenica2 += recenica[i];
//   }
// }
// console.log(recenica2);

const recenica = "ovo je neka recenica";
let recenica2 = "";

for (let i = 0; i < recenica.length; i++) {
  if (i < recenica.length - 1 && recenica[i + 1] === " ") {
    recenica2 += recenica[i].toUpperCase();
  } else if (i === recenica.length - 1) {
    recenica2 += recenica[i].toUpperCase();
  } else {
    recenica2 += recenica[i];
  }
}
console.log(recenica2);

let recenica5 = "veliKO m i malo M";
let brojac = 0;

for (let i = 0; i < recenica5.length; i++) {
  if (recenica5[i] === "m" || recenica5[i] === "M") {
    brojac++;
  }
}
console.log(brojac);

const unetaR = prompt("Unesite recenicu");
let brojac1 = 0;

for (let i = 0; i < unetaR.length; i++) {
  if (!isNaN(unetaR[1])) {
    brojac1++;
  }
}
//   switch (unetaR[i]) {
//     case "0":
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//     case "5":
//     case "6":
//     case "7":
//     case "8":
//     case "9":
//       brojac1++;
//       break;
//   }
// }
// console.log(brojac1);}

const originalnaRecenica = "Danas je lep dan";
let recenicaN = " ";

for (let i = 0; i < originalnaRecenica.length; i++) {
  if (originalnaRecenica[i] === "a" && originalnaRecenica[i + 1] === "n") {
    recenicaN += "d";
  } else if (originalnaRecenica[i] === "a") {
    recenicaN += "t";
  } else {
    recenicaN += originalnaRecenica[i];
  }
}

console.log(recenicaN);
