import Link from "./components/link"
import Route from "./components/route"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'
function App() {
    return (
        <div className="App">
            <Link to='/accordion'>Accordion</Link>
            <Link to='/button'>Button</Link>
            <Link to='/dropdown'>Dropdown</Link>
            <div>
                <Route path='/accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/button'>
                    <ButtonPage />
                </Route>
                <Route path='/dropdown'>
                    <DropdownPage />
                </Route>
            </div>
        </div>
    )
}

export default App