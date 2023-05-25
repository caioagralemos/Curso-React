import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"
function CarSearch (){
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm
    })
    const handleChange = (evt) => {
        dispatch(changeSearchTerm(evt.target.value))
    }
    return <form>
        <label>Pesquise seu carro</label>
        <input type="text" value={searchTerm} onChange={handleChange}/>
    </form>
}

export default CarSearch