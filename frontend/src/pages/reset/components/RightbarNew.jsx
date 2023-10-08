import styled from '@emotion/styled';
import { Box, Button, TextField, Typography,Stack } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import axios from 'axios';


const RightbarNew = ()=>{

    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(otp, password)
        axios.post('http://localhost:5001/submitotp',
            {
                otp: otp,
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/Signin')
                    alert('Password Updated.')
                } else {
                    alert('server err / wrong OTP')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return(
        <Box  flex={4} p={2}>

                <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600', marginTop:'100px'}}>
                 Set new password
                </Typography>
                
                

                <Grid container spacing={3}>
                    
            
                    <Grid item xs={10}>

                    <Typography  sx={{color:'#333748', marginBottom:'10px',marginTop:2}}>
                        Enter One time password
                    </Typography>
                    <TextField
                    onChange={(e)=>{
                        setOtp(e.target.value)
                    }
                    } 
                    value={otp}
                        required
                        id="otp"
                        type='text'
                        name="otp"
                        // label="One time password  "
                        fullWidth
                        variant="outlined"
                        
                        
                    />

                    <Typography  sx={{color:'#333748', marginBottom:'10px',marginTop:2}}>
                        Enter new password
                    </Typography>
                    <TextField
                        required
                        id="newPassword"
                        type='paassword'
                        name="newPassword"
                        // label="New password"
                        fullWidth
                        variant="outlined"
                        
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }
                        }
                        
                    />
                    </Grid>
        
        
                </Grid>

            <Stack direction='row'  spacing={10} justifyContent='flex-start' mt={3}>
          
            <Button variant='outlined' sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}}>    
                Back to login
            </Button>
            
            <Button variant="contained" sx={{borderRadius:0, marginY:'20px',paddingX:'20px'}} onClick={handleSubmit}>    
                Submit
            </Button>
            </Stack>

            {/* <Link href='#' style={{color:'#009357', textDecoration:'none',marginLeft:'350px'}}>
            Forgot your password?
            </Link> */}
      
        </Box>
    )
}

export default RightbarNew;