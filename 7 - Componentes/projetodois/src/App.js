import Sidebar from "./components/sidebar"
import Route from "./components/route"
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage"
import CounterPage from "./pages/CounterPage"
import SortableList from "./pages/ListPage"

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path='/accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/button'>
                    <ButtonPage />
                </Route>
                <Route path='/dropdown'>
                    <DropdownPage />
                </Route>
                <Route path='/modal'>
                    <ModalPage />
                </Route>
                <Route path='/table'>
                    <TablePage />
                </Route>
                <Route path='/counter'>
                    <CounterPage initialCount={0} />
                </Route>
                <Route path='/list'>
                    <SortableList />
                </Route>
            </div>
        </div>
    )
}

export default App