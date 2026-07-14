const grandParent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandParent.addEventListener("click",()=>{
    console.log("GrandParent")
})

parent.addEventListener("click",(e)=>{
    console.log("Parent")
    console.log(e.currentTarget)
    console.log(e.target)
})

child.addEventListener("click",(e)=>{
    e.stopPropagation() // only child will propogate
    console.log("Child")
    console.log(e.target)
    console.log(e.currentTarget)
})