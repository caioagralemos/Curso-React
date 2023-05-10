import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'
import { useState } from 'react'
import './Animal.css'

function Animal(props){
    const svgMap = {
        cat,
        cow,
        dog,
        gator,
        horse
    }
    const [cliques, setCliques] = useState(1)
    const handleClick = () => {
        setCliques(cliques * 2)
    }
    return(
        <div className='animal' onClick={handleClick}>
            <img className='animal-image' alt={props.type} src={svgMap[props.type]} />
            <img className='heart' alt='heart' src={heart} style={{height: `${cliques}px`, width: `${cliques}px`}}/>
        </div>
    )
}
export default Animal