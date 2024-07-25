const express = require("express")
const cors = require("cors")

require("dotenv").config()
const connectDB = require("./config/db")

const app=express()
connectDB()
const PORT = 4000 || process.env.PORT

const apiRouter = require("./route")
const cookieparser = require("cookie-parser")


app.use(cors())

app.use(express.json())
app.use(cookieparser())
app.use("/api",apiRouter)
app.get ("/",(req,res)=>{
    res.send(working)
})

app.listen(PORT,() =>{
    console.log(`server is working on ${PORT} port`)
})