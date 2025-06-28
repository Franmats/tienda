import './Cart.css';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { ItemList } from '../ItemList/ItemList';
export const Cart = () => {
    const {cart, precioTotal, vaciarCart} = useCartContext()//vaciar cart
    return (
        <>
            { cart.length === 0 ?
                <>
                    <h1>Carrito Vacio</h1>
                    <button className='btn'><Link to={"/"}>Continuar Comprando</Link></button>
                </>
                :
                <div className="buyContainer">
                    <h1>TU CARRITO</h1>
                    <ItemList productos={cart} plantilla={"ItemCart"}></ItemList>
                    <div className='buyButtons'>
                        <p>Resumen de Compra: $ {precioTotal()}</p>
                        <button onClick={()=> vaciarCart()}>Vaciar Carrito</button>
                        <Link to={"/"}><button>Continuar comprando</button></Link>
                        <Link to={"/checkout"}><button>Finalizar Compra</button></Link>
                    </div>
                </div>


            }
        </>
    );
}

