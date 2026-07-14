const express = require('express')
const cors = require('cors') // with cors
const app = express()
const PORT = 3000

app.use(cors())

app.get('/api/data', (req,res)=>{
    res.json({message: "ye backend se data aa rha hai"})
})

app.listen(PORT, ()=>{
    console.log(`Backend running on http://localhost:${PORT}`)
})