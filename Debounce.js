function debounce(fn,delay){

    let timer;

    return function(...args){

        clearTimeout(timer)

        timer = setTimeout(()=>{

            fn(...args)

        },delay)
    }
}

function search(value){

    console.log("Searching:", value)
}

const debouncedSearch = debounce(search,500)

debouncedSearch("Anas")


//Interview Question
function debounce(fn, delay){

    let timer;

    return function(...args){

        clearTimeout(timer);

        timer = setTimeout(()=>{

            fn(...args);

        }, delay);

    }

}

function greet(name){

    console.log(name);

}

const debouncedGreet =
    debounce(greet,1000);

debouncedGreet("A");

debouncedGreet("B");

debouncedGreet("C");