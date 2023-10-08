import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react'
import Name from '../../../images/name.png'

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
    backgroundColor:"#ffff",
})









const Navbar = ()=>{

    return(
        <AppBar position='sticky' sx={{boxShadow:0}} >
            <StyledToolbar>
            {/* <Typography variant='h6' sx={{display:{xs:'none' , sm:'block'}}}>BookMate</Typography> */}
            <img src={Name} alt="Bookmate" style={{width:'15%', justifyContent:'center',alignItems:'center'}} />
            <Pets sx={{display:{sx:'block',sm:'none'}}}/>
            
           
            </StyledToolbar>
        </AppBar>

    
    );
}


export default Navbar;