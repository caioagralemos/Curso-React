import Dropdown from "./components/dropdown"
import { useState } from "react"

function App() {
    const [color, setColor] = useState({label: 'Select', value: 'white'})
    const handleColor = (arg) => {
        setColor(arg)
    }
    const options = [
        {
            label: 'Amarelo',
            value:'yellow'
        },
        {
            label: 'Vermelho',
            value:'red'
        },
        {
            label: 'Branco',
            value:'white'
        },
        {
            label: 'Azul',
            value:'blue'
        }
    ]
    return<div style={{ backgroundColor: color.value }}><Dropdown options={options} selection={color} handleColor={handleColor}/></div>
}

export default App