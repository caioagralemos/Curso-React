import classNames from "classnames"
function Table({data, config}) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })
    const times = data.map((time, index) => {
        const renderedCells = config.map((column, index) => {
            return <td key={column.label} className="p-3">{column.render(time)}</td>
        })
        return (
            <tr className="border-b" key={time.name}>
                {renderedCells}
            </tr>
        )
    })
    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {times}
            </tbody>
        </table>
    )
}
export default Table