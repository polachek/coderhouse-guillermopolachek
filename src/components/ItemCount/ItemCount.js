import {useState} from 'react';
import './ItemCount.css';
export const ItemCount = ({stock,initial,onAdd}) => {
    
    const[contador,setContador] = useState(initial)
    const[nuevoStock,setStock] = useState(stock)

    const quitar = ()=>{
        if(contador > 0){
            setContador(contador -1)
         }
    }

    const agregar = ()=>{
        if(nuevoStock !== 0 && contador < nuevoStock){
            setContador(contador +1)
        }
    }

    const comprar = ()=>{
        if(contador > 0 && nuevoStock > 0){
            setStock(nuevoStock - contador)
            alert(`Usted ha comprado ${contador} productos`)
            setContador(contador -contador)
        }

    }


    return <aside className="itemCount">
        <button onClick={quitar}>-</button>
        <span>{contador}</span>
        <button onClick={agregar}>+</button>
        <button onClick={comprar}>Agregar al carrito</button>
    </aside>   
}