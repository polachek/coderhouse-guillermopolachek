import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../../components/ItemDetail/ItemDetail'
import {Loader} from '../../components/Loader/Loader'
import {getFirestore} from '../../firebase/firebase'

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [miItem,setMiItem] = useState(undefined)

    useEffect(()=>{
        setMiItem(undefined)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        const item = itemCollection.doc(id)

        item.get().then((doc) =>{
            if(!doc.exists){
                console.log('No se encontro Item')
                return
            }
            console.log('Item Encontrado')
            setMiItem({id:doc.id, ...doc.data()})
        }).catch((error) =>{
            console.log('Error buscando productos', error)
        }).finally(() =>{
            /*console.log('Termino')*/
        })
    },[id])
    

    return <div className="iListCont">
            {miItem ? (
                <ItemDetail item={miItem}/>
            ) : (<Loader />)
            }
            
        </div>
    
}