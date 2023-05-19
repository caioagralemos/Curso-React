import useNavigationContext from "../hooks/use-navigation-context"
import classNames from "classnames";

function Link({ to, children, className, ...rest }) {
    const { navigate, currentPath } = useNavigationContext()
    let active = undefined
    if (currentPath === to) {
        active = 'font-bold border-l-4 border-blue-500 pl-2'
    }
    const classes = classNames(`text-blue-500 m-3`, className, active)
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