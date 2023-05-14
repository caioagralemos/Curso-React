import Lottery from "./Lottery";
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery
        title="Mega Sena"
      />
      <Lottery
        title="Quina"
        balln={5}
        maxvalue={80}
      />
    </div>
  );
}

export default App;
