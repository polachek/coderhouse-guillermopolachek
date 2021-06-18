import './App.css';
import {NavBar} from './components/navBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Prop greeting desde App.js'}/>
      
      <p>Contenido del sitio</p>
    </div>
  );
}

export default App;
