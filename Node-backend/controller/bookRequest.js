
const express = require('express');
const router = express.Router();
const BookRequest = require('../models/bookRequest');

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
