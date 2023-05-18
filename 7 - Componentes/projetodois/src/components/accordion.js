import { useState } from "react"
import { GoArrowLeft, GoArrowDown } from "react-icons/go";

function Accordion({ itens }){
    const [expandedIndex, setIndex] = useState(-1)
    const handleClick = (i) => {
        if(expandedIndex === i){
            setIndex(-1)
        } else {
            setIndex(i)
        }
        // setIndex(index) como se o index do outro tivesse aqui também é permitido se não usarmos arrow func lá embaixo
    }
    const renderedItens = itens.map((item, index) => {
        let isExpanded = index === expandedIndex
        let icon = <span>{isExpanded ? <GoArrowDown /> : <GoArrowLeft />}</span>
        return(
            <div key={item.id}>
                <h5 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>{item.label}{icon}</h5>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return <div className="border-x border-t rounded">{renderedItens}</div>
}

export default Accordion