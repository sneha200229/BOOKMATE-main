import styled from '@emotion/styled';
import { Box, Button, TextField, Typography,Stack } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import axios from "axios"
const Rightbar = ()=>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [fname, setFirstName] = useState('');
    const [lname, setLastName] = useState('');


    const handleSignUp = async () => {
        
        try {
          // Prepare the user data from your form
          const userData = {
            fname:fname , // Replace with your form data
            lname:lname,
            email: email,
            phone:phone,
            password:password,
          };
    
          // Send a POST request to the backend API
          await axios.post('http://localhost:5001/signup', userData)
          .then(res=>{
            console.log(res.data)
            
           
            if(res.data.code===200)
            {
              alert("registration Successful")
               //move to feed page
               navigate('/signin')
             // localStorage.setItem('TOKEN',res.data.token)
               //console.log('LNAME from res.data:', res.data.lname); // Log the value
              // console.log('Response data:', res.data);
             //  localStorage.setItem('LNAME',res.data.lname)
  
            }
        })

































          
    
          //alert('Registration Successful')
         // navigate('/signin')
        } catch (error) {
          console.error('Error signing up:', error);
          alert("Registration failed")
          // Handle the error, e.g., display an error message to the user
        }
      };
    

    return(
        <Box  flex={4} p={2}>

                <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600', marginTop:'15px'}}>
                    SIGN UP
                </Typography>
                <Typography variant='h4' sx={{color:'#333748',fontWeight:'700', mt:'15px'}}>
                Create an account
                </Typography>

                <Typography sx={{color:'#98A1A7', fontWeight:'100' ,marginY:'10px',fontSize:'0.8rem'}}>
                    Fill out the form to get started
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5}>

                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your first name
                        </Typography>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        type='text'
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                      value={fname}

                       
                        
                       
                    />
                    </Grid>

                    <Grid item xs={12} sm={5}>
                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your last name
                        </Typography>
                    <TextField
                        required
                        id="lastName"
                        type='text'
                        name="lastName"
                        label="Last name"
                         fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                      value={lname}
                      
                    />
                    </Grid>
        
            
                    <Grid item xs={12} sm={5}>
                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your email
                        </Typography>

                    <TextField
                        required
                        id="email"
                        name="email"
                        type ='email'
                        label="Email"
                        fullWidth
                        autoComplete="email"
                        variant="outlined"

                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                      value={email}
                      
                    />
                    </Grid>
                    <Grid item xs={12} sm={5}>

                    <Typography  sx={{color:'#333748',marginBottom:'10px'}}>
                        Enter your mobile
                    </Typography>
                    <TextField
                        id="mobile"
                        name="mobile"
                        type ='tel'
                        label="Mobile"
                        fullWidth
                        autoComplete="mobile"
                        variant="outlined"
                        required
                        onChange={(e)=>{
                            setPhone(e.target.value)
                        }}
                      value={phone}
                        
                    />
                    </Grid>
            
                    <Grid item xs={10}>

                    <Typography  sx={{color:'#333748', marginBottom:'10px'}}>
                        Enter your password
                    </Typography>
                    <TextField
                        required
                        id="password"
                        type='password'
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        value={password}
                        
                    />
                    </Grid>
        
        
                </Grid>

            <Typography sx={{marginTop:'20px',marginLeft:'15px',color:'#333748'}}>
                Already have an account? <Link href='#' style={{color:'#009357', textDecoration:'none'}} to={'/Signin'}>Login</Link>
            </Typography>

            <Button onClick={handleSignUp}  variant="contained" sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}}>    
                Sign up
            </Button>

            {/* <Link href='#' style={{color:'#009357', textDecoration:'none',marginLeft:'350px'}}>
            Forgot your password?
            </Link> */}
      
        </Box>
    )
}

export default Rightbar;