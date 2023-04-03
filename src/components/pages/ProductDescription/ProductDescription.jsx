import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductosContext } from '../../../contexts/productosContext';
import { GetCarritoContext } from '../../../contexts/carritoContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../db/firebase-config';
import { useState } from 'react';
import './style.css'

const ProductDescription = () => {
    const {id} = useParams();

    const [cantidad, setCantidad] = useState(1)

    const productos = useContext(ProductosContext);
    const getCarrito = useContext(GetCarritoContext);

    const handleAgregarCarrito = async () => {
        await addDoc(collection(db, "carrito"), {
        ...producto,
        cantidad: cantidad
        });
        getCarrito()
    }

    const producto = productos.find( prod => {
        return prod.id == id;
    })

    const handleClick = () => {
        history.back();
    }

    return (
        <Stack display='flex' direction='column' justifyContent='center' alignItems='center' mb='8rem' mt='14rem'>
            <Typography textAlign='center' fontFamily='Honey Butter' variant='h2' component='h2'>   
                {producto.title}
            </Typography>
            <IconButton onClick={handleClick} sx={{backgroundColor:'#f19ccc', ":hover":{backgroundColor:'#f19ccc',boxShadow: '5px 0px 35px 1px black'}}}>
                <ArrowBackIcon fontSize='large' sx={{ color: '#F7F0CA', fontSize: 30 }}/>
            </IconButton>
            <Stack
                display='flex'
                direction='row'
                flexWrap={{xs:'wrap', md:'nowrap'}}
                width='70vw'
                spacing='1rem'
                mt='4rem'
                justifyContent='center'
            >
                <Box 
                    component='img'
                    src={producto.image}
                    sx={{width:'100%', maxWidth:'35vw', borderRadius:5}}
                />
                <Box>
                    <Typography fontFamily='Amatic SC' component='h4' variant='h4'>
                        Descripcion:
                    </Typography>
                    <Typography variant='body1' fontSize='1.3rem'>
                        {producto.description}
                    </Typography>
                    <Typography fontFamily='Amatic SC' component='h4' variant='h4'>
                        Precio:
                    </Typography>
                    <Typography variant='body1' fontSize='1.3rem'>
                        ${producto.price}
                    </Typography>
                    <TextField
                        className='cantidad'
                        id="outlined-number"
                        label="Cantidad"
                        type="number"
                        placeholder='1'
                        inputProps={{
                            min:'1',
                            value:cantidad,
                        }}
                        fullWidth
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{marginTop:'1rem'}}
                        onChange={(e)=>setCantidad(e.target.value)}
                    />
                    <Button onClick={handleAgregarCarrito} sx={{marginTop:'1rem', width:'100%'}} color='secondary' variant='contained'>Agregar al Carrito</Button>
                </Box>
            </Stack>  
        </Stack>
    )
}

export default ProductDescription