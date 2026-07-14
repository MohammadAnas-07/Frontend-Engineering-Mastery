const list = document.getElementById("list")

list.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        console.log(e.target.innerText)
    }
})
