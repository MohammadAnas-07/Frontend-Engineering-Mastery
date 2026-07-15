function add(a,...numbers){
    console.log(a)
    console.log(numbers)
}
add(10,20,30,40)

// Real Example

function total(...prices){
    let sum = 0

    for (const price of prices){
        sum+= price
    }

    return sum; 
}

console.log(total(100,200,300,400))


// Homework 1

function show(...names){
    console.log(names)
}

show("Anas","Ali","Ahmad")

// Homework 2

function test(a,...rest){
    console.log(a)
    console.log(rest)
}

test(10,20,30,40)