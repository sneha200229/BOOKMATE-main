const express=require("express");
const router=express.Router();
const mongoose=require("mongoose")
const fs = require('fs');
const BookModel = require('../models/book');


module.exports.fetchBook = (req, res) => {
  BookModel.find()
  //.populate("user","fname")
  //   path: 'user',
  //   select: 'fname lname' // Specify the fields to populate
  // })
    .then((books) => {
      console.log(JSON.stringify(books, null, 2)); // Log the response data

      res.json(books);
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Error fetching books' });
    });
};






















module.exports.storeBook = (req, res) => {
  const{bookName,bookAuthor,bookDescription,image}=req.body;
  if(!bookName|| !bookAuthor|| !bookDescription)
  {
    return res.status(422).json({error:"please add all fields"})
  }
  const newBook = new BookModel({
    bookName,
    bookAuthor,
    bookDescription,
   bookImage:image
    
  });
  console.log('New Book:', newBook);


  newBook
    .save()
    .then((savedBook) => {
      console.log('Book saved successfully:', savedBook);
      res.send({ code:200,message: 'Book stored successfully' });
    })
    .catch((error) => {
      res.send({code:500, message: 'Error storing book', error });
    });
};