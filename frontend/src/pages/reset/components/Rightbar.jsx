import styled from '@emotion/styled';
import { Box, Button, TextField, Typography,Stack } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import axios from 'axios';


const Rightbar = ()=>{

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log(email)
        axios.post('http://localhost:5001/sendotp',
            {
                email: email,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/otp')
                } else {
                    alert('Email / Server Error.')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return(
        <Box  flex={4} p={2}>

                <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600', marginTop:'100px'}}>
                   RECOVER ACCOUNT
                </Typography>
                <Typography variant='h4' sx={{color:'#333748',fontWeight:'700', mt:'15px'}}>
                Forgot your password?
                </Typography>

                <Typography sx={{color:'#98A1A7', fontWeight:'100' ,marginY:'10px',fontSize:'0.8rem'}}>
                    Enter your email address below and we'll get you back on track
                </Typography>

                <Grid container spacing={3}>
                    
            
                    <Grid item xs={10}>

                    <Typography  sx={{color:'#333748', marginBottom:'10px'}}>
                        Enter your email
                    </Typography>
                    <TextField
                        required
                        id="email"
                        type='email'
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        
                    />
                    </Grid>
        
        
                </Grid>

            <Stack direction='row'  spacing={10} justifyContent='flex-start' mt={3}>
          
            <Button variant='outlined' sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}}>    
                Back to login
            </Button>
            
            <Button variant="contained" sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}} onClick={handleSubmit}>    
                Send OTP
            </Button>
            </Stack>

            {/* <Link href='#' style={{color:'#009357', textDecoration:'none',marginLeft:'350px'}}>
            Forgot your password?
            </Link> */}
      
        </Box>
    )
}

export default Rightbar;