//  ES6 + array methods
// reduce, forEach

const arr=[1,2,3,4,5,6]
const arr2=[]

arr.forEach((element, index)=>{
arr2.push({element:element,index:index})
})

console.log(arr2)


// // koristeci forEach clg= sve elemente niza arr

// arr.forEach((value)=>{
// console.log(value)
// })

// // koristeci foreach obrisite sve elemente niza arr

// arr.forEach((value)=>{
//     arr.splice(0)

// })

// console.log(arr)


// reduce

// const sum=arr.reduce((result,value,index,array)=>{
// console.log(result,value);

// return result + value
// },0)


// ubaciti sve elemente niza arr u objekat sa keyoom indexom tog elementa


// const convert=arr.reduce((result,value,index)=>{
// console.log(result,value)
// let key=""
// if(index===0){
// key="nula"
// }
// if(index===1){
//     key=
// }
// result[index]=value

//     return result
// },{})

// console.log(convert)


const mockData = [
    {
      name: "John",
      surname: "Doe",
      age: 25,
      address: "123 Main St, Cityville",
    },
    {
      name: "Enver",
      surname: "Kostic",
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
    {
        name: "Benjamin",
        surname: "Ahmetovic",
        age: 30,
        address: "456 Oak St, Townsville",
      },
  ];

//   treba da dobijete imena u nizu svih korisnika koji su stariji od 24


const userArray=mockData.filter((item)=>item.age >24).map((item)=>item.name);

console.log(userArray)

const location=mockData.reduce((result,value)=>{
if(value.address.includes("Townsville")){
    result.push(value.address)
}
    return result
}, [])

console.log(location)