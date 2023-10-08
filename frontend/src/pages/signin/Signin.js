import {Box, Stack } from '@mui/material';

import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import Footer from './components/Footer'


function Signin(){


    return(

        <Box sx={{}}>

            <Stack direction='row' spacing={10} justifyContent='space-between'>
            <Leftbar/>
            <Rightbar/>
            </Stack>
            <Footer/>
            
        </Box>

    );
}

export default Signin;