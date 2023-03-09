import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

const ProductGrid = ({productos}) => {
    const {category} = useParams();

    let prod;
    if (category != 'all') {
        prod = productos.filter( producto => {
            return producto.category == category;
        })
    } else {
        prod = productos;
    }
    return (
        <Grid container  spacing={3} sx={{ flexGrow: 1, mt:'8rem' }}>
                {prod.map((producto, index) => {
                return  <Grid display="flex" justifyContent="center" alignItems="center" key={index} item xs={12} sm={6} lg={4} xl={3}>
                            <ProductCard key={producto.id} producto={producto}/>
                        </Grid>
                })}
        </Grid>
    )
}

export default ProductGrid