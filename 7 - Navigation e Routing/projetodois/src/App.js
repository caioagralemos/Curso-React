import Botao from "./components/button"
import {GoAlert} from 'react-icons/go'

function App() {
    return (
        <div className="App">
            <div>
                <Botao>Plain</Botao>
                <Botao rounded>Plain</Botao>
                <Botao outline>Plain</Botao>
                <Botao outline rounded>Plain</Botao>
            </div>
            <div>
                <Botao primary>Primary</Botao>
                <Botao primary rounded>Primary</Botao>
                <Botao primary outline>Primary</Botao>
                <Botao primary outline rounded>Primary</Botao>
            </div>
            <div>
                <Botao secondary>Secondary</Botao>
                <Botao secondary rounded>Secondary</Botao>
                <Botao secondary outline>Secondary</Botao>
                <Botao secondary outline rounded>Secondary</Botao>
            </div>
            <div>
                <Botao success>Success</Botao>
                <Botao success rounded>Success</Botao>
                <Botao success outline>Success</Botao>
                <Botao success outline rounded>Success</Botao>
            </div>
            <div>
                <Botao warning><GoAlert /> Warning</Botao>
                <Botao warning rounded><GoAlert /> Warning</Botao>
                <Botao warning outline ><GoAlert /> Warning</Botao>
                <Botao warning outline rounded><GoAlert /> Warning</Botao>
            </div>
            <div>
                <Botao danger>Danger</Botao>
                <Botao danger rounded>Danger</Botao>
                <Botao danger outline>Danger</Botao>
                <Botao danger outline rounded>Danger</Botao>
            </div>
        </div>
    )
}

export default App