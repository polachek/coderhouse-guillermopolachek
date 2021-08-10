import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

export const ItemCarrito = ({item}) => {
    const{id,cantCart,title,price} = item
    const {removeItem} = useContext(CartContext)


    const onRemove = () =>{
        console.log(id)
        removeItem(id)
    } 

    return (
        <article className={`item_${id}`}>
            <h2>{title}</h2>
            <p>Precio unitario $ {price}</p>     
            <p>Cantidad en carrito: {cantCart}</p> 
            <p>Total por producto $ {price * cantCart}</p>  
            <button type="button" onClick={onRemove}>Borrar producto</button>          
        </article>
    )    
}