import {ItemListContainer} from '../../components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from '../../components/ItemDetailContainer/ItemDetailContainer'

export const Home = () => {
    return(
        <div className="App">
            <ItemListContainer greeting={'Prop greeting desde App.js'}/>  
            <ItemDetailContainer />      
            <p>Contenido del sitio</p>
        </div>
    )
}