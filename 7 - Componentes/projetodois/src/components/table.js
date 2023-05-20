import classNames from "classnames"
function Table({data}) {
    const times = data.map((time, index) => {
        const classe = classNames(time.color, 'border', 'border-black', 'p-3', 'm-2')
        return (
            <tr className="border-b" key={time.name}>
                <td className="p-3">{time.name}</td>
                <td className='p-3'><div className={classe}></div></td>
                <td className="p-3">{time.score}</td>
            </tr>
        )
    })
    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    <th>Times</th>
                    <th>Cor</th>
                    <th>Pontos</th>
                </tr>
            </thead>
            <tbody>
                {times}
            </tbody>
        </table>
    )
}
export default Table