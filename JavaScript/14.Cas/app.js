const recenica = "Danas pocinjemo rad sa stringovima.";
const rec = "Demir";

for (let i = 0; i < rec.length; i++) {
  console.log(rec[i]);
}

// Pomocu indeksa pristupamo nekom karakteru stringa
// indeksiranje ide od 0
// Poslednji karakter u strubgy

console.log(recenica[0]);
console.log(recenica[4]);
console.log(recenica[34]);
console.log(recenica[-1]);

// Koristimo length metodu za izracunavanje duzine stringa:
const duzinaRecenice = recenica.length;
console.log(recenica[duzinaRecenice - 1]);

// zadatak

const nekaRec = prompt("Unesite recenicu");

for (let i = 0; i < nekaRec.length; i++) {
  if (nekaRec[i] === "a") {
    console.log(5);
  } else if (nekaRec[i] === "s") {
    continue;
  } else {
    console.log(nekaRec[i]);
  }
}

// Metoda toLowerCase() pretvara string u mala slova :
console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA.".toLowerCase());

// Metoda toUpperCase() pretvara string u velika slova :
console.log("neki string za pretvaranje u velika slova.".toUpperCase());

const recenica3 = "e ovo ko uradi je babo";
let recenica4 = "";
// zadatak ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom
//

for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4);
