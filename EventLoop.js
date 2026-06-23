//1. Call Stack

/* function one(){
    console.log("One")
}

function two(){
    one()
    console.log("Two")
}

two() */


/* console.log("A")

setTimeout(()=>{
    console.log("B")
}, 0)

console.log("C")

setTimeout(()=>{
    console.log("D")

}, 0) */


console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

for (let i = 0; i < 1000000000; i++) {}

console.log("End");

