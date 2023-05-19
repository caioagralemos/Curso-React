import useNavigationContext from "../hooks/use-navigation-context";

function Route ({path, children}){
    const {currentPath} = useNavigationContext()

    if(path === currentPath) {
        return children
    } else {
        return null
    }
}

export default Route