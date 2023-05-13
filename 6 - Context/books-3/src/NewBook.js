import { useState } from "react"
function NewBook(props){
    const [book, setBook] = useState('')

    const handleChange = (evt) => {
        setBook(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.addBook(book)
        setBook('')
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