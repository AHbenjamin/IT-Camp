// Domaci:
// 1.	Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 2.	Ispitati da li u unetom stringu ima više malih ili velikih slova. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// 3.	Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.



// 2.
function provera(string) {
    let brMs = 0;
    let brVs = 0;

    for (let i = 0; i < string.length; i++) {
        let trenutnoSlovo = string.charAt(i);
        if (/[a-z]/.test(trenutnoSlovo)) {
            brMs++;
        } else if (/[A-Z]/.test(trenutnoSlovo)) {
            brVs++;
        }
    }

    if (brMs > brVs) {
        return "Više malih slova.";
    } else if (brMs < brVs) {
        return "Više velikih slova.";
    } else {
        return "Jednako malih i velikih slova.";
    }
}

let unosStringa = prompt("Unesite string: ");
let rezultat = provera(unosStringa);
console.log(rezultat);

// 1.

function brMs(string) {
    let brMs = 0;

    for (let i = 0; i < string.length; i++) {
        let trenutnoSlovo = string.charAt(i);
        if (/[a-z]/.test(trenutnoSlovo)) {
            brMs++;
        }
    }

    return brMs;
}

let unosStringa2 = prompt("Unesite string: ");
let rezultat2 = brMs(unosStringa2);
console.log("Broj malih slova u stringu: " + rezultat2);



const malaSlova =(recenica)=>{
    let brMl=0;
    for(let i =0;i<recenica.length;i++){
        if(recenica[i]>="a" && recenica[i]<="z"){
            brMl++
        }
    }
    return brMl;
}
console.log(malaSlova("Koliko ima malih slova?"))
console.log("a".charCodeAt())
console.log("z".charCodeAt())

function isPalindrom(string){
    let reversedString="";
    for(let i =string.length -1;i>=0;i--){
        reversedString+=string[i];
    }
    if(string===reversedString){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrom("anavolimilovana"))

const recenica=(string)=>string.toLowerCase()
console.log(recenica("yuiAYUIO"))


const gap=(string)=>string.lastIndexOf(" ")
console.log(gap("Pera ima devojku"))

const duzinaPrveReci=(string)=>string.indexOf(" ")
console.log(duzinaPrveReci("danas smo bas tihi")) 

const firstAndLast=(A)=>{
    let B=""
    const firstWord=A.slice(0, A.indexOf(" "))
    const lastWord=A.slice(A.lastIndexOf(" "))
    return `${firstWord}${lastWord}`;
};
console.log(firstAndLast("Svuda podji, kuci dodji"))

