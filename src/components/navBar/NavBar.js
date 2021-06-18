import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget'
export const NavBar = () => {
    return <header>
        <a href="#"> 
            Guillermo Polachek
        </a>
        <div className="navBar_rightSidebar">
            <CartWidget/>
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
        </div>
        <div className="clearBoth"></div>
    </header>
    
}