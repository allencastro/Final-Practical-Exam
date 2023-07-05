//load the env variables
if(process.env.NODE_ENV != "production"){
    require("dotenv").config() 

}



//importing the dependency
const express = require('express')
const connectToDb = require('./config/connectToDb')
const Note = require('./models/note')


//create a express application
const app = express();

//express config
app.use(express.json())

//Running connection to db
connectToDb()

//for routing
app.get("/",(req,res) =>{
    res.json({test:"hello world!"})

})

app.post('/notes', (req,res) =>{
    //get data from request body
    const title = req.body.title
    const body = req.body.body
    //create a new note using the data
    const note = Note.create({
        title: title,
        body: body,
    })
    //respond with the created Note
    res.json({note: note})
})
  
//starting the server
app.listen(process.env.PORT)