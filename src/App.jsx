import {Routes, Route, Navigate} from 'react-router-dom'
import ItemListContainer from './components/pages/ItemListContainer/ItemListContainer';
import HeaderNav from './components/Header/HeaderNav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/pages/Home/Home';
import Error404 from './components/Error/Error404';
import FAQ from './components/pages/FAQ/FAQ';
import './App.css'

function App() {

  return (
    <>
      <HeaderNav />
        <Routes>
          <Route path='/' element={<Navigate to='home'/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/faq' element={<FAQ />}/>
          {/* <Route path='/recetas' element={<Recetas />}/>
          <Route path='/contacto' element={<Contacto />}/> */}
          <Route path='/productos/*' element ={<ItemListContainer />}/>
          <Route path='*' element ={<Error404 />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App
