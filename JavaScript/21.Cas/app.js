// Ekstraktovanje karaktera mozemo odraditi na 3 razlicita nacina:

// charAt(position)
// charCodeAt(position)
// Pristupanje pomocu []

const recenica ="Jos max 10 dana"
console.log(recenica.charAt(5))
console.log(recenica.charCodeAt(5))
console.log(recenica[5])

// Ako karakter sa odredjenom pozicijom ne posotoji charAt vraca prazan string dok string od [*] vraca undefined


// Postoji nekoliko search metoda u JS:

// indexOf() metoda vraca index (poziciju) poslatog argumenta

console.log(recenica.indexOf("max"))
console.log(recenica.indexOf("1"))

// Ako trazena vrednost ne postoji pozicija koju dobijamo iznosi -1.

console.log(recenica.indexOf("skola"))

// indexOf metoda prihvata drugi argument.On predstavlja startnu poziciju za trazenje odredjene vrednosti.


console.log(recenica.indexOf("max",7))

// lastIndexOf() metoda vraca poslednju poziciju poslatog argumenta.

console.log(recenica.lastIndexOf("a"))

// search() metoda vraca index(poziciju) poslatog argumenta.
// drugi argument kod search metode nema 

