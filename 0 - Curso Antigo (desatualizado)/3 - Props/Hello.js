class Hello extends React.Component {
    static defaultProps = {
        // criando valores default se não forem inseridos props
        from: 'Desconhecido',
        enfase: 1
    }
    render() {
        // não é possivel alterar props ou adicionar novas props com declarações simples
        const props = this.props
        const enfase = '!'.repeat(props.enfase) // props.enfase é um número
        console.log(props)
        return(
            <div>
            <h1>Oi {this.props.to}! Aqui é {this.props.from}{enfase}</h1>
            <img src={props.img} />
            </div>
        )
    }
}