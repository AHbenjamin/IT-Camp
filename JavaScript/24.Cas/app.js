// U nekoj literaturi cemo naci da je js interpreterski jezik.Medjutim to nije bas tako u potpunosti
// Naime u pozadini js masina kompajlira skript pre samog izvrsenja, te mozemo reci da je kompajlerski jezik


var x
x=15

let y
y=10

const z=5

w=20

// Hoisting predstav;ja izvlacenje deklaracija na vrhu skripte kako bi se one mogle kristiti.

prom =5
var prom;

console.log(prom)


const zbirCifara=(broj)=>{
const strBroj=broj.toString()
let brojac=0;
for(let i=0;i<strBroj.length;i++){
brojac+= +strBroj[i]
}
return brojac
}
console.log(zbirCifara(234))

function second(A,Z){
    const B= A.replace(Z,"");
    return B
}
console.log(second("Madagaskar",/a/g));