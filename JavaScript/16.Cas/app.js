const zbir = 10 + 7;
console.log(zbir);

function zbirFunk(br1, br2) {
  const zbir = br1 + br2;
  return zbir;
}
console.log(zbirFunk(5, 2));

// function zbirKv(kv1, kv2) {
//   return kv1 ** 2 + kv2 ** 2;
// }
// console.log(zbirKv(5, 5));

// // Ako je funkcija jednostavna, ima jedan return onda mozemo izostaviti viticaste zagrade i return keyword.
// const zbirKvadrata = (a, b) => a ** 2 + b ** 2;
// console.log(zbirKvadrata(5, 5));

// // 1.Nacin

// const zbirKvadrata

// 2.Nacin

const zbirKvadrata = (a, b = 0) => {
  return a ** 2 + b ** 2;
};
console.log(zbirKvadrata(3));

const zbir2 = (a = 1, b = 1, c = 1) => {
  return (a + b + c) / 3;
};
console.log(zbir2(1, 3, 5));

const povrsina = (d, e) => {
  if (d === e) {
    return "Povrsina kvadrata: " + d * e;
  } else {
    return "Povrsina pravougaonika: " + d * e;
  }
};
console.log(povrsina(2, 3));
