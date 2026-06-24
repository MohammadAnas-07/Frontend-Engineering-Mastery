function throttle(fn,delay){

    let lastCall = 0

    return function(...args){

        console.log("Function Called")

        const now = Date.now()

        if(now - lastCall >= delay){

            console.log("Allowed")

            lastCall = now

            fn(...args)

        }
    }
}

function log(name){
    console.log(name)
}


const throttledLog =
    throttle(log,3000)

    
    setTimeout(()=>{
        throttledLog("Ali")
    },1000)
    
    setTimeout(()=>{
        throttledLog("Ahmed")
    },4000)
    
throttledLog("Anas")