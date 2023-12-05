const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
    
      email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      },
      otp:{
        type:Number,
        //required:true
      },
      fname: {
        type:String,
        require:true
      },
      lname: {
        type:String,
        require:true
      },
      phone:{
        type:Number,
        require:true
      },
 
    city:
    {
      type:String
    },
    bio:
    {
      type:String
    },
   
    }
  );
  
  module.exports = mongoose.model("User", userSchema);
  
  
  