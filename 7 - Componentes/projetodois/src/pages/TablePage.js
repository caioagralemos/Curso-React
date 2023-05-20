import Table from "../components/table";

function TablePage() {
    const data = [
        { name: 'Brasil', color: 'bg-yellow-500', score: 6 },
        { name: 'Camarões', color: 'bg-lime-950', score: 4 },
        { name: 'Sérvia', color: 'bg-white', score: 1 },
        { name: 'Suíça', color: 'bg-red-500', score: 5 }
    ]
    const config = [
        {
            label: 'Name',
            render: (data) => data.name
        },
        { 
            label: 'Color',
            render: (data) => <div className={`p-2 m-3 border border-black ${data.color}`} />
        },
        { 
            label: 'Score',
            render: (data) => data.score
        }
    ]
    return <Table data={data} config={config} />
}
export default TablePage