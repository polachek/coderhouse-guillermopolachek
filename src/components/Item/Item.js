import './Item.css';

export const Item = ({item}) => {
    return (
        <article className={`item_box item_${item.id}`}>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
        </article>
    )    
}