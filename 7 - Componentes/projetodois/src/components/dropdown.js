import { useState } from "react"
function Dropdown({options, handleColor, selection}) {
    const [isOpen, setOpen] = useState(false)
    const opcoes = options.map((opcao, index) => {
        return <div key={opcao.value} onClick={() => handleColorClick(opcao)}>{opcao.label}</div>
    })
    const toggleOpen = () => {
        setOpen(!isOpen)
    }
    const handleColorClick = (cor) => {
        handleColor(cor)
        setOpen(false)

    }
    return (
        <div>
            <h1 className="text-xl" onClick={toggleOpen}>{selection.label}</h1>
            {isOpen && <div>{opcoes}</div>}
        </div>
    )
}

export default Dropdown