import { useState } from "react"
function Book(props){
    const {name, id} = props
    const [titulo, setTitulo] = useState(name)
    const [isEditing, setEditing] = useState(false)
    const toggleEdit = () => {
        setEditing(true)
    }
    const handleChange = (evt) => {
        setTitulo(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.editBook(titulo, id)
        setEditing(false)
    }
    const handleDelete = (evt) => {
        props.deleteBook(id)
    }
    if(isEditing === true) {
        return(
            <div className="book-show">
                <form>
                    <input 
                    value={titulo}
                    name="title"
                    onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>ok</button>
                </form>
            </div>
        )
    } else {
        return(
            <div className="book-show">
                <img alt="imagem" src={`https://picsum.photos/seed/${titulo}/300/200`} />
                {name}
                <div className="actions">
                <button className="edit" onClick={toggleEdit}>editar</button>
                <button className="delete" onClick={handleDelete}>excluir</button>
                </div>
            </div>
        )
    }
}

export default Book