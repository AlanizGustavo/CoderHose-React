import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import './style.css'

const ItemListContainer = ({Greeting}) => {
  return (
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          width: '100vw',
          height: '80vh',
        }}
      >
        <Typography variant='h1' color='darkgray' sx={{fontFamily:'Honey Butter', textAlign:'center'}}>
          {Greeting}
        </Typography>
      </Stack>
  )
}

export default ItemListContainer