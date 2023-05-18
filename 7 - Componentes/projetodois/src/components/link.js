function Link ({to, children}) {
    const handleClick = (evt) => {
        evt.preventDefault()
        window.history.pushState({}, '', to)
    }
    return <a onClick={handleClick} href={to}>{children}</a>
}

export default Link