import { Box, Typography } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error';
import React from 'react'

const Error404 = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexFlow:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            width: '100vw'
        }}
    >
        <ErrorIcon color='secondary' sx={{
            fontSize:'20rem',
        }}/>
        <Typography fontFamily='Amatic SC' textAlign='center' component='h2' variant='h1' >
            LO SIENTO... NO SE ENCONTRARON COINCIDENCIAS
        </Typography>

    </Box>
  )
}

export default Error404