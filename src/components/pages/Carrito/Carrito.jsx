import { Backdrop, Button, Fade, Modal, Stack, Typography } from '@mui/material'
import { useContext } from 'react';
import { CarritoContext, GetCarritoContext } from '../../../contexts/carritoContext'
import React from 'react'
import ProductoCarrito from '../../ProductoCarrito/ProductoCarrito';
import { useState } from 'react';
import { Box } from '@mui/system';
import { getAuth } from 'firebase/auth';
import CardCheckOut from '../../CardCheckOut/CardCheckOut';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../db/firebase-config';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import './style.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: '#f19ccc',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius:5
};


const Carrito = () => {
    const auth = getAuth();
    const user = auth.currentUser

    const [compra, setCompra] = useState('')

    const carrito = useContext(CarritoContext);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
        registrarVenta()
    }
    
    const registrarVenta = async () => {
    const compra = await addDoc(collection(db, "ventas"), {
        venta: {...carrito},
        cliente: {
            usuario: user.displayName,
            mail: user.email
        }
        });
        setCompra(compra._key.path.segments[1])
    }

    const handleClose = () => setOpen(false);

    const totalPagar = () => {
        return carrito.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.cantidad), 0);
    }

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
            { carrito.length>0 
                ? <>
                    {carrito.map((producto) => {
                        return <ProductoCarrito key={producto.id} producto={producto} ancho={'75vw'} alto={'200px'}/>
                    })}
                    <Typography variant='h2' fontFamily='Honey Butter' component='h4'>
                        TOTAL A PAGAR : 
                        $ {totalPagar()}
                    </Typography>
                    <Button onClick={handleOpen} sx={{marginTop:'1rem', width:{xs:'80%', md:'50%'}, height:'4rem', fontSize:'3rem'}} color='secondary' variant='primary'>Comprar</Button>
                </>
                : <>
                    <RemoveShoppingCartIcon sx={{width:'40vw', height:'auto'}}/>
                    <Typography variant='h4'  component='h4' fontFamily='Amatic SC' marginTop={1}>
                        No hay productos agregados al carrito
                    </Typography>
                  </>
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                    <Box className='mediaQuery' sx={style}>
                        <Typography component='h3' variant='h2' textAlign='center' fontFamily='Amatic SC'>
                            Resumen de compra
                            de:
                        </Typography>
                        <Typography component='p' variant='h4' textAlign='left' fontFamily='Amatic SC'>
                            {user.displayName}
                        </Typography>
                        <Typography component='p' variant='h4' textAlign='left' fontFamily='Amatic SC'>
                            {user.email}
                        </Typography>
                        {carrito.map((producto) => {
                            return <CardCheckOut key={producto.id} producto={producto} />
                        })}
                        <Typography variant='h5'  component='h4' marginTop={1}>
                            ID de compra: {compra}
                        </Typography>
                        <Typography variant='h4'  component='h4' marginTop={1}>
                            Total abonado : 
                            $ {totalPagar()}
                        </Typography>
                    </Box>
                </Fade>
            </Modal> 
        </Stack>
    )
}

export default Carrito