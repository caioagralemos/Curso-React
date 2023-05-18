import { useState } from "react"
import { GoArrowLeft, GoArrowDown } from "react-icons/go";

function Accordion({ itens }){
    const [expandedIndex, setIndex] = useState(0)
    const handleClick = (i) => {
        setIndex(i)
        // setIndex(index) como se o index do outro tivesse aqui também é permitido se não usarmos arrow func lá embaixo
    }
    const renderedItens = itens.map((item, index) => {
        let isExpanded = index === expandedIndex
        let icon = <span>{isExpanded ? <GoArrowDown /> : <GoArrowLeft />}</span>
        return(
            <div key={item.id}>
                <h5 onClick={() => handleClick(index)}>{item.label}{icon}</h5>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
    return <div>{renderedItens}</div>
}

export default Accordion