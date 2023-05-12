import { useState } from "react"
function SearchBar(props){
    const [search, setSearch] = useState('')
    const handleChange = (evt) => {
        setSearch(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(search)
        props.handleSearch(search)
        setSearch('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="search-txt"
                onChange={handleChange}
                value={search}
            />
            <button>search</button>
        </form>
    )
}
export default SearchBar