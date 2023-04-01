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
    <Card sx={{ height:400 ,maxWidth: 345, minWidth: 300}}>
        <Box 
          sx={{
            display:'flex',
            justifyContent:'center', 
            alignItems:'center',
            width:'100%',
            height:'250px',
            backgroundColor:'white',
            overflow:'hidden'
          }}
        >
          <CardMedia
            component='img'
            sx={{ height: 'auto', width:'100%'}}
            src={producto.image}
            title={producto.title}
          />
        </Box>
        <Box sx={{height:150}}>
          <CardContent sx={{height:100}}>
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
        </Box>
      </Card>
  );
}

export default ProductCard