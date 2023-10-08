import { CheckBox, Directions, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share ,} from '@mui/icons-material';
import { Box, Button, Grid, ListItem, Stack, Typography } from '@mui/material';
import React from 'react'

const Follow = ()=>{

    return(


            <Grid container  width='60%' display='flex' justifyContent='center' alignItems='center'>

           
            <Grid item xs={4}>
            <Typography width='80%' margin={'0 auto'} variant='h6' >John Doe</Typography>
            </Grid>

            <Grid item xs={6}>
            <Stack direction='row' spacing={2} justifyContent='center'>
            <Button variant='outlined' >Edit Profile</Button>
            <Button variant='contained'>Reviews</Button>
            </Stack>
            </Grid>

          
            <Grid item xs={4}>
            <Typography width='80%' margin={'0 auto'} sx={{color:'#545F71'}}>Mumbai</Typography>
            </Grid>

            <Grid item xs={6} >
            <Stack direction='row' spacing={2} >
            
            <Typography sx={{color:'#545F71'}}>50 friends</Typography>
           
            </Stack>
            </Grid>

            
            <Grid item xs={4}>
            <Typography width='80%' margin={'0 auto'} sx={{color:'#545F71'}}>Bio</Typography>
            </Grid>

            <Grid item xs={6}>
            
            </Grid>

            </Grid>




        
    );

}

export default Follow;