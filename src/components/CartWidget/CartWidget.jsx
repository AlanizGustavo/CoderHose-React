import React from 'react'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './style.css'

const CartWidget = () => {
    return (
        <div className='circuloCarrito animacion'>
            <IconButton >
                <Badge badgeContent={10} max={9} color='primary'>
                    <ShoppingCartOutlinedIcon className='carrito' sx={{ color: '#f19ccc', fontSize: 30 }}/>
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartWidget