import { Box, Stack } from '@mui/material';
import React from 'react'
import Logo from '../../../images/logo.png'
import Name from '../../../images/name.png'


const Leftbar = ()=>{


    return(
        <Box bgcolor='#F7F9FC' flex={2} sx={{display:{xs:'none', sm:'block'},height:'100vh',justifyContent:'center'}}>
            <Stack justifyContent='center' alignItems='center' sx={{height:'100vh'}}>
                <img src ={Logo} alt='Bookmate Logo' style={{width:'80%', justifyContent:'center',alignItems:'center'}} />
                <img src={Name} alt="Bookmate" style={{width:'80%', justifyContent:'center',alignItems:'center',marginTop:'15px'}} />
            </Stack>
        </Box>
    )
}

export default Leftbar;