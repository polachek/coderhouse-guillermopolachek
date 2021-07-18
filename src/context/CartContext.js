import { createContext, useState } from "react"
import firebase from 'firebase/app'
import '@firebase/firestore'
import {getFirestore} from '../firebase/firebase'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

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

    function clear (){
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
            setCarrito([nuevoCarrito])
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

    function getOrder(){
        const items = carrito.map((item) =>({
            id: item.id,
            title: item.title,
            price: item.price,
            cantidad: item.cantCart
        }))

        return{
            buyer:{
                name: 'Guillermo',
                phone: '0989898',
                email: 'correo@gmail.com'
            },
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: getTotal()
        }
    }

    function comprar(){
        const db = getFirestore();
        const orders = db.collection("orders")
        const myOrder = getOrder()
        orders.add(myOrder).then(({id})=>{
            actualizarStock(db,myOrder)
            alert('Compra exitosa')
        }).catch(err =>{
            console.log(err)
        }).finally(()=>{
            console.log('Termino compra')
        })
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
    <CartContext.Provider value={{addItem, getCarrito, getTotal, getCantItems, comprar}}>
        {children}
    </CartContext.Provider>
    )
    
}