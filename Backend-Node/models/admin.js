const mongoose = require('mongoose')


const adminSchema= new mongoose.Schema({
    username:{
        type:String
    },
    hash:{
        type:String
    },
    blocked_links:[String]
})

module.exports= mongoose.model("Admin",adminSchema)