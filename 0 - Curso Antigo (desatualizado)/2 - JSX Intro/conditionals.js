function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPick extends React.Component {
    render(){
        const num = getNum()
        return ( 
            <div>
                <h1>Seu número é {num}</h1> 
                <p>{num === 7 ? 'Parabéns, seu número é 7' : 'Infelizmente seu número não foi 7'}</p>
                {num === 7 ? <img src ='https://i.pinimg.com/originals/64/72/f8/6472f811e6dd948b01c396fd9007655d.gif' /> : null}      
            </div>
        )
    }
}