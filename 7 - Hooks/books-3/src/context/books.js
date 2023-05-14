import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const BooksContext = createContext()

function Provider({ children }) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])
    //[] executa apenas depois do primeiro render, sem ele executa a cada render, e um [contador] executa a cada render onde o contador muda

    useEffect(() => {
        console.log(books)
    }) // executa a cada render

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

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

    const valueToShare = {
        books,
        deleteBook,
        editBook,
        addBook,
        fetchBooks
    }

    return(
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext