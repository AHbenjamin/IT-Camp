const a=10
console.log(typeof a,a);
const b= a.toString()
console.log(typeof b,b)

// Nacin 1. number()


const c = '10'
console.log(typeof c,c)

const d= Number(c)
console.log(typeof d,d)


// 2. parseInt()
// ova metoda takodje u slucaju da postoji broj sa decimalknim zapisom taj broj zaokruzuje na donjnu granicu npr. 3.9 --- rez 3

const e='10'
console.log(typeof e,e)
console.log(parseInt(e))

// parseFloat
// ova metoda cuva decimale 3.14 je 3.14 za razliku od parseInt()

const PI='3.14'
console.log(parseFloat(PI))

// toFixed()

const PI2=3.141592653589793238462643383279502884197
console.log(PI2.toFixed(3))


// toPrecsision()

