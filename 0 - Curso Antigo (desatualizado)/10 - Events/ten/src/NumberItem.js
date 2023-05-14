import React, { Component } from 'react'

class NumberItem extends Component{

    handleRemove = (evt) => {
        this.props.remove(this.props.value)
    }

    render(){
        return(
            <div>
                {this.props.value}
                <button onClick={this.handleRemove}>x</button>
                {/* usar () depois de uma função num evento onClick faz com que ela seja constante e automaticamente executada */}
            </div>
        )
    }

}

export default NumberItem