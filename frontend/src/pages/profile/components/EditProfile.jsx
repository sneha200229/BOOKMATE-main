import { Box, Button, Dialog, DialogContent, Grid, TextField, Typography } from '@mui/material';
import axios from "axios"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export const EditProfile = ({ open, onClose })  => {
    const navigate = useNavigate()

    const [city,setCity]=useState('');
    const [email, setEmail] = useState('');
    const [fname, setFirstName] = useState('');
    const [bio, setBio] = useState('');
    const [lname, setLastName] = useState('');






    const handleUpdate=async()=>
    {
        try {
            // Prepare the user data from your form
            const userData = {
             email:email,
             city:city,
             bio:bio,
             fname:fname,
             lname:lname,
            };
            console.log('userData:', userData);

      
            // Send a POST request to the backend API
            await axios.put('http://localhost:5001/updateProfile', userData)
            .then(res=>{
              console.log(res.data)  
              if(res.data.code===200)
              {
                alert("updation Successful")
               // navigate('/profile')
               localStorage.setItem('TOKEN',res.data.token)
               localStorage.setItem('FNAME',res.data.fname)
                localStorage.setItem('CITY',res.data.city)
                localStorage.setItem('BIO',res.data.bio)
                localStorage.setItem('LNAME',res.data.lname)

                //console.log(localStorage.setItem('BIO'))

                
              }
              
          })
     
          } catch (error) {
            console.error('Error in updation fe:', error);
            alert("updation failed")
          }


    }
   
//});
    

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
            onChange={(e) => setFirstName(e.target.value)}
        
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
            onChange={(e) => setLastName(e.target.value)}
  
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
            onChange={(e) => setCity(e.target.value)}
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
    onChange={(e) => setBio(e.target.value)}

    required 
/>
</Grid>

<Grid item xs={12} sm={5}>

<Typography  sx={{color:'#333748',marginBottom:'10px'}}>
    Enter valid email to update profile
</Typography>
<TextField
    id="email"
    name="email"
    type ='text'
    fullWidth 
    variant="outlined"
    onChange={(e) => setEmail(e.target.value)}
    required 
/>
</Grid>






    </Grid>
<Button   variant="contained" sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}} onClick={handleUpdate}>    
   Confirm
</Button>



</Box>
</DialogContent>
</Dialog>
  )
}

export default EditProfile
