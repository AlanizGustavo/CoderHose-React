import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import banner from '../../../../assets/img/macarons_linea.jpg'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../../contexts/userContext'
import { useContext } from 'react'

const Home = () => {
  const isLogedIn = useContext(UserContext)
  return (
    <Box
      sx={{
        marginTop:"20px",
        backgroundColor:'black',
        height: '100vh',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        width: '100vw'
      }}
    >
      <Box
          component='img'
          sx={{ height: '100vh', minWidth:'100%'}}
          src={banner}
          title='{producto.title}'
        />
      <Box
        sx={{
          left: '50%',
          position: 'absolute',
          top: '35%',
          transform: 'translate(-50%,-50%)'
        }}  
      >
        <Typography width='100vw' textAlign='center' fontSize='16rem' fontWeight='100' component='h1' variant='h1' fontFamily='Honey Butter'>
          Dulce Victoria
        </Typography>
        <Typography fontSize='6rem' component='p' variant='h2' fontFamily='Qwitcher Grypen, cursive'>
          Turn the cake into art
        </Typography>
        <NavLink to='/productos/categories/all'>
          {isLogedIn 
            ? <Button
              className='animacion' 
              sx={{
                mt:'1rem',
                fontSize:'3rem'
              }} 
              color='primary'
              variant='secondary'>
                Probá Nuestras delicas
              </Button>
            : null}
        </NavLink>
      </Box>
    </Box>
  )
}

export default React.memo(Home)