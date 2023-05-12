import { useState } from "react"
import './SearchBar.css'
function SearchBar(props){
    const [search, setSearch] = useState('')
    const handleChange = (evt) => {
        setSearch(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault() 
        props.handleSearch(search)
        setSearch('')
    }
    return(
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
            <label>o que você quer ver hoje?</label>
            <input 
                type="text"
                name="search-txt"
                onChange={handleChange}
                value={search}
            />
        </form>
        </div>
    )
}
export default SearchBar