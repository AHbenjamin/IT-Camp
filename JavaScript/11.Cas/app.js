// 1.
//  neka se izvrsi iteracija od broja 99 do -99
// ispisati zbir broja deljivog sa 4 i broja 14

for (i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

2;
// izracunati aritmeticku sredinu brojeva koji su deljivi sa 3
// iteracija se vrsi od 3 do 17

zbir = 0;
brBr = 0;
for (i = 3; i < 18; i++) {
  if (i % 3 === 0) {
    zbir += i;
    brBr++;
  }
}
arVrednost = zbir / brBr;
console.log("Aritmeticka vrednost brojeva je " + arVrednost);

// while petlja se koristi za iteraciju kroz neki objekat.
// definise se drugacije u odnosu na for petlju

vreme = "Suncano";
while (vreme === "Suncano") {
  console.log("Danas je lep dan");
  vreme = "Kisovito";
}

let i = 1;
while (i < 6) {
  console.log(i);
  // Kad zavrsimo celi logiku za kod pod odredjenim uslovom moramo menjati i
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat.
// Razlika u odnosu na while petlju je sto se prvo izvrsava kod pa onda proverava uslov.

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:

let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

const broj = +prompt("unesite broj");
let b = 1;
while (b <= broj) {
  console.log(b ** 2);
  b++;
}

//  traziti unos brojeva od korisnika sve dok ne unese nulu

const broj1 = +prompt("unesite broj");
while (broj1 !== 0) {
  broj1 = +prompt("unesite broj");
}

let proizvod = 1;

for (let i = 1; i < 6; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);
