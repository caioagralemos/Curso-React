import React, { Component } from 'react'

class AnnoyingForm extends Component{
    handleKeyUp(evt){
        if(evt.keyCode === 56) {
            alert('Eu amo estrelas!')
        } else {
            alert('isso não é uma estrela :/')
        }
    }

    render(){
        return (
            <div>
                <h4>O forms que ama estrelas</h4>
                <textarea onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}

export default AnnoyingForm