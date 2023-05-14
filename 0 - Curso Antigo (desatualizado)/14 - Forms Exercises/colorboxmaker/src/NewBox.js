import React, { Component } from 'react'

class NewBox extends Component {
    constructor(props){
        super(props)
        this.state={height: 0, width: 0, color: ''}
    }
    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addBox(this.state)
        this.setState({height: 0, width: 0, color: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Altura</label>
                <input 
                    name='height'
                    id='height'
                    onChange={this.handleChange}
                    value={this.state.height}
                />
                <label htmlFor='width'>Largura</label>
                <input 
                    name='width'
                    id='width'
                    onChange={this.handleChange}
                    value={this.state.width}
                />
                <label htmlFor='color'>Cor</label>
                <input 
                    name='color'
                    id='color'
                    onChange={this.handleChange}
                    value={this.state.color}
                />
                <button>criar nova box</button>
            </form>
        )
    }
}

export default NewBox