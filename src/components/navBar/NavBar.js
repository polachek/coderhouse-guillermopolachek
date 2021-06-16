import './NavBar.css';
export const NavBar = () => {
    return <header>
        <a href="#"> 
            Guillermo Polachek
        </a>
        <nav>
            <ul>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Empresa</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </nav>
        <div className="clearBoth"></div>
    </header>
    
}