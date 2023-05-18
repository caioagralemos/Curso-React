import useNavigationContext from "./hooks/use-navigation-context"

function Link ({to, children, ...rest}) { 
    const {navigate} = useNavigationContext()
    const handleChange = (evt) => {
        evt.preventDefault()
        navigate(to)
    }
    return <a onClick={handleChange} {...rest} href={to}>{children}</a>
}

export default Link