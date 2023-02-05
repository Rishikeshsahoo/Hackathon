const mongoose = require("mongoose");
const router = require("express").Router();
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const axios=require('axios')
require("dotenv").config();

router.post("/register", (req, res) => {
  const hashed_password = bcrypt.hashSync(req.body.username, 10);
  const user = new User({
    username: req.body.username,
    hash: hashed_password,
    cwe_code:req.body.cwe_code,
    access_authentication:req.body.access_authentication,
    access_complexity:req.body.access_complexity,
    access_vector:req.body.access_vector,
    impact_availability:req.body.impact_availability,
    impact_confidentiality:req.body.impact_confidentiality,
    impact_integrity:req.body.impact_integrity,
    ports:req.body.ports,
    links:req.body.links
  });

  user
    .save()
    .then((user) => {
      res.send({
        success: true,
        message: "user successfully created",
        user: user,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.send({
          success: false,
          message: "Username already in use",
          error: err,
        });
      } else {
        res.send({
          success: false,
          message: "Something wrong happened",
          error: err,
        });
      }
    });
});


router.get("/getAll",(req,res)=>{
  User.find({}).then(function (users) {
    res.send(users);
  })

})


router.post("/registermany", (req, res) => {
  req.body.alldata.forEach((item)=>{
    const hashed_password = bcrypt.hashSync(item.username, 10);
  const user = new User({
    username: item.username,
    hash: hashed_password,
    cwe_code:item.cwe_code,
    access_authentication:item.access_authentication,
    access_complexity:item.access_complexity,
    access_vector:item.access_vector,
    impact_availability:item.impact_availability,
    impact_confidentiality:item.impact_confidentiality,
    impact_integrity:item.impact_integrity,
    ports:item.ports,
    links:item.links
  });

  user
    .save()
    .then((user) => {
      res.send({
        success: true,
        message: "user successfully created",
        user: user,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.send({
          success: false,
          message: "Username already in use",
          error: err,
        });
      } else {
        res.send({
          success: false,
          message: "Something wrong happened",
          error: err,
        });
      }
    });
  })
  
});



router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
   
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  }
);


router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        //console.log("came in login1");

        return res.status(401).send({
          success: false,
          message: "could not find the user",
        });
      }
      if (!bcrypt.compareSync(req.body.password, user.hash)) {
        //console.log("came in login69");

        return res.status(401).send({
          success: false,
          message: "Incorrect password",
        });
      }
      

      const payload = {
        username: user.username,
        id: user._id,
      };

      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "10d",
      });
      
      user.lastLogin=Date.now().toString();
      user.save()
      .then((user)=>{console.log(`${user.username} logged in successfully`)})
      .catch((err)=>{console.log(err.message)})
      return res.json({
        success: true,
        message: "logged in successfully",
        token: `Bearer ${token}`,
      });
    })
    .catch((err) => {
      res.send({ error: err });
    });
});

router.post('/getPhishing',(req,res)=>{
  axios.post("http://localhost:8000/api/phishing/",{"PctExtHyperlinks":[0.00],"PctExtResourceUrls":[0.25],"PctNullSelfRedirectHyperlinks":[0],"PctExtNullSelfRedirectHyperlinksRT":[1],"NumNumericChars":[41]})
  .then((resp)=>{
    console.log("Yoo",resp.data)
    res.send({data:resp.data})
  })
  .catch((err)=>{ res.send((err.message))})
  
})

router.post('/getXss',(req,res)=>{
  axios.post("http://localhost:8000/api/xss/",{url:req.body.url})
  .then((resp)=>{
    console.log(resp.data)
    res.send({data:resp.data})
  })
  .catch((err)=>{ res.send((err.message))})
  
})

router.post('/getCvss',(req,res)=>{
  axios.post("http://localhost:8000/api/cvss/",{"cwe_code":[req.body.cwe_code],"access_authentication":[req.body.access_authentication],"access_complexity":[req.body.access_complexity],"access_vector":[req.body.access_vector],"impact_availability":[req.body.impact_availability],"impact_confidentiality":[req.body.impact_confidentiality],"impact_integrity":[req.body.impact_integrity]})
  .then((resp)=>{
    console.log(resp.data)
    res.send({"data":resp.data})
  })
  .catch((err)=>{console.log(err.message)})
  console.log("aaya")
  // res.send({"hi":"hi"})
  
})


module.exports = router;
