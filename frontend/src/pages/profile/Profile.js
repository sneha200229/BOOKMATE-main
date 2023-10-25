import { Box, Stack } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar"
import React, { useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Profile(){
    const navigate =useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem('TOKEN')
        if(!token)
        {
            navigate('/signin')
        }
         },[navigate] )


    return(

        <Box>
            <Navbar/>
            <Stack  direction ="row" justifyContent={"space-between"}>
                <Leftbar/>
                <Main/>
                <Rightbar/>
            </Stack>
        </Box>
    );
}

export default Profile;