// nosso primeiro componente

class Hello extends React.Component {
	render(){
		// return só retorna um elemento, se for necessário retornar mais de um, envolva os numa div
		return (
			<div>
				<h1>Olá Mundo!</h1>
				<h1>Olá Mundo!</h1>
				<h1>Olá Mundo!</h1>
				<h1>Olá Mundo!</h1>
			</div>
		)
	}
}

// function component (nunca usado)
// function Hello() {
// 	return (
// 		<div>
// 				<h1>Olá Mundo!</h1>
// 				<h1>Olá Mundo!</h1>
// 				<h1>Olá Mundo!</h1>
// 				<h1>Olá Mundo!</h1>
// 			</div>
// 	)
// }

ReactDOM.render(<Hello/>, document.getElementById('root'))
