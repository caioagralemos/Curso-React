class App extends React.Component {
	render(){
		return (
			<div>
				<Mood />
                <NumPick />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))