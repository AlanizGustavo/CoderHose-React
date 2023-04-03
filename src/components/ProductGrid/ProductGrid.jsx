import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductosContext } from '../../contexts/productosContext'
import ProductCard from '../ProductCard/ProductCard'
import './style.css'

const ProductGrid = () => {
    const {category} = useParams();
    const productos = useContext(ProductosContext);
    let prod;
    if (category != 'all') {
        prod = productos.filter( producto => {
            return producto.category == category;
        })
    } else {
        prod = productos;
    }
    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 0, sm: 2, md: 3 }} sx={{ flexGrow: 1, paddingLeft:0 , display:'flex', justifyContent:'center'}}>
            {prod.map((producto) => {
            return  <Grid display="flex" justifyContent="center" alignItems="center" key={producto.id} item xs={12} sm={6} lg={4} xl={3}>
                        <ProductCard producto={producto}/>
                    </Grid>
            })}
        </Grid>
    )
}

export default ProductGrid