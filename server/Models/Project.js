const mongoose=require("mongoose");

const Project = mongoose.Schema({


    authorFirstName:{
        type:String,
        required:true
    },
    authorLastName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }





});

module.exports=mongoose.model("projects",Project);