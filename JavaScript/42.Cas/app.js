
import fetch from "node-fetch"

console.log("IM HERE")

const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.log(error);
    }
  };

  fetchQuote.then((resolve)=>{
    console.log(resolve)
  })