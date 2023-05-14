import React, { Component } from 'react'
import './Dog.css' //importando css
import luke from './images/Luke.jpg'

class Dog extends Component {
    render () {
        return (
            <div className='Dog'>
                <h1>DOG</h1>
                <img className='Dog-img' alt='doggo' src={luke}/>
            </div>
        )
    }
}

export default Dog