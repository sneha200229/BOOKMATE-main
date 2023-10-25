import { AccountCircle, AddCircle, Diversity2, Home, Label, Logout, Message, ModeNight } from '@mui/icons-material'
import { Box, Button, DialogActions, DialogContent, DialogTitle, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';



import Dialog from '@mui/material/Dialog';
import ImageUploadDialog from '../../createpost/ImageUploadDialog';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Leftbar = ({ nightMode, toggleNightMode })=>{

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

// const [nightMode, setNightMode] = useState(false);//nightmode
// const theme = createTheme({
//   palette: {
//     type: nightMode ? 'dark' : 'light', // Set the palette type based on nightMode state
//   },
// });
// const toggleNightMode = () => {
//   setNightMode(!nightMode);
// };

// function Leftbar({nightMode,toggleNightMode})
// {
 
// };
return(
  //<ThemeProvider theme={theme}>

    <Box  flex={1}  p={2} sx={{display:{xs:'none',sm:'block'}}}>
        <Box position='fixed'>
        <ImageUploadDialog open={isDialogOpen} onClose={handleCloseDialog} />
    <List>
      <ListItem disablePadding sx={{backgroundColor:'#EEF1F4', borderRadius:'10px',marginBottom:'20px'} }>
        <ListItemButton component='a' href='#home'>
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
        <ListItemButton component='a' href='#create' onClick={handleOpenDialog}>
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
          <Switch
           checked={nightMode}
           onClick={toggleNightMode}
           />
        </ListItemButton>
      </ListItem>
       
      </List>
      </Box>




    </Box>
   // </ThemeProvider>





                
)
    
}


export default Leftbar