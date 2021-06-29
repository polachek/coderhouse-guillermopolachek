import './ItemDetail.css';

export const ItemDetail = ({item}) => {
    return (
        <article id={item.id} className={"item_box_detail"}>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>${item.price}</p>
        </article>
    )    
}