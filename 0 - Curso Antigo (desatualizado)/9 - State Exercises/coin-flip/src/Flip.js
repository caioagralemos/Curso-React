import React, { Component } from 'react'
import Coin from './Coin'

class Flip extends Component{
    constructor(props){
        super(props)
        this.state = {atual: 1, cara: 0, coroa: 0, count: 0} // 1 cara, 2 coroa
    }

    flip = (args) => { // esse '= (e) =>' faz o bind do this tb!
        var random = Math.floor(Math.random() * 2 + 1)

        if (random === 1){
            this.setState(st => {
                return { cara: st.cara + 1, count: st.count + 1 }
            })
        } else if (random === 2) {
            this.setState(st => {
                return { coroa: st.coroa + 1, count: st.count + 1 }
            })
        }

        this.setState(st => {
            return { atual: random } // passando uma func de callback, JEITO CERTO de atualizar state
        })
    }

    render(){
        return ( 
        <div>
        <h1>Cara ou Coroa!</h1>
        <Coin 
        value={this.state.atual}
        />
        <p><button onClick={this.flip}>Jogar moeda</button></p>
        <p>Em {this.state.count} jogadas, tivemos {this.state.cara} caras e {this.state.coroa} coroas.</p>
        </div>
        )
    }
}

export default Flip