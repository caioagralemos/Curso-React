import './BookContainer.css'
import Book from "./Book";
import NewBook from "./NewBook";
import { useState } from "react";
function BookContainer(){
    const [books, setBooks] = useState([])
    const addBook = (book) => {
        setBooks([...books, book])
    }
    const editBook = (titulo, id) => {
        const newBooks = books.map(book => {
            if(book.id === id) {
                return {...book, title: titulo}
            } else {
                return book
            }
        })
        setBooks(newBooks)
    }
    const deleteBook = (id) => {
        const newBooks = books.filter((book) => {
            return book.id !== id
    })
        setBooks(newBooks)
    }
    const renderedBooks = books.map((book, index) => (
        <Book name={book.title} key={index} id={book.id} editBook={editBook} deleteBook={deleteBook}/>
    ))
    return(
        <div className="app">
            <h1>Lista de Leitura</h1>
            <div className="books">
                {renderedBooks}
            </div>
            <NewBook
            addBook={addBook}
            />
        </div>
    )
}

export default BookContainer