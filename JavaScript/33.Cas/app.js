// array methods and es6
// sort
// some, concat, find, findIndex, join, every

// SORT

const arr=["a","b","c","f","h","m","z","u"]
const arr2=[2,3,7,6,22,8,9]

// arr2.sort((a,b)=>{
// if(a>b){
//     return 1
// }
// if(b>a){
//     return -1
// }
// return 0
// });


arr2.sort((a,b)=>a-b);

console.log(arr2)


const mockData = [
    {
      name: "Alice",
      surname: "Doe",
      age: 25,
      address: "123 Main St, Cityville",
    },
    {
      name: "Enver",
      surname: "Kurahovic",
      age: 16,
      address: "Novi Pazar",
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
    {
        name: "Benjamin",
        surname: "Ahmetovic",
        age: 45,
        address: "456 Oak St, Townsville",
      },
  ];

  mockData.sort((a,b)=>a.age-b.age); //a-b ascending --- b-a descending

  console.log(mockData)

mockData.sort((a,b)=>{
    if(a.name>b.name){
        return 1
    }
    if(b.name>a.name){
        return -1
    }
    return 0
})

console.log(mockData)



// 
const arr3=[1,2,6,4,7,3,"a","b"]

const numbereddArr=arr3.filter((value)=>{
    if(typeof value === "number"){
        return true
    }
    return false
}).sort((a,b)=>a-b); //chaining

console.log(numbereddArr)

const stringArray=arr3.filter((value)=>{
    if(typeof value !== "number"){
        return true
    }
    return false
}).sort(); // chaining

const combinedArr= stringArray.concat(numbereddArr)
console.log(combinedArr)



// array.join string.split

const str= "Ovo je neki string"

const arr5=str.split(' ')

const str2=arr5.join(' ')
console.log(str2)


// napravite funkciju koja uzima neku recenicu i pravi od nje kebabcase

function makeKebabCase(recenica){
    const array=recenica.split(' ')
    const array2=array.join('-')
    return array2
}
console.log(makeKebabCase(str))
// makeKebabCase("Hocu ovo da bude kebab case.")


//  find findIndex

const arrr=[1,2,3,4,5,6];

const found=arrr.find((value)=>{
    if(value===3)return value
})

console.log(found)



const found2=arrr.findIndex((value)=>{
    if(value===3) return true
})

console.log(found2)

// nadji u mockdata objekat u kome je ime jednako enver


const foundEnver=mockData.find((value)=>{
    if(value.name==="Enver") return true
})

console.log(foundEnver)

// nadji index obj mockdata "smith"

const foundAhmetovic=mockData.findIndex((value)=>{
    if(value.surname==="Ahmetovic") return true
})

console.log(foundAhmetovic)

// every some

const arr10=[1,3,5,7,9]

const check=arr10.every((value)=>{
    if(value % 2===0){
        return false
    }
    return true
})

console.log(check)


const check2=arr10.some((value)=>{
    if(value % 2===0){
        return true
    }
    return false
})

console.log(check2)

// proverite da li niz arr11 ima bar jedan string

const arr11=["1",2,3,5,"6"]

const checkString=arr11.some((value)=>{
    if(typeof value === "string"){
        return true
    }
    return false
})

console.log(checkString)

const checkNum=arr11.every((value)=>{
    if(typeof value === "number"){
        return true
    }
    return false
})

console.log(checkNum)

const checkAge=mockData.some((value)=>{
    if(value.age > 40){
        return true
    }
    return false
})

console.log(checkAge)