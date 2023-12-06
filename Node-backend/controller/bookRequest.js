
const express = require('express');
const router = express.Router();
const BookRequest = require('../models/bookRequest');
const Book = require('../models/book');

module.exports.bookrequest = async (req, res) => {
  try {
    const { ownerId, bookId } = req.body;

    console.log('Owner ID:', ownerId);
    console.log('Book ID:', bookId);

    // Use the ID of the logged-in user as the requesterId
    const requesterId = req.user._id;

    console.log('Requester ID:', requesterId);

    // Check if the request already exists
    const existingRequest = await BookRequest.findOne({
      requesterId,
      ownerId,
      bookId,
    });

    if (existingRequest) {
      return res.status(400).json({ message: 'Request already exists' });
    }
    

    // Create a new book request
    const newRequest = new BookRequest({
      requesterId,
    
      ownerId,
      bookId,
      status: 'pending', // Default status is pending
    });

    await newRequest.save();

    res.status(201).json({ message: 'Book request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// module.exports.acceptRequest = async (req, res) => {
//   const { requestId } = req.body;
//   console.log('Request ID:', requestId);

//   try {
//     // Check if the user is authenticated
//     if (!req.user) {
//       return res.status(401).json({ error: 'Unauthorized: User not authenticated' });
//     }

//     // Find the book request in the database
//     const bookRequest = await BookRequest.findById(requestId);
//     console.log('Found Book Request:', bookRequest);

//     if (!bookRequest) {
//       return res.status(404).json({ error: 'Book request not found' });
//     }

//     // Check if the authenticated user is the owner of the book
//     const ownerId = req.user._id;

//     if (String(ownerId) !== String(bookRequest.ownerId)) {
//       return res.status(403).json({ error: 'Unauthorized: Only the owner can accept requests for their books' });
//     }

//     // Update the book request status to "accepted"
//     bookRequest.status = 'accepted';
//     await bookRequest.save();

//     // Optionally, update the book status (e.g., mark it as borrowed)
//     // const book = await Book.findById(bookRequest.bookId);
//     // book.status = 'borrowed';
//     // await book.save();

//     // Send a success response
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error accepting request:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };



// module.exports.declineRequest = async (req, res) => {
//   try {
//     const { requestId } = req.params;

//     // Find the book request in the database
//     const bookRequest = await BookRequest.findById(requestId);

//     if (!bookRequest) {
//       return res.status(404).json({ error: 'Book request not found' });
//     }

//     // Check if the authenticated user is the owner of the book
//     const ownerId = req.user._id;

//     if (String(ownerId) !== String(bookRequest.ownerId)) {
//       return res.status(403).json({ error: 'Unauthorized: Only the owner can decline requests for their books' });
//     }

//     // Update the book request status to "declined"
//     bookRequest.status = 'declined';
//     await bookRequest.save();

//     // Send a success response
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error declining request:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };






//decline api working well without middleware//
module.exports.declineRequest = async (req, res) => {
  try {
    const { requestId } = req.body;
    console.log('Request ID:', requestId);


    // Find the book request in the database
    const bookRequest = await BookRequest.findById(requestId);
    console.log('Found Book Request:', bookRequest);

    if (!bookRequest) {
      return res.status(404).json({ error: 'Book request not found' });
    }

    // Update the book request status to "declined"
    bookRequest.status = 'declined';
    await bookRequest.save();
    console.log('Book Request declined:', bookRequest);


    // Send a success response
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error declining request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



//without using middleware-working fine//
module.exports.acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.body;
    console.log('Request ID:', requestId);

    // Find the book request in the database
    const bookRequest = await BookRequest.findById(requestId);
    console.log('Found Book Request:', bookRequest);

    if (!bookRequest) {
      return res.status(404).json({ error: 'Book request not found' });
    }

    // Update the book request status to "accepted"
    bookRequest.status = 'accepted';
    await bookRequest.save();

    // // Optionally, update the book status (e.g., mark it as borrowed)
    // const book = await Book.findById(bookRequest.bookId);
    // if (book) {
    //   book.status = 'borrowed';
    //   await book.save();
    // }

    // Send a success response
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error accepting request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
