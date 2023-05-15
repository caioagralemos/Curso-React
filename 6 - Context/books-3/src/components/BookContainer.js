import '../stylesheets/BookContainer.css'
import Book from "./Book";
import NewBook from "./NewBook";
import useBooksContext from '../hooks/use-books-context';
import { useEffect } from 'react';

function BookContainer() {
    const { books, stableFetchBooks } = useBooksContext()

    useEffect(() => {
        stableFetchBooks()
    }, [stableFetchBooks])

    const renderedBooks = books.map((book, index) => (
        <Book id={book.id} book={book} key={index} />
    ))
    return (
        <div className="app">
            <h1>Lista de Leitura</h1>
            {/* {count}
            <button onClick={incrementCount}>Click me</button> */}
            <div className="books">
                {renderedBooks}
            </div>
            <NewBook />
        </div>
    )
}

export default BookContainer