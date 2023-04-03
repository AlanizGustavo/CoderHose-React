import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CardCheckOut = ({producto}) => {
  return (
    <Card sx={{borderRadius:'15px', backgroundColor:'red', height:'90px', width:'100%', display:'flex', flexDirection:'row' }}>
          <CardMedia
            component='img'
            sx={{ height: '100%', width:'auto'}}
            src={producto.image}
            title={producto.title}
          />
        <Box sx={{backgroundColor:'#F7F0CA', height:90, width:'90%'}}>
          <CardContent sx={{height:90, display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <Typography fontFamily='Honey Butter' gutterBottom variant="h4" component="p" textAlign='left' marginBottom={0} marginRight={1}>
              {producto.title}
            </Typography>
            <Typography variant='h5' component='p' color='secondary' textAlign='right'>
              ${producto.price * producto.cantidad}
            </Typography>
          </CardContent>
        </Box>
      </Card>
  )
}

export default CardCheckOut