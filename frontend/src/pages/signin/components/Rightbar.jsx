import styled from '@emotion/styled';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"



const Rightbar = ()=>{

  const navigate = useNavigate()

  const[email,setEmail]= useState('')
  const[password,setPassword]= useState('')
  //const[lname,setLastName]= useState('')

  const handleSubmit=()=>
  {
      console.log(email,password)
      axios.post('http://localhost:5001/signin',
      {
          email:email,
          password:password,
          //lname:lname
      }
      )
      .then(res=>{
          console.log(res.data)
          
          if(res.data.code===500)
          {
              alert('user not found')
          }
          if(res.data.code===404)
          {
              alert('passowrd is wrong')
          }
          if(res.data.code===200)
          {
            alert("Login Successful")
             //move to feed page
             navigate('/feed')
            // console.log('LNAME from res.data:', res.data.lname); // Log the value
             localStorage.setItem('TOKEN',res.data.token)
             localStorage.setItem('EMAIL',res.data.email)
            localStorage.setItem('FNAME',res.data.fname)
            localStorage.setItem('LNAME',res.data.lname)
           



          }
         
      }).catch(err=>{
          console.log(err)
      })
  }



    return(
        <Box  flex={4} p={2}>

            <Typography variant='h6' sx={{color:'#646E8A',fontWeight:'600', marginTop:'50px'}}>
                LOGIN
            </Typography>
            <Typography variant='h4' sx={{color:'#333748',fontWeight:'700', mt:'15px'}}>
               Welcome to BookMate
            </Typography>

            <Typography  sx={{color:'#333748',marginTop:'20px',}}>
              Enter your email
            </Typography>

            {/* <TextField id="email" label="Email" variant="outlined" sx={{marginTop:'20px'}} /> */}

            <TextField

              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              value={email}
              sx={{width:'500px'}}
              label="Email" // Label for email input
              type='email'
              variant="outlined"
              margin="normal"
              required
            />

            <Typography  sx={{color:'#333748', marginTop:'20px'}}>
              Enter your password
            </Typography>
            <TextField 
              onChange={(e)=>{
                setPassword(e.target.value)
            }}
            value={password}
              sx={{width:'500px'}}
              label="Password" // Label for email input
              type='password'
              variant="outlined"
              margin="normal"
              required
            />

            <Typography sx={{marginTop:'15px',marginLeft:'15px',color:'#333748'}}>
                Don't have an account yet? <Link to={'/Signup'}  href='#' style={{color:'#009357', textDecoration:'none'}}>Sign up here</Link>
            </Typography>

            <Button onClick={handleSubmit} variant="contained" sx={{borderRadius:0, marginY:'15px', marginLeft:'400px',paddingX:'20px'}}>    
                Login
            </Button>

            <Link href='#' style={{color:'#009357', textDecoration:'none',marginLeft:'350px' }} to={'/reset'}>
             Forgot your password?
            </Link>

        </Box>
    )
}

export default Rightbar;