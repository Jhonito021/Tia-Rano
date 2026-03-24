import './header.css';

function Header () {
    const navLinks = [
        {name: "Acceuil", path:"/", icone: "fas fa-home"},
        {name: "Services", path:"/services", icone: "fas fa-tools"},
        {name: "Clients", path:"/clients", icone: "fas fa-user-circle"},
        {name: "Contact", path:"/contact", icone: "fas fa-phone"},
    ];
    return (
        <header className='header'>
            <h1 className='logo'>Garage<span>021</span></h1>
            <ul className="nav-links">
                {navLinks.map((links, index) => (
                    <li key={index}>
                        <a href={links.path}><i className={links.icone}></i> {links.name}</a>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header;