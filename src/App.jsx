import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import HeaderNav from './components/Header/HeaderNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Home from './components/pages/Home/Home';
import ProductDescription from './components/pages/ProductDescription/ProductDescription';
import Error404 from './components/Error/Error404';
import FAQ from './components/pages/FAQ/FAQ';

function App() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const res = await axios.get("http://fakestoreapi.com/products");
    setProductos(res.data);
  }

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/faq' element={<FAQ />}/>
        {/* <Route path='/recetas' element={<Recetas />}/>
        <Route path='/contacto' element={<Contacto />}/> */}
        <Route path='/productos/*' element ={<ItemListContainer productos={productos}/>}/>
        <Route path='/productos/categories/:category/:id' element={<ProductDescription productos={productos}/>}/>
        <Route path='*' element ={<Error404 />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
