import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette:{

        primary:{

            main: "#009357",
            light : "#FFFFFF"
        },

        secondary:{
            main: "#C4C4C4",
        }
        ,
        typograpghy:{
            fontFamily:[
                 'Inter', 'sans-serif'].join(',')
        }
    }


})