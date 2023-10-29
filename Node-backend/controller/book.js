const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const fs = require('fs');
const BookModel = require('../models/book');
const user = require("../models/user");
const userController = require('./user');
const requirelogin = require('../middlewares/requirelogin'); // Adjust the path to match your folder structure

//fetchbook
module.exports.fetchBook =(req, res) => {
 //console.log("req.user:", req.user._id);

 BookModel.find({postedBy:req.user._id})

.then((books) => {
      console.log(JSON.stringify(books, null, 2)); // Log the response data

      res.json(books);
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Error fetching books' });
    });
};

//storebook
module.exports.storeBook = (req, res) => {
  const{bookName,bookAuthor,bookDescription,image}=req.body;
  if(!bookName|| !bookAuthor|| !bookDescription)
  {
    return res.status(422).json({error:"please add all fields"})
  }
console.log(req.user)

  const newBook = new BookModel({
    bookName,
    bookAuthor,
    bookDescription,
    bookImage:image,
    postedBy:req.user
   
    
  });
  console.log('New Book:', newBook);
  
  newBook
    .save()
    .then((savedBook) => {
      //return res.json({newBook:savedBook})
     console.log('Book saved successfully:', savedBook);
     res.send({ code:200,message: 'Book stored successfully' });
    })
    .catch((error) => {
      res.send({code:500, message: 'Error storing book', error });
    });

};
//app.post('/storeBook', requirelogin, module.exports.storeBook);





// //displayFeed
// module.exports.displayFeed=async(req,res)=>
// {
//   try {
//     // Query the database for random books and user names
//     const randomBooks = await BookModel.aggregate([
//         { $sample: { size: 10 } } // Get 10 random documents
//     ]);

//     res.json(randomBooks);
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching random books' });
// }
// };
// module.exports.displayFeed = async (req, res) => {
//   try {
//     // Query the database for random books
//     const randomBooks = await BookModel.aggregate([{ $sample: { size: 10 }]);

//     // Use the populate function to fetch user information and select only the 'fname' field
//     const populatedRandomBooks = await BookModel.populate(randomBooks, {
//       path: 'author',
//       select: 'fname',
//     });

//     res.json(populatedRandomBooks);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error fetching random books' });
//   }
// };
module.exports.displayFeed = async (req, res) => {
  try {
    // Query the database for random books
    const randomBooks = await BookModel.aggregate([{ $sample: { size: 10 }}]);

    // Use the populate function to fetch user information and select only the 'fname' field
    const populatedRandomBooks = await BookModel.populate(randomBooks, {
      path: 'postedBy',
      select: 'fname',
    });

    res.json(populatedRandomBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching random books' });
  }
};
