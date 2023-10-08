import React from 'react'
import { CheckBox, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
const Post = ()=>{


    return(

        
<Card sx={{marginBottom:'10px'}} style={{ backgroundColor:'#EEF1F4' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height='600'
        alt="Paella dish"
        image='https://edit.org/images/cat/book-covers-big-2019101610.jpg'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite  sx={{color:'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      
    </Card>
    );
}
export default Post