import { useState } from "react"
import Dropdown from "../components/dropdown"
import Panel from "../components/panel"

function useSorting(sortBy, sortOrder, data, config) {
    let newData = data;
    if (sortOrder.value !== 'no' && sortBy.value !== 'no') {
        const sortColumn = config.find(column => column.label === sortBy.value);
        if (sortColumn) {
            const { sortValue } = sortColumn;
            const order = sortOrder.value !== 'asc' ? 1 : -1;
            newData = [...data].sort((a, b) => {
                const va = sortValue(a);
                const vb = sortValue(b);
                if (typeof va === 'string') {
                    return va.localeCompare(vb) * order;
                } else {
                    return (va - vb) * order;
                }
            });
        }
    }

    return { newData };
}


function SortableList() {
    const [sortBy, setSortBy] = useState({ label: 'não organizar', value: 'no' });
    const [sortOrder, setSortOrder] = useState({ label: 'não organizar', value: 'no' });

    const handleSortBy = (arg) => {
        if (arg.value === 'no') {
            setSortBy(arg)
            setSortOrder(arg)
        } else {
            if (sortOrder.value === 'no') {
                setSortBy(arg)
                setSortOrder({ label: 'do maior', value: 'asc' })
            } else {
                setSortBy(arg)
            }
        }
    }

    const handleSortOrder = (arg) => {
        if (arg.value === 'no') {
            setSortBy(arg)
            setSortOrder(arg)
        } else {
            setSortOrder(arg)
        }
    }

    const optionsSortOrder = [
        {
            label: 'não organizar',
            value: 'no'
        },
        {
            label: 'do maior',
            value: 'asc'
        },
        {
            label: 'do menor',
            value: 'desc'
        }
    ]

    const optionsSortBy = [
        {
            label: 'não organizar',
            value: 'no'
        },
        {
            label: 'Preço',
            value: 'price'
        },
        {
            label: 'N. de Quartos',
            value: 'roomnum'
        }
    ]

    const data = [
        { name: 'Av. Brasil - Apt de Luxo', price: 1300, roomnum: 6 },
        { name: 'Estrada de Luz - Cabana para Casais', price: 600, roomnum: 1 },
        { name: 'Rua Sérvia - Flat Simples', price: 400, roomnum: 3 },
        { name: 'Logradouro Senhor Luiz Santos - Casa de Família', price: 700, roomnum: 5 },
        { name: 'Rua Claudio da Silva - Quarto e Sala', price: 300, roomnum: 1 },
        { name: 'Av Abdon Ramos - Mansão em Frente a Praia', price: 2300, roomnum: 10 },
    ]

    const config = [
        {
            label: 'name',
            sortValue: (data) => data.name
        },
        {
            label: 'price',
            sortValue: (data) => data.price
        },
        {
            label: 'roomnum',
            sortValue: (data) => data.roomnum
        }
    ]


    let { newData } = useSorting(sortBy, sortOrder, data, config)

    const renderedData = newData.map((d) => {
        return <Panel key={d.name}>{d.name} - {d.roomnum} quartos - R$ {d.price}.00</Panel>
    })

    return (
        <div className="w-full">
            <div className="flex justify-end mb-3">
                <Dropdown options={optionsSortBy} value={sortBy} onChange={handleSortBy} />
                <Dropdown options={optionsSortOrder} value={sortOrder} onChange={handleSortOrder} />
            </div>
            <div className="block">
                {renderedData}
            </div>
        </div>
    )
}

export default SortableList