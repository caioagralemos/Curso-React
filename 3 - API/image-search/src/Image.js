function Imagem(props){
    return <div>
        <a href={props.link}><img src={props.url} alt={props.description}/></a>
    </div>
}
export default Imagem