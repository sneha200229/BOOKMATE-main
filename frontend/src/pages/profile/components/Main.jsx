import { CheckBox, Directions, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share ,} from '@mui/icons-material';
import { Box, Button, Icon, ListItem, Stack, Typography } from '@mui/material';
import Follow from './Follow';
import ImageList from './StandardImageList'
import Pic from '../../../images/portrait.jpg'
import React from 'react'


const Posts = ()=>{

    return(
        <Box flex={4}>
            <Stack direction='row' >
                <div style={{width:'20%'}}>
                 <img src={Pic} width='100%' style={{borderRadius:'50%'}}/>
                </div>
              
                <Follow/>
               
            </Stack>


            
                <div style={{width:'100%',backgroundColor:'#EEF1F4',marginTop:'20px'}}>
                   <Typography variant='h6' fontWeight='200'sx={{textAlign:'center',color:'#009357'}}>BookShelf</Typography> 
                </div>

                <ImageList/>
            
        </Box>

        



        
    );
}

export default Posts