import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
function NewBook(props){
    const [book, setBook] = useState({title: '', id: uuidv4()})

    const handleChange = (evt) => {
        setBook({title: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.addBook(book)
        setBook({title: '', id: uuidv4()})
    } 

    return(
        <div className="book-create">
        <h3>Adicionar livro</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="book">Título</label>
            <input
                className="input"
                type="text"
                name="book"
                onChange={handleChange}
                value={book.title}
            />
            <button className="button">enviar</button>
        </form>
        </div>
    )
}
export default NewBook