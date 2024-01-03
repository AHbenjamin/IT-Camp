// let korisnickoIme = prompt("Unesite korisnicko ime");

// while (korisnickoIme.length < 6) {
//   korisnickoIme = prompt("Unesite korisnicko ime");
// }

// const isSunny = false;

// if (isSunny) {
//   console.log("Napolju je suncano.");
// } else if (!isSunny) {
//   console.log("Napolju nije suncano");
// }

// Truthy i Falsy vrednosti nam olaksavaju pisanje uslova.Ako je vrednost truthy,to zanaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi.Ako je vrednost falsy , to znaci da uslov nije zadovoljen i da se nece izvrsiti kod koji sledi.
// Postoji 8 Falsy vrednosti:

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

let unos = prompt("unesite bilo sta");

while (!unos) {
  unos = prompt("unesite bilo sta");
}

const unos1 = () => {
  const nesto = prompt("Unesite nesto");
  if (!nesto) {
    return "FALSY";
  } else {
    return "TRUTHY";
  }
};

console.log(unos1());
