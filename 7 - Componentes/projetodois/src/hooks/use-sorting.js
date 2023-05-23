import { useState } from "react"

function useSorting(config, data) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const setSortColumn = (label) => {
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

    return {newData, sortOrder, sortBy, setSortColumn}

}

export default useSorting