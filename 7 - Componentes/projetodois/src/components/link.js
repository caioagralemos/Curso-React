import useNavigationContext from "../hooks/use-navigation-context"

function Link({ to, children, ...rest }) {
    const { navigate } = useNavigationContext()
    const handleChange = (evt) => {
        if (evt.metaKey || evt.ctrlKey) {
            return;
        }
        evt.preventDefault()
        navigate(to)
    }
    return <a href={to} onClick={handleChange} {...rest}>
        {children}
    </a>
}

export default Link