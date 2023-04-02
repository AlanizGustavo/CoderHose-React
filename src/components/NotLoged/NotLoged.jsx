import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../../assets/img/logos/logoRedondo.png'

const NotLoged = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexFlow:'column',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            width: '100vw',
            marginTop:'2rem'
        }}
    >
        <Box
            height='30rem'
            width='30rem'
            component="img"
            alt="Logo de Dulce Victoria"
            src={logo}
        />
        <Typography fontFamily='Amatic SC' textAlign='center' component='h2' variant='h1' sx={{ fontSize: { xs: '5rem', md: '10rem' }, mr: 1 }}>
            Inicia sesion para disfrutar de Nuestras delicias y realizar pedidos
        </Typography>

    </Box>
  )
}

export default React.memo(NotLoged) 