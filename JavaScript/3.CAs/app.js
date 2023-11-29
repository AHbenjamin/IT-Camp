// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:
// 1. innerHTML

paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je naslov";

// 2. document.write() - koristi se samo za testiranje

// 3. alert()

// alert("Upozorenje korisniku.");

// 4. console.log()

console.log(paragraf.innerHTML);

// JavaScript name mora pocinjati sa :

// -Slovom (velikim ili malim) (A-Z ili a-z)
// -$ ( dolar znakom)
// - _ (donjom crtom)

// Napomena. U nazicu promenljive (varijable) se moze naci broj, ali ona ne sme poceti broje

amir = "Amir je odlican ucenik druge godine srednje skole";
Amir = "Amir je dovoljan ucenik druge godine srednje skole";

// JavaScript je case sensitive!!! (Razlikuje velika i mala slova)

console.log(amir);

// Postoje 4  nacina da deklarisemo promenljivu u JavaScriptu:

// 1. Koriscenjem var keyword (rezervisane reci) - prvenstveno koriscen na ranijim browserima;

// var prijatno = "Prijatno!"; primer istovremenog deklarisanja i inicijalizovanja promenljive
var prijatno; // deklarisanje promenljive
console.log(prijatno); // undefined
console.log(typeof prijatno); // undefined

prijatno = "Prijatno!"; // inicijalizacija deklarisane promenljive prijatno

// 2. Koriscenjem let keyword (rezervisane reci) - koristimo kada je vrednost promenljive(varijable) sklono memnjanju.

// let brojGodina = 25 primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu let.

let brojGodina; // deklarisanje promenljive
brojGodina = 25; // inicijalizacija deklarisanje promenljive brojGodina

// 3. Koriscenjem const keyword (rezervisane reci) - koristimo za vrednosti koje se ne menjaju.

// const ime = "Benjamin"; primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu const

// Koriscenjem const keyword nije dozvoljeno posebno inicijalizovanje, vec mora uz deklaraciju zajedno.
// const ime;
// ime = "Benjamin"

// 4. Koriscenjem niceg.

mervan = "Mervan";

// Napomena.
// Promenljive odnosno varijable su kontejneri za skladistenje vrednosti.
