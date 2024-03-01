// async await es6
// try catch, http

const asyncFn = async()=>{
    const rand = Math.random();
    if (rand > 0.5) {
      console.log("we are in resolve");
      return resolve
    } else {
      console.log("we are in reject");
      throw new Error("This is error text")
    }
}


asyncFn().then((result)=>{
    console.log(result)
}).catch((error)=>console.log(error.message))


const fetchUser= async()=>{
    try {
        const result= await fetch("https://randomuser.me/api/")
const data = await result.json();
console.log(data)
return data;
        
    } catch (error) {
        console.log(error)
    }

};
fetchUser().then;

// http, internet, iso model, tcp and udp

// http methods
// GET,POST,PUT,DELETE
// get se koristi za uzimanje podataka,nema body, podatke saljete u url-u
// post se koristi za slanje podataka,ima body,podatke saljete u bodjiu
// put se koristi za slanje podataka,ima body,podatke saljete u bodjiu
// delete se koristi za brisanje podataka

// HTTPS STATUS CODES
// 100 informacioni kodovi
// 200 success kodovi
// 300 redirect kodovi
// 400 client errors
// 500 server error +
