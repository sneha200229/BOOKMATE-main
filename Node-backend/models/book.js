const mongoose = require('mongoose')
//const {ObjectId}=mongoose.Schema.Types
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

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true,
    },
    // postedBy:{
    //   type:ObjectId,
    //   ref:User
    // }
  }
);

module.exports = mongoose.model("Book", bookSchema);







