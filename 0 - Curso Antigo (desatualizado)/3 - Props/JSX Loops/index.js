class App extends React.Component{
    render(){
        return(
            <div>
            <Friend 
            name="Caio"
            hobbies={["Futebol", 'Videogame', 'Viajar']}
            />
           </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))