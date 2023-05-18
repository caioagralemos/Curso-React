import Link from "./link"
function App() {
    return(
        <div className="App">
            Olá
            <Link to={'./accordion'}>Accordion</Link>
            <Link to={'./button'}>Button</Link>
            <Link to={'./dropdown'}>Dropdown</Link>
        </div>
    )
}

export default App