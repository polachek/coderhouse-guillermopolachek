import {useState} from 'react';
import './ItemCount.css';
export const ItemCount = ({stock,initial=1,onAdd=()=>{}}) => {
    
    const[contador,setContador] = useState(initial)

    const quitar = ()=>{
        if(contador > 0){
            setContador(contador -1)
         }
    }

    const agregar = ()=>{
        if(stock !== 0 && contador < stock){
            setContador(contador +1)
        }
    }

    return <aside className="itemCount">
        <button onClick={quitar}>-</button>
        <span>{contador}</span>
        <button onClick={agregar}>+</button>
        <button onClick={()=> onAdd(contador)} className="addtoCart">Agregar al carrito</button>
    </aside>   
}