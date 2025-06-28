
import { useCart } from "../CartContext/CartContext.jsx"; // Asegúrate de que la ruta sea correcta
import "./CartSummary.css"; // Asegúrate de que la ruta sea correcta
export const CartSummary = () => {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart();

  return (
    <div className="cart-summary">
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total de productos: {getTotalItems()}</p>
      <p>Total a pagar: ${getTotalPrice().toFixed(2)}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

