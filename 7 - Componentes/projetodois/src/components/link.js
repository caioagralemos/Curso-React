import useNavigationContext from "../hooks/use-navigation-context"
import classNames from "classnames";

function Link({ to, children, className, ...rest }) {
    const { navigate } = useNavigationContext()
    const classes = classNames('text-blue-500 m-1', className)
    const handleClick = (evt) => {
        if (evt.metaKey || evt.ctrlKey) {
            return;
        }
        evt.preventDefault()
        navigate(to)
    }
    return <a href={to} className={classes} onClick={handleClick} {...rest}>
        {children}
    </a>
}

export default Link