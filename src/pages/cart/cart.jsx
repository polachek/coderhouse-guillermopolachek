import './cart.css';
import {useState, useContext} from 'react';
import {CartContext} from '../../context/CartContext';
import {ItemCarrito} from '../../components/ItemCarrito/ItemCarrito'
import {Link} from 'react-router-dom';


export const Cart = () => {
    const {getCarrito} = useContext(CartContext)
    const {getTotal} = useContext(CartContext)
    const {comprar} = useContext(CartContext)
    const {getCompra} = useContext(CartContext)
    const miCompra = getCompra()
    const miCarrito = getCarrito()
    const total_carrito = getTotal()
    const [isFormEnabled, setIsFormEnabled] = useState(false)
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailVer, setEmailVer] = useState('');

    function checkForm(){
        if(nombre === "" || apellido === "" || telefono === "" || email === "" || emailVer === "" || email != emailVer){
            setIsFormEnabled(false)
        }else{
            setIsFormEnabled(true)
        }
    }

    function compra(){
        comprar(nombre,apellido,telefono,email)
    }  

    function onSubmit(event){
        event.preventDefault()
    } 

    return(
        <div className="cart">
            <h1>
                Mi Carrito
            </h1>
            {miCarrito.length > 0 && <div >
                <section className="cart_items">{miCarrito.map(item => <ItemCarrito key={item.id} item={item}/>)}</section>
                <section className="cart_detail">
                    <p>Total en carrito ${total_carrito}</p>
                    <form onSubmit={onSubmit} className="form_cart">
                        <label>Nombre: 
                            <input type="text" onChange={evt => {setNombre(evt.target.value); checkForm()}}></input>
                        </label>
                        <label>Apellido: 
                            <input type="text" onChange={evt => {setApellido(evt.target.value); checkForm()}}></input>
                        </label>
                        <label>Telefono: 
                            <input type="text" onChange={evt => {setTelefono(evt.target.value); checkForm()}}></input>
                        </label>
                        <label>E-mail: 
                            <input type="email" onChange={evt => {setEmail(evt.target.value); checkForm()}}></input>
                        </label>
                        <label>Verficiar E-mail: 
                            <input type="email" onChange={evt => {setEmailVer(evt.target.value); checkForm()}}></input>
                        </label>
                    </form>
                    {isFormEnabled ? <button type="button" onClick={compra}>
                        Terminar mi compra
                        </button> : <p>Complete el formulario</p>
                    }
                    
                </section>
                </div>
            }
            {miCarrito.length == 0 && <div className="cart_empty">
                <p>No hay productos en el carrito</p>
                <Link to="/">Volver al inicio</Link>
                </div>    
            }
            {typeof miCompra != "undefined" && <section className="cart_detail">
                <p>Resumen de compra</p> 
                <p>Codigo seguimiento: {miCompra.id}</p>
                <p>Total: ${miCompra.total}</p>
                <p>Estado: {miCompra.state}</p>
                
            </section>}
            
        </div>
    )
}