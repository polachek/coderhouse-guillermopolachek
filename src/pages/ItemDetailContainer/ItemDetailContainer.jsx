import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../../components/ItemDetail/ItemDetail'
import {Loader} from '../../components/Loader/Loader'
import {getFirestore} from '../../firebase/firebase'

export const ItemDetailContainer = () => {

    const {id} = useParams()
    const [miItem,setMiItem] = useState(undefined)
    const [cargando,setCargando] = useState(true)
    const [errorProducto,setErrorProducto] = useState(undefined)

    useEffect(()=>{
        setMiItem(undefined)
        setCargando(true)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        const item = itemCollection.doc(id)

        item.get().then((doc) =>{
            if(!doc.exists){
                setErrorProducto('No existe el articulo buscado')
                return
            }else{
                setMiItem({id:doc.id, ...doc.data()})
            }            
        }).catch((error) =>{
            setErrorProducto('Error buscando productos', error)
        }).finally(() =>{
            setCargando(false)
        })
    },[id])
    

    return <div className="iListCont">
            {miItem ? (
                <ItemDetail item={miItem}/>
            ) : (!cargando && <p>{errorProducto}</p>)
            }
            {cargando && <Loader />}
            
        </div>
    
}