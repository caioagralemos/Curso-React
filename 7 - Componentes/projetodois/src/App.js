import Sidebar from "./components/sidebar"
import Route from "./components/route"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'
function App() {
    return (
        <div className="App">
            <Sidebar />
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