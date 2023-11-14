import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material';
import Name from '../../../images/name.png'


import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
    backgroundColor:'#ffffff' 
    
})

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"5px 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"

}))

const Icons= styled(Box)(({theme})=>({
    display:'none',
    gap:"20px",
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));


const UserBox= styled(Box)(({theme})=>({
    display:'flex',
    gap:"10px",
    alignItems:'center',
    [theme.breakpoints.up("sm")] :{
        display:"none"
    }

}));




const Navbar = ()=>{

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const history = useNavigate(); // Get the history object from React Router
    const navigate = useNavigate();


    const handleSearch = async () => {
      try {
        // Make an API request to search for the user using the search query
        const response = await axios.get(`http://localhost:5001/searchUser/${searchQuery}`,
        {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("TOKEN")

              },
        });
        const userData = response.data;
  
        if (userData.error) {
          // User not found
          setSearchResult({ error: userData.error });
        } else {
          // User found
          setSearchResult(userData);
          //history.push(`/profile/${userData.user.fname}`);
         // navigate(`../../userProfile/UserProfile${userData.user.fname}`); // Use navigate instead of history.push
          navigate(`/AnotherUserProfile/${userData.user.fname}`); 

        }
      } catch (error) {
        console.error('Error searching for user', error);
        setSearchResult({ error: 'Server error in searching for user' });
      }
    };


    return(
        <AppBar position='sticky'>
            <StyledToolbar style={{ backgroundColor:'#EEF1F4' }}>
            {/* <Typography variant='h6' sx={{display:{xs:'none' , sm:'block'}}}>BookMate</Typography> */}
            <img src={Name} alt="Bookmate" style={{width:'15%', justifyContent:'center',alignItems:'center'}} />
            <span style={{ color: 'black' }}>{localStorage.getItem('FNAME')}</span>
            <Pets sx={{display:{sx:'block',sm:'none'}}}/>
            <Search>
                <InputBase 
                placeholder='Search...' 
                sx={{ width: '100%' }} 
                 value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
                
                
                
                
                
                />
            </Search>
            <button onClick={handleSearch}>Search</button>



            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail color='primary'/>
                </Badge>

                <Badge badgeContent={4} color="error">
                <Notifications color='primary'/>
                </Badge>

                <Avatar  sx={{width: 30, height: 30 }} src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
            </Icons>

            <UserBox>
            <Avatar  sx={{width: 30, height: 30 }} src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'/>
            </UserBox>
            </StyledToolbar>



          
























        </AppBar>
    );
}


export default Navbar;
