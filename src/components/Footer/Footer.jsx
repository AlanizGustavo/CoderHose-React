import { Box, IconButton, Stack, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logo from '../../../assets/img/logos/dulceVictoria_amarillo.png'
import React from 'react'


const socialMedia = [FacebookIcon, InstagramIcon, WhatsAppIcon];

function Footer() {
  return (
    <Stack
        flexWrap="wrap"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
            backgroundColor:'#f19ccc',
            width: '100vw',
            minHeight: '10vh',
        }} 
    >
        <Box
            component="img"
            alt="Logo de Dulce Victoria"
            src={logo}
            className='logo'
            
        />
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography>
                Contactanos
            </Typography>
            <Typography>
                Formosa 581. Ciudad de Neuquén
            </Typography>
            <Box>
                <IconButton>
                    <FacebookIcon color='primary' sx={{ fontSize: 30 }}/>
                </IconButton>
                <IconButton>
                    <InstagramIcon color='primary' sx={{ fontSize: 30 }}/>
                </IconButton>
                <IconButton>
                    <WhatsAppIcon color='primary' sx={{ fontSize: 30 }}/>
                </IconButton>
            </Box>
        </Stack>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}>
            <CopyrightIcon color='primary' sx={{ fontSize: 20 }}/>
            <Typography>
                2023,
                Dulce Victoria, todos los derechos reservados
            </Typography>
        </Stack>
    </Stack>
  )
}

export default React.memo(Footer) 