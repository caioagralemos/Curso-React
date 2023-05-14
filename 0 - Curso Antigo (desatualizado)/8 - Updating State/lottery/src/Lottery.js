import React, { Component } from 'react'
import Ball from './Ball'
import "./Lottery.css"

class Lottery extends Component {
    static defaultProps = {
        title: 'MyLotto',
        balln: 6,
        maxvalue: 60
    }

    constructor(props){
        super(props)
        this.state = {values: [], generated: false}
    }

    generateNums = (balln, maxvalue) => { // esse '= (args) =>' faz o bind do this tb!
        var novoArray = []
        for (let index = 0; index < balln; index++) {
            var numero = Math.floor(Math.random() * maxvalue + 1)
            novoArray.push(numero)
        }
        return novoArray
    }

    handleGenerate = (e) => { // define values como um novo array gerado pela generateNums que ela mesmo chama
        this.setState({values: this.generateNums(this.props.balln, this.props.maxvalue)})
    }

    render(){
        if(this.state.generated === false) {
            this.handleGenerate()
            this.setState({generated: true}) // faz com que ele gere apenas um resultado quando abrir a página
        }
        return(
            <div className='Lottery'>
                <h1>{this.props.title}</h1>
                <div className='Balls'>
                    {this.state.values.slice(0, this.state.balln).map((value, index) => (
                        <Ball value={this.state.values[index]} /> // criando bolas pelo num de bolas
                    ))}
                </div>
                <button onClick={this.handleGenerate}>Generate</button>
            </div>
        )
    }
}

export default Lottery