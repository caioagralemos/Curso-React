import './Assistentes.css'
import 'bootstrap/dist/css/bootstrap.css'

function Assistentes({img, name, descricao, at}){ // chave com os props utilizados na func
    return(
        <div className="card m-3" style={{width: '18rem'}}>
        <img className="card-img-top" src={img} alt={name} />
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{descricao}</p>
            <p class="card-text"><small class="text-body-secondary">{at}</small></p>
        </div>
        </div>
    )
}

export default Assistentes