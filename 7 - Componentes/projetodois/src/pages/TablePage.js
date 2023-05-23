import Table from "../components/table";

function TablePage() {
    const data = [
        { name: 'Brasil', color: 'bg-yellow-300', score: 6, goals: 11 },
        { name: 'Camarões', color: 'bg-lime-700', score: 4, goals: 5 },
        { name: 'Sérvia', color: 'bg-white', score: 1, goals: 6 },
        { name: 'Suíça', color: 'bg-red-500', score: 5, goals: 8 }
    ]
    const config = [
        { 
            label: 'Cor',
            render: (data) => <div className={`p-2 m-3 border border-black ${data.color}`} />,
            header: () => <th className="bg-red-500">Cor</th>
        },
        {
            label: 'Time',
            render: (data) => data.name,
            header: () => <th>Time</th>,
            sortValue:
        },
        { 
            label: 'Pontos',
            render: (data) => data.score,
            header: () => <th>Pontos</th>,
            sortValue:
        },
        {
            label: 'Gols',
            render: (data) => data.goals,
            header: () => <th>Gols</th>,
            sortValue:
        }
    ]
    const keyfunc = (data) => {
        return data.name
    }
    return <Table keyfunc={keyfunc} data={data} config={config} />
}
export default TablePage