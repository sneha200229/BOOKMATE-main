import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'

export const ReviewUser = () => {
  return (
    <Card>
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

     <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <Divider/>
    </Card>
  )
}

export default ReviewUser