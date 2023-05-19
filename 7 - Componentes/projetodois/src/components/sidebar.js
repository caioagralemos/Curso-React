import Link from "./link";

function Sidebar(){
    const links = [
        {
            label: 'Accordion',
            path: '/accordion'
        },
        {
            label: 'Button',
            path: '/button'
        },
        {
            label: 'Dropdown',
            path: '/dropdown'
        },
        {
            label: 'Modal',
            path: '/modal'
        }
    ]
    const renderedLinks = links.map((link) => {
        return <Link to={link.path}>{link.label}</Link>
    })
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar