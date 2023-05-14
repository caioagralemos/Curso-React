import React, { Component } from 'react'

class ButtonList extends Component {
    static defaultProps ={
        colors: ['#e056fd', '#eb4d4b', '#badc58', '#f0932b']
    }

    constructor(props){
        super(props)
        this.state = {color: "cyan"}
    }

    changeColor = (newColor) => {
        console.log(`new color is ${newColor}`)
        this.setState({color: newColor})
    }

    render(){
        return(
            <p>
            <h4>Essa foi tão confusa que eu não sei qual nome dar</h4>
            <div className='ButtonList' style={{backgroundColor: this.state.color}}>
                {this.props.colors.map(c => {
                    // onClick={this.changeColor()} está chamando imediatamente a função changeColor em vez de 
                    // passar uma referência para ela. Como resultado, a função é executada imediatamente quando
                    // o componente é renderizado, em vez de ser chamada apenas quando o botão é clicado.
                    // Para corrigir esse problema, você precisa remover os parênteses após this.changeColor
                    // para passar a referência da função, em vez de invocá-la imediatamente.
                    const colorObj = {backgroundColor: c};
                    return <button style={colorObj} onClick={() => this.changeColor(c)}>Clica em mim!</button> // ao ter uma função que tambem é passada um parâmetro tem que ser assim
                })}
            </div>
            </p>
        )
    }
}

export default ButtonList 