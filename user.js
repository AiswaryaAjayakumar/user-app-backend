const bodyParser = require('body-parser')
var express= require('express')

var mongoose=require('mongoose')
const { userModel } = require('./models/usermodel')

var app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{

    res.send("WELCOME TO USER APP")
})
 

app.post('/user',(req,res)=>{

    var userObject= new userModel(req.body)

    res.json(userObject)
})


app.listen(process.env.PORT||3001,()=>{
    console.log("Server started at http://localhost:3001/")
})