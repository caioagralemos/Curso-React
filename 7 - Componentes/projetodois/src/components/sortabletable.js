import Table from "./table"
import { useState } from "react"
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go'

function SortableTable(props) {
    const { config, data } = props
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        setSortBy(label)
        if (sortBy === label) {

            if (sortOrder === null) {
                setSortOrder('asc')
            } else if (sortOrder === 'asc') {
                setSortOrder('desc')
            } else {
                setSortOrder(null)
                setSortBy(null)
            }

        } else {
            setSortOrder('asc')
        }
    }

    let newData = data
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy)
        const order = sortOrder === 'asc' ? 1 : -1
        newData = [...data].sort((a, b) => {
            const va = sortValue(a)
            const vb = sortValue(b)
            if (typeof va === 'string') {
                return va.localeCompare(vb) * order
            } else {
                return (va - vb) * order
            }
        })


    }

    const newConfig = config.map((c) => {
        if (c.sortValue) {
            return {
                ...c, header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(c.label)}>
                    <div className="flex items-center">
                        {sortOrder === 'asc' && sortBy === c.label ? <GoArrowSmallUp /> : null}
                        {sortOrder === 'desc' && sortBy === c.label ? <GoArrowSmallDown /> : null}
                        {sortBy !== c.label ? <div><GoArrowSmallUp /><GoArrowSmallDown /></div> : null}
                        {c.label}
                    </div>
                </th>
            }
        } else {
            return c
        }
    })
    return (
        <div>
            <Table {...props} config={newConfig} data={newData} />
        </div>
    )
}

export default SortableTable