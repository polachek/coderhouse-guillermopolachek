import {ItemCount} from '../ItemCount/ItemCount'
import {ItemList} from '../ItemList/ItemList'

export const ItemListContainer = (props) => {
    return <div className="iListCont">
            <span>{props.greeting}</span>
            <ItemCount stock={10} initial={1} onAdd={"Hey"}/>
            <ItemList/>
        </div>
    
}