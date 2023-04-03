import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import { NavLink, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { ProductosContext } from '../../../contexts/productosContext';
import {db} from '../../../../db/firebase-config';
import Error404 from '../../Error/Error404'
import ProductGrid from '../../ProductGrid/ProductGrid'
import Spinner from '../../spinner/Spinner';
import ProductDescription from '../ProductDescription/ProductDescription'
import './style.css'

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const itemsCollectionRef = collection(db, "productos");

  const getProductos = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    setProductos(itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    setIsLoading(false)
  }
  
  useEffect(() => {
      getProductos();
  }, []);

  return (
    <Stack 
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ mt:'12rem', mb:'8rem' }}
    >
      <Typography variant='h1' fontFamily='Honey Butter' component='h2' >
        Nuestras Delicias
      </Typography>

      <ButtonGroup className='grupoBtn' variant="primary" color='secondary' sx={{width:'70vw', height:'30px'}}>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink color='#f19ccc' to={'categories/all'}>
              Todos
          </NavLink>
          </Button>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink to={'categories/tortas'}>
              Tortas
          </NavLink>
          </Button>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink to={'categories/postres'}>
              Postres
          </NavLink>
          </Button>
        <Button sx={{flex:1, fontSize:'3rem'}}>
          <NavLink to={"categories/otros"}>
              Otros
          </NavLink>
        </Button>
      </ButtonGroup>
      {isLoading 
        ? <Spinner/> 
        : <ProductosContext.Provider value={productos}>
            <Routes>
              <Route path='/categories/:category' element={<ProductGrid />}/>
              <Route path='/categories/:category/:id' element={<ProductDescription />}/>
              <Route path='/*' element={<Error404 />}/>
            </Routes>
          </ProductosContext.Provider>}
    </Stack>
  )
}

export default ItemListContainer