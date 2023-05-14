class App extends React.Component {
    render() {
        return(
            <div>
                <Hello 
                to='Bruna'
                from="Caio"
                enfase={3} // número precisa ser declarado entre chaves
                array={[1,2,3,4,5]}
                />
                <Hello 
                to="Lionel" 
                from="Ronaldo"
                isTrue={true} // também precisa ser declarado entra chaves 
                img="https://midianinja.org/files/2022/11/image_2022-11-18_21-22-50.png"
                enfase={19}
                />
                <Hello 
                to="Pedrão"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))