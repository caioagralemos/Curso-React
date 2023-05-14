function myMood(){
	const moods = ['Feliz', 'Puto', 'Morrendo de Fome', 'Malvadão', 'Cansado']
	return moods[Math.floor(Math.random() * moods.length)]
}
class Mood extends React.Component {
	render(){
		return (
			<div>
				<p>Seu humor hoje é {myMood()}</p>
			</div>
		)
	}
}
