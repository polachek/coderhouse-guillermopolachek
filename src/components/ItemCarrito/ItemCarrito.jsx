export const ItemCarrito = ({item}) => {
    const{id,cantCart,title,price} = item

    return (
        <article className={`item_${id}`}>
            <h2>{title}</h2>
            <p>Precio unitario $ {price}</p>     
            <p>Cantidad en carrito: {cantCart}</p> 
            <p>Total por producto $ {price * cantCart}</p>  
            <button type="button">Borrar producto</button>          
        </article>
    )    
}