import {ItemListContainer} from '../../components/ItemListContainer/ItemListContainer'

export const Home = () => {
    return(
        <div className="App">
            <ItemListContainer greeting={'Prop greeting desde App.js'}/>        
            <p>Contenido del sitio</p>
        </div>
    )
}