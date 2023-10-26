// import { CheckBox, Directions, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share ,} from '@mui/icons-material';
// import { Box, Button, Grid, ListItem, Stack, Typography } from '@mui/material';
// import React from 'react'

// const Follow = ()=>{

//     return(


//             <Grid container  width='60%' display='flex' justifyContent='center' alignItems='center'>

           
//             <Grid item xs={4}>
//             <Typography width='80%' margin={'0 auto'} variant='h6' >
//             <span style={{ color: 'black' }}>{localStorage.getItem('FNAME')}</span><br></br>
//             <span style={{ color: 'black' }}>{localStorage.getItem('LNAME')}</span></Typography>


//             </Grid>

//             <Grid item xs={6}>
//             <Stack direction='row' spacing={2} justifyContent='center'>
//             <Button variant='outlined' >Edit Profile</Button>
//             <Button variant='contained'>Reviews</Button>
//             </Stack>
//             </Grid>

          
//             <Grid item xs={4}>
//             <Typography width='80%' margin={'0 auto'} sx={{color:'#545F71'}}>Mumbai</Typography>
//             </Grid>

//             <Grid item xs={6} >
//             <Stack direction='row' spacing={2} >
            
//             <Typography sx={{color:'#545F71'}}>50 friends</Typography>
           
//             </Stack>
//             </Grid>

            
//             <Grid item xs={4}>
//             <Typography width='80%' margin={'0 auto'} sx={{color:'#545F71'}}>Bio</Typography>
//             </Grid>

//             <Grid item xs={6}>
            
//             </Grid>

//             </Grid>




        
//     );

// }

// export default Follow;

import { CheckBox, Directions, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share ,} from '@mui/icons-material';
import { Box, Button, Grid, ListItem, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import EditProfile from './EditProfile'
import Review from './Reviews'

const Follow = ()=>{

    const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const [isDialogOpen1, setDialogOpen1] = useState(false);

  const handleOpenDialog1 = () => {
    setDialogOpen1(true);
  };

  const handleCloseDialog1 = () => {
    setDialogOpen1(false);
  };


  
    return(

        
            <Grid container  width='60%' display='flex' justifyContent='center' alignItems='center'>
             <EditProfile open={isDialogOpen} onClose={handleCloseDialog} />
             <Review open={isDialogOpen1} onClose={handleCloseDialog1} />
           
            <Grid item xs={4}>
            <Typography width='80%' margin={'0 auto'} variant='h6' >
            <span style={{ color: 'black' }}>{localStorage.getItem('FNAME')}</span><br></br>
             <span style={{ color: 'black' }}>{localStorage.getItem('LNAME')}</span>
            </Typography>
            </Grid>

            <Grid item xs={6}>
            <Stack direction='row' spacing={2} justifyContent='center'>
            <Button variant='outlined' onClick={handleOpenDialog}>Edit Profile</Button>
            <Button variant='contained'onClick={handleOpenDialog1} >Reviews</Button>
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