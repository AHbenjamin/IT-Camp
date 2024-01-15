// includes() metoda - vraca boolean u zavisnosti od toga da li odredjeni string sadrzi specificnu vrednost
// includes(searchValue,start) start - poziciju od koje se pocinje trazenje '


const recenica = "Hvala Vam na iznenadjenu!"

console.log(recenica.includes("poklon"))

// startsWith()- metoda vraca true ako string pocinje argumentom metode, a false ako ne pocinje tim argumentom

// startsWith(searchValue,start) - start -poziciju od koje pocinje trazenje

console.log(recenica.startsWith("Hvala"))
console.log(recenica.startsWith("Hvala",6))
console.log(recenica.startsWith("V",6))

// endsWith()- metoda vraca true ako string zavrsava argumentom metode, a false ako ne zavrsava tim argumentom

console.log(recenica.endsWith("Hvala"))
console.log(recenica.endsWith("iznenadjenu!"))


// match() - metoda vraca niz sa stringovima koji se podudaraju sa argumentom.

const pozdrav ="Dobro jutro. Dobar dan. Dobro vece"
const matchNiz = pozdrav.match(/Dobro/gi)
console.log(matchNiz) // niz sa /Dobro/gi vrednostima iz pozdrav stringa
console.log(matchNiz.length) // broj pojavljivanja /Dobro/gi u pozdrav stringu

// prebrojati koliko cifara ima u datom stringu

function brZn(recenica){
    

}
