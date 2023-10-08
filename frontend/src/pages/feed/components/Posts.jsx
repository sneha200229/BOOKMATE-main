import { CheckBox, ExpandMore, Favorite, FavoriteBorder, FavoriteOutlined, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react'
import Post from './Post';

const Posts = ()=>{

    return(
        <Box flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </Box>
    );
}

export default Posts