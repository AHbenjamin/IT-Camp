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

// 3.

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