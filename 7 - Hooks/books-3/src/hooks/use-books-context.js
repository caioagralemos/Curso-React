import BooksContext from "../context/books";
import { useContext } from "react";

// meu primeiro Hook
function useBooksContext() {
    return useContext(BooksContext)
}

export default useBooksContext