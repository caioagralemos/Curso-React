import { useState } from "react"
import useBooksContext from '../hooks/use-books-context';

function Book(props) {
    const { editBook, deleteBook } = useBooksContext()

    const { book } = props
    const [titulo, setTitulo] = useState(book.title)
    const [isEditing, setEditing] = useState(false)
    const toggleEdit = () => {
        setEditing(true)
    }
    const handleChange = (evt) => {
        setTitulo(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        editBook(titulo, book.id)
        setEditing(false)
    }
    const handleDelete = (evt) => {
        deleteBook(book.id)
    }
    if (isEditing === true) {
        return (
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
        return (
            <div className="book-show">
                <img alt="imagem" src={`https://picsum.photos/seed/${book.title}/300/200`} />
                {book.title}
                <div className="actions">
                    <button className="edit" onClick={toggleEdit}>editar</button>
                    <button className="delete" onClick={handleDelete}>excluir</button>
                </div>
            </div>
        )
    }
}

export default Book