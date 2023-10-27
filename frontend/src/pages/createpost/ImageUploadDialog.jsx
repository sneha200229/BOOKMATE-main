import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, Input, Box, Stack, Typography } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import styled from '@emotion/styled';
import axios from "axios"

const ImageUploadDialog = ({ open, onClose }) => {
  const [bookImage, setImage] = useState(null);
  const [url,setUrl]=useState('');
  const [bookName, setInput1] = useState('');
  const [bookAuthor, setInput2] = useState('');
  const [bookDescription, setInput3] = useState('');
 
  const handleSave = async () => {
    try {
      const data = new FormData();
      data.append("file", bookImage);
      data.append("upload_preset", "bookMate");
      data.append("cloud_name", "sneha2002");
  
      fetch("https://api.cloudinary.com/v1_1/sneha2002/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url); // Set the Cloudinary image URL
          // Now, send the book details to your server
          fetch("http://localhost:5001/storeBook", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              bookName,
              bookAuthor,
              bookDescription,
              image: data.url, // Use the Cloudinary image URL
            }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
  
      alert("Book details saved");
    } catch (error) {
      console.error("Error saving book details:", error);
    }
  };
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);

    }
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleDialogClose = () => {
    setImage(null);
    setInput1('');
    setInput2('');
    setInput3('');
    onClose();
  };
  return (
    <Dialog open={open} onClose={handleDialogClose} >
      <DialogTitle>Create your book post</DialogTitle>
      <DialogContent sx={{mx:'20px'}}>
        <Stack direction='row' spacing={4}>

        <Box width='50%'> 
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                    required
                   // value={image}
                />
         <label htmlFor="image-upload">
            <Button variant="outlined" component="span"  >
             Upload Image
             
            </Button>
          </label>
          {bookImage && <img src={bookImage} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />}
          </Box>

          <Box paddingX={2} width='50%'>
            <Typography variant='h6'>Book name:</Typography>
          <TextField
            value={bookName}// value of bookname
            onChange={handleInputChange(setInput1)}
            variant="filled"
            margin="normal"
            required
            fullWidth
          />

        <Typography variant='h6'>Book author:</Typography>
          <TextField
            
            value={bookAuthor}//value of book author
            onChange={handleInputChange(setInput2)}
            variant="filled"
            margin="normal"
            required
            fullWidth
          />

        <Typography variant='h6'>About book</Typography>

        <TextareaAutosize
        required
        minRows={3}
        placeholder="Type something..."
        value={bookDescription}//value of book description
        onChange={handleInputChange(setInput3)}
        style={{ width: '100%', margin:'10px 0' }}
      />
          
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleSave}>
            Post
          </Button>
          </Box>
        
        
        </Stack>
      </DialogContent>
    </Dialog>
  );
//};
}
export default ImageUploadDialog;

















