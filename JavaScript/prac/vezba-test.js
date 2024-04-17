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


// niz imena koji su stariji od 24


const osobeStarije = mockData.filter((value)=>{
    if(value.age>24){
        return true
    }else{
        return false
    }
}).map((value)=>{
    return value.name
})

console.log(osobeStarije)

// drugi nacin
const osobeStarije1=mockData.filter((item)=>item.age >24).map((item)=>item.name);

// 1
const osobeLocation=mockData.filter((value)=>value.address.includes("Townsville")).map((value)=>value.name);
console.log(osobeLocation)
 
// 2

const osobeLocation1=mockData.reduce((accumulator,value)=>{
    if(value.address.includes("Townsville")){
        accumulator.push(value.name) //ako zelis da vratis ceo objekat accumulator.push(value)
    }
    return accumulator
}, [])
console.log(osobeLocation1)


// promisses

// const promise= new Promise((resolve,reject)=>{
//     const a = 1+5;
//     setTimeout(()=>{
// if(a===3){
//     resolve("tacno");
// }else{
//     reject("netacno")
// }
//     },1000)
// })


// promise.then((tacno)=>{
//     console.log(tacno)
// }).catch((netacno)=>{
//     console.log(netacno)
// })


// async await

const async=async()=>{
    const a=1+6;
    setTimeout(()=>{
if(a===3){
    console.log("tacno")
}else{
    console.log("netacno")
}
    },1000)
}


async()



// fetch

// fetch("https://api.quotable.io/quotes?page=1").then((data)=>{
//     // console.log(data)
//     return data.json()
// }).then((jos)=>{
//     // console.log(jos)
//     return jos.results
// }).then((results)=>{
//     console.log(results)
// })


const quotes=async()=>{
    try{
const getQuotes=await fetch("https://api.quotable.io/quotes?page=1")
const getJson=await getQuotes.json()
// return najduziQuote(getJson.results)
return najkraciQuote(getJson.results)
    }catch(error){
        console.log(error)
    }
}

quotes().then((result)=>{
    console.log(result)
})

function najduziQuote(data){
let najduziQuote;
data.forEach((value)=>{
    if(!najduziQuote){
        najduziQuote= value.content
    }else if (value.content.length>najduziQuote.length){
        najduziQuote=value.content
    }
})
return najduziQuote
}


function najkraciQuote(data){
    let najkraciQuote;
    data.forEach((value)=>{
        if(!najkraciQuote){
            najkraciQuote= value.content
        }else if (value.content.length<najkraciQuote.length){
            najkraciQuote=value.content
        }
    })
    return najkraciQuote
    }
