// fecajte sa ovog apija : https://api.quotable.io/quotes/random sa get metodom podatke i zatim ih clg

// clg autora i content iz quota kojeg dobijete sa apija

fetch("https://api.quotable.io/quotes/random")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data[0].author)
    console.log(data[0].content)
  })
  .catch((error) => {
    console.log(error);
  });


//   uradite sve sto u prethodnom zadatku , ali koristeci async await
// takodje koristite try catch

// const fetch1=async()=>{
//     try{
//         const result= await fetch("https://api.quotable.io/quotes/random")
//         const data= await result.json()
//         console.log(data)
//     console.log(data[0].author)
//     console.log(data[0].content)
//         return data
//     }catch(error){
//         console.log(error)
//     }
// };

// fetch1()

// napisite asinkronu funkciju koja fetcha podatke sa apija;
// https://api.quotable.io/quotes
// funkciju u koju saljete podatke sa ovog apija ta funkcija vraca objekat gde je quote najduzi.


const getLongestQuote= (data)=>{
    let longestQuote;
    data.results.forEach((element,index) => {
        if(!longestQuote){
            longestQuote= element
        }
        if(longestQuote){
            if(longestQuote.content.length<element.content.length){
                longestQuote = element;
            }
        }
        console.log(index,element.content.length)
    });
    return data
}

const getShortestQuote= (data)=>{
    let shortestQuote;
    data.results.forEach((element,index) => {
        if(!shortestQuote){
            shortestQuote= element
        }
        if(shortestQuote){
            if(shortestQuote.content.length>element.content.length){
                shortestQuote = element;
            }
        }
        console.log(index,element.content.length)
    });
    return data
}


const fetchQuotes=async()=>{
    try{
        const result= await fetch("https://api.quotable.io/quotes")
        const data= await result.json()
        console.log(data)
       console.log("Longest quote is:" + getLongestQuote(data))
       console.log("Shortest quote is:"+ getShortestQuote(data))
        return data
    }catch(error){
        console.log(error)
    }
};

fetchQuotes()



