import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext()

function NavigationProvider({children}) {
    const [currentPath, setPath] = useState(window.location.pathname)
    useEffect(() => {
        const handler = () => {
            setPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler)
        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [])
    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setPath(to)
    }
    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext