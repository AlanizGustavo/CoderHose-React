import { Stack, Typography } from '@mui/material'
import { useContext } from 'react';
import { CarritoContext, GetCarritoContext } from '../../../contexts/carritoContext'
import React from 'react'
import ProductoCarrito from '../../ProductoCarrito/ProductoCarrito';

const Carrito = () => {

    const carrito = useContext(CarritoContext);

    return (
        <Stack 
            direction='column'
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ mt:'12rem', mb:'8rem' }}
        >
            <Typography variant='h1' fontFamily='Honey Butter' component='h2' >
                Carrito de compras
            </Typography>

            {carrito.map((producto) => {
                return <ProductoCarrito key={producto.id} producto={producto}/>
            })}
            <Typography variant='h2' fontFamily='Honey Butter' component='h4'>
                TOTAL A PAGAR : 
                 $ {carrito.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.cantidad), 0)}
            </Typography>
        </Stack>
    )
}

export default Carrito