const mongoose = require('mongoose')
  const bookSchema = new mongoose.Schema({
    bookName: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookDescription: {
      type: String,
      required: true,
    },
    //bookImage: imageSchema,  // Include the image subdocument schema
  }); 
module.exports = mongoose.model('Book', bookSchema);