import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import HeaderNav from './components/Header/HeaderNav.jsx';

function App() {
  return (
    <>
      <HeaderNav />
      <ItemListContainer Greeting={'Bienvenido Gustavo'}/>
    </>
  );
}

export default App
