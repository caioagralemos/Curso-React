import { useDispatch, useSelector } from "react-redux"
import { changeName, changePrice, addCar } from "../store"
function CarForm (){
    const dispatch = useDispatch()
    const formData = useSelector((state) => {
        return state.form
    })
    const handleNameChange = (evt) => {
        dispatch(changeName(evt.target.value))
    }
    const handlePriceChange = (evt) => {
        dispatch(changePrice(evt.target.value))
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch(addCar({name: formData.name, price: formData.price}))
        dispatch(changeName(''))
        dispatch(changePrice(0))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" required value={formData.name} onChange={handleNameChange}/>
            <input type="number" value={formData.price} onChange={handlePriceChange}/>
            <button>Submit</button>
        </form>
    )
}

export default CarForm