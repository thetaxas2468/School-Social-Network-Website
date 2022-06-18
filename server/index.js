const express = require("express");
var cors = require("cors");
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
require('dotenv').config();
const projects=require("./Routes/Projects")
const accounts=require("./Routes/Users/index");
const cookieParser = require("cookie-parser");

const app=express();
app.use(cors({
  origin:["http://localhost:3000"],
  methods:["GET","POST"],
  credentials:true
}));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser());






app.use("/projects",projects)
app.use("/account",accounts)






app.use((req,res)=>{
    res.status(404)
    res.send("404 page not found")
})





mongoose
  .connect(process.env.MONGO_URL, {dbName:process.env.DB_NAME ,useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      
    console.log("connected to mongoDB!")
    app.listen(process.env.SERVER_PORT,()=>{
      console.log("Server connected")
  })})
  .catch(() => console.log("failed to connect to mongoDB."));
