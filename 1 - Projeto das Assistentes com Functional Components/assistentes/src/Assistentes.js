import './Assistentes.css'
import 'bulma/css/bulma.css'

function Assistentes({img, name, descricao}){ // chave com os props utilizados na func
    return(
        <div className="card">
        <figure class="image is-4by3">
            <img className="card-image" src={img} alt={name} />
        </figure>
            <h3 className="title">{name}</h3>
            <p className="content">{descricao}</p>
        </div>
    )
}

export default Assistentes