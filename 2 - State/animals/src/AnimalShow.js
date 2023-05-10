import { useState } from 'react';
import Animal from './Animal';
import './AnimalShow.css'


function AnimalShow(props) {
    const {animals = ['cow', 'cat', 'dog', 'gator', 'horse']} = props // defaultProps
    let random = Math.floor(Math.random() * animals.length)
    const [addedAnimals, addAnimal] = useState([]) // useState(numero inicial) recebe dois parametros, um de estado e outro que vira uma func para mexer no state
    const handleClick = () => {
        addAnimal([...addedAnimals, animals[random]])
    }
    const passar = addedAnimals.map((animal, index) => (
        <Animal
        type = {animal}
        key= {index}
        />
    ))

    return (
        <div className='app'>
            {/* exemplo de func de callback em uma linha só, bom para funcs pequenas */}
            <button onClick={handleClick}>Adicione um Animal</button>
            <div className='animal-list'>{passar}</div>
            
        </div>
    )
}
export default AnimalShow