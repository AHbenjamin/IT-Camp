// function removeEvenNumbers(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         if (num % 2 !== 0) {
//             result.unshift(num); // Add the element to the beginning of the result array if it's odd
//         } else {
//             // If it's even, do nothing (skip it)
//         }
//     }
//     return result;
// }

// // Test the function
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = removeEvenNumbers(numbers);
// console.log(result); // Output: [1, 3, 5, 7, 9]




// function removeOddNumbers(array){
//     let rez=[]
//     for(let j= 0;j<array.length;j++){
//         let num=array[j];
//         if(num % 2!==0){
//             rez.unshift(num);
//         }else{

//         }
//     }
//     return rez
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let rez = removeOddNumbers(numbers);
// console.log(rez);



function removeOddNumbers(array) {
    let rez = [];
    for (let j = 0; j < array.length; j++) {
        let num = array[j];
        if (num % 2 === 0) {
            rez.push(num);
        } else {
            // If it's odd, do nothing (skip it)
        }
    }
    return rez;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rez = removeOddNumbers(numbers);
console.log(rez); // Output: [2, 4, 6, 8, 10]
