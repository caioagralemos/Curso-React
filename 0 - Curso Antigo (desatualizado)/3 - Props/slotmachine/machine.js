class Machine extends React.Component{
    render(){
        console.log(this.props)
        return(
            // importante usar className já que class é uma reserved word do react
            // assim como em for= (label) se usa htmlFor=()
            <div className="Machine">
                <p style={{fontSize: '40px'}}>{this.props.s1} {this.props.s2} {this.props.s3}</p>
                { this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3 ? <p style={{color: 'green'}}>Você venceu!</p> : <p style={{color: 'red'}}>Você perdeu</p>}
            </div>
        )
    }
}