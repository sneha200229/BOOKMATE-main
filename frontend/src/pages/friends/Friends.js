import {Box, Stack } from '@mui/material';

import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
//import Footer from './components/Footer'
import Main from "./components/Main";


function Friends(){


    return(

        <Box sx={{}}>

            <Stack direction='row' spacing={10} justifyContent='space-between'>
            <Leftbar/>
            <Main/>
           <Rightbar/>
            </Stack>
            
            
        </Box>

    );
}

export default Friends;