import logo from './logo.svg';
import './App.css';
import { helpful } from './helpers';
// utilizamos ./ pra importar de arquivos e o nome puro pra importar modulos
// sem {} para default export e com chaves para outros tipos de exports

function App() {
  return (
    <div className="App">
      {helpful()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve o arquivo para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
