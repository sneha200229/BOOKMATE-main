import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Leftbar from "../profile/components/Leftbar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageBox = ({ item, user }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleRequestBook = () => {
    // Fetch the book owner's ID from the backend or use the owner's ID if available
    const ownerId = item.postedBy; // Replace with the actual field from your book object

    // Fetch the requester's ID from the user state or use a similar approach
    const requesterId = user._id; // Replace with your actual user ID retrieval

    // Fetch the book ID from the item
    const bookId = item._id;

    // Make a POST request to the backend to send the book request
    fetch('http://localhost:5001/bookrequest', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({ requesterId, ownerId, bookId }),
    })
      .then((res) => {
        if (res.status === 201) {
          window.alert('Book request sent successfully!');
        console.log('Book request sent successfully');
        } else {
          throw new Error('Failed to send book request');
        }
      })
      .catch((error) => {
        window.alert('Failed to send book request. Please try again.');
        console.error(error);
      });
  };

  return (
    <Box>
      <ImageListItem onClick={handleImageClick} style={{ cursor: 'pointer' }}>
        <img src={item.bookImage} alt={item.bookName} style={{ width: '100%', height: '100%' }} />
      </ImageListItem>
      <Modal
        open={selectedImage !== null}
        onClose={handleCloseModal}
        aria-labelledby="image-details-modal"
        aria-describedby="image-details-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="image-details-modal" variant="h6" gutterBottom>
            {selectedImage && selectedImage.bookName}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Author: {selectedImage && selectedImage.bookAuthor}
          </Typography>
          <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
            Description: {selectedImage && selectedImage.bookDescription}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRequestBook}>
            Request Book
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default function AnotherUserProfile() {
  const [user, setUser] = useState("");
  const [books, setBooks] = useState([]);

  const { fname } = useParams();

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch(`http://localhost:5001/searchUser/${fname}`, {
      method: "get",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((result) => {
        console.log(result);
        setUser(result.user);
        setBooks(result.books);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            {fname}'s Images
          </Typography>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Leftbar />
        <Box flex={1}>
          {generateImageGrid(books, user)}
        </Box>
      </Box>
    </Box>
  );
}

const generateImageGrid = (books, user) => {
  return (
    <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={200}>
      {books.map((item) => (
        <ImageBox key={item._id} item={item} user={user} />
      ))}
    </ImageList>
  );
};


