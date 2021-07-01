import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    const{id,pictureUrl,title,price} = item

    return (
        <Link className="item_box_link" to={`/item/${id}`}>
            <article className={`item_box item_${id}`}>
                <img src={pictureUrl} alt={title} />
                <h2>{title}</h2>
                <p>$ {price}</p>                
            </article>
        </Link>
    )    
}