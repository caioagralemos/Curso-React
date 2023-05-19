import { useState, useEffect, useRef } from "react"
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./panel";

function Dropdown({options, onChange, value}) {
    const [isOpen, setOpen] = useState(false)
    const divEl = useRef() // divElement - cria uma referencia a esse dropdown específico
    useEffect(() => {
        const handler = (evt) => {
            if(!divEl.current){
                return
            }
            if(!divEl.current.contains(evt.target)){
                setOpen(false)
            }
        }
        document.addEventListener('click', handler, true)
        return () => {
            // retornar essa função quebra o efeito do useEffect no momento em que o dropdown não tiver mais na tela
            document.removeEventListener('click', handler)
        }
    }, [])
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
        <div ref={divEl} className="w-48 p-1 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>{value.label}{isOpen ? <GoChevronLeft /> : <GoChevronDown />}</Panel>
            {isOpen && <Panel className="absolute top-full">{opcoes}</Panel>}
        </div>
    )
}

export default Dropdown