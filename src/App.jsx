import {Routes, Route, Navigate} from 'react-router-dom'
import { ProductosContext } from './contexts/productosContext';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import HeaderNav from './components/Header/HeaderNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/pages/Home/Home';
import ProductDescription from './components/pages/ProductDescription/ProductDescription';
import Error404 from './components/Error/Error404';
import FAQ from './components/pages/FAQ/FAQ';
import db from '../db/firebase-config';
import './App.css'

function App() {
  const [productos, setProductos] = useState([]);
  const itemsCollectionRef = collection(db, "productos");

  const getProductos = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef);
    console.log(itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    setProductos(itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  }

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <HeaderNav />
      <ProductosContext.Provider value={productos}>
        <Routes>
          <Route path='/' element={<Navigate to='home'/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/faq' element={<FAQ />}/>
          {/* <Route path='/recetas' element={<Recetas />}/>
          <Route path='/contacto' element={<Contacto />}/> */}
          <Route path='/productos/*' element ={<ItemListContainer />}/>
          <Route path='/productos/categories/:category/:id' element={<ProductDescription />}/>
          <Route path='*' element ={<Error404 />}/>
        </Routes>
      </ProductosContext.Provider>
      <Footer />
    </>
  );
}

export default App
