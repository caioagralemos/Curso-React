import { useState } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./panel";

function Dropdown({options, onChange, value}) {
    const [isOpen, setOpen] = useState(false)
    const opcoes = options.map((opcao, index) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={opcao.value} onClick={() => handleColorClick(opcao)}>{opcao.label}</div>
    })
    const toggleOpen = () => {
        setOpen(!isOpen)
    }
    const handleColorClick = (cor) => {
        onChange(cor)
        setOpen(false)

    }
    return (
        <div className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>{value.label}{isOpen ? <GoChevronLeft /> : <GoChevronDown />}</Panel>
            {isOpen && <Panel className="absolute top-full">{opcoes}</Panel>}
        </div>
    )
}

export default Dropdown