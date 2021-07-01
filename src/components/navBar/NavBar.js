import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget'
import logo from '../../img/GP_logo.png'
import logo_open from '../../img/GP_logo_open.png'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return <header>
        <nav className="navigation nav_left">
            <ul>                
                <li>
                    <NavLink className="cat_main" to="/category/verano">
                        Verano
                    </NavLink>
                </li>               
                <li>
                    <NavLink to="/category/camisas">
                        Camisas
                    </NavLink>
                </li>          
                <li>
                    <NavLink to="/category/vestidos">
                        Vestidos
                    </NavLink>
                </li>              
                <li>
                    <NavLink to="/category/shorts">
                        Shorts
                    </NavLink>
                </li>                
            </ul>
        </nav>
        <div className="logo">
            <Link to="/">
                <img alt="GP Babies logo" src={logo} onMouseOver={e => (e.currentTarget.src = `${logo_open}`)} onMouseOut={e => (e.currentTarget.src = `${logo}`)} />
            </Link>  
        </div>
        <CartWidget/>      
        <nav className="navigation nav_right">
        <ul>                
            <li>
                <NavLink to="/category/buzos">
                    Buzos
                </NavLink>
            </li>               
            <li>
                <NavLink to="/category/pantalones">
                    Pantalones
                </NavLink>
            </li>          
            <li>
                <NavLink to="/category/pijamas">
                    Pijamas
                </NavLink>
            </li>              
            <li>
                <NavLink className="cat_main" to="/category/invierno">
                    Invierno
                </NavLink>
            </li>                
        </ul>
        </nav>  
                     
        
        <div className="clearBoth"></div>
    </header>
    
}