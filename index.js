const express =require('express')

const app =express()

const dotenv =require('dotenv')

const routes=require('./routes/routes')

var cors = require('cors')

app.use(cors())

const DataBase=require('./dataBase/mongoDb')
const body=require('body-parser')
app.use(body.json())
dotenv.config()

// DataBase()

app.use(express.json({limit:"5mb"}))

app.use('/',routes)

app.listen(process.env.PORT,async ()=>{
    await DataBase()
    console.log("port connected")
})