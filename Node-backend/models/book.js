const mongoose = require('mongoose')
//const {ObjectId}=mongoose.Schema.Types
const User = require('../models/user'); // Adjust the path to the User model

const bookSchema = new mongoose.Schema(
  {
    bookName:{
      type:String,
      required:true
    },
    bookAuthor:{
      type:String,
      required:true
    },
    bookDescription:{
      type:String,
      required:true
    },
    bookImage: {
      type:String,
      require:true
    },
    postedBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  }
);

module.exports = mongoose.model("Book", bookSchema);







