// import React, { useState,useEffect } from 'react';
// import axios from "axios"
// import { CheckBox, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share } from '@mui/icons-material';
// import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
// const Post = ()=>{


//   const [randomBooks, setRandomBooks] = useState([]);

//   useEffect(() => {
//       // Make an API request to get random books with user names
//       axios.get("http://localhost:5001/displayFeed")
//           .then((response) => {
//               setRandomBooks(response.data);
//           })
//           .catch((error) => {
//               console.error('Error fetching random books:', error);
//           });
//   }, []);

















//     return(

//       <div>
//       {randomBooks.map((book, index) => (
//           <div key={index}>    
// <Card sx={{marginBottom:'10px'}} style={{ backgroundColor:'#EEF1F4' }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVert />
//           </IconButton>
//         }
//         //title="John Doe"
//         User Name: {book.userName}

//        // subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height='600'
//         alt="Paella dish"
//         //image='https://edit.org/images/cat/book-covers-big-2019101610.jpg'
//          img={book.bookImage} alt="Book Image" 

//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          <p>Book Description: {book.bookDescription}</p>

//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//         <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:'red'}}/>} />
//         </IconButton>
//         <IconButton aria-label="share">
//           <Share />
//         </IconButton>
//       </CardActions>
      
//     </Card>

// </div>
// ))}
// </div>

// // <div>
// // {randomBooks.map((book, index) => (
// //     <div key={index}>
// //         <img src={book.bookImage} alt="Book Image" />
// //         <p>User Name: {book.userName}</p>
// //         <p>Book Description: {book.bookDescription}</p>
// //     </div>
// // ))}
// // </div>








//     );
// }
// export default Post

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {CheckBox,ExpandMore,Favorite,FavoriteBorder,MoreVert,Share,} from '@mui/icons-material';
import {Avatar,Box,Card,CardActions,CardContent,CardHeader,CardMedia,Checkbox,IconButton,Typography,} from '@mui/material';

const Post = () => {
  const [randomBooks, setRandomBooks] = useState([]);

  useEffect(() => {
    // Make an API request to get random books with user names
    axios
      .get('http://localhost:5001/displayFeed')
      .then((response) => {
        setRandomBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching random books:', error);
      });
  }, []);

  return (
    <div>
      {randomBooks.map((book, index) => (
        <div key={index}>
          <Card sx={{ marginBottom: '10px' }} style={{ backgroundColor: '#EEF1F4' }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={book.userName} // Display the user name here 
            />
            <CardMedia
              component="img"
              height="600"
              alt="Book Image"
              image={book.bookImage} // Use the 'image' prop to specify the image source
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <p>Book Description: {book.bookDescription}</p>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Post;
