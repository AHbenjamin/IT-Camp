// KONDICIONALI //

if (5 > 4) {
  // je uslov koji kada je zadovoljen izvrsice se deo koda izmedju viticastih zagrada.
  console.log("vece je");
}

trenutnoVreme = 20;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("Dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 17) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

brojGodina = 27;

if (brojGodina >= 18) {
  console.log("punoletni ste");
} else {
  console.log("maloletni ste ");
}

const x = 12;
const y = 6;

if (y == 0) {
  console.log("deljenje je nemoguce");
} else {
  console.log(x / y);
}

const brojGodinaa = 51;

if (brojGodinaa <= 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodinaa < 12 || brojGodinaa <= 17) {
  console.log("Vi ste maloletni");
} else if (brojGodinaa >= 18 && brojGodinaa <= 39) {
  console.log("Vi ste punoletni");
} else if (brojGodinaa >= 40) {
  console.log("Vi ste zrela osoba");
}
