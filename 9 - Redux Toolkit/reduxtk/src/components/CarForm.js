import { useDispatch, useSelector } from "react-redux"
import { changeName, changePrice, addCar } from "../store"
function CarForm() {
    const dispatch = useDispatch()
    const formData = useSelector((state) => {
        return state.form
    })
    const handleNameChange = (evt) => {
        const carName = evt.target.value
        dispatch(changeName(carName))
    }
    const handlePriceChange = (evt) => {
        const carCost = parseInt(evt.target.value) || 0
        dispatch(changePrice(carCost))
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        dispatch(addCar({ name: formData.name, price: formData.price }))
        dispatch(changeName(''))
        dispatch(changePrice(0))
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Adicionar carro</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Nome</label>
                        <input className="input is-expanded" type="text" required value={formData.name} onChange={handleNameChange} />
                    </div>
                    <div className="field">
                        <label className="label">Valor</label>
                        <input className="input is-expanded" type="number" value={formData.price} onChange={handlePriceChange} />
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CarForm