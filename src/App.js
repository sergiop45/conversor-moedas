
import './App.css';
import Conversor from './components/Conversor'


function App() {
  return (
    <div className="App">
    <Conversor moedaA="BRL" moedaB="USD" />
     <Conversor moedaA="USD" moedaB="BRL" />
    </div>
  );
}

export default App;
