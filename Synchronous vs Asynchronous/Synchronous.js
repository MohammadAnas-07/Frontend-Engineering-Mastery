function waitFiveSeconds(){
    const start = Date.now()

    while(
        Date.now - start < 5000
    ) {}
}

console.log("Start")

waitFiveSeconds()

console.log("End")