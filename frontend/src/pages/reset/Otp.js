import RightbarNew from "./components/RightbarNew";
import Leftbar from "./components/Leftbar";
import { Box, Stack } from "@mui/material";

function Otp(){


    return(

        <Box>

            <Stack direction='row' spacing={10} justifyContent='space-between'>
            <Leftbar/>
            <RightbarNew/>
            </Stack>
       
            
        </Box>

    );
}

export default Otp;