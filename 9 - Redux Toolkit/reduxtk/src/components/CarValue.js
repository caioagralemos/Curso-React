import { useSelector } from "react-redux"
function CarValue (){
    const cars = useSelector((state) => {
        return state.cars.data
    })
    var value = 0
    for (let index = 0; index < cars.length; index++) {
        value += cars[index].price;
        
    }
    return <div>Valor total = R$ {value}.00</div>
}

export default CarValue