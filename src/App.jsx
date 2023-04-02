import {Routes, Route, Navigate} from 'react-router-dom'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import HeaderNav from './components/Header/HeaderNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/pages/Home/Home';
import Error404 from './components/Error/Error404';
import FAQ from './components/pages/FAQ/FAQ';
import './App.css'
import { UserContext } from './contexts/userContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import NotLoged from './components/NotLoged/NotLoged';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false)

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
      setIsLogedIn(user)
  })

  const user = auth.currentUser;
  
  return (
    <>
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
    </>
  );
}

export default App
