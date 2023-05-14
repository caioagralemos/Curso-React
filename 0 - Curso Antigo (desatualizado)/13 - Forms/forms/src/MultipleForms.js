import React, { Component } from 'react'

class MultipleForms extends Component {
    constructor(props){
        super(props)
        this.state = {username: "", email: "", password: ""}
    }

    handleChange= (evt) =>{
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSubmit = (evt) =>{
        evt.preventDefault()
        alert(`username: ${this.state.username}\nemail: ${this.state.email}\npassword: ${this.state.password}`)
        this.setState({username: '', email: "", password: ""})
    }

    render(){
        return(
            <div>
                <h1>Form w/ Multiple Inputs</h1>
                <form onSubmit={this.handleSubmit}>
                {/* htmlFor serve no lugar do for das labels */}
                    <label htmlFor='username'>Nome de Usuário: </label> 
                    <input
                        type='text'
                        name='username' // evt.target.name
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder='Caio'
                    />
                    <input 
                    type='email'
                    name='email'// evt.target.name
                    placeholder='email@email.com'
                    onChange={this.handleChange}
                    value={this.state.email} 
                    
                    />
                    <input 
                    type='password'
                    name='password' // evt.target.name
                    placeholder='dog1234'
                    onChange={this.handleChange}
                    value={this.state.password}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default MultipleForms