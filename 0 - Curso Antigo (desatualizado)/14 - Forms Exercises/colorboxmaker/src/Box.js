import React, { Component } from 'react'

class Box extends Component {
    handleDelete = () => {
        this.props.deleteBox(this.props.id)
    }
    render(){
        console.log(this.props.id)
        return(
            <div>
            <div className='Box' style={{height: `${this.props.height}px`, width: `${this.props.width}px`, backgroundColor: this.props.color}}></div>
            <button onClick={this.handleDelete}>x</button>
            </div>

        )
    }
}

export default Box