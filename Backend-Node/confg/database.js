const mongoose = require('mongoose')

const options={
useNewUrlParser:true,
useUnifiedTopology:true
}
mongoose.connect("mongodb://localhost/hackathon")
mongoose.connection.on("connected",()=>{console.log("database connected")})