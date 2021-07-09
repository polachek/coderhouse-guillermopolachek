import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const addItem = (item, cantidad) =>{
        item.cantCart = cantidad
        setCarrito([...carrito,item])        
    }

    const clear = () =>{
        /*setCarrito([]);*/
        console.log('Clear')
    }

    const isInCart = (myId) =>{
        const miItem = (
        carrito.find((item) => {
            return item.id === myId;
        }))
        if (typeof miItem != "undefined") {
            return true
        }
        return false
    }

    return( 
    <CartContext.Provider value={addItem}>
        {children}
    </CartContext.Provider>
    )
    
}