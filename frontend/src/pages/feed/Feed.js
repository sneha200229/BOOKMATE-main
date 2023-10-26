import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import Posts from './components/Posts'
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material';
import{useNavigate} from 'react-router-dom'
import React, { useEffect } from 'react';

function Feed(){
    const navigate =useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem('TOKEN')
        if(!token)
        {
            navigate('/signin')
        }
         },[navigate] )

         



    return (

        <Box>
            <Navbar/>
        <Stack spacing={2} direction ="row" justifyContent={"space-between"}>
            <Leftbar/>
            <Posts/>
            <Rightbar/>
        </Stack>
        </Box>
    );
}


export default Feed

