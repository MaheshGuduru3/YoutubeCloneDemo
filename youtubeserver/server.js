const express  = require('express')
const app = express()
const db = require('./Database/dbconfig')
const Allroutes = require('./Routes/route')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

app.use(cors({ origin : true}))
app.use('/api',Allroutes)


app.use(express.json())

   

app.get('/',(req,res)=>{
    console.log("first")
    res.status(200).json({message : "Here Welcome to the Hello World...."})
})

const connecting = ()=>{
    app.listen(port,()=>{
        console.log("server is connected...")
    })
}
connecting()