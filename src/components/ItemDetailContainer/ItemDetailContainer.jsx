import { useState, useEffect } from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {Loader} from '../Loader/Loader'

export const ItemDetailContainer = () => {

    const [catalogo,setCatalogo] = useState(undefined)

    const miItem = {
            id: '1',
            title: 'Conjunto floreado verano 2022',
            desc: 'Conjunto con girasoles, hojas verdes y tela blanca, ondulado en hombros para que este verano sea la sensación',
            price: 1250,
            pictureUrl : 'https://i.pinimg.com/originals/d1/f6/17/d1f6175188edae71c2f734632aacb3d8.jpg',
        }

    useEffect(()=>{
        const promesaItems = new Promise((resolve,reject)=>{
            setTimeout(()=> {
                resolve(miItem)
            }, 2000);
        })
        .then((resolve)=>{
            console.log(resolve)
            setCatalogo(resolve)
        })
    },[])
    

    return <div className="iListCont">
            {catalogo ? (
                <ItemDetail item={catalogo}/>
            ) : (<p>Cargando producto</p>)
            }
            
        </div>
    
}