import { AccountCircle, AddCircle, Diversity2, Home, Label, Logout, Message, ModeNight } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
//import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


const Leftbar = ()=>{
  const navigate = useNavigate()


const handleSubmit=()=>
{
  navigate('/feed')

}




    return(

      // <Box flex={1}>
      //   leftbar
      // </Box>
        <Box  flex={1}  p={2} sx={{display:{xs:'none',sm:'block'}}}>
            <Box position='fixed'>
        
        <List>
          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#home'onClick={handleSubmit}>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#messages'>
              <ListItemIcon>
                <Message/>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
                <Diversity2/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#create'>
              <ListItemIcon>
                <AddCircle/>
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
               <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#logout'>
              <ListItemIcon>
                <Logout/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>

          </List>
          </Box>
        </Box>
        
    );
}


export default Leftbar