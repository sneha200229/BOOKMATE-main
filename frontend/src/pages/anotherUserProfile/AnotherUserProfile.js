
// import React, { useState, useEffect } from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useParams } from 'react-router-dom';
// import Leftbar from "../profile/components/Leftbar";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';

// export default function AnotherUserProfile() {
//   const [user, setUser] = useState("");
//   const [books, setBooks] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const { fname } = useParams();

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch(`http://localhost:5001/searchUser/${fname}`, {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("TOKEN"),
//       },
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         } else {
//           throw new Error("Failed to fetch data");
//         }
//       })
//       .then((result) => {
//         console.log(result);
//         setUser(result.user);
//         setBooks(result.books);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   const handleImageClick = (item) => {
//     setSelectedImage(item);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <Box flex={1}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">
//             {fname}'s Images
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box display="flex">
//         <Leftbar />
//         <Box flex={1}>
//           <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={200}>
//             {books.map((item) => (
//               <ImageListItem key={item._id} onClick={() => handleImageClick(item)}>
//                 <img src={item.bookImage} alt={item.bookName} loading="lazy" />
//               </ImageListItem>
//             ))}
//           </ImageList>

//           <Modal
//             open={selectedImage !== null}
//             onClose={handleCloseModal}
//             aria-labelledby="image-details-modal"
//             aria-describedby="image-details-description"
//           >
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translate(-50%, -50%)',
//                 width: 300,
//                 bgcolor: 'background.paper',
//                 boxShadow: 24,
//                 p: 4,
//               }}
//             >
//               <Typography id="image-details-modal" variant="h6" gutterBottom>
//                 {selectedImage && selectedImage.bookName}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 Author: {selectedImage && selectedImage.bookAuthor}
//               </Typography>
//               <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//                 Description: {selectedImage && selectedImage.bookDescription}
//               </Typography>
//               <Button variant="contained" color="primary" onClick={handleCloseModal}>
//                 Request Book
//               </Button>
//             </Box>
//           </Modal>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Leftbar from "../profile/components/Leftbar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ImageList from '@mui/material/ImageList'; // Import ImageList
import ImageListItem from '@mui/material/ImageListItem';
const generateImageGrid = (books) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box>
        {books.map((item) => (
          <ImageBox key={item._id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

const ImageBox = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = () => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
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
          {generateImageGrid(books)}
        </Box>
      </Box>
    </Box>
  );
}

// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useParams } from 'react-router-dom';
// import Leftbar from "../profile/components/Leftbar";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import ImageList from '@mui/material/ImageList'; // Import ImageList
// import ImageListItem from '@mui/material/ImageListItem';

// export default function AnotherUserProfile() {
//   const [user, setUser] = useState("");
//   const [books, setBooks] = useState([]);

//   const { fname } = useParams();

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch(`http://localhost:5001/searchUser/${fname}`, {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("TOKEN"),
//       },
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         }
//         // } else {
//         //   throw an Error("Failed to fetch data");
//         // }
//       })
//       .then((result) => {
//         console.log(result);
//         setUser(result.user);
//         setBooks(result.books);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <Box>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6">
//             {fname}'s Images
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box display="flex">
//         <Leftbar />
//         <Box flex={1}>
//           {generateImageGrid(books)}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// const generateImageGrid = (books) => {
//   return (
//     <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={200}>
//       {books.map((item) => (
//         <ImageListItem key={item._id}>
//           <img src={item.bookImage} alt={item.bookName} style={{ width: '100%', height: '100%' }} />
//           <ModalItem item={item} />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// const ModalItem = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="image-details-modal"
//       aria-describedby="image-details-description"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 300,
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//         }}
//       >
//         <Typography id="image-details-modal" variant="h6" gutterBottom>
//           {item && item.bookName}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" gutterBottom>
//           Author: {item && item.bookAuthor}
//         </Typography>
//         <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//           Description: {item && item.bookDescription}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleClose}>
//           Request Book
//         </Button>
//       </Box>
//     </Modal>
//   );
// };
// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useParams } from 'react-router-dom';
// import Leftbar from "../profile/components/Leftbar";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import ImageList from '@mui/material/ImageList'; // Import ImageList
// import ImageListItem from '@mui/material/ImageListItem';

// export default function AnotherUserProfile() {
//   const [user, setUser] = useState("");
//   const [books, setBooks] = useState([]);

//   const { fname } = useParams();

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch(`http://localhost:5001/searchUser/${fname}`, {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("TOKEN"),
//       },
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         }
//       })
//       .then((result) => {
//         console.log(result);
//         setUser(result.user);
//         setBooks(result.books);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <Box>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6">
//             {fname}'s Images
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box display="flex">
//         <Leftbar />
//         <Box flex={1}>
//           {generateImageGrid(books)}
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// const generateImageGrid = (books) => {
//   return (
//     <ImageList sx={{ width: '100%', height: 600, paddingTop: '20px' }} cols={3} rowHeight={200}>
//       {books.map((item) => (
//         <ImageListItem key={item._id}>
//           <img src={item.bookImage} alt={item.bookName} style={{ width: '100%', height: '100%' }} />
//           <ModalItem item={item} />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// const ModalItem = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="image-details-modal"
//       aria-describedby="image-details-description"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 300,
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//         }}
//       >
//         <Typography id="image-details-modal" variant="h6" gutterBottom>
//           {item && item.bookName}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" gutterBottom>
//           Author: {item && item.bookAuthor}
//         </Typography>
//         <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//           Description: {item && item.bookDescription}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleClose}>
//           Request Book
//         </Button>
//       </Box>
//     </Modal>
//   );
// };
// import React, { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { useParams } from 'react-router-dom';
// import Leftbar from "../profile/components/Leftbar";
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import ImageList from '@mui/material/ImageList'; // Import ImageList
// import ImageListItem from '@mui/material/ImageListItem';

// export default function AnotherUserProfile() {
//   const [user, setUser] = useState("");
//   const [books, setBooks] = useState([]);

//   const { fname } = useParams();

//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch(`http://localhost:5001/searchUser/${fname}`, {
//       method: "get",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: "Bearer " + localStorage.getItem("TOKEN"),
//       },
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         }
//       })
//       .then((result) => {
//         console.log(result);
//         setUser(result.user);
//         setBooks(result.books);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <Box>
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6">
//             {fname}'s Images
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       {/* Create a gap between AppBar and images */}
//       <Box sx={{ paddingTop: '80px' }}>
//         <Box display="flex">
//           <Leftbar />
//           <Box flex={1}>
//             {generateImageGrid(books)}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// const generateImageGrid = (books) => {
//   return (
//     <ImageList sx={{ width: '100%', height: 600 }} cols={3} rowHeight={200}>
//       {books.map((item) => (
//         <ImageListItem key={item._id}>
//           <img src={item.bookImage} alt={item.bookName} style={{ width: '100%', height: '100%' }} />
//           <ModalItem item={item} />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// };

// const ModalItem = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="image-details-modal"
//       aria-describedby="image-details-description"
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 300,
//           bgcolor: 'background.paper',
//           boxShadow: 24,
//           p: 4,
//         }}
//       >
//         <Typography id="image-details-modal" variant="h6" gutterBottom>
//           {item && item.bookName}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" gutterBottom>
//           Author: {item && item.bookAuthor}
//         </Typography>
//         <Typography id="image-details-description" variant="body2" color="textSecondary" gutterBottom>
//           Description: {item && item.bookDescription}
//         </Typography>
//         <Button variant="contained" color="primary" onClick={handleClose}>
//           Request Book
//         </Button>
//       </Box>
//     </Modal>
//   );
// };
