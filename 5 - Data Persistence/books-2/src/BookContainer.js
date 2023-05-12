import './BookContainer.css'
import Book from "./Book";
import NewBook from "./NewBook";
import { useState, useEffect } from "react";
import axios from 'axios';

function BookContainer() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, []) //[] executa apenas depois do primeiro render, sem ele executa a cada render, e um [contador] executa a cada render onde o contador muda

    useEffect(() => {
        console.log(books)
    }) //[] executa apenas depois do primeiro render, sem ele executa a cada render, e um [contador] executa a cada render onde o contador muda

    const addBook = async (book) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: book
        })
        const newBooks = [
            ...books, response.data
        ]
        setBooks(newBooks)
        // setBooks([...books, book])
    }

    const editBook = async (titulo, id) => {
        await axios.put(`http://localhost:3001/books/${id}`, {
            title: titulo
        })
        fetchBooks()
    }
    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        fetchBooks()
    }
    const renderedBooks = books.map((book, index) => (
        <Book name={book.title} key={index} id={book.id} editBook={editBook} deleteBook={deleteBook} />
    ))
    return (
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