import { Box, Dialog, DialogContent } from '@mui/material';
import React from 'react'
import ReviewUser from './ReviewUser'

const ReviewsUser = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>

        <DialogContent>
          <ReviewUser/>
          <ReviewUser/>
          <ReviewUser/>
          <ReviewUser/>
          
        </DialogContent>
    </Dialog>
    
  )
}

export default ReviewsUser;