import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import Posts from './components/Posts'
import Navbar from './components/Navbar'
import { Box, Stack } from '@mui/material';


function Feed(){



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

