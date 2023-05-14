import React, { Component } from 'react'
import "./Coin.css"

class Coin extends Component {
    static defaultProps = {
        value: 0
    }

    render(){
        return(
            <div>
                {this.props.value === 2 ? <img className='Coin' alt='Coroa' src='https://i.imgur.com/Txdtehy.png'/> : <img className='Coin' alt='Cara' src='https://i.imgur.com/7wy7g2x.png'/>}
            </div>
        )
    }
}

export default Coin