const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const fs = require('fs');
const BookModel = require('../models/book');
const UserModel = require("../models/user");
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
    postedBy:req.user._id
   
    
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

// //fetchbookofRequired User
// module.exports.fetchBookUser = async (req, res) => {
//   try {
//     const fnameToSearch = req.query.fname; // Get the fname from the request query parameters

//     // Use a case-insensitive regular expression to match the fname
//     const user = await UserModel.findOne({ fname: { $regex: new RegExp(fnameToSearch, 'i') }}).select('-password');

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const books = await BookModel.find({ postedBy: user._id });

//     if (books.length === 0) {
//       return res.status(200).json({ user, message: 'No books found for this user' });
//     }

//     // Extract book images from the books array
//     const bookImages = books.map((book) => book.bookImage);

//     res.status(200).json({ user, bookImages });
//   } catch (err) {
//     console.error('Error fetching books:', err);
//     res.status(500).json({ error: 'Server error in fetching books' });
//   }
// };


// module.exports.fetchBookOfUser = async (req, res) => {
//   try {
//     const userIdToSearch = req.query.userId; // Get the user ID from the request query parameters

//     const books = await BookModel.find({ postedBy: userIdToSearch });

//     if (books.length === 0) {
//       return res.status(200).json({ message: 'No books found for this user' });
//     }

//     // Extract book images from the books array
//     const bookImages = books.map((book) => book.bookImage);

//     res.status(200).json({ bookImages });
//   } catch (err) {
//     console.error('Error fetching books:', err);
//     res.status(500).json({ error: 'Server error in fetching books' });
//   }
// };
