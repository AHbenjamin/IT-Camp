// Napraviti arrow funkciju koja na osnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

const provera = (broj) => {
  if (typeof broj !== "number") {
    return "UNETA VREDNOST NIJE BROJ";
  } else if (broj > 0) {
    return "UNET JE POZITIVAN BROJ";
  } else if (broj < 0) {
    return "UNET JE NEGATIVAN BROJ";
  } else {
    return "UNETA JE NULA";
  }
};

console.log(provera(8));
console.log(provera(-5));
console.log(provera(0));
console.log(provera("fgd"));

// Zadatak 2:
// Napiši funkciju koja prima broj i vraća true ako je broj paran, a false ako je neparan.

const funkcija = (broj1) => {
  if (broj1 % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
};

console.log(funkcija(6));
console.log(funkcija(1));

// Zadatak 3:
// Napiši funkciju koja prima dva broja i vraća veći od njih.
const vratiVeciBroj = (broj1, broj2) => {
  if (broj1 > broj2) {
    return broj1;
  } else if (broj1 < broj2) {
    return broj2;
  }
};

console.log(vratiVeciBroj(5, 10));
console.log(vratiVeciBroj(-3, 0));

// Zadatak 4:
// Napiši funkciju koja prima broj i vraća sumu svih brojeva do tog broja (uključujući taj broj). Na primer, za broj 4, funkcija treba vratiti 1 + 2 + 3 + 4 = 10.

const sumaBrojeva = (broj) => {
  let suma = 0;

  for (let i = 1; i <= broj; i++) {
    suma += i;
  }

  return suma;
};

console.log(sumaBrojeva(4));
console.log(sumaBrojeva(7));
console.log(sumaBrojeva(0));
