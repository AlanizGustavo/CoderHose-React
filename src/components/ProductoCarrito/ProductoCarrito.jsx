import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React from 'react'
import './style.css'
import { useState } from 'react';
import { deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../db/firebase-config';
import { GetCarritoContext } from '../../contexts/carritoContext';
import { useContext } from 'react';

const ProductoCarrito = ({producto, ancho, alto}) => {

    const getCarrito = useContext(GetCarritoContext)
    const [inputCantidad, setInputCantidad] = useState(producto.cantidad)

    const handleAdd = async () => {
        setInputCantidad(inputCantidad+1)
        const docRef = doc(db, "carrito", producto.id);
        await updateDoc(docRef, {
            cantidad: inputCantidad+1
        })
        getCarrito()
    }

    const handleRemove = async () => {
        setInputCantidad(inputCantidad-1)
        if (inputCantidad>1) {
            await updateDoc(doc(db, "carrito", producto.id), {
                cantidad: inputCantidad-1
            });
        }
        else{
            await deleteDoc(doc(db, "carrito", producto.id));
        }
        getCarrito()
    }

  return (
    <Card sx={{ height:alto, width:ancho, display:'flex', flexDirection:'row' }}>
            <Box 
                sx={{
                    display:'flex',
                    justifyContent:'left', 
                    alignItems:'center',
                    width:'25%',
                    height:'100%',
                    overflow:'hidden'
                }}
            >
                <CardMedia
                    component='img'
                    sx={{ height: '100%', width:'auto'}}
                    src={producto.image}
                    title={producto.title}
                />
            </Box>
            <Box sx={{height:150}}>
                <CardContent sx={{height:100}}>
                    <Typography fontFamily='Honey Butter' gutterBottom variant="h3" component="div">
                    {producto.title}
                    </Typography>
                    <Typography variant='h4' color='primary'>
                    ${producto.price * producto.cantidad}
                    </Typography>
                    <Typography variant='h5' color='primary'>
                    {producto.description}
                    </Typography>
                </CardContent>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <IconButton onClick={handleRemove}>
                    <RemoveCircleIcon className='carrito' color='primary' sx={{ fontSize: 30 }}/>
                </IconButton>
                <input min='0' className='inputCantidad' value={inputCantidad} onChange={(e)=>setInputCantidad(e.target.value)}></input>
                <IconButton onClick={handleAdd}>
                    <AddCircleIcon className='carrito' color='primary' sx={{fontSize: 30, marginLeft:'0px'}}/>
                </IconButton>
            </Box >
        </Card>
  )
}

export default ProductoCarrito