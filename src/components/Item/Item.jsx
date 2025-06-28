//Recibir un objeto y transformarlo en una plantilla para mostrarlo en pantalla
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
  <div className="longCard" >
      <img src={item.imagen} alt=""/>
      <div className="descrip">
          <div>{item.nombre}</div>
          <span><b>${item.precio}</b></span>
          <div>Stock: {item.stock}</div>
          <Link className='nav-link' to={`/product/${item.id}`}><button className='btn'>Ver Producto</button></Link>
      </div>    
  </div> 

    );
}


