// Objects
// Creating objects,accessing values in objects,adding all types as values, 
// cloning objects, transforming objects into arrays

let obj={name:10}
const obj1=new Object()

const obj2={key1:'This is a value 1',key2:false, key3: 12,key4: null, key5: NaN, key6: undefined, key7: function(){}}

// Accessing values in objects
// console.log(obj2)
// console.log(obj2.key1)
// console.log(obj2.key2)
// console.log(obj2.key3)
// console.log(obj2.key4)
// console.log(obj2.key5)
// console.log(obj2.key6)
// console.log(obj2.key7)

// passing by value , passing by reference

// function sum(a,b,o) {
//     a=20
//     b=30
//     o.name=20
//     console.log(a,b,o)
    
// }

// const x=2
// const y=3

// sum(x,y,obj)
// console.log(x,y,obj)


// obj2.key1="This is changed";

// console.log(obj2);

// "".toLowerCase()
// obj2.key7()

// Deleting keys 

// obj2.key1="";
// console.log(obj2)

// delete obj2.key1
// console.log(obj2)

// Cloning objects
// const obj2Clone= {...obj2}
// console.log(obj2)
// console.log(obj2Clone)
// delete obj2Clone.key1
// console.log(obj2,obj2Clone)

// const obj2Clone2= structuredClone(obj2); // ne moze da klonira funkcije
// console.log(obj2,obj2Clone2)

// 