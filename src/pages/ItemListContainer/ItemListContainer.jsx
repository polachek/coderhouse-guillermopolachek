import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemList} from '../../components/ItemList/ItemList'
import {Loader} from '../../components/Loader/Loader'
import {getFirestore} from '../../firebase/firebase'

export const ItemListContainer = (props) => {

    const {id} = useParams()
    const [catalogo,setCatalogo] = useState(undefined)
    const [cargando,setCargando] = useState(true)
    const [errorProducto,setErrorProducto] = useState(undefined)

    useEffect(()=>{
        setCatalogo(undefined)
        setCargando(true)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        const filteredCollection = id ? itemCollection.where("category", "array-contains", id) : itemCollection;
        filteredCollection.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                setErrorProducto('No hay productos en esta categoria')
            }else{
                setCatalogo(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            }            
        }).catch((error) =>{
            setErrorProducto('Error buscando productos', error)
        }).finally(() =>{
            setCargando(false)
        })
    },[id])
    

    return <div className="iListCont">
            <span>{props.greeting}</span>            
            {catalogo ? (
                <ItemList items={catalogo}/>
            )  : (!cargando && <p>{errorProducto}</p>)
            }
            {cargando && <Loader />}   
        </div>
    
}