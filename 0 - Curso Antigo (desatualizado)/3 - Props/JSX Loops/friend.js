class Friend extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {this.props.hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}

// mapeando li's