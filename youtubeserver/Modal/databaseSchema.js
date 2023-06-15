const mongoose = require('mongoose')

const userinfo = new mongoose.Schema({
    email : {
        type : String,
        require,
        unique : true
    },
    displayName: {
        type : String,
        require, 
    },
    photoURL : {
        type : String,
    },
}, {
    timestamps : true
})

module.exports = mongoose.model("usercredentials" , userinfo )