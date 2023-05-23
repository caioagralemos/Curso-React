import Table from "./table"
import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go'
import useSorting from "../hooks/use-sorting"

function SortableTable(props) {
    const { config, data } = props
    var {newData, sortOrder, sortBy, setSortColumn} = useSorting(config, data)

    const newConfig = config.map((c) => {
        if (c.sortValue) {
            return {
                ...c, header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(c.label)}>
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