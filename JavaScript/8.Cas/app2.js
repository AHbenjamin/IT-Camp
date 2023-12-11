// Ispisati brojeve od 1 do 10 u konzoli jedan ispod drugog:

// 1.nacin

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// 2.nacin

// Za interaciju kroz neki objekat (niz, karaktere stringa...) u JS koristimo petlju.
// Postoje 3 petlje u JS

// 1. for petlja

// for (statement1; statement2; statement3 ){
// // kod koji se izvrsava u svakoj interaciji
// }

//  statement1 - izvrsava se samo na pocetku i predstavlja definisanje interatora.

//  statement2 - predstavlja granicu do koje ce se petlja izvrsavati.

//  statement 3 - predstavlja promenu vrednosti interatora koja se desava nekon svake interacije.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
