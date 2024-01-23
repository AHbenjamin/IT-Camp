// let mesec=9

// // if(mesec===1){
// //     console.log("Januar")
// // }else if (mesec===2){
// //     console.log("Februar")
// // }else if(mesec===3){
// //     console.log("Mart")
// // }else if(mesec===6){
// //     console.log("Jun")
// // }

// switch(mesec){
//     case 1:
//         console.log("Januar")
//         break
//         case 2:
//             console.log("Februar")
//             break
//             case 3:
//                 console.log("Mart")
//                 break
//                 case 4:
//                     console.log("April")
//                     break
//                     case 5:
//                         console.log("Maj")
//                         break
//                         case 6:
//                             console.log("Jun")
//                             break
//                             case 7:
//                                 console.log("Jul")
//                                 break
//                                 case 8:
//                                     console.log("Avgust")
//                                     break
//                                     case 9:
//                                         console.log("Septembar")
//                                         break
//                                         case 10:
//                                             console.log("Oktobar")
//                                             break
//                                             case 11:
//                                                 console.log("Novembar")
//                                                 break
//                                                 case 12:
//                                                     console.log("Decembar")
//                                                     break
// }

// let novcanice=[10,5,20,50,5,10,100,20,50,5,10,20]
// let brojNovcanica=novcanice.length;
// console.log(brojNovcanica)

// let izbrojaneNovcanice=0

// //broji novcanice sve dok je brojac manji od broja novcanice 
// while(izbrojaneNovcanice<11){
//     izbrojaneNovcanice++;

// }
// console.log("broj izbrojanih novcanica" + ' ' +izbrojaneNovcanice)

// let novcanice=[10,5,20,50,5,10,100,20,50,]
// let brojNovcanica=novcanice.length;
// let brojac=0

// while(brojac<brojNovcanica){
//     console.log("---------")
//     console.log("Uslov prosao")
//     console.log(`novcanica na poziciji [${brojac}]: ${novcanice[brojac]}`);
//     brojac++
// }
// console.log("##KRAJ PETLJE##")
// if(brojac<brojNovcanica){
//     console.log("brojac je manji")
// }else{
//     console.log("brojac nije manji")
// }

// let ukupno=0

// for(let brojac=0;brojac<brojNovcanica;brojac++){
// console.log(novcanice[brojac])

// ukupno=ukupno+novcanice[brojac]
// }

// console.log('Ukupno imamo: ' + ukupno + ' eura.')



let automobili ={audi:['70000','2017','Q7'], 
bmw:['50000','2018','330D'],
mercedes:['60000','2016','E220']}

// for(automobil in automobili){
//     let naziv = automobil
//     let podaciVozila = automobili[automobil];

    
//     console.log(`${naziv} model: ${podaciVozila[2]}, 
//     godiste:${podaciVozila[1]}
//     cena: ${podaciVozila[0]} eura.`)
// }

// console.log(automobili['audi'])

console.log(automobili.audi)

// for(let automobil of automobili){
//     console.log(automobil)
// }

// automobili.forEach(function (automobil) {
//     console.log(automobil)

// });

