import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const ProductCard = ({producto}) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300}}>
        <Box padding='1rem'
          sx={{
            display:'flex',
            justifyContent:'center', 
            alignItems:'center',
            width:'100%',
            backgroundColor:'white'
          }}
        >
          <CardMedia
            component='img'
            sx={{ height: 140, width:'auto'}}
            src={producto.image}
            title={producto.title}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant='h4' color='primary'>
            ${producto.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='medium' color='primary' variant='contained'>Agregar al Carrito</Button>
          <NavLink to={`${producto.id}`}>
            <Button sx={{marginLeft:'1rem'}} size='medium' variant='outlined'>Descripcion</Button>
          </NavLink>
        </CardActions>
      </Card>
  );
}

export default ProductCard