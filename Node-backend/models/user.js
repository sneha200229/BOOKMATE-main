const mongoose = require('mongoose')
//module.exports = mongoose.model('User',{email:String,password:String,otp:Number,fname:String,lname:String,phone:Number});
const{ObjectId}=mongoose.Schema.Types
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
    //   followers:[{type:ObjectId,ref:"User"}],
    //   following:[{type:ObjectId,ref:"User"}]
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
  
  
  