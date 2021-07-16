import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../../components/ItemDetail/ItemDetail'
import {Loader} from '../../components/Loader/Loader'
import Productos from '../../data/items.json'

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [catalogo,setCatalogo] = useState(undefined)

    const miItem = Productos.find(element => element.id == id);

    /*useEffect(()=>{
        const promesaItems = new Promise((resolve,reject)=>{
            setTimeout(()=> {
                resolve(miItem)
            }, 1000);
        })
        promesaItems.then((resolve)=>{
            setCatalogo(resolve)
        })
    },[])*/
    useEffect(()=>{
        setCatalogo(undefined)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        itemCollection.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                console.log('No hay resultados')
            }
            setCatalogo(querySnapshot.docs.map(doc => doc.data()));
        }).catch((error) =>{
            console.log('Error buscando productos', error)
        }).finally(() =>{
            console.log('Termino')
        })
    },[id])
    

    return <div className="iListCont">
            {catalogo ? (
                <ItemDetail item={catalogo}/>
            ) : (<Loader />)
            }
            
        </div>
    
}