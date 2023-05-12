import api from "./api";
import SearchBar from "./SearchBar";
import Imagem from "./Image";
import { useState } from "react";

function SearchEngine () {
    const [res, setResponse] = useState([])
    const handleSearch = async (q) => {
        const responseZ = await api(q)
        setResponse(responseZ)
        
    }

    const images = res.map(r => {
        return <Imagem
            url={r.urls.regular}
            description={r.alt_description}
            />
        })
    
    return (
        <div>
            <SearchBar 
                handleSearch={handleSearch}
            />
            <div>
                {images}
            </div>
        </div>
    )
}

export default SearchEngine