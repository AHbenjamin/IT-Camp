// // // ispisi sve brojeve od 0-30 i ako je broj deljiv sa dva onda ispisi "ovaj broj je deljiv sa dva"

// // for (i = 0; i <= 30; i++) {
// //   if (i % 2 === 0) {
// //     console.log(i + " " + "broje je deljiv");
// //   } else {
// //     console.log(i);
// //   }
// // }

// // for (a = 1; a <= 5; a++) {
// //   console.log(a);
// // }

// // for (b = 1; b <= 5; b++) {
// //   if (true) {
// //     console.log(b);
// //   }
// // }

// // for (c = 10; c >= 6; c--) {
// //   console.log(c);
// // }

// // const broj = +prompt("Unesite broj");

// // for (i = 1; i <= broj; i++) {
// //   if (i % 3 === 0) {
// //     console.log(i + " " + "broj je deljiv sa tri");
// //   } else {
// //     console.log(i + " " + "broj nije deljiv");
// //   }
// // }

// const broj1 = +prompt("Unesite prvi broj");
// const broj2 = +prompt("Unesite drugi broj");

// console.log("neparni brojevi izmedju" + broj1 + "i" + broj2 + "su:");

// for (i = broj1; i <= broj2; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// //napisati zadatak koji ce ispisati brojeve od 1 do beskonacno sa vanbracnim slucajem

// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (i = 1; i <= 5; i++) {
//   let kvadrat = i * i;
//   console.log("kvadrat broja je" + i + "je" + kvadrat);
// }

// for (i = 10; i >= 1; i--) {
//   console.log(i);
// }

// let broj = 5;

// for (let i = 1; i <= 10; i++) {
//   let rezultat = broj * i;
//   console.log(`${broj} x ${i}=${rezultat}`);
// }

// let suma = 0;

// for (let i = 1; i <= 5; i++) {
//   suma += i;
// }

// // console.log("Suma brojeva od 1 do 5 je:" + " " + suma);

// // for (let i = 1; i <= 7; i++) {
// //   let poruka = i % 2 === 0 ? "paran" : "neparan";
// //   console.log(i + " je " + poruka);
// // }

// for (let i = 3; i <= 25; i++) {
//   let poruka = i % 2 === 0 ? "paran" : "neparan";
//   console.log(i + " je " + poruka);
// }

// let suma1 = 0;

// for (let i = 1; i <= 30; i++) {
//   suma += i;
// }

// console.log("Suma brojeva od 1 do 30 je:" + " " + suma);

// let proizvod = 1;

// for (let i = 1; i <= 3; i++) {
//   proizvod *= i;
// }
// console.log("proizvod brojeva od 1 do 3 je:" + " " + proizvod);

// for (let i = 1; i <= 6; i++) {
//   let kvadrat = i * i;
//   console.log("kvadrat broja" + " " + i + " je " + kvadrat);
// }

// for (i = 99; i >= -99; i--) {
//   if (i % 4 === 0) {
//     console.log(i + 14);
//   }
// }

// for (let i = 99; i >= -99; i--) {
//   if (i % 4 === 0 || i === 14) {
//     console.log(i);
//   }
// }

// for (i = 50; i >= -50; i--) {
//   if (i % 3 === 0) {
//     console.log(i - 10);
//   }
// }

// for (i = 50; i >= -50; i--) {
//   if (i % 5 === 0) {
//     console.log(i * 3);
//   }
// }

// const ocene = +prompt("Unesite broj da bi znali ocenu");

// if (!isNaN(ocene) && ocene >= 1 && ocene <= 5) {
//   switch (ocene) {
//     case 1:
//       console.log("Ocena je: F");
//       break;
//     case 2:
//       console.log("Ocena je: D");
//       break;
//     case 3:
//       console.log("Ocena je: C");
//       break;
//     case 4:
//       console.log("Ocena je: B");
//       break;
//     case 5:
//       console.log("Ocena je: A");
//       break;
//     default:
//       console.log("Unesena ocena nije validna.");
//   }
// } else {
//   console.log("Unesena vrednost nije validan broj");
// }

const broj1 = +prompt("Unesite broj:");

if (isNaN(broj1)) {
  console.log("Uneta vrednost nije broj");
} else if (broj1 % 2 === 0) {
  console.log(`Broj ${broj1} je paran`);
} else {
  console.log(`Broj ${broj1} je neparan`);
}
