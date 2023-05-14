import React, { Component } from 'react'

class ShoppingListForm extends Component{
    constructor(props){
        super(props)
        this.state = {name: '', qty: ''}
    }
    handleChange= (evt) =>{
        this.setState({[evt.target.name]: evt.target.value})
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addItem(this.state)
        this.setState({name: '', qty: ''})
    }
    render(){
        return (
        <div>
        <h3>Add product</h3>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input
                    id='name'
                    name='name' // nome do state
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label htmlFor='qty'>Quantity: </label>
                <input
                    id='qty'
                    name='qty' // nome do state
                    value={this.state.qty}
                    onChange={this.handleChange}
                />
                <button>submit</button>
            </form>
        </div>
        )
    }
}

export default ShoppingListForm