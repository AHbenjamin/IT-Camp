console.log("pokretanje preko node.js")

// JavaScript Template Literals 
// Template literals koristi back tics sintaksu(``) za ispisivanje stringa.

// Back Tics sintaksa
console.log(`String u "drugacijoj" sintaksi`)

// Navodnici unutar stringa:
// Sa template literals mozemo koristiti navodnike(duple ili obicne) unutar stringa.

// Stringovi u vise redova

// template literals nam omogucava multiline strings.

const recenica=`pisanje u vise redova 
pisanje u vise redova 
pisanje u vise redova 
pisanje u vise redova `


// Interpolacija 
// Template Literals nam omogucava lagan nacin za prikazivanje promenljivih unutar stringa.


const ime="Benjamin"
const godine= 22

const poruka =`Ja ${ime} imam ${godine} i ja sam danas umoran`
console.log(poruka)

// replace() metoda se koristi za menjanje specificnog karaktera ili niza karaktera odredjenog stringa 

// Po defaultu replace() metoda menja samo prvi match(prvo poklapanje).

const recenica2="Danas je padao Sneg. Mada, veceras takodje pada sneg."
const recenica3=recenica2.replace("sneg", "kisa");
console.log(recenica2)
console.log(recenica3)

//  Za menjanje reci (case insensitive) mozemo koristiti regular expression sa dodatkom /i
const recenica4=recenica2.replace(/sneg/i, "kisa");
console.log(recenica4)

// Regular expression /g nam omogucava menjanje svih matcheva (poklapanja) koliko god da ih ima.

const recenica5=recenica2.replace(/sneg/g, "kisa");
console.log(recenica5)


const recenica6=recenica2.replace(/sneg/gi, "kisa");
console.log(recenica6)