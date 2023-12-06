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
