const heading = document.getElementById("heading")
const taskInput = document.getElementById("taskInput")
const taskForm = document.getElementById("taskForm")
const taskList = document.getElementById("taskList")

taskForm.addEventListener("submit", function(event){
    event.preventDefault()

    const task = taskInput.value.trim()

    if(task === ""){
        alert("Please enter a task")
        return
    }

    const li = document.createElement("li")

    li.textContent = task
    taskList.appendChild(li)
    taskInput.value = ""

    const button = document.createElement("button")
    button.textContent = "❌"
    button.classList.add("delete-btn")
    li.appendChild(button)

})

taskList.addEventListener("click", (event)=>{

    if(event.target.classList.contains("delete-btn")){
        const li = event.target.closest("li")
        li.remove()
    }

    if(event.target.tagName === "LI"){
        const li = event.target.closest("li")
        li.classList.toggle("completed")
    }
})