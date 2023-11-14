
// import React, { useState,useEffect } from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';

// export default function StandardImageList() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [data, setData] = useState([]); // To store fetched data


//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch("http://localhost:5001/fetchBook", {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Authorization:"Bearer "+localStorage.getItem("TOKEN")

//       },
//     })
 
//   .then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error("Failed to fetch data");
//     }
//   })
//   .then((result) => setData(result))
//   .catch((err) => console.error(err));
// }, []);


//   const handleImageClick = (item) => {
//     setSelectedImage(item);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };


//   return (
//     <div>
//       <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight="auto" id='imglist'>
//       {data.map((item) => (
//           <ImageListItem key={item._id} onClick={() => handleImageClick(item)}>
//             <img
//               src={item.bookImage} // Assuming bookImage contains the image URL
//               alt={item.bookName}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}


//       </ImageList>

//       <Modal
//         open={selectedImage !== null}
//         onClose={handleCloseModal}
//         aria-labelledby="image-details-modal"
//         aria-describedby="image-details-description"
        
//       >
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           {/* <Typography id="image-details-modal" variant="h6" gutterBottom>
//             {selectedImage && selectedImage.bookName}
//           </Typography>
//           <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//             {selectedImage && selectedImage.description}
//           </Typography> */}




// <Typography id="image-details-modal" variant="h6" gutterBottom>
//       {selectedImage && selectedImage.bookName}
//     </Typography>
//     <Typography variant="body2" color="textSecondary" gutterBottom>
//       Author: {selectedImage && selectedImage.bookAuthor}
//     </Typography>
//     <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//       Description: {selectedImage && selectedImage.bookDescription}
//     </Typography>
//           <Button variant="contained" color="primary" onClick={handleCloseModal}>
//             Request
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }






// import React, { useState,useEffect } from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// import { useParams } from 'react-router-dom';
// export default function StandardImageListUser() {

//   const [user,setUser]=useState("")
//   const [books,setBooks]=useState([])
//   const [selectedImage, setSelectedImage] = useState(null);
//  // const [data, setData] = useState([]); // To store fetched data


//   const {fname}=useParams();
// console.log(fname)

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch(`http://localhost:5001/searchUser/${fname}`, {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Authorization:"Bearer "+localStorage.getItem("TOKEN")

//       },
//     })
//   //     .then((res) => res.json())
//   //     .then((result) => setData(result))
//   //     .catch((err) => console.log(err));
//   // }, []); 
//   .then((res) => {
//     if (res.status === 200) {
//       return res.json();
//     } else {
//       throw new Error("Failed to fetch data");
//     }
//   })
//   .then((result) => 
//   {
//     console.log(result)
//     setUser(result.user)
//     setBooks(result.books)
//   })
//   .catch((err) => console.error(err));
// }, []);

//   const handleImageClick = (item) => {
//     setSelectedImage(item);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };


//   return (
//     <div>
//       {/* <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight="auto" id='imglist'>
//       {books.map((item) => (
//           <ImageListItem key={item._id} onClick={() => handleImageClick(item)}>
//             <img
//               src={item.bookImage} // Assuming bookImage contains the image URL
//               alt={item.bookName}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}


//       </ImageList> */}
// {Array.isArray(books) ? (
//   books.map((item) => (
//     <ImageListItem key={item._id} onClick={() => handleImageClick(item)}>
//       <img
//         src={item.bookImage} // Assuming bookImage contains the image URL
//         alt={item.bookName}
//         loading="lazy"
//       />
//     </ImageListItem>
//   ))
// ) : (
//   <p>No books available for this user.</p>
// )}

//       <Modal
//         open={selectedImage !== null}
//         onClose={handleCloseModal}
//         aria-labelledby="image-details-modal"
//         aria-describedby="image-details-description"
        
//       >
//         <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//           {/* <Typography id="image-details-modal" variant="h6" gutterBottom>
//             {selectedImage && selectedImage.bookName}
//           </Typography>
//           <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//             {selectedImage && selectedImage.description}
//           </Typography> */}




// <Typography id="image-details-modal" variant="h6" gutterBottom>
//       {selectedImage && selectedImage.bookName}
//     </Typography>
//     <Typography variant="body2" color="textSecondary" gutterBottom>
//       Author: {selectedImage && selectedImage.bookAuthor}
//     </Typography>
//     <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//       Description: {selectedImage && selectedImage.bookDescription}
//     </Typography>
//           <Button variant="contained" color="primary" onClick={handleCloseModal}>
//             Request
//           </Button>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

