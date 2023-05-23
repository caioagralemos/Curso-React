import Table from "./table"

function SortableTable (props) {
    const handleClick = (label) => {
        console.log(`sorting ${label}`)
    }
    const {config} = props
    const newConfig = config.map((c) => {
        if (c.sortValue) {
            return {...c, header: () => <th onClick={() => handleClick(c.label)}>{c.label} is sortable</th>}
        } else {
            return c
        }
    })
    return <Table {...props} config={newConfig}/>
}

export default SortableTable