import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0) // useState(numero inicial) recebe dois parametros, um de estado e outro que vira uma func para mexer no state
  const handleClick = () => {
    setCount(count+1)
  }
  return (
    <div className="App">
    {/* exemplo de func de callback em uma linha só, bom para funcs pequenas */}
      <button onClick={handleClick}>Adicione um Animal</button>
      Número de Animais: {count}
    </div>
  );
}

export default App;
