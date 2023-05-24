import Link from "./link";

function Sidebar(){
    const links = [
        {
            label: 'Accordion',
            path: '/accordion'
        },
        {
            label: 'Buttons',
            path: '/button'
        },
        {
            label: 'Counter',
            path: '/counter'
        },
        {
            label: 'Dropdown',
            path: '/dropdown'
        },
        {
            label: 'Modal',
            path: '/modal'
        },
        {
            label: 'Table',
            path: '/table'
        },
        {
            label: 'List',
            path: '/list'
        }
    ]
    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar