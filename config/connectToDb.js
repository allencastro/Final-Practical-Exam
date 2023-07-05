//load the env variables
if(process.env.NODE_ENV != "production"){
    require("dotenv").config() 

}

//import mongoose
const mongoose = require('mongoose')

async function connectToDb(){
    try{
       await mongoose.connect(process.env.DB_URL)
        console.log("Connected To DB")

    }catch (error) {
        console.log(error) 

    }
}

module.exports = connectToDb