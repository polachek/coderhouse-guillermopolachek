import {Item} from '../Item/Item'

export const ItemList = () => {

    var getItems = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(<Item/>)
        }, 2000);
    })

    getItems.then(
        (OK) => {
            console.log('Todo Ok')
            //const misItems = {OK}.map(itemsDisponibles) 
            // No pude con el array.map    
        }
       
    )

    const itemsDisponibles = (miItem) => {
        // logica
        return miItem
    }

    return 'Llega este return'
   
}