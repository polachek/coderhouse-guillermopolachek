import './CartWidget.css';
import logo_shoppingCart from '../../img/shopping-cart-icon.png'
export const CartWidget = () => {
    return <aside className="cart_widget">
        <img src={logo_shoppingCart} alt={"Shopping cart"} />
    </aside>
    
}