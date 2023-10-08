const fs = require('fs');
const BookModel = require('../models/book');
module.exports.storeBook = (req, res) => {
  console.log(req.body);
  //const { bookName, authorName, title, description } = req.body;
  // Assuming 'image' is the file input field name
  // const image = req.file;  // Assuming you're using middleware to handle file uploads
  // if (!image) {
  //   return res.status(400).json({ message: 'No image provided' });
  // }
  // Read the image file and convert it to Base64
  //const imageBase64 = fs.readFileSync(image.path, { encoding: 'base64' });

  const newBook = new BookModel({
    bookName:req.body.bookName,
    bookAuthor:req.body.bookAuthor,
    bookDescription:req.body.bookDescription,
    // bookImage: {
    //   image: imageBase64,  // Store Base64 string as the image
    // },
  });

  newBook
    .save()
    .then(() => {
      res.send({ code:200,message: 'Book stored successfully' });
    })
    .catch((error) => {
      res.send({code:500, message: 'Error storing book', error });
    });
};


