import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store"
function CarList() {
    const dispatch = useDispatch()
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            cars: filteredCars,
            name: form.name,
        };
    });
    const handleDelete = (car) => {
        dispatch(deleteCar(car))
        console.log(cars)
    }
    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return <div className={`panel ${bold && 'bold'}`} key={car.id}>
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
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList