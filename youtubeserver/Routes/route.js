const express = require('express')
const route = express.Router()
const AllApis = require('../controllers/controller')

route.get('/',(req,res)=>{
    res.status(200).json({message : "routes are saying Welcome"})
})


route.post('/login' ,  AllApis.loginData)
route.post('/register' , AllApis.registerData)


module.exports = route