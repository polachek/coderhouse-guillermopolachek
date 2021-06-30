import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return( 
    <aside className="cart_widget">
        <span class="fa-stack fa-2x has-badge" data-count="5">
            <FontAwesomeIcon icon={faShoppingBag}/> 
        </span>
    </aside>
    )
    
}