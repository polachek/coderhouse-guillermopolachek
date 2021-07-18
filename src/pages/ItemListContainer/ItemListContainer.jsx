import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemList} from '../../components/ItemList/ItemList'
import {Loader} from '../../components/Loader/Loader'
import {getFirestore} from '../../firebase/firebase'

export const ItemListContainer = (props) => {

    const {id} = useParams()
    const [catalogo,setCatalogo] = useState(undefined)

    useEffect(()=>{
        setCatalogo(undefined)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        const filteredCollection = id ? itemCollection.where("category", "array-contains", id) : itemCollection;
        filteredCollection.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                console.log('No hay resultados')
            }
            setCatalogo(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log(catalogo)
        }).catch((error) =>{
            console.log('Error buscando productos', error)
        }).finally(() =>{
            /*console.log('Termino')*/
        })
    },[id])
    

    return <div className="iListCont">
            <span>{props.greeting}</span>            
            {catalogo ? (
                <ItemList items={catalogo}/>
            ) : (<Loader />)
            }           
        </div>
    
}