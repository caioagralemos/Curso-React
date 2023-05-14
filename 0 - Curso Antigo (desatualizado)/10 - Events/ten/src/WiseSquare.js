import React, { Component } from 'react'
import "./WiseSquare.css"

class WiseSquare extends Component {
    
    constructor(props){
        super(props)
        this.state={mensagem: "Passe o mouse pelo emoji pra receber sua mensagem!"}
    }

    dispenseWisdom = () => {
        let messages = [
            'Só sei que nada sei!',
            'Sei que os que confiam no Senhor nada temem',
            'Você é único representante do seu sonho na face da terra',
            'Você não pode deixar de fazer o que quer pelo que os outros vão pensar'
        ]
        let rIndex = Math.floor(Math.random() * messages.length)
        this.setState({mensagem: messages[rIndex]})
    }

    render(){
        return <div>
        <h4>WiseSquare</h4>
        <div onMouseEnter={this.dispenseWisdom} className='WiseSquare'>
        <p className='emoji'>🙃</p>
        </div>
        <p>{this.state.mensagem}</p>
        </div>
    }
}

export default WiseSquare;