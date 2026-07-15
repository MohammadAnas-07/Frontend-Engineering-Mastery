// Multiple Parameters

function introduce(name = "Guest",city = "Delhi"){
    console.log(`${name} lives in ${city}`)
}
introduce()
introduce("Anas")


// Function Call

function getCity(){
    return "Mumbai"
}

function show(city = getCity()){
    console.log(city)
}
show()


// Interview Trap

function test(a = 10, b = a) {
    console.log(a, b);
}

test();


function intro(name = "Guest", city = "Delhi") {
    console.log(`${name} ${city}`);
}

intro("Anas");

// Homework

function add(a, b = 10) {
    return a + b;
}

console.log(add(5)); // 15