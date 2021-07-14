import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const {getCantItems} = useContext(CartContext)
    const carrito_cant = getCantItems()

    return( 
    <aside className="cart_widget">  
        <Link to={'/cart'}>      
        {carrito_cant == 0 && <FontAwesomeIcon icon={faShoppingBag}/>}
        {carrito_cant > 0 && 
            <span className="fa-stack fa-2x has-badge" data-count={carrito_cant}>
                <FontAwesomeIcon icon={faShoppingBag}/> 
            </span>
        }
        </Link>
    </aside>
    )
    
}