import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material';
import Name from '../../../images/name.png'
import React from 'react'

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
    //const lname = localStorage.getItem('LNAME');


    return(
        <AppBar position='sticky'>
            <StyledToolbar style={{ backgroundColor:'#EEF1F4' }}>
            {/* <Typography variant='h6' sx={{display:{xs:'none' , sm:'block'}}}>BookMate</Typography> */}
            <img src={Name} alt="Bookmate" style={{width:'15%', justifyContent:'center',alignItems:'center'}} />
            <span style={{ color: 'black' }}>{localStorage.getItem('FNAME')}</span>
            <Pets sx={{display:{sx:'block',sm:'none'}}}/>
            <Search>
                <InputBase placeholder='Search...' sx={{ width: '100%' }} />
            </Search>
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
