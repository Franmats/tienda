import { useCount } from "../../hooks/useCount.js";
import "./ItemCount.css";
export const ItemCount = ({ValInicial, min, max, onAdd}) => {
    
    const {count, sumar, restar, reset} = useCount(ValInicial,min,max)
    
    return (
       <div className="item-count-container">
    <button className="item-count-btn" onClick={restar}>-</button>
    <span className="item-count-value">{count}</span>
    <button className="item-count-btn" onClick={sumar}>+</button>
    <button className="item-count-btn" onClick={reset}>Reset</button>
    <button className="btn" onClick={() => onAdd(count)}>Agregar al Carrito</button>
  </div>
    );
}


