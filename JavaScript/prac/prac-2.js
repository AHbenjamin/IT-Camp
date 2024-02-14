const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "orange", "grape"];
const students = [
    { name: "John", score: 85 },
    { name: "Jane", score: 90 },
    { name: "Doe", score: 75 },
    { name: "Alice", score: 95 }
];

// 1. zračunavanje prosječne duzine riječi u nizu stringova:

const totalLength= strings.reduce((result,string)=>{
    return result + string.length
},0)
const averageLength=totalLength/ strings.length;

console.log("Prosecna duzina reci je: " +  averageLength)

// 2.Spajanje niza stringova u jedan string:

const combinedString=strings.reduce((result,currentString)=>{
    return result+currentString
},"")
console.log(combinedString);



// 3.Izračunavanje faktorijela broja:

const broj=10;

const faktorijel=Array.from({length:broj},(_,index)=>index+1).reduce((result,value)=>{
    return result * value
},1)

console.log("Faktorijel broja",broj, "je:" , faktorijel)


// ispisati imena ucenika ciji je score veci od 85 koristeci filter metodu:

const userArray=students.filter((item)=>item.score >85).map((item)=>item.name);

console.log(userArray)

// nacin 2 .reduce()

const userArray1 = students.reduce((result, student) => {
    if (student.score > 85) {
        result.push(student.name);
    }
    return result;
}, []);

console.log(userArray);
