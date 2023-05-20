function Table({ data, config, keyfunc }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })
    const times = data.map((rowData, index) => {
        const renderedCells = config.map((column, index) => {
            return <td key={column.label} className="p-5">{column.render(rowData)}</td>
        })
        return (
            <tr key={keyfunc(rowData)} className="border-b">
                {renderedCells}
            </tr>
        )
    })
    return (
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