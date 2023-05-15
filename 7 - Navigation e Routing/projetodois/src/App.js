import Botao from "./components/button"

function App() {
    return (
        <div className="App">
            <Botao>Pix agora 1500</Botao>
            <Botao primary secondary />
        </div>
    )
}

export default App