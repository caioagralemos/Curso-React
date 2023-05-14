import React, { Component } from 'react'
import "./Ball.css"

class Ball extends Component {
    render(){ 
       return <div className='Ball'>{this.props.value}</div>
    }
}

export default Ball