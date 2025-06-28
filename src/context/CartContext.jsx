import {useState, createContext, useContext} from "react";

const CartContext = createContext()  //Creamos el contexto del carrito

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const existeEnCart = (id)=>{

        return cart.some(prod => prod.id ===id)

    }

    const añadirItem = (item, cantidad) => {

        if(existeEnCart(item.id)) {
            const indice = cart.findIndex(prod=> prod.id === item.id)
            const aux = [...cart]
            aux[indice].cantidad = cantidad
            setCart(aux)
        } else {
            const newItem = {
                ...item ,
                cantidad:cantidad
            }
            setCart([...cart, newItem])
        }
    }

    const quitarItem= (id)=>{
        setCart(cart.filter(prod => prod.id !== id))
    }

    const vaciarCart = () => {
        setCart([])
    }

    const tomarCantidad = ()=> {
        return cart.reduce((acum,prod)=> acum += prod.cantidad,0)
    }

    const precioTotal = () => {
        return cart.reduce((acum,prod) => acum += (prod.cantidad * prod.precio), 0)
    }
    return (
        <CartContext.Provider value={{ cart, añadirItem, quitarItem, vaciarCart, precioTotal, tomarCantidad}}>
            {props.children}
        </CartContext.Provider>
    )
}
