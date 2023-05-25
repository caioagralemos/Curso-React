import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"
function CarSearch() {
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })
    const handleChange = (evt) => {
        dispatch(changeSearchTerm(evt.target.value))
    }
    return (
        <div className="list-header">
            <h3 className="title is-3">Meus Carros</h3>
            <div className="search field is-horizontal">
                <label className="label">Pesquise</label>
                <input className="input" type="text" value={searchTerm} onChange={handleChange} />
            </div>
        </div>
    )
}

export default CarSearch