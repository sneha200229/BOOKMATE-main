import { Box, Stack } from "@mui/material";
import Leftbar from "./components/Leftbar";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar"

function Profile(){


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