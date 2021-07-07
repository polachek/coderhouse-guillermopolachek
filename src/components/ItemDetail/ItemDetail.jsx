import './ItemDetail.css';
import {useState} from 'react';
import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

export const ItemDetail = ({item}) => {
    const[cantidad,setCantidad] = useState(0)

    const onAdd = (cant) =>{
        setCantidad(cant)
    }  
    
    return (
        <article id={item.id} className={"item_box_detail"}>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>${item.price}</p>
            {!cantidad && <ItemCount stock={10} initial={1} onAdd={onAdd}/>}
            {!!cantidad && (
                <Link to="/cart">
                    <button type="button">
                        Terminar mi compra
                    </button>
                </Link>)
            }
          </article>
    )    
}