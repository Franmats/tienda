import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
export const CartWidget = () => {
    const {tomarCantidad} = useCartContext()
    return (
        <>
            <div className="carrito">
                <button>
                <Link to="/cart">
                    <span className="material-symbols-outlined white">shopping_cart_checkout</span>
                    {tomarCantidad() > 0 && <span>{tomarCantidad()}</span>}
                </Link>
                </button>
            </div>
        </> 
    );
}


