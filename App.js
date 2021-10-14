import './App.css';
import { NavBar } from './components/Navbar';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
    
    <div className="App">

      <NavBar />
  	  <CartWidget />
      <ItemListContainer /> 
      <header className="App-header">
      <p>Prueba</p>
      </header>
    </div>
    
  );
}

export default App;
