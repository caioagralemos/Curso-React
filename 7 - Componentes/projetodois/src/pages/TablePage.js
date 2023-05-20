import Table from "../components/table";

function TablePage() {
    const data = [
        {name: 'Brasil', color: 'bg-yellow-500', score: 6},
        {name: 'Camarões', color: 'bg-lime-950', score: 4},
        {name: 'Sérvia', color: 'bg-white', score: 1},
        {name: 'Suíça', color: 'bg-red-500', score: 5}
    ]
    return <Table data={data} />
}
export default TablePage