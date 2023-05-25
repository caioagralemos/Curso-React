import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store"
function CarList() {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })
    const cars = useSelector((state) => {
        return state.cars.data
    })
    const handleDelete = (car) => {
        dispatch(deleteCar(car))
        console.log(cars)
    }
    const renderedCars = cars.map((car) => {
        return <div className="panel" key={car.id}>
            <p>
                {car.name} - {car.price}
            </p>
            <button className="button is-danger" onClick={() => handleDelete(car)}>
                delete
            </button>
        </div>
    })
    if (searchTerm === '') {
        return (
            <div className="car-list">
                {renderedCars}
                <hr />
            </div>
        )
    } else {
        const searchedCars = cars.filter(car => car.name.toLowerCase() == searchTerm.toLowerCase())
        const renderedSC = searchedCars.map((car) => {
            return <div className="panel" key={car.id}>
                <p>
                    {car.name} - {car.price}
                </p>
                <button className="button is-danger" onClick={() => handleDelete(car)}>
                    delete
                </button>
            </div>
        })
        return (
            <div className="car-list">
                {renderedSC}
                <hr />
            </div>
        )
    }
}

export default CarList