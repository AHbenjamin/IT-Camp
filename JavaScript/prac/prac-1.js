// Prikazivanje parnih/ neparnih brojeva:
// Ispisati sve parne ili sve neparne brojeve iz niza.


// // Definirajte niz brojeva
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Definirajte funkciju koja prikazuje parne ili neparnu brojeve iz niza
// function prikaziParnostNiza(niz, parni = true) {
//     console.log(`Parni brojevi:`);
//     niz.forEach(function(broj) {
//         if (parni && broj % 2 === 0) {
//             console.log(broj);
//         } else if (!parni && broj % 2 !== 0) {
//             console.log(broj);
//         }
//     });
// }

// // Pozovite funkciju za prikazivanje parnih brojeva iz niza
// prikaziParnostNiza(numbers, true);

// // Pozovite funkciju za prikazivanje neparnih brojeva iz niza
// prikaziParnostNiza(numbers, false);



// ZADAtCI

// Zadatak sa forEach():
// Ispisati sve elemente niza.

// Zadatak sa reduce():
// Izračunati zbir svih brojeva u nizu.

// Zadatak sa filter():
// Filtrirati niz tako da sadrži samo parne brojeve.

// Zadatak sa forEach():
// Ispisati samo one elemente niza koji su veći od 10.

// Zadatak sa reduce():
// Izračunati prosjek ocjena u nizu.

// Zadatak sa filter():
// Filtrirati niz tako da sadrži samo stringove duljine veće od 5.

// Zadatak sa forEach():
// Ispisati samo one stringove koji počinju sa slovom 'A'.

// Zadatak sa reduce():
// Izračunati najveći broj u nizu.

// Zadatak sa filter():
// Filtrirati niz tako da sadrži samo brojeve koji su manji od 50.

// Zadatak sa forEach():
// Ispisati samo one elemente niza koji su jednaki indeksu na kojem se nalaze.





const numbers = [2, 5, 10, 15, 20, 25, 30];
const grades = [85, 90, 75, 95, 80];
const strings = ["apple", "banana", "orange", "grape", "watermelon"];
const mixedArray = [3, 15, "apple", 25, "orange", 10, "banana", 40];

// 1.
numbers.forEach((value)=>{
    console.log(value)
})

// 2.

const sum=numbers.reduce((result,value,index,array)=>{
    console.log(result,value)

    return result+value
},0)
console.log(sum)


// const sum1 = numbers.reduce((accumulator, currentValue, index, array) => {
//     console.log("Trenutni akumulator:", accumulator, "Trenutna vrijednost:", currentValue);
//     return accumulator + currentValue;
// }, 0);

// console.log("Zbroj svih brojeva u nizu je:", sum1);

//3.

const evenNum=numbers.filter(number=>number % 2===0);
console.log("Parni brojevi u nizu su:", evenNum);


// 4.

numbers.forEach(number=>{
    if(number>10){
        console.log("Brojevi veci od 10 su:" + " " + number)
    }
})

// 5.

const prosjek = grades.reduce((sum, ocjena, index, array) => {
    sum += ocjena;
    if (index === array.length - 1) {
        return sum / array.length;
    } else {
        return sum;
    }
}, 0);

console.log("Prosjek ocjena je:", prosjek);


// 



