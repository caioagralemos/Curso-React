import React, { Component } from 'react'
import NumberItem from './NumberItem'

class NumberList extends Component{

    constructor(props){
        super(props)
        this.state = {nums: [1,2,3,4,5]}
    }

    remove = (num) => { // declarando e bindando a função
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num) // tirando num do array de numeros
        }))
    }

    render(){
        let nums = this.state.nums.map(n => ( // a cada item em state.nums ele vai criar um item <NumberItem/>
            <NumberItem value={n} remove={this.remove} />
        ))
        return(
            <div>
                <h4>Lista de Números - passando métodos pra child comps</h4>
                <ul>{nums}</ul>
            </div>
        )
    }
}

export default NumberList