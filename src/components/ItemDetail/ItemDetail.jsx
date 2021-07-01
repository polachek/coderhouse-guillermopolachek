import './ItemDetail.css';
import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {
    return (
        <article id={item.id} className={"item_box_detail"}>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>${item.price}</p>
            <ItemCount stock={10} initial={1} onAdd={"Hey"}/>
        </article>
    )    
}