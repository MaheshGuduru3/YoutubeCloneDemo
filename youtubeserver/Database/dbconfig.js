require('dotenv').config()
const mongoose = require('mongoose')
const MONGODB_URL =  process.env.MONGODB_URL

const DbConnect = async ()=>{
    try{

      await mongoose.connect(MONGODB_URL).then(()=>{
        console.log("Connected to the MongoDb Atlas Successfully...")
      })
    }
    catch(err){
        console.log(err.message)
    }
}

DbConnect()