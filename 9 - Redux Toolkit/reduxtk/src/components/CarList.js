import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store"
function CarList (){
    const dispatch = useDispatch()
    const handleDelete = (car) => {
        dispatch(deleteCar(car))
    }
    const cars = useSelector((state) => {
        return state.cars
    })
    const renderedCars = cars.map((car, index) => {
        return <div key={index}>{car.name} - {car.price} <button onClick={() => handleDelete(car)}>delete</button></div>
    })
    return <div>{renderedCars}</div>
}

export default CarList