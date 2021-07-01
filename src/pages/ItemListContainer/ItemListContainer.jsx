import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemList} from '../../components/ItemList/ItemList'
import {Loader} from '../../components/Loader/Loader'
import Productos from '../../data/items.json'

export const ItemListContainer = (props) => {

    const {id} = useParams()
    const [catalogo,setCatalogo] = useState(undefined)

    useEffect(()=>{
        setCatalogo(undefined)
        const promesaItems = new Promise((resolve,reject)=>{
            setTimeout(()=> {
                const ProductosCat =  id ? Productos.filter(item => item.category.includes(id)) : Productos;
                resolve(ProductosCat)
            }, 1000);
        })
        promesaItems.then((resolve)=>{
            setCatalogo(resolve)
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