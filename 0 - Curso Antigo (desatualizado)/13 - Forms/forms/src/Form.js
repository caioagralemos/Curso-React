import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {username: ""}
    }

    handleChange= (evt) =>{
        this.setState({username: evt.target.value})
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        alert(`u submitted the username ${this.state.username}`)
        this.setState({username: ''})
    }

    render(){
        return(
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder='Caio'
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Form