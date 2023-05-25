import { useSelector } from "react-redux"
function CarValue (){
    const cost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        var value = 0
        for (let car of filteredCars) {
            value += car.price;
        }   
        return value
    })
    return <div className="car-value">Valor total = R$ {cost}.00</div>
}

export default CarValue