import React, { Component } from 'react'
import "./ColorBox.css"

class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {color: "black", picked: false}
    }

    cores = [
        'black',
        'blue',
        'purple',
        'pink',
        'brown',
        'yellow',
        'gray',
        'darkblue',
        'green',
        'white',
        'orange',
        'red'
    ]

    handleClick = () => {
        const random = Math.floor(Math.random() * this.cores.length + 1)
        const newColor = this.cores[random]
        this.setState({ color: newColor });
    }

    render(){
        if(this.state.picked === false){
            this.handleClick()
            this.setState({ picked: true });
        }
        return(
            <div className='ColorBox' onClick={this.handleClick} style={{backgroundColor: this.state.color}}>

            </div>
        )
    }
}

export default ColorBox