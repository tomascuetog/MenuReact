import './App.css';
import { NavBar } from './components/Navbar';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import { Counter } from './components/Counter';

function App() {
  return (
    
    <div className="App">

      <NavBar />
  	  <CartWidget />
      <ItemListContainer /> 
      <Counter />
      <header className="App-header">
      <p>Prueba</p>
      </header>
    </div>
    
  );
}

export default App;
