// um exemplo onde o elemento filho transfere data para o elemento pai, onde fica o state

import React, { Component } from 'react'
import ShoppingListForm from './ShoppingListForm'
import { v4 as uuidv4 } from 'uuid' // adicionando gerador de ids

class ShoppingList extends Component {
    constructor(props){
        super(props)
        this.state = {
            itens: [
                { name: 'Milk', qty: 2, id: uuidv4() },
                { name: 'Bread', qty: 5, id: uuidv4() },
                { name: 'Pasta', qty: 3, id: uuidv4() },
                { name: 'Water Gallons', qty: 7, id: uuidv4() },
            ]
        }
    }
    addItem = (item) => {
        let newItem = { ...item, id: uuidv4() } // adicionando id nova ao objeto
        this.setState(state => ({
            itens: [...state.itens, newItem] // criando novo array com todos os itens do array antigo + item
        }))
    }
    renderItens(){
        return(
            <ul>
                {this.state.itens.map(item => (
                    <li key={item.id}>
                        {item.name}:{item.qty}
                    </li>
                ))}
            </ul>
        )
    }
    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                {this.renderItens()}
                <ShoppingListForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default ShoppingList