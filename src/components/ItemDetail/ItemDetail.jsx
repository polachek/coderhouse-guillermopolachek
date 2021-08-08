import './ItemDetail.css';
import {Fragment, useState, useEffect} from 'react';
import {ItemCount} from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {ItemList} from '../../components/ItemList/ItemList'
import {getFirestore} from '../../firebase/firebase'

export const ItemDetail = ({item}) => {
    const [cantidad,setCantidad] = useState(0)
    const {addItem} = useContext(CartContext)
    const [catalogo,setCatalogo] = useState(undefined)
    const cat = item.category[0]

    const onAdd = (cant) =>{
        setCantidad(cant)
        addItem(item, cant)
    }  

    useEffect(()=>{
        setCatalogo(undefined)
        const db = getFirestore();
        const itemCollection = db.collection("productos")
        const filteredCollection = cat ? itemCollection.where("category", "array-contains", cat).limit(4) : itemCollection;
        filteredCollection.get().then((querySnapshot) =>{
            if(querySnapshot.size === 0){
                console.log('No hay resultados')
            }
            const productos_fire = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            const index = productos_fire.findIndex(prod => prod.id === item.id);
            if (index > -1) {
                const relacionados = [...productos_fire];
                relacionados.splice(index, 1);
                setCatalogo(relacionados);
            }
        }).catch((error) =>{
            console.log('Error buscando productos', error)
        }).finally(() =>{
            /*console.log('Termino')*/
        })
    },[])

    
    return (
        <Fragment>
        <article id={item.id} className={"item_box_detail"}>
            <img src={item.pictureUrl} alt={item.title} />
            <div className="item_details">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <p className="price">${item.price}</p>
                {!cantidad && <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>}
                {!!cantidad && (
                    <Link to="/cart">
                        <button type="button">
                            Terminar mi compra
                        </button>
                    </Link>)
                }
            </div>
        </article>
        <section className="relatedItems">
            <h2 className="related_title">Productos que te podrian interesar</h2>
            {catalogo && (<ItemList items={catalogo}/>)} 
        </section>
        </Fragment>
    )    
}