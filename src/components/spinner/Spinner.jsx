import React from 'react'
import { Box, CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex', height:'40vh', justifyContent:'center', alignItems:'center' }}>
      <CircularProgress color='secondary'/>
    </Box>
  );
}