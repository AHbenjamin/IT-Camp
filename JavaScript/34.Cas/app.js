// // Classes
// // Class synthethic sugar syntax
// // Prototype class syntax
// // OOP and OOP 4 pilar: inheritence, encapsulation, abstraction, polymorphism

// // Class

// class Auto{
//     type;
//     name;
//     yearOfManufacture;
//     price;

// constructor(type,name,yearOfManufacture,price){
//     this.type=type;
//     this.name=name;
//     this.yearOfManufacture=yearOfManufacture;
//     this.price=price;
// }
// getPrice(){
//     return `The price is ${this.price} euros`;
// }
// getPriceInCents(){
//     return `The price is ${this.price * 100} in cents`
// }
// calculatePdv(){
//     return `The pdv of the car is ${this.price / 5}`
// }
// }


// const a1=new Auto('BMW','M1',2012,35000);
// const a2=new Auto('Mercedes','C63',2012,85000);
// const a3=new Auto('Audi','A6',2019,55000);

// console.log(a1.getPrice())

// console.log(a2.getPriceInCents())

// console.log(a2.calculatePdv())
// console.log(a3.calculatePdv())


// // Prototype class

// function Auto2(name,price){
//     this.name=name;
//     this.price=price;

// }
// Auto2.prototype.getPrice=function(){
//     return this.price
// }

// const b1=new Auto2('BMW',12000);
// console.log(b1.getPrice())


// // Custom array method

// Array.prototype.myMap=function(callback){
//     const result=[]
//     this.forEach((value,index,array)=>{
// result.push(callback(value,index,array));
//     })
// return result
// }

// const newArr=[1,2,3,4].myMap((value)=>{
//     return value * 2
// })

// console.log(newArr)


// // Inheritance 

// class Mamal{
//     name;
// }

// class Human extends Mamal{

// }

// console.log(new Mamal(), new Human())

// // Implement myFilter on array prototype





// Array.prototype.myFilter=function(callback,initValue){
//     const result=[]
//     this.forEach((value,index,array)=>{
//         callback(value,index,array){
//             result.push(value)
//         }
//     })
//     return result
// }

// const noviArray=[2,4,6,7,8,9,10].myFilter((n)=>n % 2 == 0);
// console.log(noviArray)



// implement myReduce on array prototype

Array.prototype.myReduce=function(callback,initValue){
    let result =[];
    this.forEach((value,index,array)=>{
        callback(result,value,index,array);
    },0)
    return result 
}

const array5=[2,4,6,7,8,9,10].myReduce((callback,initValue)=>{
    return callback + initValue
})

console.log(array5)
