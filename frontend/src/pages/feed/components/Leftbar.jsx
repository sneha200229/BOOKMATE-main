import { AccountCircle, AddCircle, Diversity2, Home, Label, Logout, Message, ModeNight } from '@mui/icons-material'
import { Box, Button, DialogActions, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import Dialog from '@mui/material/Dialog';
import ImageUploadDialog from '../../createpost/ImageUploadDialog';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Leftbar = ()=>{

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };


  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (!token) {
        navigate('/signin')
    }
}, [])


    return(
        <Box  flex={1}  p={2} sx={{display:{xs:'none',sm:'block'}}}>
            <Box position='fixed'>
            <ImageUploadDialog open={isDialogOpen} onClose={handleCloseDialog} />
        <List>
          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component={Link} to="/feed">
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <Message/>
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <Diversity2/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton  onClick={handleOpenDialog}>
              <ListItemIcon>
                <AddCircle/>
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component={Link} to="/profile" >
              <ListItemIcon>
               <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
            <ListItemButton component='a' href='#logout'    onClick={() => { localStorage.clear()
                        navigate('/signin')
                    }}>
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




                    
    )
}


export default Leftbar