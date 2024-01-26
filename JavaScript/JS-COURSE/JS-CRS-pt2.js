let nekretnine={
    stan: 70000,
    kuca : 150000,
    plac: 30000
};

msRata(15,"stan")
msRata(5,"plac")
msRata(20,"kuca")

function msRata(godine,vrsta_nekretnine){
    let meseci= godine *12;
    let rata= nekretnine[vrsta_nekretnine] / meseci
    rata= rata.toFixed(2);
    
    console.log(`Mesecna rata za ${vrsta_nekretnine} iznosi ${rata} na ${godine} godina.`)

    }



// let godine=15
// let mesec=godine*12;
// let rata= nekretnine.stan / mesec
// rata=rata.toFixed(2);

// console.log(mesec + 'meseci.')
// console.log(rata + 'eura')
// console.log(`Mesecna rata za stan iznosi ${rata} na ${godine} godina.`)

// // ____________________________________
// // PLAC
// godine = 5;
// mesec = godine*12;
// rata = nekretnine.plac / mesec

// console.log(mesec + 'meseci.')
// console.log(rata + 'eura')
// console.log(`Mesecna rata za plac iznosi ${rata} na ${godine} godina.`)

// // KUCA

// godine = 20;
// mesec = godine*12;
// rata = nekretnine.kuca / mesec

// console.log(mesec + 'meseci.')
// console.log(rata + 'eura')
// console.log(`Mesecna rata za kucu iznosi ${rata} na ${godine} godina.`)
