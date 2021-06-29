import { useState, useEffect } from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import {ItemList} from '../ItemList/ItemList'
import {Loader} from '../Loader/Loader'

export const ItemListContainer = (props) => {

    const [catalogo,setCatalogo] = useState(undefined)

    const miItem = [
        {
            id: '1',
            title: 'Conjunto floreado verano 2022',
            price: 1250,
            pictureUrl : 'https://i.pinimg.com/originals/d1/f6/17/d1f6175188edae71c2f734632aacb3d8.jpg',
        },
        {
            id: '2',
            title: 'Pijama osito marron',
            price: 2500,
            pictureUrl : 'http://i.ebayimg.com/images/g/VEkAAOSwb7NZu5UC/s-l500.jpg',
        },
        {
            id: '3',
            title: 'Conjunto a rayas negro y blanco',
            price: 890,
            pictureUrl : 'https://i.pinimg.com/originals/30/e1/e3/30e1e3c00cdea7231294572987e1497f.jpg',
        },
        {
            id: '4',
            title: 'Camisa a cuadros verde',
            price: 1300,
            pictureUrl : 'https://i.pinimg.com/originals/78/1d/a3/781da35dd9ae039b9bcd372de7513172.jpg',
        },
        {
            id: '5',
            title: 'Traje con tiradores',
            price: 4000,
            pictureUrl : 'https://s.alicdn.com/@sc01/kf/Hc1f37b3aa48d4e18b07a8b02ff0b267fm.jpg_300x300.jpg',
        }
    ]

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
            <span>{props.greeting}</span>
            <ItemCount stock={10} initial={1} onAdd={"Hey"}/>
            {catalogo ? (
                <ItemList items={catalogo}/>
            ) : (<Loader />)
            }
            
        </div>
    
}