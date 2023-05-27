import { useState } from "react"
import { GoChevronLeft, GoChevronDown } from "react-icons/go"

function ExpandablePanel({ header, children, id }) {
    const [isExpanded, expand] = useState(false)
    return (
        <div key={id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between itens-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div className="cursor-pointer" onClick={() => expand(!isExpanded)}>
                    {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {
                isExpanded && <div className="p-2 border-t">
                    {children}
                </div>
            }
        </div>
    )
}

export default ExpandablePanel