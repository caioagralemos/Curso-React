import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Container.css'

class Container extends Component {
    static defaultProps = {
        nBoxes: 18
    }

    render (){
        const Boxes = Array.from({length: this.props.nBoxes}).map(
            () => <ColorBox />
        )
        return <div className='Container'>
            {Boxes}
        </div>
    }
}

export default Container