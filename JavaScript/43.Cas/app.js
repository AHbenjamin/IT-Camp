// closure and practice

// closure
function fn1(a){
    return function fn2(b){
        return a+b
    }
}

const a = fn1(20);
const b = fn1(10);
const sum = a(20);
const sumb = a(20);
const sum1 =a(10);
const sum1b =a(10);
const sum2=a(1);
const sum2b=a(1);

console.log(sum,sum1,sum2)


// currying



function memorize(){
    const memory={}

    return function(a){
        if(memory[a]){
            console.log("It already exist")
        }else{
            console.log("thanks for new samples");
            memory[a]=true;
        }
    };
}

const memory= memorize();
memory(10)
memory(10)
memory("Suad")
memory("next")
memory("Suad")
