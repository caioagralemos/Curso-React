import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props)
        this.state = { score: 0 }
    }

    addOne = (e) => { // esse '= (e) =>' faz o bind do this tb!
        this.setState(st => {
            return { score: st.score + 1 } // passando uma func de callback, JEITO CERTO de atualizar state
        })
    }

    addThree = (e) => { // esse '= (e) =>' faz o bind do this tb!
        this.setState(st => {
            return { score: st.score + 3 } // passando uma func de callback, , JEITO CERTO de atualizar state
        })
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.addOne}>add one</button>
                <button onClick={this.addThree}>add three</button>
            </div>
        )
    }
}

export default ScoreKeeper