import Link from "./components/link"
function App() {
    return(
        <div className="App">
            Olá
            <Link to='/accordion'>Accordion</Link>
            <Link to="/button">Botões</Link>
            <Link to="/dropdown">Dropdown</Link>
        </div>
    )
}

export default App