import api from "./api";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import { useState } from "react";

function SearchEngine () {
    const [res, setResponse] = useState([])
    const handleSearch = async (q) => {
        const responseZ = await api(q)
        setResponse(responseZ)
    }
    
    return (
        <div>
            <SearchBar 
                handleSearch={handleSearch}
            />
            <ImageList imagens={res} />

        </div>
    )
}

export default SearchEngine