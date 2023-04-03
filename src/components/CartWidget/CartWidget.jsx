import React from 'react'
import { Badge, IconButton } from '@mui/material'
import { CarritoContext } from '../../contexts/carritoContext';
import { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './style.css'

const CartWidget = () => {

    const carrito = useContext(CarritoContext);
    
    const cantItems = () => {
        let contador=0;
        for (let i = 0; i < carrito.length; i++) {
            contador+= +carrito[i].cantidad
        }
        return contador
    }

    return (
        <div className='circuloCarrito animacion'>
            <IconButton >
                <Badge badgeContent={cantItems()} max={9} color='info'>
                    <ShoppingCartOutlinedIcon className='carrito' sx={{ color: '#f19ccc', fontSize: 30 }}/>
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartWidget