import { useRef } from "react";
import "./Checkout.css";
import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { crearOrdenDeCompra, consultarProducto, actualizarProducto } from "../../firebase/firebase";
import { toast } from "react-toastify";

export const Checkout = () => {

    const datForm = useRef()
    const {cart, precioTotal,vaciarCart} = useCartContext()
    let navigate = useNavigate()

    const consultarForm = (e) => {
        e.preventDefault()
        const datosFormulario = new FormData(datForm.current)
        const cliente = Object.fromEntries(datosFormulario)
        const emailVal = cliente.email
        const emailRepe = cliente.emailrepetido
        if (emailVal === emailRepe ) {
            const aux = [...cart]
            aux.forEach(prodCarrito=> {
                consultarProducto(prodCarrito.id).then(prodBDD=> {
                    if(prodBDD.stock >= prodCarrito.cantidad){
                        prodBDD.stock -= prodCarrito.cantidad
                        actualizarProducto(prodBDD.id, prodBDD)
                    }
                })
            })
            const aux2 = aux.map(prod=> ({id:prod.id, cantidad:prod.cantidad, precio: prod.precio}))
            crearOrdenDeCompra(cliente,precioTotal(),aux2,new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast(` Gracias por su compra, su ID de compra es ${ordenCompra.id} por un total de $ ${precioTotal()}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                vaciarCart()
                e.target.reset()
                navigate("/")
    
    
            })
            .catch(error => {
                console.error(error)
            })
        } else {
            alert("Los Correos NO SON IGUALES")
        }     
    }
    return (

        <>
            {
                cart.length === 0 ?
                <>
                    <h1>Debes agregar Productos para proceder a la compra</h1>
                    <Link to={"/"}><button className="btn">IR AL INICIO</button></Link>
                </>
                :
                <>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                            <form onSubmit={consultarForm} ref={datForm}>
                                <div className="row">
                                <div className="col-50">
                                    <h3>Datos del Comprador</h3>
                                    <label htmlFor="name"><i  /> Nombre Completo</label>
                                    <input type="text" name="name"/>
                                    <label htmlFor="email" ><i  /> Email</label>
                                    <input type="email" name="email" />
                                    <label htmlFor="emailrepetido"><i  /> Vuelva a Ingresar Email</label>
                                    <input type="email" name="emailrepetido" />
                                    <label htmlFor="number">Numero de Celular</label>
                                    <input type="text" name="number"/>
                                    <label htmlFor="dni"><i  /> DNI</label>
                                    <input type="number" name="dni" />
                                    <label htmlFor="city"><i  /> Ciudad</label>
                                    <input type="text" name="city"/>
                                    <div className="row">
                                    <div className="col-50">
                                        <label htmlFor="state">Localidad</label>
                                        <input type="text" name="state"/>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <input type="submit" defaultValue="Continue to checkout" className="btn" />
                            </form>
                            </div>
                        </div>
                    </div>
                </>
            
            }

        </>    
    );
}

