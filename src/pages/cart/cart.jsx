import './cart.css';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {ItemCarrito} from '../../components/ItemCarrito/ItemCarrito'
import {Link} from 'react-router-dom';


export const Cart = () => {
    const {getCarrito} = useContext(CartContext)
    const {getTotal} = useContext(CartContext)
    const {comprar} = useContext(CartContext)
    const miCarrito = getCarrito()
    const total_carrito = getTotal()

    function compra(){
        comprar()
    }  

    return(
        <div className="cart">
            <h1>
                Mi Carrito
            </h1>
            {miCarrito.length > 0 && <div >
                <section className="cart_items">{miCarrito.map(item => <ItemCarrito key={item.id} item={item}/>)}</section>
                <section className="cart_detail">
                    <p>Total en carrito ${total_carrito}</p>
                    <button type="button" onClick={compra}>
                        Terminar mi compra
                    </button>
                </section>
                </div>
            }
            {miCarrito.length == 0 && <div>
                <p>No hay productos en el carrito</p>
                <Link to="/">Volver al inicio</Link>
                </div>    
            }
        </div>
    )
}