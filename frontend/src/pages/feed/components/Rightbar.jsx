import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
//import React from 'react'
import React, { useState,useEffect } from 'react';
//import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Rightbar = ()=>{
    const [data, setData] = useState([]); // To store fetched data
    
//   useEffect(() => {
//     // Fetch data from the backend when the component mounts
//     fetch("http://localhost:5001/fetchBook", {
//       headers: {
//         "Authorization": "Bearer " + localStorage.getItem("jwt")
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => setData(result))
//       .catch((err) => console.log(err));
//   }, []);







    return(

        <Box flex={2}  p={2} sx={{display:{xs:'none',sm:'block'}}}>
            <Box position='fixed'>
           <Typography variant='h6' fontWeight={100}>
                Online Friends
           </Typography>
           <AvatarGroup max={7}>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/0.jpg" />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/1.jpg" />
                <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/2.jpg" />
                <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/3.jpg" />
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/0.jpg" />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/1.jpg" />
                <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/2.jpg" />
                <Avatar alt="Trevor Henderson" src="https://randomuser.me/api/portraits/men/3.jpg" />
            </AvatarGroup>



            </Box>
        </Box>
    );

}

export default Rightbar
