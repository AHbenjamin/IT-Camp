// Switch nardebu koristimo kada zelimo kroz slucajeve pokriti tacne moguce vrednosti.

switch (5 - 3) {
  case 1:
    // kod koji se izvrsava ako je izraz ===1
    break;
  case 5:
    // kod koji se izvrsava ako je izraz ===5
    break;
  case 2:
    // kod koji se izvrsava ako je izraz ===2
    break;
  default:
    // kod koji se izvrsava ako nisu zadovoljeni prethodni slucajevi.
    break;
}

// break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen.

broj = +prompt("Unesite broj izmedju 12 i 15");

switch (broj) {
  case 12:
    // console.log("Uneli ste broj 12");
    console.log("Uneli ste broj" + broj);
    break;
  case 13:
    console.log("Uneli ste broj 13");
    break;
  case 14:
    console.log("Uneli ste broj 14");
    break;
  case 15:
    console.log("Uneli ste broj 15");
    break;
  default:
    console.log("Niste uneli broj trazenog opsega");
}

// switch (br) {
//   case 2:
//   case 3:
//     console.log("uneli ste ksjafnalf");
//     break;
// }

dani = +prompt("Unesite broj dana u nedelji");

switch (dani) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Niste uneli vazeci broj");
}
