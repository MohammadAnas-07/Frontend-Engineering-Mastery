/* const promise = new Promise(
    (res,rej)=>{
        res("Data Received")
    }
)
console.log() */


//Example of then()

/* const promise = new Promise(
    (res,rej)=>{
        res("Anas")
    }
)

promise.then(data=>{
    console.log(data)
}) */

//Example of catch()

/* const promise = new Promise(
    (res,rej)=>{
        console.log("Something Went Wrong")
    }
)

promise.catch(error=>{
    console.log(error)
}) */



//Example of finally()    
/* 
function fetchUser(){
    return new Promise(
        (res,rej)=>{
            setInterval(() => {
                res("Anas")
            }, 2000);
        }
    )
}

fetchUser()
    .then(user=>{
        console.log(user)
    }) */




 /* new Promise((res)=>{
    res(5)
})

.then(num=>num+5)
.then(num=>num*2)
.then(result=>console.log(result)) */


//IT
/* console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("C");
    });

console.log("D");   */     

// A
// D
// C
// B

//Event Loop hamesha VIP treatment Microtask Queue ko deta hai.
//  Wo Call Stack khali hone ke baad pehle saare Microtasks ko clear karega, 
// aur uske baad hi kisi Macrotask ko andar aane dega.


console.log(1);

Promise.resolve()
    .then(() => console.log(2));

console.log(3);