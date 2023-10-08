import {Box, Stack } from '@mui/material';

import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'



function Signup(){


    return(

        <Box>

            <Stack direction='row' spacing={10} justifyContent='space-between'>
            <Leftbar/>
            <Rightbar/>
            </Stack>
       
            
        </Box>

    );
}

export default Signup;