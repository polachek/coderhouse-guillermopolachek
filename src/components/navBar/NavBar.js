import './NavBar.css';
import {CartWidget} from '../CartWidget/CartWidget'
import logo from '../../img/GP_logo.png'
import logo_open from '../../img/GP_logo_open.png'

export const NavBar = () => {
    return <header>
        <nav className="navigation nav_left">
            <ul>
                <li>
                    <a className="cat_main" href="/">Verano</a>
                </li>
                <li>
                    <a href="/">Camisas</a>
                </li>
                <li>
                    <a href="/">Vestidos</a>
                </li>
                <li>
                    <a href="/">Shorts</a>
                </li>
            </ul>
        </nav>
        <div className="logo">
            <a href="/"> 
                <img alt="GP Babies logo" src={logo} onMouseOver={e => (e.currentTarget.src = `${logo_open}`)} onMouseOut={e => (e.currentTarget.src = `${logo}`)} />
            </a>     
        </div>
        <CartWidget/>      
        <nav className="navigation nav_right">
            <ul>                
                <li>
                    <a href="/">Buzos</a>
                </li>
                <li>
                    <a href="/">Pantalones</a>
                </li>
                <li>
                    <a href="/">Pijamas</a>
                </li>
                <li>
                    <a className="cat_main" href="/">Invierno</a>
                </li>
            </ul>
        </nav>  
                     
        
        <div className="clearBoth"></div>
    </header>
    
}