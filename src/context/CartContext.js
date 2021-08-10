import { createContext, useState } from "react"
import firebase from 'firebase/app'
import '@firebase/firestore'
import {getFirestore} from '../firebase/firebase'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])
    const [miOrden,setMiOrden] = useState(undefined)

    function addItem (item, cantidad){        
        if(isInCart(item.id)){
            const miItem = findByID(item.id)
            miItem.cantCart = miItem.cantCart + cantidad
        }else{
            item.cantCart = cantidad
            setCarrito([...carrito,item])
            console.log(carrito)
        }   
    }

    function getCarrito(){
        return carrito
    }

    function clear(){
        setCarrito([]);
    }

    function findByID(myId){
        const miItem = (
        carrito.find((item) => {
            return item.id === myId;
        }))
        return miItem
    }

    function removeItem(myId){
        const index = carrito.findIndex(item => item.id === myId);
        if (index > -1) {
            const nuevoCarrito = [...carrito];
            nuevoCarrito.splice(index, 1);
            if(nuevoCarrito.length > 0){
                setCarrito([nuevoCarrito])
            }else{
                setCarrito([])
            }
            
        }   
    }


    function isInCart(myId){
        const miItem = (
            carrito.find((item) => {
                return item.id === myId;
            }))
        if (typeof miItem != "undefined") {
            return true
        }
        return false
    }

    function getTotal(){
        let carrito_total = 0
        for(let i=0; i < carrito.length; i++){
            let tot_prod = (carrito[i].price * carrito[i].cantCart)
            carrito_total = carrito_total + tot_prod
        }
        return carrito_total
    }

    function getCantItems(){
        let carrito_cant = 0
        for(let i=0; i < carrito.length; i++){
            carrito_cant = carrito_cant + carrito[i].cantCart
        }
        return carrito_cant
    }

    function getOrder(nombre,apellido,telefono,email){
        const items = carrito.map((item) =>({
            id: item.id,
            title: item.title,
            price: item.price,
            cantidad: item.cantCart
        }))

        return{
            buyer:{
                name: nombre,
                surname: apellido,
                phone: telefono,
                email: email
            },
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: getTotal(),
            state: "Compra web"
        }
    }

    function comprar(nombre,apellido,telefono,email){
        const db = getFirestore();
        const orders = db.collection("orders")
        const myOrder = getOrder(nombre,apellido,telefono,email)
        orders.add(myOrder).then(({id})=>{
            actualizarStock(db,myOrder)
            const itemCollection = db.collection("orders")
            const myBuy = itemCollection.doc(id)
            myBuy.get().then((doc) =>{
                if(!doc.exists){
                    /*setErrorOrden('No existe la orden')*/
                    return
                }else{
                    setMiOrden({id:doc.id, ...doc.data()})
                    clear()
                }            
            }).catch((error) =>{
                /*setErrorOrden('Error buscando orden', error)*/
            }).finally(() =>{
                /*setCargando(false)*/
            })
        }).catch(err =>{
            console.log(err)
        }).finally(()=>{
            console.log('Termino compra')
        })
    }

    function getCompra(){        
        return miOrden
    }

    function actualizarStock(db){
        console.log('Entro a actualizarStock')
        for(let i=0; i < carrito.length; i++){   
            var docRef = db.collection('productos').doc(carrito[i].id)
            docRef.update({
                stock: carrito[i].stock - carrito[i].cantCart
            })
        }
    }

    return( 
    <CartContext.Provider value={{addItem, getCarrito, getTotal, getCantItems, comprar, getCompra, removeItem}}>
        {children}
    </CartContext.Provider>
    )
    
}