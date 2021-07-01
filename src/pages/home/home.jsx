import './home.css';
import {ItemListContainer} from '../ItemListContainer/ItemListContainer'

export const Home = () => {
    return(
        <div className="home">
            <h1>
                Ropa para bebes PG
            </h1>
            <ItemListContainer greeting={'Prop greeting desde App.js'}/>  
        </div>
    )
}