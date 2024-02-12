// const names =['james','lily','jess','savy']

// names.forEach((name)=> console.log(name));

// const myForEach=(arr,cb)=>{
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         cb(element)
        
//     }
// }

// myForEach(names,(name)=>{
//     console.log(name)
// })


function sumirajNiz(niz,callBack){
    let suma =0

    for(let i =0;i<niz.length;i++){
        suma+=niz[i]
    }
    callBack(suma)
}
let mojNiz=[1,2,3,4,5];

function prikaziRez(suma){
    console.log("Suma niza je: " + suma);
}

sumirajNiz(mojNiz,prikaziRez)





function saberiNiz(niz,callback){
    let suma =0

    for(let i =0;i<niz.length;i++){
        suma += niz[i]
    }
    callback(suma)
}
let mNiz=[1,2,3,4,5,6,7,8,9,10]

function showNiz(suma){
    console.log("SUma je : " + suma)
}

saberiNiz(mNiz,showNiz)



