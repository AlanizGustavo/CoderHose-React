import {Routes, Route, Navigate} from 'react-router-dom'
import { UserContext } from './contexts/userContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { CarritoContext, GetCarritoContext } from './contexts/carritoContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase-config';
import { useEffect } from 'react';
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import HeaderNav from './components/Header/HeaderNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/pages/Home/Home';
import Error404 from './components/Error/Error404';
import FAQ from './components/pages/FAQ/FAQ';
import NotLoged from './components/NotLoged/NotLoged';
import Carrito from './components/pages/Carrito/Carrito';
import './App.css'

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [carrito, setCarrito] = useState([])

  const carritoCollectionRef = collection(db, "carrito");

  const getCarrito = async () => {
    const carritoCollection = await getDocs(carritoCollectionRef);
    setCarrito(carritoCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  }

  useEffect(() => {
    getCarrito();
  }, [])
  

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
      setIsLogedIn(user)
  })
  
  return (
    <>
    <GetCarritoContext.Provider value={getCarrito}>
    <CarritoContext.Provider value={carrito}>
      <UserContext.Provider value={isLogedIn}>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<Navigate to='home'/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/faq' element={<FAQ />}/>
          {/* <Route path='/contacto' element={<Contacto />}/> */}
          {isLogedIn ? 
          <>
            {/* <Route path='/recetas' element={<Recetas />}/> */}
            <Route path='/carrito' element={<Carrito />}/>
            <Route path='/productos/*' element={<ItemListContainer />} />
          </>
          : <Route path='/productos/*' element={<NotLoged />} />}
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </CarritoContext.Provider>
    </GetCarritoContext.Provider>
    </>
  );
}

export default App
