import React from 'react'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div className='circuloCarrito'>
            <IconButton aria-label="delete">
                <Badge badgeContent={4} color="primary" >
                    <ShoppingCartIcon sx={{ color: '#f19ccc', fontSize: 40 }}/>
                </Badge>
            </IconButton>
        </div>
    )
}

export default CartWidget