document.getElementById('btn').addEventListener('click',()=>{
    fetch(`http://localhost:3000/api/data`)
    .then(res => res.json())
    .then(data =>{
        document.getElementById('result').innerText = data.message;
    })
    .catch(err=>{
        console.error(err)
        document.getElementById('result').innerText = "Error" + err
    })
})