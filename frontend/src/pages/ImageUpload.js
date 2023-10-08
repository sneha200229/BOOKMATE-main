/*import React, { useState } from 'react';
import React from 'react';

import axios from 'axios';

const ImageUpload = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    try {
      await axios.post('http://localhost:5001/api/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h2>Upload Book Image</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} required />
        <br />
        <label htmlFor="image">Select Image:</label>
        <input type="file" id="image" onChange={handleImageChange} accept="image/*" required />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;*/
