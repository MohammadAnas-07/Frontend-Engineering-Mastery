
async function getData() {

    const user = await fetchUser()

    const posts = await fetchPosts(user.id)

    const comments = await fetchComments(
        posts[0].id
    )

    console.log(comments)
    
}


//Example

function getUser(){
    return  new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Anas")
        },2000)
        
    })
}

async function main(){
    const user = await getUser()

    console.log(user)
}
main()


//Error Handling

function fetchUser(){
    return  new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Anas")
        },2000)
        
    })
}

async function main(){
     
    try {
        const data = await fetchUser()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}    
main()



//Interview Question
async function greet() {
    return "Anas";
}

greet()
     .then(data => {
    console.log(data);
});


//1.
async function test(){
    return 100
}
console.log(test())

//2.
async function demo(){
    console.log("A")

    await Promise.resolve()

    console.log("B")
}
demo()

console.log("C")

//3.

console.log("Start");

async function test() {

    console.log("Inside");

    await Promise.resolve();

    console.log("After Await");

}

test();

console.log("End");




// Senior Frontend Interview Question

console.log("A")

async function test(){
    console.log("B")

    await Promise.resolve()

    console.log("C")
}

test()

Promise.resolve()
   .then(()=>{
    console.log("D")
   })
console.log("E")   

// A B E C D