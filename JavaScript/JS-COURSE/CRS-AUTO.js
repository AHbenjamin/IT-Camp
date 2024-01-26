// let brend = document.getElementsByTagName('span');


// for(let auto of brend){
//     console.log(auto.innerText)
// }

// let modeli = document.getElementsByClassName('automobil-model');

// for(let model of modeli){
//     console.log(model.innerText);
// }

// let najbolji = document.getElementById('recenica')

// console.log(najbolji.innerText)


// let brend = document.querySelectorAll('span');

// for(let auto of brend){
//     console.log(auto.innerText);
// }




// let modeli = document.querySelectorAll('.automobil-model')
// for(let model of modeli){
//         console.log(model.innerText)
// }




// let recenica=document.querySelector('#recenica');

// console.log(recenica.innerText)

// Selektovanje elementa po ID-u i briesanje iz html-a pomocu .remove()
let recenica = document.querySelector('#recenica')
recenica.remove();

let novi_el = document.createElement('div');
novi_el.classList = 'novi-element'; // Dodajemo klasu
novi_el.innerHTML = '<hr>Pozdrav!!!' // Dodajemo html i text

let body= document.querySelector('body'); // Selektujemo body tag
body.appendChild(novi_el); // Na kraju body taga dodajemo nas novi element



