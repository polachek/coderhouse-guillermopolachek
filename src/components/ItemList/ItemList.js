import {Item} from '../Item/Item'

export const ItemList = ({items}) => {
    return (
        <div>
            {items.map(item => <Item item={item}/>)}
        </div>
    )   
}