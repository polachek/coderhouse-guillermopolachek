import {ItemCount} from '../ItemCount/ItemCount'

export const ItemListContainer = (props) => {
    return <div className="iListCont">
            <span>{props.greeting}</span>
            <ItemCount stock={10} initial={1} onAdd={"Hey"}/>
        </div>
    
}