import "./ItemCart.css";
import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({item}) => {

    const {quitarItem} = useCartContext()
    return (
        <div className="product">
            <div className="productImagen">
                <img src={item.imagen} alt="imagende" />
            </div>
            <div className="textColumn">
                <h3>{item.nombre}</h3>
                <span>Cantidad: {item.cantidad}</span>
                <p>Precio Unitario: $ {item.precio}</p>
                <p>Subtotal: $ {item.cantidad * item.precio}</p>
                <button className="btn" onClick={()=> quitarItem(item.id)}><span className="material-symbols-outlined">delete</span></button>
            </div> 
        </div>


    );
}
