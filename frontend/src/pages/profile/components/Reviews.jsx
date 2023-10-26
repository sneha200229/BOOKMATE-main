import { Box, Dialog, DialogContent } from '@mui/material';
import React from 'react'
import Review from './Review'

const Reviews = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>

        <DialogContent>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
          
        </DialogContent>
    </Dialog>
    
  )
}

export default Reviews;