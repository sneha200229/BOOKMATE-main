
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, Input, Box, Stack, Typography } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import styled from '@emotion/styled';
import axios from "axios"

const ImageUploadDialog = ({ open, onClose }) => {
  //const [selectedFile, setSelectedFile] = useState(null);//new
  const [image, setImage] = useState(null);
  const [bookName, setInput1] = useState('');
  const [bookAuthor, setInput2] = useState('');
  const [bookDescription, setInput3] = useState('');
  /*new code*/
  /*const handleFileChange = (event) => {//new
    setSelectedFile(event.target.files[0]);
  };*/
  // const handlePostClick = async() => {
  //   if (!selectedFile) {
  //     alert('No image selected.');
  //     return;
  //   }
   //   const formData = new FormData();
  //   formData.append('image', selectedFile);
   // formData.append('bookName', bookName);  // Append bookName
    //formData.append('bookAuthor', bookAuthor);  // Append bookAuthor
    //formData.append('bookDescription', bookDescription);
  //   axios.post('http://localhost:5001/storeBook', formData)
  //   .then((response) => {
  //     console.log('Image successfully stored:', response.data);
  //    })
  //   .catch((error) => {
  //     console.error('Error storing image:', error.response);
  //   });
  // }
  const handleSave=async()=>{
    try {
      // Prepare the user data from your form
      const bookData = {
        bookName:bookName , // Replace with your form data
        bookAuthor:bookAuthor,
        bookDescription:bookDescription,
      };
      // Send a POST request to the backend API
      await axios.post('http://localhost:5001/storeBook',bookData);
      alert('book details saved')
     // navigate('/signin')
    } catch (error) {
      console.error('Error saving details', error);
      alert("saving failed")
      // Handle the error, e.g., display an error message to the user
    }











  }
  const handleImageChange = (event) => {
   // setSelectedFile(event.target.files[0]);//new
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      //setSelectedFile(file);//new

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
          {image && <img src={image} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />}
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