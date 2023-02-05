const mongoose=require('mongoose')



const links=new mongoose.Schema({
    url:{
        type:String
    },
    PctExtHyperlinks:Number,
    PctExtResourceUrls:Number,
    PctNullSelfRedirectHyperlinks:Number,
    PctExtNullSelfRedirectHyperlinksRT:Number,
    NumNumericChars:Number
    
})

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    hash:{
        type:String,
        required:true,
    },
    cwe_code:Number,
    access_authentication:Number,
    access_complexity:Number,
    access_vector:Number,
    impact_availability:Number,
    impact_confidentiality:Number,
    impact_integrity:Number,
    ports:[Number],
    links:[links]
    
})




module.exports=mongoose.model("User",userSchema)