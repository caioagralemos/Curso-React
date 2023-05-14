import React, { Component } from 'react'
import Box from './Box'
import NewBox from './NewBox'
import {v4 as uuidv4} from 'uuid'

class BoxList extends Component {
    constructor(props){
        super(props)
        this.state = {boxes: [{height: 100, width: 100, color: 'brown', key: uuidv4(), id: uuidv4(), deleteBox: this.deleteBox}]}
    }
    addBox = (item) => {
        let newItem = { ...item, id: uuidv4() } // adicionando id nova ao objeto
        this.setState(state => ({
            boxes: [...state.boxes, newItem] // criando novo array com todos os itens do array antigo + item
        }))
    }
    deleteBox = (id) => {
        this.setState(state => ({
            boxes: state.boxes.filter(box => box.id !== id)
        }))
    }
    render(){
        let boxes = []
        for (let index = 0; index < this.state.boxes.length; index++) {
            boxes.push(
                <Box 
                height={this.state.boxes[index].height}
                width={this.state.boxes[index].width}
                color={this.state.boxes[index].color}
                id={this.state.boxes[index].id}
                deleteBox={this.deleteBox}
            />
            )
        }
        return (
            <div>
                <h1>Criador de ColorBoxes</h1>
                <NewBox addBox={this.addBox} />
                <div>
                    {boxes}
                </div>
            </div>
        )
    }
}

export default BoxList