import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Error404 from '../../Error/Error404'
import ProductGrid from '../../ProductGrid/ProductGrid'
import './style.css'

const ItemListContainer = ({productos}) => {
  
  return (
    <Stack 
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ mt:'12rem', mb:'8rem' }}
    >
      <Typography variant='h1' fontFamily='Honey Butter' component='h2' >
        Nuestras Delicias
      </Typography>

      <ButtonGroup className='grupoBtn' variant="primary" color='secondary' sx={{width:'70vw', height:'30px'}}>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink color='#f19ccc' to={'categories/all'}>
              Todos
          </NavLink>
          </Button>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink to={'categories/electronics'}>
              Electronics
          </NavLink>
          </Button>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink to={'categories/jewelery'}>
              Jewelery
          </NavLink>
          </Button>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink to={"categories/men's clothing"}>
              Clothing
          </NavLink>
        </Button>
      </ButtonGroup>

      <Routes>
        <Route path='/categories/:category' element={<ProductGrid productos={productos}/>}/>
        <Route path='/*' element={<Error404 />}/>
      </Routes>
      
    </Stack>
  )
}

export default ItemListContainer