import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react'

export const EditProfile = ({ open, onClose })  => {


  return (

    <Dialog open={open} onClose={onClose}>
    <DialogContent>
    <Box  flex={4} p={2}>

    <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600'}}>
        Edit Profile
    </Typography>
    <Grid container spacing={3} sx={{marginTop:'10px'}}>
        <Grid item xs={12} sm={5}>
        <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
            Enter your first name
            </Typography>
        <TextField    
            id="firstName"
            name="firstName"  
            type='text'
            fullWidth
            autoComplete="given-name"
            variant="outlined"   
        />
        </Grid>

        <Grid item xs={12} sm={5}>
        <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
            Enter your last name
            </Typography>
        <TextField 
            id="lastName"
            type='text'
            name="lastName"
            fullWidth
            autoComplete="family-name"
            variant="outlined"   
        />
        </Grid>
        <Grid item xs={12} sm={5}>
        <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
            Enter your City
        </Typography>
        <TextField
            id="city"
            name="city"
            type ='text'
            fullWidth
            variant="outlined"
            required        
        />
        </Grid>

        <Grid item xs={12} sm={5}>

<Typography  sx={{color:'#333748',marginBottom:'10px'}}>
    Enter your Bio
</Typography>
<TextField
    id="bio"
    name="bio"
    type ='text'
    fullWidth 
    variant="outlined"
    required 
/>
</Grid>
    </Grid>
<Button   variant="contained" sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}}>    
   Confirm
</Button>



</Box>
</DialogContent>
</Dialog>
  )
}

export default EditProfile