import './App.css'
import Greeting from './components/Greeting/Greeting';
import HeaderNav from './components/Header/HeaderNav.jsx';

function App() {
  return (
    <>
      <HeaderNav />
      <Greeting nombre={'Gustavo'}/>
    </>
  );
}

export default App
