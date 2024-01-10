// Domaci zadaci:
// 1.
// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string gde menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " + novaRecenica
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// Recenica je nedovoljne duzine za dalje ispitivanje.

const str = (string) => {
    if (string.length > 9) {
      const noviStr = string.replace(/a/g, "B");
      return noviStr;
    } else if (string.length <= 9) {
      console.log("Recenica je nedovoljne duzine za dalje ispitivanje.");
    }
  };
  
  const kraj = str("Ovo je recenica nekog stringa");
  
  console.log(kraj);
  
  // 2. Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
  // 1. recenicu ispisanu velikim slovima;
  // 2. recenicu ispisanu malim slovima;
  // 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
  // 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.
  
  function obradiRecenicu() {
    const unos = prompt("Unesite rečenicu:");
    if (unos) {
      const originalnaRecenica = `Originalna recenica: ${unos}`;
      const velikaSlova = `Recenica sa velikim slovima: ${unos.toUpperCase()}`;
      const malaSlova = `Recenica sa malim slovima: ${unos.toLowerCase()}`;
      const sredina = unos.length / 2;
      const rezultat = `Recenica sa pola pola: ${
        unos.slice(0, sredina | 0).toLowerCase() +
        unos.slice(sredina | 0).toUpperCase()
      }`;
      const nekaRec = `Recenica koja menja skola u fakultet: ${unos.replace(
        /Skola/gi,
        "Fakultet"
      )}`;
      const spojenString = `${originalnaRecenica}\n${velikaSlova}\n${malaSlova}\n${rezultat}\n${nekaRec}`;
      return spojenString;
    } else {
      return "Niste uneli rečenicu.";
    }
  }
  
  const rezultat = obradiRecenicu();
  console.log(rezultat);