const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const router = require("express").Router();
const validateToken = require("../utils/utils").validateToken;
const Admin = require("../models/admin");
const User = require('../models/user')





router.post("/register", (req, res) => {
  const hashed_password = bcrypt.hashSync(req.body.password, 10);
  const admin = new Admin({
    username: req.body.username,
    hash: hashed_password,
  });

  admin
    .save()
    .then((admin) => {
      res.send({
        success: true,
        message: "Admin successfully created",
        user: admin,
      });
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.send({
          success: false,
          message: "Username already in use",
          error: err.message,
        });
      } else {
        res.send({
          success: false,
          message: "Something wrong happened",
          error: err.message,
        });
      }
    });
});

router.post("/login", (req, res) => {
  
  Admin.findOne({ username: req.body.username })
  .then((admin) => {
    if (!admin) {

      return res.status(401).send({
        success: false,
        message: "could not find the admin",
      });
    }
    if (!bcrypt.compareSync(req.body.password, admin.hash)) {

      return res.status(401).send({
        success: false,
        message: "Incorrect password",
      });
    }

    const payload = {
      username: admin.username,
      id: admin.id,
    };

    const token = jwt.sign(payload, process.env.ADMIN_SECRET_KEY, {
      expiresIn: "10d",
    });

    return res.json({
      success: true,
      message: "logged in successfully",
      token: `Bearer ${token}`,
    });
  });
});

router.get('/protected',validateToken,(req,res)=>{
  res.json({
    success:true,
    username:req.admin.username,
    id:req.admin.id
  });
})

module.exports=router

