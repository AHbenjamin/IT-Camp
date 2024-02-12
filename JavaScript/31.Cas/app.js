// Array functions, es6
// map, filter

// es6 or ecmascript
// let,const,arrow function,array methods(map,filter,reduce...)

const arr=[1,2,3,4,5,6]

const arr2=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return`this is number ${value}, with index ${index}`
})

console.log(arr2)

// napraviti novi array sa elementima arraya arr: arr element *2

const arr3=arr.map((value)=>{
    return value *2
})

console.log(arr3)


// napraviti novi niz koji iz niza sklanja svaki paran broj i menja ga sa undefined


const arr4=arr.map((value)=>{
if(value % 2 === 0){
    return undefined;

}else{
    return value
}

}
    )

    console.log(arr4)


    const arr5=arr.map((value)=>{
        if(value % 2 !== 0){
            return value*value;
        
        }else{
            return value
        }
        
        }
            )
        
            console.log(arr5)


            
 const arr6= "This is an array created from a string".split(" ")           

//  napraviti novi array koji sve stringove iz niza arr pretvara u uppercase

const arr7=arr6.map((value)=> value.toUpperCase())
console.log(arr7)


const arr8=arr.filter((value)=>{ // .filter sklanja vrednost
    if(value % 2 ==0){
        return false
    }
    return true
})

// return value % 2 !==0;

console.log(arr8)




// skolimniti iz niza sve elemente koji imaju slovo a


const arr9=arr6.filter((value)=>{
    if(value.includes("a")){ // return !value.includes("a")
        return false
    }else return true
})

console.log(arr9)

const mockData = [
    {
      name: "John",
      surname: "Doe",
      age: 25,
      address: "123 Main St, Cityville",
    },
    {
      name: "Alice",
      surname: "Smith",
      age: 30,
      address: "456 Oak St, Townsville",
    },
    {
      name: "Bob",
      surname: "Johnson",
      age: 22,
      address: "789 Pine St, Villagetown",
    },
    {
      name: "Eva",
      surname: "Brown",
      age: 28,
      address: "101 Elm St, Hamletsville",
    },
  ];

//   const userNames=mockData.map((value)=>{
//     return value.name + " " + value.surname
//   })

//   console.log(userNames)

//   novi niz koji ima ime i prezime u stringu

// novi niz svih korisnika koji su stariji od 24

// const userNames=mockData.filter((value)=>{
//     if(value.age >24){  // value.age >24
//         return true
//     }
    
// return false
//   })

//   console.log(userNames)


//   niz svih korisnika cije prvo slovo imena je samoglasnik

const userNames=mockData.filter((value)=>{
   switch(value.name[0].toLowerCase()){
    case  "a":
    case "e":
    case  "i":
    case  "o":
    case  "u":
     return true;
     break
     default:
        return false
   }
  })

  console.log(userNames)

  